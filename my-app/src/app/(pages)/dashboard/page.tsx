'use client';
import Nav from "../components/nav/nav";
import './page.css';
import { ref, onValue, remove } from 'firebase/database';
import { database } from '../../../config/firebase';
import { useEffect, useState } from 'react';
import ProtectedRoute from '../../components/auth/ProtectedRoute';

interface Contact {
    email: string;
    message: string;
    name: string;
    phone: string;
    timestamp: string;
}

export default function Dashboard() {
    const [contacts, setContacts] = useState<Record<string, Contact>>({});
    const [loading, setLoading] = useState(true);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [selectedContactId, setSelectedContactId] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        const contactsRef = ref(database, '/contacts');

        const unsubscribe = onValue(contactsRef, (snapshot) => {
            const contactsData = snapshot.val();
            setContacts(contactsData || {});
            setLoading(false);
        }, (error) => {
            console.error('Error fetching contacts:', error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleRowClick = (contact: Contact, id: string) => {
        setSelectedContact(contact);
        setSelectedContactId(id);
        setIsModalOpen(true);
    };

    const handleDelete = async () => {
        try {
            await remove(ref(database, `/contacts/${selectedContactId}`));
            setIsModalOpen(false);
            setShowDeleteConfirm(false);
        } catch (error) {
            console.error('Error deleting contact:', error);
            alert('Failed to delete contact');
        }
    };

    return (
        <ProtectedRoute>
            <div className="dashboard-component">
                <Nav />
                <div className="dashboard-component-in">
                    <div className="dashboard-component-in-main">
                        {loading ? (
                            <div>Loading contacts...</div>
                        ) : Object.keys(contacts).length > 0 ? (
                            <div className="table-container">
                                <table className="contacts-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(contacts).map(([id, contact]) => (
                                            <tr key={id} onClick={() => handleRowClick(contact, id)}>
                                                <td>{contact.name}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone}</td>
                                                <td>{new Date(contact.timestamp).toLocaleDateString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div>No contacts available</div>
                        )}
                    </div>
                </div>

                {isModalOpen && selectedContact && (
                    <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
                            <h2>{selectedContact.name}</h2>
                            <div className="modal-details">
                                <p><strong>Email:</strong> {selectedContact.email}</p>
                                <p><strong>Phone:</strong> {selectedContact.phone}</p>
                                <p><strong>Message:</strong> {selectedContact.message}</p>
                                <p><strong>Date:</strong> {new Date(selectedContact.timestamp).toLocaleString()}</p>
                            </div>
                            <div className="modal-actions">
                                <button 
                                    className="delete-btn"
                                    onClick={() => setShowDeleteConfirm(true)}
                                >
                                    Delete Contact
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showDeleteConfirm && (
                    <div className="modal-overlay">
                        <div className="modal-content confirm-modal">
                            <h3>Confirm Delete</h3>
                            <p>Are you sure you want to delete this contact?</p>
                            <div className="confirm-actions">
                                <button 
                                    className="confirm-btn cancel"
                                    onClick={() => setShowDeleteConfirm(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    className="confirm-btn delete"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </ProtectedRoute>
    );
}
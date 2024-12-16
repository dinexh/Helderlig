'use client';
import { auth } from '../../../../config/firebase';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './nav.css';

export default function Nav() {
    const [userEmail, setUserEmail] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Firebase's onAuthStateChanged will automatically update the userEmail state
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <nav className="nav-component">
            <div className="nav-component-in">
                <div className="nav-left">
                    <h2>Helderlig Commerico Pvt Ltd</h2>
                </div>
                <div className="nav-center">
                    <h2>Admin Portal</h2>
                </div>
                <div className="nav-right">
                    {userEmail ? (
                        <div className="user-info">
                            <span className="user-email">{userEmail}</span>
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <span className="not-signed-in">Not signed in</span>
                    )}
                </div>
            </div>
        </nav>
    );
}
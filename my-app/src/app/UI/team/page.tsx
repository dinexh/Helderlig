"use client";
import './team.css';
import { team } from "@/app/data/team";
import { motion } from "framer-motion";

export default function Team() {
    return (
        <div className="team-component">
            <div className="team-component-in">
                <motion.div 
                    className="team-component-in-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Our Directors</h2>
                    <p>Our team is made up of dedicated professionals who are passionate about what they do. We are a team of hardworking individuals who are committed to providing the best possible service to our clients.</p>
                </motion.div>
                <div className="team-component-in-boxes">
                    {team.map((member, index) => (
                        <motion.div 
                            key={member.id}
                            className="team-component-in-boxes-box"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >   
                            <div className="team-component-in-boxes-box-img">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="team-component-in-boxes-box-info">
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "../config";

const ViewClients = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/clients`);
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div style={{textAlign: 'center', padding: '2rem'}}>Loading clients...</div>;

    return (
        <div style={{margin: '2rem'}}>
            <h1>Clients List</h1>
            <button onClick={fetchClients} style={{padding: '0.5rem 1rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px', marginBottom: '1rem'}}>
                Refresh List
            </button>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr style={{background: '#f8f9fa'}}>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>ID</th>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>Name</th>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>Company</th>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>Location</th>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>Contact</th>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>Phone</th>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>Email</th>
                    <th style={{border: '1px solid #ddd', padding: '0.75rem'}}>Created</th>
                </tr>
                </thead>
                <tbody>
                {clients.map(client => (
                    <tr key={client.id} style={{border: '1px solid #ddd'}}>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{client.id}</td>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{client.clientname}</td>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{client.clientcompany}</td>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{client.clientlocation}</td>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{client.contactperson}</td>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{client.contactnumber}</td>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{client.contactemail}</td>
                        <td style={{border: '1px solid #ddd', padding: '0.75rem'}}>{new Date(client.createdat).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {clients.length === 0 && <p>No clients found. Create one first!</p>}
        </div>
    );
};

export default ViewClients;

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from "../config";

const CreateClient = () => {
    const [formData, setFormData] = useState({
        clientname: '', clientcompany: '', clientlocation: '', contactperson: '',
        contactnumber: '', contactemail: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://crmtracker-api.sarankirthic.net/api/clients`, formData);
            setMessage('Client created successfully!');
            setFormData({ clientname: '', clientcompany: '', clientlocation: '', contactperson: '', contactnumber: '', contactemail: '' });
        } catch (error) {
            setMessage('Error creating client: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div style={{maxWidth: '600px', margin: '2rem auto', padding: '2rem'}}>
            <h1>Create New Client</h1>
            <form onSubmit={handleSubmit}>
                <input name="clientname" placeholder="Client Name" value={formData.clientname} onChange={handleChange} required style={{display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%'}} />
                <input name="clientcompany" placeholder="Client Company" value={formData.clientcompany} onChange={handleChange} required style={{display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%'}} />
                <input name="clientlocation" placeholder="Client Location" value={formData.clientlocation} onChange={handleChange} required style={{display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%'}} />
                <input name="contactperson" placeholder="Contact Person" value={formData.contactperson} onChange={handleChange} required style={{display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%'}} />
                <input name="contactnumber" placeholder="Contact Number" value={formData.contactnumber} onChange={handleChange} required style={{display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%'}} />
                <input name="contactemail" type="email" placeholder="Contact Email" value={formData.contactemail} onChange={handleChange} required style={{display: 'block', margin: '1rem 0', padding: '0.5rem', width: '100%'}} />
                <button type="submit" style={{padding: '0.75rem 1.5rem', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px'}}>Create Client</button>
            </form>
            {message && <p style={{marginTop: '1rem', color: message.includes('Error') ? 'red' : 'green'}}>{message}</p>}
        </div>
    );
};

export default CreateClient;

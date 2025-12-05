import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateClient from './components/CreateClient';
import ViewClients from './components/ViewClients';

function App() {
    return (
        <Router>
            <nav style={{padding: '1rem', background: '#f0f0f0'}}>
                <Link to="/" style={{marginRight: '1rem'}}>Create Client</Link>
                <Link to="/clients">View Clients</Link>
            </nav>
            <Routes>
                <Route path="/" element={<CreateClient />} />
                <Route path="/clients" element={<ViewClients />} />
            </Routes>
        </Router>
    );
}

export default App;

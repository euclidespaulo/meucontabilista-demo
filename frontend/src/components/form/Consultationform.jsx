// components/ConsultationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem } from '@mui/material';

const ConsultationForm = () => {
    const [consultationData, setConsultationData] = useState({
        areaOfExpertise: '',
        consultationDate: '',
        communicationMethod: '',
    });

    const handleBookConsultation = async () => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            };

            const response = await axios.post('http://localhost:8000/api/appointments/', {
                ...consultationData,
                status: 'Scheduled',  // Assuming 'Scheduled' as the default status
            }, config);

            console.log('Consultation booked:', response.data);
            // Handle success, maybe redirect or show a success message
        } catch (error) {
            console.error('Error booking consultation:', error);
            // Handle error, show an error message to the user
        }
    };

    return (
        <div>
            <h1>Book a Consultation</h1>
            <TextField
                label="Area of Expertise"
                value={consultationData.areaOfExpertise}
                onChange={(e) => setConsultationData({ ...consultationData, areaOfExpertise: e.target.value })}
            />
            <TextField
                label="Consultation Date"
                type="datetime-local"
                value={consultationData.consultationDate}
                onChange={(e) => setConsultationData({ ...consultationData, consultationDate: e.target.value })}
            />
            <Select
                label="Communication Method"
                value={consultationData.communicationMethod}
                onChange={(e) => setConsultationData({ ...consultationData, communicationMethod: e.target.value })}
            >
                <MenuItem value="phone">Phone</MenuItem>
                <MenuItem value="in_person">In Person</MenuItem>
                <MenuItem value="zoom">Zoom</MenuItem>
            </Select>
            <Button variant="contained" color="primary" onClick={handleBookConsultation}>Book Consultation</Button>
        </div>
    );
};

export default ConsultationForm;

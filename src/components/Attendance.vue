<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label for="timestamp">Timestamp:</label>
            <input type="text" v-model="formData.timestamp" id="timestamp" required />

            <label for="name">Select your Name:</label>
            <input type="text" v-model="formData.name" id="name" required />

            <label for="date">Date:</label>
            <input type="date" v-model="formData.date" id="date" required />

            <label for="status">In / Out:</label>
            <select v-model="formData.status" id="status" required>
                <option>In</option>
                <option>Out</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AttendancePage',
    data() {
        return {
            formData: {
                timestamp: '',
                name: '',
                date: '',
                status: '',
            },
        };
    },
    methods: {
        async handleSubmit() {
            try {
                // Send a POST request to the Apps Script web app URL
                const response = await axios.post('https://script.google.com/macros/s/AKfycbwYkIc1YOS5-a1JrziVAilZ_J_IrvQPVqBJxWXsk_fBn7vjL8AE3hrQxPxQKpRQyNbA/exec', this.formData);

                if (response.data.status === 'success') {
                    alert('Data submitted successfully!');
                    // Clear the form
                    this.formData.timestamp = '';
                    this.formData.name = '';
                    this.formData.date = '';
                    this.formData.status = '';
                } else {
                    alert('Failed to submit data.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
}
</script>

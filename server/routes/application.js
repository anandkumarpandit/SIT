const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// POST /api/application - Submit admission application
router.post('/', async (req, res) => {
    try {
        const { fullName, email, phone, program, education, address } = req.body;

        // Validation
        if (!fullName || !email || !phone || !program || !education || !address) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Create new application
        const application = new Application({
            fullName,
            email,
            phone,
            program,
            education,
            address
        });

        await application.save();

        res.status(201).json({
            success: true,
            message: 'Application submitted successfully! We will contact you soon.',
            data: application
        });

    } catch (error) {
        console.error('Application submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit application. Please try again.'
        });
    }
});

module.exports = router;

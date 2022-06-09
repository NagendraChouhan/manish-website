const express = require('express');
const router = express.Router();
const LoanData = require('./dataModel');


//route
router.post(
    '/',
    async (req, res) => {
        try {
            //check weather a applicat with this gst number already exists
            let client = await LoanData.findOne({ gstNumber: req.body.gstNumber });
            if (client) {
                return res.status(400).json({ error: 'please fill correct details' });
            }
            console.log(req.body);

            //create a user
            // client = await LoanData.create({
            //     firstName: req.body.firstName,
            //     lastName: req.body.lastName,
            //     age: req.body.age,
            //     businessName: req.body.businessName,
            //     gstNumber: req.body.gstNumber,
            //     address: req.body.address,
            //     loanAmount: req.body.loanAmount,
            //     interestRate: req.body.interestRate,
            //     loanTenure: req.body.loanTenure,
            // });

            client = new LoanData({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                age: req.body.age,
                businessName: req.body.businessName,
                gstNumber: req.body.gstNumber,
                address: req.body.address,
                loanAmount: req.body.loanAmount,
                interestRate: req.body.interestRate,
                loanTenure: req.body.loanTenure,
            });
            const sentData = await client.save();
            res.json({ success: true });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Internal server error');
        }
    }
);

module.exports = router;
const db = require('mongoose');
const Customer = require('../models/customer');

// unrestricted
exports.getCustomers = (req, res) => {
    Customer.find().then(data => res.status(200).json(data))
}

exports.getCustomerByEmail = (req, res) => {
    Customer.findOne({email: req.params.email}).then(data => res.status(200).json(data))

}

exports.getCustomerByFirstname = (req, res) => {
    Customer.findOne({firstname: req.params.firstname}).then(data => res.status(200).json(data))
}



exports.getCustomerById = (req, res) => {
    Customer.findOne({_id: req.params.id}).then(data => res.status(200).json(data))
}

exports.createCustomer = function(req, res) {
    
    Customer
        .find({ email: req.body.email })
        .exec()
        .then(function(customer) {
            if(customer.length > 0) {
                return res.status(400).json({
                    message: `A user with email address ${req.body.email} already exists.`,
                    statuscode: 400
                })
            }

                    else {
                        
                        let customer = new Customer(
                            {

                                _id: new db.Types.ObjectId,
                                firstname:          req.body.firstname,
                                lastname:           req.body.lastname,
                                company:            req.body.company,
                                email:              req.body.email,
                                phone:              req.body.phone,
                                addressline:        req.body.addressline,
                                zipcode:            req.body.zipcode,
                                city:               req.body.city,
                                country:            req.body.country,

                                // issues:[{

                                // issueId:        new db.Types.ObjectId,
                                // subject:        req.body.subject,
                                // description:    req.body.description,
                                // status:         req.body.status
                                // }]

                            }
                        );

                        customer
                            .save()
                            .then(function() {
                                res.status(201).json({
                                   message: `The user ${req.body.firstname} ${req.body.lastname} was created successfully.`,
                                   statuscode: 201,
                                   success: true
                                })
                            })
                            .catch(function(error) {
                                res.status(500).json({
                                    message: `Failed to create user ${req.body.firstname} ${req.body.lastname}.`,
                                    statuscode: 500,
                                    success: false
                                })
                            })
                    }

        }) 
}

exports.deleteCustomerById = (req, res) => {
    Customer.deleteOne({_id: req.params.id })
    .then(res.status(200).json({
        message: 'Kunden togs bort från databasen'
    }))
    .catch((error) => {
        res.status(500).json({
            message: 'Kunden togs inte bort från databasen',
            error: error
        })
    })
}


const db = require('mongoose');
const Issue = require('../models/customerissue');


exports.createCustomerIssue = (req, res) => {
    
    const issue = new Issue (
        {
            _id: new db.Types.ObjectId,
            customeremail:      req.body.customeremail,
            currentuseremail:   req.body.currentuseremail,
            subject:            req.body.subject,
            description:        req.body.description,
            status:             req.body.status
        }

        
    )
            issue
                .save()
                .then(function() {
                    res.status(201).json({
                        message: `Ditt ärende med rubriken ${req.body.subject} skapades.`,
                        statuscode: 201,
                        success: true 
                    })
                })
                .catch(function(error) {
                    res.status(500).json({
                        message: `Misslyckades att skapa ärende med rubrik ${req.body.subject}.`,
                        statuscode: 500,
                        success: false
                    })
                })
}

exports.getCustomerIssues = (req, res) => {
    Issue.find()
    .then(data => res.status(200).json(data))
}

exports.getCustomerIssuesById = (req, res) => {
    Issue.findOne({_id: req.params.id})
    .then(data => res.status(200).json(data))
}

exports.getCustomerIssueByEmail = (req, res) => {
    Issue.find({customeremail: req.params.email})
    .then(data => res.status(200).json(data))
}

exports.deleteCustomerIssueById = (req, res) => {
    Issue.findByIdAndRemove(req.params._id)
    exec()
    .then(doc => {
        if (!doc) {return res.status(404).end(); }
        return  res.status(204).end();
    })
    .catch(err => next(err));
}
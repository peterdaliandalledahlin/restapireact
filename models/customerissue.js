const db = require('mongoose');

const CustomerIssueSchema = db.Schema({

    _id:                db.Schema.Types.ObjectId,
    customeremail:      { type: String, required: true },
    currentuseremail:   { type: String, required: true },
    subject:            { type: String, required: true },
    description:        { type: String, required: true},
    status:             { type: String, required: true},

    created:            { type: Date, default: Date.now },
    modified:           { type: Date, default: Date.now }
    
});

module.exports = db.model("CustomerIssue", CustomerIssueSchema);
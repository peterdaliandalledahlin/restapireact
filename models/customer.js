const db = require('mongoose');

const customerSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    firstname:      { type: String, required: true },
    lastname:       { type: String, required: true },
    company:        { type: String, required: true },
    email:          { type: String, required: true, unique: true, lowercase: true},
    phone:          { type: String, required: true },
    addressline:    { type: String, required: true },
    zipcode:        { type: String, required: true },
    city:           { type: String, required: true },
    country:        { type: String, required: true },

    // issues:         [{
    // issueId:        db.Schema.Types.ObjectId,
    // subject:        {type: String, required: true},
    // description:    {type: String, required: true},
    // status:         {type: String, required: true},
    // created:        { type: Date, default: Date.now },
    // modified:       { type: Date, default: Date.now }
    // }],

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
    
});

module.exports = db.model("Customer", customerSchema);
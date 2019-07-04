const route = require('express').Router();

const authorization = require('../auth/auth.js');
const customers = require('../controllers/customerController.js');

// unrestricted routes
route.post("/register", customers.createCustomer);


// restricted routes
route.get("/all", customers.getCustomers);       // Get all users
route.get("/:id",  customers.getCustomerById);        // Get specific user
route.post("/:email", customers.getCustomerByEmail);        // Get specific user
route.get("/:firstname", customers.getCustomerByFirstname);        // Get specific user
//route.put("/:id", authorization, customers.updateCustomer);     // Update specific user
route.delete("/:id", authorization, customers.deleteCustomerById);  // Remove specific user


module.exports = route;
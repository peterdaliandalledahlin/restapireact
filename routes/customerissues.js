const route = require('express').Router();

const authorization = require('../auth/auth.js');
const customerissue = require('../controllers/customerIssueController.js');

// unrestricted routes
route.post("/register", customerissue.createCustomerIssue);


// restricted routes
route.get("/all", customerissue.getCustomerIssues);                            // Get all customerissues
route.get("/:id", customerissue.getCustomerIssuesById);   
route.post("/:email", customerissue.getCustomerIssueByEmail);                   // Get specific customerissue
// //route.put("/:id", authorization, customers.updateCustomer);                // Update specific user
route.delete("/:id", customerissue.deleteCustomerIssueById);                    // Remove specific Customerissue


module.exports = route;
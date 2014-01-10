// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
<%= featureName %>s = new Meteor.Collection("<%= featureNameLower %>s");

// Note: this will allow ALL users to insert, update, and delete <%= featureName %>s
// You probably don't want this!  Add some logic to the functions below so that
// they return true only if they meet some criteria (such as the user is logged in)
// <%= featureName %>s.allow({
//   insert: function(userId, doc) {
//     // ...
//   }
// });

// Database operations:
// Meteor.methods({

// });
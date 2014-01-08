// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
<%= featureName %>s = new Meteor.Collection("<%= featureNameLower %>s");

// some security:
// <%= featureName %>.allow({
//   insert: function(userId, doc) {
//     // only allow if user is logged in
//     return !! userId;
//   }
// });

// Database operations:
// Meteor.methods({

// });
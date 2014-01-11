// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
<%= featureName %>s = new Meteor.Collection("<%= featureNameLower %>s");

// Note: this will allow ALL users to insert, update,
// and delete <%= featureName %>s
// You probably don't want this!  Add some logic to the methods below so that
// they perform the operation only if they meet some criteria
// (such as the user is logged in)

// Database operations:
Meteor.methods({
  delete<%= featureName %>: function(id) {
    <%= featureName %>s.remove(id);
  },
  new<%= featureName %>: function(<%= featureNameLower %>) {
    <%= featureNameLower %>.createdAt = new Date().getTime();
    var id = <%= featureName %>s.insert(<%= featureNameLower %>);
    return id;
  },
  edit<%= featureName %>: function(<%= featureNameLower %>, id) {
    <%= featureNameLower %>.updatedAt = new Date().getTime();
    <%= featureName %>s.update(id, {$set: <%= featureNameLower %>});
    return id;
  }
});
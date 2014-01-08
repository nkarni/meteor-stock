// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Meteor.publish("<%= featureNameLower %>s", function () {
    return <%= featureName %>s.find({});
  });
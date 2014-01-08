// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Template.<%= featureNameLower %>sList.helpers({
  <%= featureNameLower %>s: function() {
      return <%= featureName %>s.find({}, {sort: {createdAt: -1}});
  }
});

Template.<%= featureNameLower %>sList.events({
  "click .new": function(e) {
    e.preventDefault();
    Router.go('<%= featureNameLower %>New');
  }
});
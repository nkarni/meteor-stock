// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Template.<%=featureNameLower %>Detail.events({
  "click .edit-<%= featureNameLower %>": function(e) {
    e.preventDefault();
    Router.go("<%= featureNameLower %>Edit", {_id: this._id});
  },
  "click .list-<%= featureNameLower %>": function(e) {
    e.preventDefault();
    Router.go("<%= featureNameLower %>sList");
  }

});
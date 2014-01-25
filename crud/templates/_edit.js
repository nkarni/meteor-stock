// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Template.<%= featureNameLower %>Edit.events({
  "submit form": function(e) {
    e.preventDefault();
    var currentId = this._id;

    var <%= featureNameLower %>Edits = {
    <% _.each(fieldsArray, function(field) { %>
      <%= field %>: $(e.target).find("[name=<%= field %>]").val(),
    <% }); %>
    };

    Meteor.call("edit<%= featureName %>", <%= featureNameLower %>Edits, currentId, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      Router.go("<%= featureNameLower %>Detail", {_id: id});
    });
  },

  "click .delete": function(e) {
    e.preventDefault();

    if (confirm("Delete this <%= featureName %>?")) {
      var currentId = this._id;
      Meteor.call("delete<%= featureName %>", currentId, function(error, id) {
        if (error) {
          return alert(error.reason);
        }
        Router.go("<%= featureNameLower %>sList");
      }
    )}
  },

  "click .cancel": function(e) {
    e.preventDefault();
    Router.go("<%= featureNameLower %>sList");
  }
});
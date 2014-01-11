// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Template.<%= featureNameLower %>New.events({
  "submit form": function(e) {
    e.preventDefault();

    var <%= featureNameLower %> = {
      <% _.each(fieldsArray, function(field) { %>
        <%= field %>: $(e.target).find("[name=<%= field %>]").val(),
      <% }); %>
    }


    Meteor.call("new<%= featureName %>", <%= featureNameLower %>, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      Router.go("<%= featureNameLower %>Detail", {_id: id});
    });

  }
});
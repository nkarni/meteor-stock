// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Template.<%= featureNameLower %>New.events({
  'submit form': function(e) {
    e.preventDefault();

    var <%= featureNameLower %> = {
      <% _.each(fieldsArray, function(field) { %>
        <%= field %>: $(e.target).find('[name=<%= field %>]').val(),
      <% }); %>
    }
    <%= featureNameLower %>.createdAt = new Date().getTime();

    <%= featureNameLower %>._id = <%= featureName %>s.insert(<%= featureNameLower %>);
    Router.go('<%= featureNameLower %>Detail', <%= featureNameLower %>);
  }
});
// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Template.<%= featureNameLower %>Edit.events({
  'submit form': function(e) {
    e.preventDefault();
    var currentId = this.<%= featureNameLower %>._id;

    var <%= featureNameLower %>Edits = {
      <% _.each(fieldsArray, function(field) { %>
        <%= field %>: $(e.target).find('[name=<%= field %>]').val(),
      <% }); %>
    }
    <%= featureNameLower %>Edits.updatedAt = new Date().getTime();

    <%= featureName %>s.update(currentId, {$set: <%= featureNameLower %>Edits}, function(error) {
      if (error) {
        // handle error
      } else {
        Router.go('<%= featureNameLower %>Detail', {_id: currentId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this <%= featureName %>?")) {
      var currentId = this.<%= featureNameLower %>._id;
      <%= featureName %>s.remove(currentId);
      Router.go('<%= featureNameLower %>sList');
    }
  },

  'click .cancel': function(e) {
    e.preventDefault();
    Router.go('<%= featureNameLower %>sList');
  }
});
// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Template.<%= featureNameLower %>New.events({
  'submit form': function(e) {
    e.preventDefault();

    // TODO iterate over field names
    var <%= featureNameCamel %> = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    }

    Meteor.call('<%= featureNameCamel %>', <%= featureNameCamel %>, function(error, id) {
      if (error) {
        // do error handling
      } else {
        Router.go('<%= featureNameCamel %>List', {_id: id});
      }
    });
  }
});
<%= collectionName %>  = new Meteor.Collection("<%= collectionName %>");

<%= collectionName %>.allow({
  insert: function ()
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

// Database operations
Meteor.methods({

});
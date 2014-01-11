// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Router.map(function () {
  this.route("<%= featureNameLower %>sList", {
    path: "/<%= featureNameLower %>s/list"
  });
  this.route("<%= featureNameLower %>New", {
    path: "/<%= featureNameLower %>/new",
    template: "<%= featureNameLower %>New"
  });
  this.route("<%= featureNameLower %>Edit", {
    path: "/<%= featureNameLower %>/:_id/edit",
    template: "<%= featureNameLower %>Edit",
    data: function () {
      return {
        <%= featureNameLower %>: <%= featureName %>s.findOne(this.params._id)
      }
    }
  });
  this.route("<%= featureNameLower %>Detail", {
    path: "/<%= featureNameLower %>/:_id/detail",
    template: "<%= featureNameLower %>Detail",
    data: function () {
      var detailData = <%= featureName %>s.findOne(this.params._id);
      detailData.created = new Date(detailData.createdAt);
      if (detailData.updatedAt) {
        detailData.updated = new Date(detailData.updatedAt);
      }
      return {
        <%= featureNameLower %>: detailData
      }
    }
  });

});
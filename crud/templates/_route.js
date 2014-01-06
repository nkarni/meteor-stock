// Generated on <%= (new Date).toISOString().split('T')[0] %> by meteor-stock.  Edit me!
Router.map(function () {
  this.route("<%= featureNameLower %>sList", {
    path: "/"
  });
  this.route("<%= featureNameLower %>New", {
    path: "<%= featureNameLower %>/new",
    template: "<%= featureNameLower %>New"
  });
  this.route("<%= featureNameLower %>sList", {
    path: "<%= featureNameLower %>s/list",
    template: "<%= featureNameLower %>List"
  });
  this.route("<%= featureNameLower %>Edit", {
    path: "<%= featureNameLower %>/edit",
    template: "<%= featureNameLower %>Edit"
  });
  this.route("<%= featureNameLower %>Detail", {
    path: "<%= featureNameLower %>/detail",
    template: "<%= featureNameLower %>Detail"
  });
});
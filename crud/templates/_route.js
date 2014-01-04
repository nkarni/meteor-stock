Router.map(function () {
  this.route("<%= featureName %>New", {
    path: "<%= featureName %>/new",
    template: "<%= featureName %>New"
  });
});

Router.map(function () {
  this.route("<%= featureName %>List", {
    path: "<%= featureName %>/list",
    template: "<%= featureName %>List"
  });
});

Router.map(function () {
  this.route("<%= featureName %>Edit", {
    path: "<%= featureName %>/edit",
    template: "<%= featureName %>Edit"
  });
});

Router.map(function () {
  this.route("<%= featureName %>Detail", {
    path: "<%= featureName %>/detail",
    template: "<%= featureName %>Detail"
  });
});
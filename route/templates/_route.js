Router.map(function () {
  this.route("<%= routeName %>", {
    path: "<%= pathName %>",
    template: "<%= templateName %>"
  });
});
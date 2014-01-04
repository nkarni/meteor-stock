"use strict";
var util = require("util");
var yeoman = require("yeoman-generator");
var fleck = require("fleck");

var CrudGenerator = module.exports = function CrudGenerator(args, options, config) {
  var self = this;
  yeoman.generators.Base.apply(this, arguments);
  this.collName = self.options.collName;
};

util.inherits(CrudGenerator, yeoman.generators.NamedBase);

CrudGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      type: "input",
      name: "featureName",
      message: "Let's make some CRUD!\n" +
      "This will create routes, a collection (with a publication and subscription),\n" +
      "and views for: list, detail, new, and edit functionality.\n" +
      "Enter the name of the feature you want to create (e.g. Post)\n"
    },
    {
      type: "confirm",
      name: "confirmfeature",
      message: "Create CRUD for this feature?"
    }
  ];

  this.prompt(prompts, function (props) {
    var self = this;
    self.featureName = props.featureName;
    // self.camelName = fleck.camelize(self.featureName);
    self.confirmfeature = props.confirmfeature;
    self.underscoredName = fleck.underscore(self.featureName);

    if (self.confirmfeature) {
      self.mkdir("features");
      self.mkdir("client/subscriptions");
      self.mkdir("server/publications");

      // route
      // TODO 4 routes in one file
      self.template("_route.js", "features/" + self.underscoredName + "_route.js");

      // collection


      // views
      // self.template("_new.js", "features/" + self.underscoredName + "_new.html");
      // self.template("_new.html", "features/" + self.underscoredName + "_new.js");
      self.template("_list.js", "features/" + self.underscoredName + "_list.html");
      self.template("_list.html", "features/" + self.underscoredName + "_list.js");
      // self.template("_edit.js", "features/" + self.underscoredName + "_edit.html");
      // self.template("_edit.html", "features/" + self.underscoredName + "_edit.js");
      // self.template("_detail.js", "features/" + self.underscoredName + "_detail.html");
      // self.template("_detail.html", "features/" + self.underscoredName + "_detail.js");




      self.template("_subscription.js", "features/" + self.underscoredName + "_subscription.js");

      console.log("feature created.");
    }

    cb();
  }.bind(this));

};
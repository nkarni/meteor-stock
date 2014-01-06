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
      "Enter the name of the feature you want to create.\n" +
      "Hint: use a singular noun with Initial Caps (e.g. Post)"
    },
    {
      type: "input",
      name: "fields",
      default: ["fieldA", "fieldB", "fieldC", "fieldD", "fieldE"],
      message: "You can specify field names in a comma-separated list,\n" +
      "or just hit enter to accept some default field names"
    },
    {
      type: "confirm",
      name: "confirmFeature",
      message: "Create CRUD for this feature?"
    }
  ];

  this.prompt(prompts, function (props) {
    var self = this;
    self.featureName = props.featureName;
    self.featureNameCamel = fleck.camelize(self.featureName);
    self.featureNameUnder = fleck.underscore(self.featureName);
    self.featureNameLower = self.featureName.toLowerCase();
    self.confirmFeature = props.confirmFeature;


    if (self.confirmFeature) {
      self.mkdir("client/routes");
      self.mkdir("client/subscriptions");
      self.mkdir("server/publications");

      // route
      self.template("_route.js", "client/routes/" + self.featureNameUnder + "_routes.js");

      // collection


      // views
      self.template("_new.html", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_new.html");
      self.template("_new.js", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_new.js");
      self.template("_list.html", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_list.html");
      self.template("_list.js", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_list.js");
      // self.template("_edit.js", "features/" + self.underscoredName + "_edit.html");
      // self.template("_edit.html", "features/" + self.underscoredName + "_edit.js");
      // self.template("_detail.js", "features/" + self.underscoredName + "_detail.html");
      // self.template("_detail.html", "features/" + self.underscoredName + "_detail.js");
      // TODO delete?


      self.template("_subscription.js", "client/subscriptions/" + self.featureNameUnder + "_subscription.js");
      self.template("_publication.js", "server/publications/" + self.featureNameUnder + "_publication.js");

      console.log("feature created.");
    }

    cb();
  }.bind(this));

};
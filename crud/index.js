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
      message: "You can specify field names in a comma-separated list (camelCase is recommended),\n" +
      "(e.g. myField, fooName, barTitle) or just hit enter to accept some default field names"
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
    // if user doesn't pass in fields
    self.fields = props.fields || "fieldA, fieldB, fieldC, fieldD, fieldE";
    self.fieldsArray = self.fields.split(",");

    if (self.confirmFeature) {
      self.mkdir("client/routes");
      self.mkdir("collections");
      self.mkdir("server/publications");
      self.mkdir("client/subscriptions");

      // route
      self.template("_routes.js", "client/routes/" + self.featureNameUnder + "_routes.js");

      // collection
      self.template("_collection.js", "collections/" + self.featureNameUnder + "_collection.js");
      self.template("_publication.js", "server/publications/" + self.featureNameUnder + "_publication.js");
      self.template("_subscription.js", "client/subscriptions/" + self.featureNameUnder + "_subscription.js");

      // views
      self.template("_new.html", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_new.html");
      self.template("_new.js", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_new.js");
      self.template("_list.html", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_list.html");
      self.template("_list.js", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_list.js");
      self.template("_detail.html", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_detail.html");
      self.template("_detail.js", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_detail.js");
      self.template("_edit.html", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_edit.html");
      self.template("_edit.js", "client/views/" + self.featureNameUnder + "/" + self.featureNameUnder + "_edit.js");
      // TODO delete?

      console.log("Feature created.");
    }

    cb();
  }.bind(this));

};
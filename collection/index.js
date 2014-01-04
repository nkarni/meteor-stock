"use strict";
var util = require("util");
var yeoman = require("yeoman-generator");
var fleck = require("fleck");

var CollectionGenerator = module.exports = function CollectionGenerator(args, options, config) {
  var self = this;
  yeoman.generators.Base.apply(this, arguments);
  this.collName = self.options.collName;
};

util.inherits(CollectionGenerator, yeoman.generators.NamedBase);

CollectionGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      type: "input",
      name: "collectionName",
      message: "Name of the collection (e.g. myCollection):"
    },
    {
      type: "confirm",
      name: "confirmCollection",
      message: "Create the collection?"
    }
  ];

  this.prompt(prompts, function (props) {
    var self = this;
    self.collectionName = props.collectionName;
    // self.camelName = fleck.camelize(self.collectionName);
    self.confirmCollection = props.confirmCollection;
    self.underscoredName = fleck.underscore(self.collectionName);

    if (self.confirmCollection) {
      self.mkdir("collections");
      self.mkdir("client/subscriptions");
      self.mkdir("server/publications");
      self.template("_collection.js", "collections/" + self.underscoredName + "_collection.js");
      self.template("_publication.js", "collections/" + self.underscoredName + "_publication.js");
      self.template("_subscription.js", "collections/" + self.underscoredName + "_subscription.js");

      console.log("Collection created.");
    }

    cb();
  }.bind(this));

};
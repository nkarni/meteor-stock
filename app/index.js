"use strict";
var util = require("util");
var path = require("path");
var yeoman = require("yeoman-generator");
var fleck = require("fleck");

var MeteorStockGenerator = module.exports = function MeteorStockGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on("end", function () {
    // console.log('\nThanks for using meteor-stock.  Do right and fear no one.');
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MeteorStockGenerator, yeoman.generators.Base);

MeteorStockGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // console.log(this.yeoman);
  console.log(
  "----------------------------------------------\n" +
  "     * * * * * * Meter-Stock * * * * * * *    \n" +
  "----------------------------------------------\n" +
  "\n" +
  "Run this utility from your Meteor app\'s root directory.\n");

  var prompts = [
    {
      type: "list",
      choices: [
        "Generate a useful directory structure for your app",
        "Create a view (html and js files)",
        "Create an iron-router config file",
        "Create a route (for iron-router)",
        "Create a layout file (for iron-router to yield templates)",
        "Create a collection (with a publication and subscription)",
        "Add Meteor .jshintrc and .editorconfig files",
        "Generate CRUD for a new feature",
        "Exit"
      ],
      name: "initialPrompt",
      message: "What would you like to do?"
    }
  ];

  this.prompt(prompts, function (props) {
    var self = this;
    self.initialPrompt = props.initialPrompt;

    if (self.initialPrompt === prompts[0].choices[0]) {
      this.invoke("meteor-stock:structure", {options: {}});
    }

    if (self.initialPrompt === prompts[0].choices[1]) {
      this.invoke("meteor-stock:view", {options: {}});
    }

    if (self.initialPrompt === prompts[0].choices[2]) {
      this.copy("router_config.js", "client/routes/router_config.js");
    }

    if (self.initialPrompt === prompts[0].choices[3]) {
      this.invoke("meteor-stock:route", {options: {}});
    }

    if (self.initialPrompt === prompts[0].choices[4]) {
      this.copy("layout.html", "client/views/components/layout.js");
    }

    if (self.initialPrompt === prompts[0].choices[5]) {
      this.invoke("meteor-stock:collection", {options: {}});
    }

    if (self.initialPrompt === prompts[0].choices[6]) {
      this.copy("editorconfig", ".editorconfig");
      this.copy("jshintrc", ".jshintrc");
    }

    if (self.initialPrompt === prompts[0].choices[7]) {
      this.invoke("meteor-stock:crud", {options: {}});
    }

    if (self.initialPrompt === prompts[0].choices[8]) {
      process.exit(0);
    }

    cb();
  }.bind(this));
};

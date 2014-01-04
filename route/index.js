'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var RouteGenerator = module.exports = function RouteGenerator(args, options, config) {
  var self = this;
  yeoman.generators.Base.apply(this, arguments);
  this.collName = self.options.collName;
};

util.inherits(RouteGenerator, yeoman.generators.NamedBase);

RouteGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // route creation requires three vars: routeName, pathName, templateName
  var prompts = [
    {
      type: 'input',
      name: 'routeName',
      message: 'Name of the route (e.g. myRoute):'
    },
    {
      type: 'input',
      name: 'pathName',
      message: 'Path to the route (e.g. posts/list):'
    },
    {
      type: 'input',
      name: 'templateName',
      message: 'Template this route points to (e.g. myTemplate):'
    },
    {
      type: 'confirm',
      name: 'confirmRoute',
      message: 'Create the route?'
    }
  ];


  this.prompt(prompts, function (props) {
    var self = this;
    self.routeName = props.routeName;
    self.pathName = props.pathName;
    self.templateName = props.templateName;
    self.confirmRoute = props.confirmRoute;
    self.underscoredName = fleck.underscore(self.routeName);

    if (self.confirmRoute) {
      self.mkdir('client/routes');
      self.template('_route.js', 'client/routes/' + self.underscoredName + '.js');

      console.log('Route created.');
    }

    cb();
  }.bind(this));

};

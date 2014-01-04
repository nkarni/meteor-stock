'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var ViewGenerator = module.exports = function ViewGenerator(args, options, config) {
  var self = this;
  yeoman.generators.Base.apply(this, arguments);
  this.collName = self.options.collName;
};

util.inherits(ViewGenerator, yeoman.generators.NamedBase);

ViewGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      type: 'input',
      name: 'viewName',
      message: 'Name of the view (e.g. myView):'
    },
    {
      type: 'confirm',
      name: 'confirmView',
      message: 'Create the view?'
    }
  ];


  this.prompt(prompts, function (props) {
    var self = this;
    self.viewName = props.viewName;
    self.confirmView = props.confirmView;
    self.underscoredName = fleck.underscore(self.viewName);

    if (self.confirmView) {
      self.mkdir('client/views');
      self.template('_view.html', 'client/views/' + self.underscoredName + '.html');
      self.template('_view.js', 'client/views/' + self.underscoredName + '.js');

      console.log('View created.');
    }

    cb();
  }.bind(this));

};

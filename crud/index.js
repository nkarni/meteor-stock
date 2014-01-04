'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var CrudGenerator = module.exports = function CrudGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the crud subgenerator with the argument ' + this.name + '.');
};

util.inherits(CrudGenerator, yeoman.generators.NamedBase);

CrudGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};

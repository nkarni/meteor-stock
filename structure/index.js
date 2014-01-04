'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var StructureGenerator = module.exports = function StructureGenerator(args, options, config) {
  var self = this;
  yeoman.generators.Base.apply(this, arguments);
  this.collName = self.options.collName;
};

util.inherits(StructureGenerator, yeoman.generators.NamedBase);

StructureGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  var prompts = [
    {
      type: 'confirm',
      name: 'confirmStructure',
      message: 'Will create the following structure:\n' +
        '├── client\n' +
        '│   ├── compatibility\n' +
        '│   ├── conf\n' +
        '│   ├── lib\n' +
        '│   ├── routes\n' +
        '│   ├── startup\n' +
        '│   ├── stylesheets\n' +
        '│   ├── subscriptions\n' +
        '│   └── views\n' +
        '├── collections\n' +
        '├── lib\n' +
        '├── private\n' +
        '├── public\n' +
        '└── server\n' +
        '    ├── lib\n' +
        '    ├── publications\n' +
        '    └── startup\n' +
        '\n' +
        'Please confirm',
    }

  ];

  this.prompt(prompts, function (props) {
    var self = this;
    self.confirmStructure = props.confirmStructure;

    if (self.confirmStructure) {
      self.mkdir('client/compatibility');
      self.mkdir('client/conf');
      self.mkdir('client/lib');
      self.mkdir('client/routes');
      self.mkdir('client/startup');
      self.mkdir('client/stylesheets');
      self.mkdir('client/subscriptions');
      self.mkdir('client/views');

      // client and server
      self.mkdir('collections');
      self.mkdir('lib');
      self.mkdir('public');
      self.mkdir('private');

      // server
      self.mkdir('server/lib');
      self.mkdir('server/publications');
      self.mkdir('server/startup');

      console.log('Directories created.');
    }

    cb();
  }.bind(this));

};

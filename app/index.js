'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var fleck = require('fleck');

var MeteorStockGenerator = module.exports = function MeteorStockGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    console.log('\nThanks for using meteor-stock.  Do right and fear no one.');
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MeteorStockGenerator, yeoman.generators.Base);

MeteorStockGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);
  console.log('----------------------------------------------\n' +
  '     * * * * * * Meter-Stock * * * * * * *  \n' +
  '----------------------------------------------\n' +
  '\n' +
  'Run this utility from your Meteor app\'s root directory.\n');

  var prompts = [
    {
      type: 'list',
      choices: ['Generate a useful directory structure for your app',
      'Create a view (html and js files)',
      'Create a route (for iron-router)',
      'Create a collection (with a publication and subscription)',
      'Add Meteor .jshintrc and .editorconfig files',
      'Exit'
      ],
      name: 'initialPrompt',
      message: 'What would you like to do?'
    },
    {
      when: function (prevAns) {
        // ask for confrmation if the user specified view directory creation
        return prevAns.initialPrompt === prompts[0].choices[0];
      },
      type: 'confirm',
      name: 'confirmDirs',
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
    },
    {
      when: function (prevAns) {
        // ask this question if the user specified view creation
        return prevAns.initialPrompt === prompts[0].choices[1];
      },
      type: 'input',
      name: 'viewName',
      message: 'Please enter a name for your view (camelCase is recommended)',
    },
    // route creation requires three vars: routeName, pathName, templateName
    {
      when: function (prevAns) {
        // ask this question if the user specified route creation
        return prevAns.initialPrompt === prompts[0].choices[2];
      },
      type: 'input',
      name: 'routeName',
      message: 'Please enter a name for your route (camelCase is recommended)'
    },
    {
      when: function (prevAns) {
        if (prevAns.routeName) {
          return true;
        } else {
          return false;
        }
      },
      type: 'input',
      name: 'pathName',
      message: 'Enter the path for your route (e.g. / or widgets/new'
    },
    {
      when: function (prevAns) {
        if (prevAns.pathName) {
          return true;
        } else {
          return false;
        }
      },
      type: 'input',
      name: 'templateName',
      message: 'Name of the template you want your route to point to (blank for none)'
    },
    {
      when: function (prevAns) {
        return prevAns.initialPrompt === prompts[0].choices[3];
      },
      type: 'input',
      name: 'collectionName',
      message: 'Enter a name for the collection (e.g. Items)'
    }
  ];

  this.prompt(prompts, function (props) {
    var self = this;
    self.initialPrompt = props.initialPrompt;
    self.confirmDirs = props.confirmDirs;
    self.viewName = props.viewName;
    self.routeName = props.routeName;
    self.pathName = props.pathName;
    self.templateName = props.templateName; // target template for route creation
    self.collectionName = props.collectionName;
    self.viewHtml = [];
    self.viewJs = [];
    self.collectionFile = [];
    self.publicationFile = [];
    self.subscriptionFile = [];

    if (self.initialPrompt === prompts[0].choices[0]  && self.confirmDirs) {
      // client
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
    // user has chosen to create a view
    if (self.initialPrompt === prompts[0].choices[1]) {
      self.underscoredName = fleck.underscore(self.viewName);

      self.viewHtml = [
        '<template name="' + self.viewName + '">',
        '  <h1>Welcome to the ' + self.viewName + ' template</h1>',
        '  <p>You can edit me in <b>client/views/' + self.underscoredName + '/' + self.underscoredName + '.html</b></p>',
        '</template>\n'
      ];
      self.viewHtml = self.viewHtml.join('\n');

      self.viewJs = [
        'Template.name.' + self.viewName + '.rendered = function() {',
        '  // things to do when the template is finished rendering',
        '}',
        '',
        'Template.' + self.viewName + '.events({',
        '  //".my-button click": function() {',
        '    // do something clever',
        '});',
        '',
      ];
      self.viewJs = self.viewJs.join('\n');

      self.mkdir('client/views');
      self.write('client/views/' + self.underscoredName + '/' + self.underscoredName + '.html', self.viewHtml);
      self.write('client/views/' + self.underscoredName + '/' + self.underscoredName + '.js', self.viewJs);
    }

    // user has chosen to create a route
    if (self.initialPrompt === prompts[0].choices[2]) {
      self.underscoredName = fleck.underscore(self.routeName);

      var routeJs = [
        'Router.map(function () {',
        '  self.route(' + self.routeName + ') {',
        'path: "' + self.pathName + '"',
        'template: "' + self.templateName + '"',
        '});'
      ];
      routeJs = routeJs.join('\n');

      self.mkdir('client/routes');
      self.write('client/routes/' + self.underscoredName + '.js', routeJs);
    }

    // user has chosen to create a collection
    if (self.initialPrompt === prompts[0].choices[3]) {
      self.mkdir('collections');
      self.mkdir('client/subscriptions');
      self.mkdir('server/publications');
      self.underscoredName = fleck.underscore(self.collectionName);
      self.collectionFile = [self.collectionName + ' = new Meteor.Collection(' + self.collectionName + ');',
            '',
            self.collectionName + '.allow({',
            '  insert : function () {',
            '    return false;',
            '  },',
            '  update : function () {',
            '    return false;',
            '  },',
            '  remove : function () {',
            '    return false;',
            '  }',
            '});',
            '',
            '// Database operations',
            'Meteor.methods({',
            '',
            '});'];

      self.publicationFile = ['Meteor.publish(' + self.collectionName + ', function () {',
            '    return ' + self.collectionName + '.find();',
            '});',
            ''];

      self.subscriptionFile = ['Meteor.subscribe(' + this.collectionName + ');',
            ''];

      // write files
      self.collectionFile = self.collectionFile.join('\n');
      self.write('collections/' + self.underscoredName + '.js', self.collectionFile);

      self.publicationFile = self.publicationFile.join('\n');
      self.write('server/publications/' + self.underscoredName + '.js', self.publicationFile);

      self.subscriptionFile = self.subscriptionFile.join('\n');
      self.write('client/subscriptions/' + self.underscoredName + '.js', self.subscriptionFile);

    }

    if (self.initialPrompt === prompts[0].choices[4]) {
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
    }

    if (self.initialPrompt === prompts[0].choices[5]) {
      process.exit(0);
    }

    cb();
  }.bind(this));
};

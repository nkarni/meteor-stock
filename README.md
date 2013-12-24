# generator-meteor-stock

A interactive Yeoman generator for Meteor projects.  Allows the user to:

* create custom-named vies (with html and js files)
* create collections
* create routes (for iron-router)
* create a directory structure (for larger apps):

    ├── client
    │   ├── compatibility
    │   ├── conf
    │   ├── lib
    │   ├── routes
    │   │   └── my_route.js
    │   ├── startup
    │   ├── stylesheets
    │   ├── subscriptions
    │   │   └── my_collection.js
    │   └── views
    │       └── my_view
    │           ├── my_view.html
    │           └── my_view.js
    ├── collections
    │   └── my_collection.js
    ├── lib
    ├── private
    ├── public
    └── server
        ├── lib
        ├── publications
        │   └── my_collection.js
        └── startup


To install:


To use:

* Create a meteor app && CD to it's root
* Run `yo meteor-stock`


## Credits

.jshintrc and .editorconfig file from raix/

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

# generator-meteor-stock

A interactive Yeoman generator for Meteor projects.  Allows the user to employ their own naming to create:

* views (with html and js files)
* collections (including a publication and subscription)
* routes (for iron-router)

Users can also:

* add recommended .jshintrc and .editorconfig files (based on the Meteor style guide)
* create useful directory structure:



```
    ├── client
    │   ├── compatibility
    │   ├── conf
    │   ├── lib
    │   ├── routes
    │   ├── startup
    │   ├── stylesheets
    │   ├── subscriptions
    │   └── views
    ├── collections
    ├── lib
    ├── private
    ├── public
    └── server
        ├── lib
        ├── publications
        └── startup
```

To install:


To use:

* Create a meteor app && CD to it's root
* Run `yo meteor-stock`


## Credits

.jshintrc and .editorconfig file from raix/Meteor-jshintrc.  Recommended directory structure from Akbar Ahmed: [Directory Structure for Large Meteor Apps](http://http://www.slideshare.net/AkbarAhmed3/directory-structure-for-large-meteor-apps).

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

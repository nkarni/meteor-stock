# meteor-stock

To install:

     npm install -g meteor-stock

To use:

* Create a Meteor app and CD to its root
* Run: `yo meteor-stock`

What is meteor-stock?

A interactive Yeoman generator for Meteor projects.  Allows the user to employ their own naming to create:

* views (with html and js files)
* collections (including a publication and subscription)
* routes (for iron-router)

Users can also:

* add recommended .jshintrc and .editorconfig files (based on the Meteor style guide)
* create a [useful directory structure](http://http://www.slideshare.net/AkbarAhmed3/directory-structure-for-large-meteor-apps):



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

meteor-stock will not automatically overwrite existing files or directories.  If it encouters a conflict, you will be asked whether or not to replace existing files.


## Credits

.jshintrc and .editorconfig file from [raix/Meteor-jshintrc](https://github.com/raix/Meteor-jshintrc).  Recommended directory structure from Akbar Ahmed: [Directory Structure for Large Meteor Apps](http://www.slideshare.net/AkbarAhmed3/directory-structure-for-large-meteor-apps).


[MIT License](http://en.wikipedia.org/wiki/MIT_License)

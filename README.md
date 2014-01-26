# meteor-stock

<!-- *Civilisation advances by extending the number of important operations which we can perform without thinking about them.* -Alfred North Whitehead -->

### What is meteor-stock?

A interactive Yeoman generator for [Meteor](http://www.meteor.com) projects.

### To install:

     npm install -g generator-meteor-stock

### To use:

* Create a Meteor app and CD to its root
* Run: `yo meteor-stock`

meteor-stock allows you to employ your own naming to create:

* Full CRUD (create, read, update and delete for a user-specificed feature name).  This includes routes, views (html and js), a collection, and a publication and subscription.  Views are created to list, view, edit, and create documents for the given feature (see screenshots).

meteor-stock can also create individual items (wthout full CRUD):

* views (with html and js files)
* collections (including a publication and subscription)
* routes (for iron-router)
* recommended .jshintrc and .editorconfig files (based on the Meteor style guide)
* an iron-router configuration file and compatible layout
* a [useful directory structure](http://http://www.slideshare.net/AkbarAhmed3/directory-structure-for-large-meteor-apps):



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

### Hierarchy of Opinions

meteor-stock is highly opionated but forms none of its own.  Its code conventions start with the official Meteor Style Guide.  When that document doesn't express an opinion (such as in the case of file naming conventions), it goes with opinions from the the Discover Meteor Book/Microscope example.  When opinions aren't forthcoming there (such as with the use of single or double quotes), it defaults to the jQuery style guide (which has an opinion on [everything](http://contribute.jquery.org/style-guide/js/#quotes).  Ever.)

### Won't Muck With Your Existing Work

meteor-stock will not automatically overwrite existing files or directories.  If it encouters a conflict, you will be asked whether or not to replace existing files.

### Typical Workflow

Assuming you have [Meteor](http://www.meteor.com) and [Meteorite](https://github.com/oortcloud/meteorite) installed on your system:

* Create a new Meteor app: `meteor create myApp`
* Remove Meteor's auto-generated `myApp.html`, `myApp.js`, and `myApp.css` in your app's root.
* Add iron-router (optional; only if you want routes): `mrt add iron-router`
* Add bootstrap-3 (optional; only if you want things to look pretty): `mrt add bootstrap-3`
* Install meteor-stock: `npm install -g generator-meteor-stock`
* Run meteor-stock: `yo meteor-stock`, do stuff per the menus:

![image](https://s3.amazonaws.com/img_general/menu.png)

* Create a layout file for iron-router (so that your new views will be 'yielded' into it).
* Create an iron-router config file (so that i-r knows to use your layout file).
* **Most Fun:** Create CRUD: choose the menu item, enter a name (a singular noun with an initial cap is best  - e.g. Widget).  You can enter a list of field names, or skip this step and a few default fields will be added for you.

## Screenshots (for the user-defined feature 'Wabbit')

## New Document:

![image](https://s3.amazonaws.com/img_general/new.png)

## List Documents:

![image](https://s3.amazonaws.com/img_general/list.png)


## Document Details:

![image](https://s3.amazonaws.com/img_general/detail.png)


## Edit Document:

![image](https://s3.amazonaws.com/img_general/edit.png)


### Credits

.jshintrc and .editorconfig file from [raix/Meteor-jshintrc](https://github.com/raix/Meteor-jshintrc).  Recommended directory structure from Akbar Ahmed: [Directory Structure for Large Meteor Apps](http://www.slideshare.net/AkbarAhmed3/directory-structure-for-large-meteor-apps).  File naming convention (and various inspiration) from [Disover Meteor](https://www.discovermeteor.com/).


[MIT License](http://en.wikipedia.org/wiki/MIT_License)

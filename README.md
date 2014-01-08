# meteor-stock

**Civilisation advances by extending the number of important operations which we can perform without thinking about them.** --Alfred North Whitehead

### What is meteor-stock?

A interactive Yeoman generator for [Meteor](http://www.meteor.com) projects.

### To install:

     npm install -g meteor-stock

### To use:

* Create a Meteor app and CD to its root
* Run: `yo meteor-stock`

meteor-stock allows you to employ your own naming to create:

* Full CRUD (create, read, update and delete for a user-specificed feature name).  This includes routes, views (html and js), a collection, and a publication and subscription.  Views are created to list, view, edit, and create documents for the given feature (see screenshots).

meteor-stock can alse create individual items (wthout full CRUD):

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

meteor-stock will not automatically overwrite existing files or directories.  If it encouters a conflict, you will be asked whether or not to replace existing files.

### Typical Workflow

Assuming you have [Meteor](http://www.meteor.com) and [Meteorite](https://github.com/oortcloud/meteorite) installed on your system:

1. Create a new Meteor app: `meteor create myApp`
2. Reove Meteor's auto-generated `myApp.html`, `myApp.js`, and `myApp.css` in your app's root.
3. Add iron-router (optional; only if you want routes): `mrt add iron-router`
4. Add bootstrap-3 (optional; only if you want things to look pretty): `mrt add bootstrap-3`
5. Install meteor-stock: `npm install -g meteor-stock`
6. Run meteor-stock: `yo meteor-stock`
7. Create a directory structure (optional; meteor-stock will create necessary paths if you install generate individual views, etc.): just choose the first menu item.
8. Create a layout file for iron-router (so that your new views will be 'yielded' into it): choose the appropriate menu item.
9. Create an iron-router config file (so that i-r knows to use your layout file): choose menu item.
10. Create CRUD: choose the menu item, enter a name (a singular noun with an initial cap is best  - e.g. Widget).
11. Enter field names (optional).  These should be a comma-separated list of your starting fields (myFieldA, myFieldB).  You can skip this step and a few default fields will be added for yoo. You can edit these later.

## Screenshots (for the user-defined feature 'Wabbit')

### New Document:

![image](https://s3.amazonaws.com/img_general/new.png)

## List Documents:

![image](https://s3.amazonaws.com/img_general/list.png)


## Document Details:

![image](https://s3.amazonaws.com/img_general/detail.png)


## Edit Document:

![image](https://s3.amazonaws.com/img_general/edit.png)


### Credits

.jshintrc and .editorconfig file from [raix/Meteor-jshintrc](https://github.com/raix/Meteor-jshintrc).  Recommended directory structure from Akbar Ahmed: [Directory Structure for Large Meteor Apps](http://www.slideshare.net/AkbarAhmed3/directory-structure-for-large-meteor-apps).  File naming convention (and significant inspiration) from [Disover Meteor](https://www.discovermeteor.com/).


[MIT License](http://en.wikipedia.org/wiki/MIT_License)

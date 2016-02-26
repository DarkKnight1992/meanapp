'use strict';
var Module = require('meanio').Module;
var AddExpert = new Module('addexperts');

AddExpert.register(function(app, auth, database){

//We enable routing. By default the Package Object is passed to the routes
  AddExpert.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  AddExpert.menus.add({
    title: 'add experts page',
    link: 'add experts page',
    roles: ['authenticated'],
    menu: 'main'
  });
  return AddExpert;
});
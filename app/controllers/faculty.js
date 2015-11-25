import Ember from 'ember';

export default Ember.Controller.extend({

  appController: Ember.inject.controller('application'),

  code: Ember.computed.alias('appController.currentFaculty')

});

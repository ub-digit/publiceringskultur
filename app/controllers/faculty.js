import Ember from 'ember';

export default Ember.Controller.extend({

  appController: Ember.inject.controller('application'),

  code: Ember.computed.alias('appController.currentFaculty'),

  publicationsHeaderPath: Ember.computed('code', function() {
    return 'faculties.' + this.get('code') + '.publications.header';
  }),

  publicationTypeHeaderPath: Ember.computed('code', function() {
    return 'faculties.' + this.get('code') + '.publicationTypes.header';
  }),

  languagesHeaderPath: Ember.computed('code', function() {
    return 'faculties.' + this.get('code') + '.languages.header';
  }),

  authorsHeaderPath: Ember.computed('code', function() {
    return 'faculties.' + this.get('code') + '.authors.header';
  }),

  cooperationsHeaderPath: Ember.computed('code', function() {
    return 'faculties.' + this.get('code') + '.cooperations.header';
  }),

  ageHeaderPath: Ember.computed('code', function() {
    return 'faculties.' + this.get('code') + '.age.header';
  })

});

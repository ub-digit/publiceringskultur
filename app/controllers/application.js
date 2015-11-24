import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['lang'],

  i18n: Ember.inject.service(),

  currentFaculty: null,

  langObserver: Ember.observer('lang', function() {

    var l = this.get('lang') === 'en' ? 'en' : 'sv';
    this.set('i18n.locale', l);

  }),

  actions: {
    setFaculty: function(id) {
      this.transitionToRoute('faculty', id);
    },
    gotoUniversity: function() {
      this.transitionToRoute('faculty', 'gu');
      //this.transitionToRoute('university');
    },

    toggleLang: function() {

      var l = this.get('i18n.locale') === 'sv' ? 'en' : 'sv';
      this.set('i18n.locale', l);

    }
  }

});

import Ember from 'ember';

export default Ember.Controller.extend({

  i18n: Ember.inject.service(),

  currentFaculty: null,

  actions: {
    setFaculty: function(id) {
      this.transitionToRoute('faculty', id);
    },
    gotoUniversity: function() {
      this.transitionToRoute('faculty', 'gu');
    },

    toggleLang: function() {

      var l = this.get('i18n.locale') === 'sv' ? 'en' : 'sv';
      this.set('i18n.locale', l);

      document.title = this.get('i18n').t('title');

    }
  }

});

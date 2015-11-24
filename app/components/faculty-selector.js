import Ember from 'ember';

export default Ember.Component.extend({

  i18n: Ember.inject.service(),

  currentFacultyNameString: Ember.computed('currentFaculty', 'i18n.locale', function(){
    return 'faculties.' + this.get('currentFaculty') + '.name';   

  }),

  actions: {

    setFaculty: function(id) {
      this.sendAction('setFaculty', id);
    },
    gotoUniversity: function() {
      this.sendAction('gotoUniversity');
    },

  }

});

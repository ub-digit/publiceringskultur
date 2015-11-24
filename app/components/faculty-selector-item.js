import Ember from 'ember';

export default Ember.Component.extend({

  i18n: Ember.inject.service(),

  tagName: 'li',

  facultyNameString: Ember.computed('i18n.locale', function() {
    return 'faculties.' + this.get('id') + '.name';
  }),

  actions: {
    setFaculty: function(id) {
      this.sendAction('action', this.get('id'));
    }
  }


});

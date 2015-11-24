import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    var url = '/university.json';

    return Ember.RSVP.hash({
      chart: Ember.$.ajax(url, {
        contentType: 'application/json',
        dataType: 'json'
      })
    });

  },

  setupController: function(controller, model) {

    controller.set('code', null);
    controller.set('model', model);

  }

});

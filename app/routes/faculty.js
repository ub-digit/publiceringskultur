import Ember from 'ember';
import ENV from 'BibmetVis/config/environment';

export default Ember.Route.extend({

  beforeModel: function() {

    //window.scrollTo(0, 0);

  },

  model: function(params) {

    var facultyCode = params.faculty_code;

    var url = ENV.APP.serviceURL + facultyCode + '.json';

    return Ember.RSVP.hash({
      code: facultyCode,
      chart: Ember.$.ajax(url, {
        contentType: 'application/json',
        dataType: 'json',
        cache: false //(typeof ENV.APP.useCache != 'undefined') ? ENV.APP.useCache : true
      })
    });

  },

  setupController(controller, model) {

    controller.set('code', model.code);
    controller.set('model', model);

  }
});

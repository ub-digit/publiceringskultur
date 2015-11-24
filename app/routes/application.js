import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),

  /*
  beforeModel: function() {
    var lang = "sv"; /// change to default
    if (sessionStorage.getItem('lang')) {
      lang = sessionStorage.getItem('lang');
    }
    this.set('i18n.locale', lang);
    sessionStorage.setItem('lang', lang);
  },
  */

  setupController: function(controller) {

    var faculties = [
      {id: 'handels', name: this.get('i18n').t('faculties.handels.name')},
      {id: 'hum', name: this.get('i18n').t('faculties.hum.name')},
      {id: 'itufak', name: this.get('i18n').t('faculties.itufak.name')},
      {id: 'konst', name: this.get('i18n').t('faculties.konst.name')},
      {id: 'science', name: this.get('i18n').t('faculties.science.name')},
      {id: 'sahlgrenska', name: this.get('i18n').t('faculties.sahlgrenska.name')},
      {id: 'samfak', name: this.get('i18n').t('faculties.samfak.name')},
      {id: 'ped', name: this.get('i18n').t('faculties.ped.name')}
    ];

    controller.set('faculties', faculties);

  }

});

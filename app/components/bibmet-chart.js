import Ember from 'ember';
import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';

export default EmberHighChartsComponent.extend({

  i18n: Ember.inject.service(),

  contentDidChange: Ember.observer('content.[].isLoaded', function() {

    var chart = this.get('chart');

    //console.log('starts with:', chart.series.length, chart.series);

    while(chart.series.length) {
      //console.log("will be removed:", chart.series[0]);
      chart.series[0].remove(false);
    }

    chart.redraw();

    this.get('content').forEach(function(item, index) {

      var o = {
        name: item['name_' + this.get('i18n.locale')],
        data: item.data,
        color: item.color
      };

      chart.addSeries(o, false);

      /*
      if(!chart.series[index]) {
      //console.log('adds one series');
      chart.addSeries(o, false);
    } else {
    //console.log('updates one series');
    chart.series[index].update(o, false);
  }
  */

  //console.log("series.length efter update:", chart.series.length);

}, this);

//console.log('after add:', chart.series.length, chart.series);

chart.redraw();

}),

optionsDidChange: Ember.observer('chartOptions', function() {

  Ember.run.later(this, function() {

    var chart = this.get('chart');

    chart.yAxis[0].setTitle({text: this.get('chartOptions.yAxis.title.text')});

    this.get('content').forEach(function(item, index) {
      chart.series[index].update( {name: item['name_' + this.get('i18n.locale')]});
    }, this);
  });

}).on('didInsertElement')

});

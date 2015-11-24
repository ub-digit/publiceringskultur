import Ember from 'ember';
import BibmetChart from 'BibmetVis/components/bibmet-chart';

export default BibmetChart.extend({

  i18n: Ember.inject.service(),

  chartOptions: Ember.computed('i18n.locale', function() {

    return {
      title: 'none',
      chart: {
        type: 'line',
        height: 300
      },
      xAxis: {
        categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014']
      },
      yAxis: {
        min: 0,
        title: {
          text: this.get('i18n').t('charts.cooperations.chart.y-axis-title').toString()
        }
      },
      plotOptions: {
        line: {
          marker: {
            symbol: 'circle'
          }
        }
      }
    };
  })

});

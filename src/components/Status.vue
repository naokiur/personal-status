<template>
  <section>
    <CategoryGraph :chartData="this.getChartData" :options="this.getOptions" />
  </section>
</template>

<script lang="ts">
  import { Component, Vue} from 'vue-property-decorator';
  // import Chart from '@/components/Chart.vue';
  import CategoryGraph from '@/models/category/components/CategoryGraph.vue';

  @Component({
    components: {
        // Chart,
        CategoryGraph,
      },
  })
  export default class Status extends Vue {
    public categoryInfo = this.$store.state.categoryInfo;

    private get getOptions(): any {
      return {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'レベル',
            },
            ticks: {
              min: 0,
              max: 5,
              stepSize: 1,
            },
          }],
        },
      };
    }

    private get getChartData(): any {
      return {
        labels: this.$store.getters.getCategoryNames,
        datasets: [
          {
            label: 'ステータス',
            backgroundColor: '#f87979',
            data: this.$store.getters.getCategoryLevels,
          },
        ],
      };
    }

      public updateMessage() {
        this.$store.dispatch('updateMessage');
      }
  }
</script>

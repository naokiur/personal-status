<template>
  <section>
    <!-- <b-card no-body>
      <b-tabs card>
        <b-tab v-for="category in categoryInfo" :key="category.id" :title="category.name">
          <Chart :label="category.contents.map(content => content.id)" :data="category.contents.map(content => content.level)"></Chart>
        </b-tab>
      </b-tabs>
    </b-card> -->
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

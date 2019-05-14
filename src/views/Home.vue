<template>
  <div class="home">
    <Category />
    <CategoryGraph :chartData="this.getChartData" :options="this.getOptions" />

    <!-- <b-card no-body>
        <b-tabs card>
          <b-tab title="ステータス">
            <Info></Info>
          </b-tab>
          <b-tab title="入力">
            <StatusInput></StatusInput>
          </b-tab>
        </b-tabs>
    </b-card> -->
  </div>
</template>

<style scoped>
  .home {
    margin: 1%;
  }
</style>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Info from '@/components/Info.vue';
  import StatusInput from '@/components/StatusInput.vue';
  import Category from '@/models/category/components/Category.vue';
  import CategoryGraph from '@/models/category/components/CategoryGraph.vue';

  @Component({
    components: {
      Info,
      StatusInput,
      Category,
      CategoryGraph,
    },
  })
  export default class Home extends Vue {
    // public labels = this.$store.getters.getCategoryNames;
    // public data = this.$store.getters.getCategoryLevels;
    private homeInput: string = '';

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
  }
</script>

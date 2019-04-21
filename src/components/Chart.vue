<script lang="ts">
import { HorizontalBar } from 'vue-chartjs';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    extends: HorizontalBar,
})
export default class Chart extends Vue<HorizontalBar> {
  @Prop() label!;
  @Prop() data!;

  mounted (): void {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: this.label,
      datasets: [
        {
          label: 'ステータス',
          backgroundColor: '#f87979',
          data: this.data,
        },
      ],
    },
    {
      scales: {
        xAxes: [{
          ticks: {
            min: 0,
            max: 5,
            stepSize: 1,
          },
        }],
      },
    });
  }
}
</script>
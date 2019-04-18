<script lang="ts">
import { HorizontalBar } from 'vue-chartjs';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    extends: HorizontalBar,
})
export default class Chart extends Vue<HorizontalBar> {
  mounted (): void {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [30, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        },
      ],
    });
  }
}
</script>
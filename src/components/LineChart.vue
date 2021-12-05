<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: [
        'HP',
        'Attack',
        'Defense',
        'Special Attack',
        'Special Defense',
        'Speed'
      ],
      datasets: [
        {
          data: [65, 59, 90, 81, 56, 55, 80],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 1)'
        }
      ]
    },
    options: {
      legend: {
        display: false
      }
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

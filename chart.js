const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['ยอดเยี่ยม', 'ดี', 'ปานกลาง', 'พอใช้', 'ปรับปรุง'],
    datasets: [{
      label: '# of Votes',
      data: [40, 55, 5, 0, 0, 0],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
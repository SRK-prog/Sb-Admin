var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar15'],
          datasets: [{
              label: 'Sales',
              data: [12, 14, 15, 13, 12, 9,8, 5, 6, 4, 2, 4, 10, 7, 3],
              backgroundColor: [
                  'cornflowerblue'
              ],
              borderColor: [
                  'cornflowerblue'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  maintainAspectRatio: false
              }
          }
      }
  });


  var ctx = document.getElementById('chart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August'],
          datasets: [{
              label: 'sales',
              data: [12, 19, 3, 5, 8, 5, 7, 10],
              backgroundColor: [
                  '#4e73df'
              ],
              borderColor: [
                  '#4e73df'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  maintainAspectRatio: false
              }
          }
      }
  });



  var ctx = document.getElementById('chart_pie').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['Jan', 'Feb', 'March', 'April', 'May'],
          datasets: [{
              label: 'sales',
              data: [12, 1, 3, 5],
              backgroundColor: [
                  '#4e73df',
                  'pink',
                  'yellow',
                  'green',
                  'red'
              ],
              borderColor: [
                  '#4e73df'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
                  maintainAspectRatio: false
              }
          }
      }
  });
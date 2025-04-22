var ctx = document.getElementById('c2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Academic','Non-Academic','Adminstrator','Others'],
        datasets: [{
            label: 'Employees',
            data: [42,12,8,6],
            backgroundColor: [
                '#6b73ff',
                '#ff0099',
                ' #ffda3a ',
                ' #fd6585',
            ]
        }]
    },
    options: {
        responsive:true
    }
});
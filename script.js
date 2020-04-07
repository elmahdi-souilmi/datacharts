// Average_high
var Average_high = document.getElementById('Average_high').getContext('2d');
var high = new Chart(Average_high, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December','Year'],
        datasets: [{
            label: 'Average high °C ',
            // backgroundColor: 'rgb(255, 99, 132)',
            // borderColor: 'rgb(255, 99, 132)',
            data:[	18.2,
                	19.0,
                	20.6,
                	21.3,
                	23.3,
                	24.6,
                	28.8,
                	29.2,
                	27.6,
                	25.2,
                	21.6,
                	18.8,
                	23.2
                ], 
                backgroundColor:[
                    '#FFA042',
                    '#FF9B37',
                    '#FF9021',
                    '#FF8B17',
                    '#FF7D00',
                    '#FF7400',
                    '#FF5700',
                    '#FF5400',
                    '#FF7500',
                    '#FF7000',
                    '#FF8913',
                    '#FF9C39',
                    '#FF7E00',
                    
                  ],
                  borderWidth:1,
                 borderColor:'#777',
                 hoverBorderWidth:3,
                 hoverBorderColor:'#000'
               
        }]
    },
    // Configuration options go here
    options: {}
});
// Daily_mean
var Daily_mean = document.getElementById('Daily_mean').getContext('2d');
var mean = new Chart(Daily_mean, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December','Year'],
        datasets: [{
            label: 'Daily mean °C',
            data: [
                13.0,
                13.8,
                14.9,
                16.0,
                18.3,
                20.3,
                23.7,
                24.1,
                22.6,
                20.0,
                16.6,
                13.7,
                18.1,],
                backgroundColor:[
                    '#FFC489',
                    '#FFBE7E',
                    '#FFB76F',
                    '#FFAF60',
                    '#FF9F40',
                    '#FF9225',
                    '#FF7A00',
                    '#FF7700',
                    '#FF8205;',
                    '#FF9429',
                    '#FFAB58',
                    '#FFBF80',
                    '#FFA143',
                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
               
        }]
    },

    // Configuration options go here
    options: {}
});
// Average_low
var Average_low = document.getElementById('Average_low').getContext('2d');
var low = new Chart(Average_low, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December','Year'],
        datasets: [{
            label: 'Average low °C',
            data: [7.7,
               	8.5,
               	9.2,
               	10.8,
               	13.3,
               	16.0,
               	18.5,
               	18.9,
               	17.5,
               	14.8,
               	11.6,
               	8.5,
                   12.9],
                   backgroundColor:[
                    '#FFE8D2',
                    '#FFE3C7',
                    '#FFDEBE',
                    '#FFD3A8',
                    '#FFC285',
                    '#FFAF60',
                    '#FF9E3E',
                    '#FF9B38',
                    '#FFA54B',
                    '#FFB871',
                    '#FFCE9D',
                    '#FFE3C7',
                    '#FFC58B',
                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'
        }]
    },

    // Configuration options go here
    options: {}
});
// Average_precipitation
var  Average_precipitation_mm = document.getElementById('Average_precipitation_mm').getContext('2d');
var precipitation_mm = new Chart( Average_precipitation_mm, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December','Year'],
        datasets: [{
            label: 'Average precipitation mm',
            data: [	79.2,
                	67.4,
                	45.4,
                	44.5,
                	16.8,
                	4.0,
                	0.3,
                	0.3,
                	4.3,
                	42.7,
                	92.1,
                	91.5,
                    488.5],
                    backgroundColor:[
                        '#88FF88',
                        '#90FF90',
                        '#BBFFBB',
                        '#BAFFBA',
                        '#E5FFE5',
                        '#F8FFF8',
                        '#FEFFFE',
                        '#FEFFFE',
                        '#F8FFF8',
                        '#BFFFBF',
                        '#71FF71',
                        '#76FF76',
                        '#C1FFC1',
                      ],
                      borderWidth:1,
                      borderColor:'#777',
                      hoverBorderWidth:3,
                      hoverBorderColor:'#000'
        }]
    },

    // Configuration options go here
    options: {}
});
// Average_precipitation_ days
var  Average_precipitation_days = document.getElementById('Average_precipitation_ days').getContext('2d');
var precipitation_days = new Chart( Average_precipitation_days, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December','Year'],
        datasets: [{
            label: 'Average precipitation days',
            data: [
                12.4,
                10.1,
                9.8,
                9.5,
                5.1,
                1.6,
                0.4,
                0.4,
                1.8,
                6.5,
                10.1,
                12.3,
                80.0],
                backgroundColor:[
                    '#6666FF',
                    '#7676FF',
                    '#8686FF',
                    '#8585FF',
                    '#C0C0FF',
                    '#EAEAFF',
                    '#FAFAFF',
                    '#FAFAFF',
                    '#E8E8FF',
                    '#AEAEFF',
                    '#7E7EFF',
                    '#6767FF',
                    '#ABABFF',
                  ],
                  borderWidth:1,
                  borderColor:'#777',
                  hoverBorderWidth:3,
                  hoverBorderColor:'#000'

        }]
    },

    // Configuration options go here
    options: {}
});
// Mean_monthly_sunshine
var  Mean_monthly_sunshine = document.getElementById('Mean_monthly_sunshine').getContext('2d');
var sunshine = new Chart( Mean_monthly_sunshine, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December','Year'],
        datasets: [{
            label: 'Mean monthly sunshine hours',
            data: [
                205.5,	
                208.5,	
                258.7,	
                277.8,	
                314.4,
                298.0,
                325.8,
                316.5,	
                263.0,	
                243.6,	
                204.1,	
                198.7,	
                3116.6
            ],
            backgroundColor:[
                '#D8D800',
                '#DEDE00',
                '#E5E5OO',
                '#EBEB04',
                '#F1F113',
                '#F0F00F',
                '#F4F419',
                '#F2F214',
                '#E8E800',
                '#E1E100',
                '#DADA00',
                '#D7D700',
                '#E6E600',
              ],
              borderWidth:1,
              borderColor:'#777',
              hoverBorderWidth:3,
              hoverBorderColor:'#000'

        }]
    },

    // Configuration options go here
    options: {}
});

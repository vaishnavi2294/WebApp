Highcharts.setOptions({
    colors: ['#69707e','#f15b24'],
  
}),
Highcharts.chart('container', {
    chart: {  backgroundColor: '#434c5e',
  
        type: 'variablepie'

    },

    
    
    title: {
        text: '<h2><span style="font-size:30px; color:#ffffff"> Profile </span><br><span style="font-size:30px; color:#ffffff"> Strength</span></h2>',
        x:6,
        y:280,
    },
    tooltip: {
        style:{
            color:'#ffffff'
        },
        headerFormat: '',
        pointFormat: '<span style="color:#ffffff"></span> <b class="point"> {point.name}</b>',
          backgroundColor:'#00000',
          borderColor:'none',
     
    },
    plotOptions: {
        series: {
          
        }
    },
    series: [{
      size:500,
        minPointSize: 70,
        innerSize: '50%',
        zMin: 0,
        name: '',
        
        data: [{
            
            name: '65% <br> remaining',
            y:65,
            dataLabels: {
                enabled:true,
                style: {
                   color: '#ffffff',
                   fontSize:'22px',
                }},
         
            }, {
            name: '45% <br> Completed',
            y:45,
            dataLabels: {
               
                enabled:true,
                style: {
                fontWeight:'lighter',
                   color: '#ffffff',
              fontSize:'22px',
           
                }},
          
        
           
        }]}] 
});
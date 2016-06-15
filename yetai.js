option_yetai = {
    title : {
        text: '业态',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: YE_TAI
    },
    series : [
        {
            name: '房产状态',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
               selectedMode: 'single',
            data:(function(){
            	var sb = [];
            	for (var i = 0; i < YE_TAI.length; i++){
            		var yt = YE_TAI[i];
            		sb.push({name:yt, value: random(1000,10000), link:'index_1.html'})
            	}
            	sb[0].selected = true;
            	return sb;
            })(),
			label: {
				normal: {
						show: true,formatter:'{b}:{d}%'
					}
			},
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


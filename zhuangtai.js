


option_zhuangtai = {
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
        data: HOUSE_STATUS
    },
    series : [
        {
        	selectedMode: 'single',
            name: '房产状态',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:(function(){
            	var sb = [];
            	for (var i = 0; i < HOUSE_STATUS.length; i++){
            		var st = HOUSE_STATUS[i];
            		sb.push({name:st, value: random(1000,10000), link:'index_2.html'})
            	}
            	sb[0].selected = true;
            	return sb;
            })(),
            label:{
            	normal:{
            		formatter:'{b}:  {d}%'
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


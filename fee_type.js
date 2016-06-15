option_fee_type = {
    title : {
        text: '房产状态',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['未售','已售','已接房','已装修','已入住']
    },
    series : [
        { selectedMode: 'single',
            name: '房产状态',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
            	{value:random(1000,10000), name:'写字楼管理费', link:'index_3.html',},
                {value:random(1000,10000), name:'垃圾费', link:'index_3.html'},
                {value:random(1000,10000), name:'物管费', link:'index_3.html', selected:true},
                {value:random(1000,10000), name:'XXX费', link:'index_3.html'},
                {value:random(1000,10000), name:'YYY费', link:'index_3.html'}
            ],
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
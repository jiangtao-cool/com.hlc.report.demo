option_fee = {
    title: {
        text: '折线图堆叠',
          x:'center'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	 orient: 'vertical',
        left: 'left',
        data:['宏立城集团','一公司','二公司','三公司','四公司','花果园旅游','花果园物业']
    },
    grid: {
        left: '20%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月','2月','3月','4月','5月','6月','7月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'一公司',
            type:'line',
            data:[77, 55, 66, 66, 55, 77, 50]
        },
        {
            name:'二公司',
            type:'line',
            data:[33, 44, 55, 66, 55, 44, 33]
        },
        {
            name:'三公司',
            type:'line',
            data:[55, 66, 77, 88, 40, 50, 60]
        },
        {
            name:'四公司',
            type:'line',
            data:[63, 64, 75, 80, 40, 62, 33]
        },
        {
            name:'花果园旅游',
            type:'line',
            data:[44, 67, 54, 86, 90, 30, 20]
        },{
            name:'花果园物业',
            type:'line',
            data:[25, 65, 22, 66, 44, 77, 66]
        },
    ]
};

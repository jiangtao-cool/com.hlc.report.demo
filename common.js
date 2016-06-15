YE_TAI = ['住宅','高层豪宅','别墅','联排别墅','独立别墅','商业','叠拼别墅','高层住宅','商铺','席位','固定商铺','写字楼','公寓'];
HOUSE_STATUS = ['未售', '已售', '已接房', '已装修','已入住'];
QU_YU = ['A区','B区','C区','D区','E区','F区','G区'];
GONG_SI = ['一公司','二公司','三公司','四公司','五公司']

function drawChart(dom, filename, title) {
	dom = $(dom);
	var myChart = echarts.init(dom[0]);
	var url = filename + ".js";
	
	
	$.getScript(url, function() {
		var varName = "option_" + filename;
		var option = window[varName];

		if (title != null) {
			option.title.text = decodeURIComponent(title);
		}

		myChart.setOption(window[varName]);

		myChart.on('dblclick', function(params) {
			console.log(params);

			if (params.data.link) {
				window.location = params.data.link;
			}
		});
		
		if (filename == 'fee'){
			myChart.on('click', function(params){
				location = "收费率-钻取-费用组成.html"
			})
			
			myChart.on('legendselectchanged', function (params) {
			    location = "收费率-钻取-收费台帐.html"
			});
		}
		
	});
}


function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return (r[2]);
	return null;
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function fullScreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}

function exitFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozExitFullScreen) {
		document.mozExitFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}

$(function() {
	$("button:contains('全屏')").click(function() {
		fullScreen($(this).closest('.panel')[0]);
	});
	$("button:contains('还原')").click(function() {
		exitFullscreen($(this).closest('.panel')[0]);
	});
})
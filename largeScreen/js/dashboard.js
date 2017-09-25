/**
 * [设置container显示所占body的宽和高]
 */
function setWidth() {//@ sourceURL=js/dashboard.js
  var clientWidth = document.body.clientWidth;
  var clientHeight = document.body.clientHeight;
  var fixed = (1920 / 1080), useWidth, useHeight;
  if ((clientWidth / clientHeight) > fixed) {//宽高比大于固定的比例（即高度小于设计稿，以），则以高度为主
    useWidth = clientHeight * fixed;//以实际高度为主，计算container宽度
    $(".container").width(useWidth).height(clientHeight).css({"margin": "0 auto"});
  }
  if ((clientWidth / clientHeight) < fixed) {//宽高比小于固定的比例，则以宽度为主
    useHeight = clientWidth / fixed;//以实际宽度为主，计算container高度
    $(".container").height(useHeight).css({"margin": (clientHeight - useHeight) / 2 + "px auto"});
  }
}
setWidth();
/**
 * [设置右侧每个图形所占宽高]
 */
function setHeight() {
  var width = $(".right").width();//获取到右侧的宽
  var leftWidth = $(".left").width();//获取到左侧的宽
  var fixed = (1920 / 1080);
  // $("#leftBar").height(leftWidth/1.4);
  $(".rightTop").height(width / 1.6).css({"top": 0});

  $(".rightMiddle").height(width / 1.5).css({"top": (width / 1.6) + (15 / fixed) + 'px'});
  $(".leftMiddle").height(leftWidth / (332/295)).css({
    "width": "100%",
    "position": "absolute",
    "top": leftWidth / (420 / 265)
  })

  $(".rightBottom").height(width / 1.6).css({"top": (width / 1.6 + (15 / fixed) + (21 / fixed)) + (width / 1.5) + 'px'});
  $(".container .header span").css({
    "line-height": $(".right .header").height() + "px"
  })
}
setHeight();
/**
 * [调用服务器数据接口处]
 * @return {[type]} [description]
 */
// function(){
//   $.getJSON('staticData.json', function(jsonData){
// 	    renderPieFn("rightTopBody",jsonData.pieData);
// 	    randerBarFn("rightMiddleBody",jsonData.barData);
// 	    randerLineFn("rightBottomBody",jsonData.lineData);

//   });
// 
// }

/**
 * [jsonData description]
 * @type {Object} 静态数据
 */
var jsonData = {
  "pieData": {
    "name": ["公安厅", "司法厅", "发改委", "财政厅", "其他"],
    "value": [335, 310, 234, 135, 230]
  },
  "barData": {
    "time": ["2017年6月", "2017年7月", "2017年8月"],
    "dataSource1": [123, 464, 422],
    "file2": [123, 335, 421],
    "API3": [243, 241, 462]
  },
  "lineData": {
    "time": ["01", "02", "03", "04", "05", "06"],
    "value": [220, 182, 191, 134, 150, 120]
  },
  "leftBar": {
    "name": ["车辆信息排行", "车辆信息排行", "车辆信息排行", "车辆信息排行", "车辆信息排行"],
    "value": [378, 375, 576, 474, 279]
  }
};

/**
 * 页面加载初始化调用方法
 */
//renderPieFn("rightTopBody",jsonData.pieData);
//randerBarFn(jsonData.barData);
//randerLineFn("rightBottomBody", jsonData.lineData);
//randerLeftBarFn("leftMiddleBody", jsonData.leftBar);

window.renderTopRight = renderPieFn;
window.renderMiddleRight = randerBarFn;
window.renderBottomRight = randerLineFn;
window.renderMiddleLeft = randerLeftBarFn;

function renderPieFn(data, id) {
  if(!data.name || data.name.length==0 || !data.value || data.value.length==0){
    if(window.rootCjs) window.rootCjs.nodata_rt.visible = true;
    return;
  }
  if(window.rootCjs) window.rootCjs.nodata_rt.visible = false;
  if (!id) id = 'rightTopBody';
  var myChart = echarts.init(document.getElementById(id));

  var DWidth = parseFloat($("#" + id).width()), seriesData = [];

  $("#" + id).append(defineFn(jsonData.pieData));
  function defineFn(data) {
    if ($(".pieCon")) {
      $(".pieCon").remove()
    }
    var subD = $("<div>").addClass("pieCon"), subLi = "", subUl = $("<ul>");

    var colorArr = ["#66f9f1", "#ffc29e", "#3f78ff", "#ffe304", "#27dbfe"].reverse();

    function getSum(arg) {
      var sum = 0;
      arg.forEach(function (item) {
        sum += item
      })
      return sum;
    }

    var sumD = getSum(data.value);

    var iStyle = "width:" + Math.ceil(DWidth * 10 / 284) + "px;height:" + Math.ceil(DWidth * 10 / 284) + "px;";

    for (var i = 0, len = data.name.length; i < len; i++) {
      subLi += '<li style="list-style:none;height:20%;font-size:' + Math.ceil(DWidth * 10 / 284) + 'px;">'
        + '<span style="display:inline-block;background-color:' + colorArr[i] + ';' + iStyle + '"></span>'
        + '<span style="display:inline-block;padding-left:5px;">' + data.name[i] + '</span>'
        + '<span style="color:#7ddcf5;width:auto;display:inline;"> ( ' + parseInt(data.value[i] / sumD * 100) + '%)</span>'
        + '</li>';
      seriesData.push({'value': data.value[i]})
    }

    subD.append(subUl.append(subLi))
    return subD;
  }

  var option = {
    title: {
      text: "100%",
      left: "19%",
      top: "center",
      textStyle: {
        color: "#fff",
        fontSize: (DWidth * 20 / 284) + "",//要改的地方(400*x=10)
        fontWeight: "bold",
      },
    },

    series: [
      {
        color: ["#66f9f1", "#ffc29e", "#3f78ff", "#ffe304", "#27dbfe"],
        type: "pie",
        center: ["29.9%", "51%"],
        radius: ["55%", "80%"],
        avoidLabelOverlap: false,
        label: {normal: {show: false,},},
        labelLine: {normal: {show: false}},
        itemStyle: {
          normal: {
            borderWidth: 0
          },
        },
        data: seriesData
      }
    ]
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);

  }
  return myChart;
}

function randerBarFn(data, id) {
  if(!data.time || data.time.length==0){
    if(window.rootCjs) window.rootCjs.nodata_rm.visible = true;
    return;
  }
  if(window.rootCjs) window.rootCjs.nodata_rm.visible = false;
  if (!id) id = 'rightMiddleBody';
  var myChart = echarts.init(document.getElementById(id));
  var DWidth = parseFloat($("#" + id).width());
  var seriesData = [], lengendData = [], category = [],
    colorArr = [["#3F78FF", "#27DBFE", "#66F9F1"], ["#a8f6fb", "#a0def9", "#b4eaf5"]], index = 0;//(seriesData：y轴的数据；lengendData:小标题；category:x轴的值);

  for (var item in data) {
    item == "time" ? category = data[item] : setSeriesData(item, data)
  }

  function setSeriesData(subItem, item) {
    lengendData.push(subItem);
    seriesData.push({
      name: subItem,
      type: "bar",
      barWidth: (DWidth * 10 / 284),
      itemStyle: {
        normal: {
          barBorderRadius: 4,
          color: colorArr[0][index]

        }
      },
      barGap: '60%',
      data: item[subItem]
    })
    console.log(colorArr[index]);
    index++;
  }

  var option = {
    legend: {
      top: "2%",
      data: lengendData,
      textStyle: {color: "#ccc", fontSize: (DWidth * 13 / 284)},
      itemWidth: (DWidth * 15 / 284),
      itemHeight: (DWidth * 10 / 284)
    },
    grid: {left: "3%", right: "4%", bottom: "3%", top: "18%", containLabel: true},
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: "#084c73"
        }
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "#fff",
          fontSize: (DWidth * 8 / 284)
        }
      },

      axisTick: {show: false},
    },
    yAxis: {
      axisLine: {
        lineStyle: {
          color: "#084c73"
        }
      },
      axisTick: {show: false,},
      axisLabel: {
        textStyle: {
          color: "#45bce9",
          fontSize: (DWidth * 13 / 284)
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#0d2531"
        }
      }
    },
    series: seriesData
  };

  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
  return myChart;
}

function randerLineFn(data,id) {
  if(!data || !data.time || data.time.length==0){
    if(window.rootCjs) window.rootCjs.nodata_rb.visible = true;
    return;
  }

  if(window.rootCjs) window.rootCjs.nodata_rb.visible = false;

  if(!id) id = 'rightBottomBody';
  var myChart = echarts.init(document.getElementById(id));
  var DWidth = parseFloat($("#" + id).width());
  var category = [], seriesData = [], lengendData = [];
  for (var item in data) {
    item == "time" ? category = data[item] : setSeriesData(item, data)
  }

  function setSeriesData(subItem, item) {
    lengendData.push(subItem);
    seriesData.push({
      type: "line",
      smooth: true,
      symbolSize: 0,
      lineStyle: {normal: {width: 2}},
      areaStyle: {normal: {color: "#01636c"}},
      data: item[subItem]
    })
  }

  var options = {};
  options.AxisLine = {lineStyle: {color: "#23789e", width: 2}};
  options.axisLabel = {textStyle: {color: "#fff", fontSize: (DWidth * 10 / 284)}};
  var option = {
    color: ["#00FBFF"],
    grid: {left: "3%", right: "4%", bottom: "3%", top: "18%", containLabel: true},
    xAxis: [{
      type: "category",
      boundaryGap: false,
      axisTick: {show: false},
      axisLine: options.AxisLine,
      axisLabel: options.axisLabel,
      data: category
    }],
    yAxis: [{
      type: "value",
      axisTick: {show: false},
      splitLine: {show: false},
      axisLine: options.AxisLine,
      axisLabel: options.axisLabel,

    }],
    series: seriesData
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
  return myChart;
}

function randerLeftBarFn(data,id) {
  if(!data.name || data.name.length==0 || !data.value || data.value.length==0){
    if(window.rootCjs) window.rootCjs.nodata_lm.visible = true;
    return;
  }
  if(window.rootCjs) window.rootCjs.nodata_lm.visible = false;
  if(!id) id='leftMiddleBody'
  var myChart = echarts.init(document.getElementById(id));
  var category = [], seriesData = [], lengendData = [];
  for (var item in data) {
    item == "name" ? category = data[item] : setSeriesData(item, data)
  }
  function setSeriesData(subItem, item) {
    seriesData = [{
      type: 'bar',
      itemStyle: {
        normal: {
          show: true,
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#17a1fa'},
              {offset: 1, color: '#74feff'}
            ], false),
          barBorderRadius: 4,
          borderWidth: 0,
          // borderColor:'#333',
        }
      },
      barGap: '0%',
      barCategoryGap: '65%',
      data: item[subItem]
    }]
  }

  var option = {
    grid: {
      left: '4%',
      bottom: '4%',
      top: '3%',
      right: '17%',
      // width:'100%',
      // height:'90%',
      containLabel: true,
    },
    xAxis: {
      type: 'value', axisTick: {show: false},
      axisLine: {show: true, lineStyle: {color: '#005598',}},
      axisLabel: {show: true, textStyle: {color: '#fff'}},
      splitLine: {show: true, lineStyle: {color: '#005598'}}
    },
    yAxis: [{
      type: 'category',
      axisTick: {show: false},
      axisLine: {show: true, lineStyle: {color: '#005598'}},
      splitArea: {show: true, areaStyle: {color: '#031523', shadowOffsetX: 0, shadowOffsetY: 4}},
      axisLabel: {show: true, textStyle: {color: '#fff', fontSize: 12}},
      data: category
    }
    ],
    series: seriesData
  };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);
  }
  return myChart;
}

$(window).resize(function () {
  setWidth();
  setHeight();
  var pieChart = renderPieFn("rightTopBody", jsonData.pieData);
  pieChart.resize();
  var barChart = randerBarFn("rightMiddleBody", jsonData.barData);
  barChart.resize();
  var lineChart = randerLineFn("rightBottomBody", jsonData.lineData);
  lineChart.resize();
  var leftBarChart = randerLeftBarFn("leftMiddleBody", jsonData.leftBar);
  leftBarChart.resize();
})
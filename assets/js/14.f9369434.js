(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{499:function(t,n,i){"use strict";i.r(n);var e=i(1),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h3",{attrs:{id:"圣杯布局"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[t._v("#")]),t._v(" 圣杯布局")]),t._v(" "),i("p",[t._v("要求：三列布局；中间宽度自适应，两边内容定宽。")]),t._v(" "),i("p",[t._v("好处：重要的内容放在文档流前面可以优先渲染")]),t._v(" "),i("p",[t._v("原理：利用相对定位、浮动、负边距布局，而不添加额外标签")]),t._v(" "),i("p",[t._v("实现方式：")]),t._v(" "),i("p",[t._v("main部分首先要放在container的最前部分。然后是left,right")]),t._v(" "),i("p",[t._v("1.将三者都 float:left , 再加上一个position:relative (因为相对定位后面会用到）")]),t._v(" "),i("p",[t._v("2.main部分 width:100%占满")]),t._v(" "),i("p",[t._v("3.此时main占满了，所以要把left拉到最左边，使用margin-left:-100%")]),t._v(" "),i("p",[t._v("4.这时left拉回来了，但会覆盖main内容的左端，要把main内容拉出来，所以在外围container加上 padding:0 220px 0 200px")]),t._v(" "),i("p",[t._v("5.main内容拉回来了，但left也跟着过来了，所以要还原，就对left使用相对定位 left:-200px  同理，right也要相对定位还原 right:-220px")]),t._v(" "),i("p",[t._v("6.到这里大概就自适应好了。如果想container高度保持一致可以给left main right都加上min-height:130px")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>实现三栏水平布局之圣杯布局</title>\n    <style type="text/css">\n      /* 圣杯布局关键代码 */\n      .left, .main, .right {\n        float: left;\n        position: relative;\n        min-height: 300px;\n      }\n      .main {\n        width: 100%;\n        background-color: #999;\n      }\n      .container {\n        padding-left: 200px;\n        padding-right: 300px;\n      }\n      .left {\n        margin-left: -100%;\n        left: -200px;\n        width: 200px;\n        background-color:thistle;\n      }\n      .right {\n        margin-left: -300px;\n        right: -300px;\n        width: 300px;\n        background-color: violet;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="main">main</div>\n      <div class="left">left</div>\n      <div class="right">right</div>\n    </div>\n  </body>\n</html>\n\n')])])])])}),[],!1,null,null,null);n.default=a.exports}}]);
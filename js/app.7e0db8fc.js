(function(e){function t(t){for(var n,s,o=t[0],c=t[1],l=t[2],d=0,g=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&g.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(g.length)g.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/brettrade_gamified/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},3028:function(e,t,a){},"3c15":function(e,t,a){"use strict";a("3028")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{app:""}},[a("transition",{attrs:{"enter-active-class":"animate__animated animate__bounce animate__slow","leave-active-class":"animate__animated animate__fadeOutTopRight animate__slow"}},[e.isAwardGiven?a("v-overlay",{attrs:{value:e.isAwardGiven,dark:!1,opacity:0,"z-index":"10000"}},[a("div",{staticClass:"d-flex flex-column justify-center align-center"},[a("v-img",{attrs:{contain:"","max-height":"300","max-width":"300",src:e.awardJustGiven.img}}),a("v-card",{attrs:{elevation:"3"}},[a("v-card-title",{staticClass:"d-flex align-center justify-center text-center"},[a("div",[e._v(e._s(e.awardJustGiven.name))])]),a("v-card-text",[e._v(" "+e._s(e.awardJustGiven.desc)+" ")])],1)],1)]):e._e()],1),a("v-overlay",{attrs:{value:e.showHappyFace}},[a("div",{staticClass:"d-flex flex-column align-center justify-center"},[a("img",{attrs:{src:"https://i.gifer.com/Llx5.gif",alt:"",height:"300px",width:"600px"}}),a("h1",[e._v("We are so happy to see back!")])])]),a("div",{staticClass:"funnyam d-flex flex-column"},[a("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__bounceIn",appear:""}},[e.currentMessage?a("speech-bubble",{attrs:{text:e.currentMessage}}):e._e()],1),a("img",{staticStyle:{"align-self":"flex-end"},attrs:{src:"https://www.picgifs.com/graphics/s/scrooge-mcduck/graphics-scrooge-mcduck-940725.gif",alt:"",height:"150px",width:"150px"}})],1),a("transition",{attrs:{name:"fade"}},[e.snackbar?a("particles-bg",{attrs:{config:e.pconfig,type:e.particle_type,bg:!1,canvas:{position:"absolute",zIndex:1e3,top:0,left:0}}}):e._e()],1),a("input",{attrs:{type:"hidden",name:"exit_price"},domProps:{value:e.currentPrice}}),a("v-app-bar",{attrs:{app:"","clipped-left":"",height:"100"}},[a("v-sheet",{staticClass:"d-flex align-center ml-1 pa-2 rounded-xl",attrs:{outlined:""}},[a("div",{staticClass:"d-flex align-center  font-weight-bold "},[e._v(" Current price: "),a("div",{staticClass:"ml-1 pa-2 blue   white--text text-no-wrap rounded-pill"},[e._v(" $"+e._s(e.formattedTween||e.currentPrice)+" ")])])]),a("v-spacer"),a("v-sheet",{staticClass:"d-flex align-center ml-1 pa-2 rounded-xl",attrs:{outlined:""}},[a("div",{staticClass:"d-flex align-center  font-weight-bold "},[e._v(" Crash probability (for each price update): "),a("div",{staticClass:"ml-1 pa-2 red   white--text text-no-wrap rounded-pill"},[e._v(" "+e._s(100*e.probToZero)+"% ")])])]),a("v-spacer"),a("div",{staticClass:"d-flex"},e._l(e.awards,(function(t){return a("div",{key:t.id,staticClass:"m-1"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,i=n.attrs;return[a("div",e._g(e._b({},"div",i,!1),r),[a("v-badge",{attrs:{bordered:"",overlap:"",color:e.locked(t.id)?"secondary":"success",bottom:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e.locked(t.id)?a("v-icon",[e._v("mdi-lock")]):a("v-icon",[e._v("mdi-check-outline")])]},proxy:!0}],null,!0)},[a("v-avatar",{attrs:{size:"60"}},[a("v-img",{class:e.classAward(t.id),attrs:{src:t.img}})],1)],1)],1)]}}],null,!0)},[a("span",[e._v(e._s(t.brief))])])],1)})),0),a("v-btn",{staticClass:"mx-3",attrs:{large:""},on:{click:function(t){e.dialog=!0}}},[e._v("Sell")])],1),a("end-dialog",{attrs:{dialog:e.showEndDialog},on:{finishGame:e.finishGame}}),a("confirm-dialog",{attrs:{dialog:e.dialog,currentPrice:e.currentPrice},on:{sell:e.sell,continueKeeping:e.continueKeeping}}),a("v-navigation-drawer",{attrs:{clipped:"",app:"",width:"300",color:"blue",permanent:""}},[a("v-card",{staticClass:"d-flex flex-column buysellcard",staticStyle:{height:"100%"},attrs:{"fill-height":""}},[a("v-card-text",{staticClass:"overflow-y-auto",staticStyle:{"margin-bottom":"50px"}},[a("v-list",[a("v-list-item-group",{staticClass:" ",attrs:{"active-class":"border",color:"indigo"}},[a("transition-group",{attrs:{"enter-active-class":"animate__animated animate__fadeInRight animate__slow","leave-active-class":"animate__animated animate__fadeOutTopRight animate__slow"}},e._l(e.messages,(function(t,n){return a("v-list-item",{key:n,ref:"li_"+n,refInFor:!0,staticClass:"m-3  ",attrs:{id:"li_"+n,dense:""}},[a("v-list-item-content",{directives:[{name:"breathing-colors",rawName:"v-breathing-colors",value:e.sample,expression:"sample"}],staticClass:"message mb-3 pr-3 "},[a("v-list-item-title",{staticClass:"titlestyle",staticStyle:{"white-space":"pre-wrap"},domProps:{innerHTML:e._s(t)}})],1)],1)})),1)],1)],1),a("div",{ref:"listend",attrs:{id:"listend"}},[e._v(" ")])],1)],1)],1),a("v-main",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{app:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("highcharts",{ref:"priceGraph",staticClass:"hc",attrs:{constructorType:"stockChart",options:e.chartOptions,updateArgs:[!0,!0,!0]}})],1)],1)],1)],1),a("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[a("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",n,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbartext)+" ")])],1)},i=[],s=a("1da1"),o=(a("96cf"),a("d3b7"),a("ddb0"),a("b680"),a("159b"),a("caad"),a("2532"),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAABCJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjgwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj44MDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAg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"),c=a("5c51"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"talk-bubble tri-right border btm-right-in round"},[a("div",{staticClass:"talktext"},[a("p",[a("typical",{staticClass:"typicalWrapper",attrs:{steps:[""+e.text,1e3],loop:1,wrapper:"div"}})],1)])])},u=[],d=a("4140"),g=a.n(d),p={name:"SpeechBuuble",props:["text"],components:{typical:g.a},data:function(){return{}},methods:{}},h=p,v=(a("3c15"),a("2877")),m=Object(v["a"])(h,l,u,!1,null,"2a87588b",null),f=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"","max-width":"490"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5",attrs:{color:"danger"}},[e._v("End of the round")]),a("v-card-text",[e._v(" Click 'Next' to continue to the next round ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red darken-1"},on:{click:e.submit}},[e._v(" Next")])],1)],1)],1)},w=[],A={props:["dialog"],components:{},data:function(){return{}},methods:{submit:function(){this.$emit("finishGame")}}},C=A,I=a("6544"),y=a.n(I),x=a("8336"),k=a("b0af"),P=a("99d9"),G=a("169a"),R=a("2fa4"),V=Object(v["a"])(C,b,w,!1,null,null,null),T=V.exports;y()(V,{VBtn:x["a"],VCard:k["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VDialog:G["a"],VSpacer:R["a"]});var j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._v("Selling decision")]),a("v-card-text",[e._v(" Do you really want to sell your asset? If you click 'Sell' this round will be over. ")]),a("v-card-actions",[a("v-spacer"),a("div",[a("v-btn-toggle",[a("v-btn",{attrs:{color:"green darken-1"},on:{click:e.continueKeeping}},[e._v(" Keep ")]),a("v-btn",{attrs:{color:"red darken-1"},on:{click:e.sell}},[e._v(" Sell")])],1)],1)],1)],1)],1)},O=[],L={props:["dialog","currentPrice"],components:{},data:function(){return{}},methods:{conditionalSelling:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(1!=t.$socket.readyState){a.next=4;break}return n={name:"slider value changed",sliderValue:e,currentPrice:t.currentPrice},a.next=4,t.$socket.sendObj(n);case 4:0==e&&t.sell();case 5:case"end":return a.stop()}}),a)})))()},sell:function(){this.$emit("sell")},continueKeeping:function(){this.$emit("continueKeeping")}}},W=L,D=a("a609"),E=Object(v["a"])(W,j,O,!1,null,null,null),M=E.exports;y()(E,{VBtn:x["a"],VBtnToggle:D["a"],VCard:k["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VDialog:G["a"],VSpacer:R["a"]});var S=a("4452"),Z=a.n(S),_=a("e703"),N=a("0adb"),z=a("cffa"),Y=a("2ef0"),B=a.n(Y),X=25,H=10,J=3,F={name:"App",components:{highcharts:S["Chart"],ConfirmDialog:M,EndDialog:T,ParticlesBg:c["a"],SpeechBubble:f},data:function(){var e=Date.UTC(2009,0,1),t=Object(_["a"])(Object(N["a"])(new Date,J*X));return{currentMessage:null,awardJustGiven:null,isAwardGiven:!1,timeInTrade:0,minx:e,maxx:t,showHappyFace:!1,showLastMsg:!1,particle_type:"fountain",heartConfig:{num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-30,30],body:o,alpha:[.6,0],scale:[.1,.4],position:"all",cross:"dead",random:1},snackbar:!1,snackbartext:null,happyHappens:!1,prices:[],sample:{colors:["red","green","blue"],interval:3e3,transition:{duration:1e3}},showEndDialog:!1,messages:[],zeroCounter:0,grownCounter:0,TwoTwosCounter:0,sensitivity:5,sensitivity2:3,probToZero:.03,startingPrice:H,currentPrice:H,submittable:!1,onPause:!1,startTime:new Date,endTime:null,timeSpent:null,reset:!1,messageMoveDelay:5e3,dialog:!1,tweenedPrice:null,stockInterval:null,tickFrequency:J,awardsGiven:[],awards:{10:{id:0,img:"https://cdn0.iconfinder.com/data/icons/business-finance-vol-2-56/512/stock_trader_trade_exchange-256.png",name:"Level I",brief:"Level I Badge: Trading intern",desc:["Level up! Doing well 👍","Way to go -- stay strong! 💎🤲","You are definitely going places! 🙌"]},25:{id:1,img:"https://cdn2.iconfinder.com/data/icons/financial-strategy-20/496/trader-bitcoin-cryptocurrency-investment-businessman-1024.png",name:"Level II",brief:"Level II Badge: Trading manager",desc:["Level up again! You belong on the trading floor 🤑","Nerves of steel: stocks are going strong! 📈","Bulls 🐂 are in the arena. Good job!","Have you ever thought of opening your own trading firm?"]},50:{id:2,img:"https://cdn1.iconfinder.com/data/icons/office-and-internet-3/49/217-512.png",name:"Level III",brief:"Level III Badge: Money Boss",desc:["You are the money-maker! 💰","Diamond hands 💎🤲 Impressive run!","To the moon! 🚀 🚀 🚀"]}},chartOptions:{time:{useUTC:!1},yAxis:{startOnTick:!1,endOnTick:!1},xAxis:{startOnTick:!1,endOnTick:!1,showLastLabel:!0,min:Object(_["a"])(new Date),max:Object(_["a"])(Object(N["a"])(new Date,J*X))},navigator:{enabled:!1},rangeSelector:{enabled:!1,inputEnabled:!1,selected:0},series:[{data:[[Object(_["a"])(new Date),H]]}]}}},computed:{awardTimes:function(){return B.a.keys(this.awards)},lastMsg:function(){return B.a.last(this.messages)},pconfig:function(){return"fountain"==this.particle_type?{}:this.heartConfig},formattedTween:function(){return this.tweenedPrice?this.tweenedPrice.toFixed(2):this.currentPrice.toFixed(2)}},watch:{timeInTrade:function(e){var t=this;B.a.forEach(this.awardTimes,(function(a){if(e>a&&!t.awardsGiven.includes(t.awards[a].id)){t.isAwardGiven=!0;var n=t.awards[a];n.desc=B.a.sample(t.awards[a].desc),t.awardJustGiven=t.awards[a],t.awardsGiven.push(t.awards[a].id),setTimeout((function(){t.isAwardGiven=!1,t.awardJustGiven=null}),3e3)}}))},dialog:function(e){this.onPause=e},messages:function(e){var t=this;this.showLastMsg=!0,setTimeout((function(){t.showLastMsg=!1}),3e3)},prices:function(e){if(3==e.length){var t="https://i.gifer.com/7VzX.gif";this.postGif(t)}if(5==e.length&&this.say("Diamond hands 💎🤲: \nHolding strong for ".concat(e.length*this.tickFrequency," seconds already!")),8==e.length){var a="https://c.tenor.com/puvU5YS9r4cAAAAC/uncle-scrooge-mcduck-money.gif";this.postGif(a)}if(10==e.length&&this.say("To the moon 🚀: \nStock is going up for ".concat(e.length*this.tickFrequency," seconds.")),13==e.length){var n="https://c.tenor.com/QfVo3Mh29hUAAAAC/we-bare-bears-money.gif";this.postGif(n)}if(15==e.length&&this.say("Gimme the tendies! 🍗: \nCash piling up for ".concat(e.length*this.tickFrequency," seconds now.")),18==e.length){var r="https://c.tenor.com/0-e7d7ct3G0AAAAC/shut-up-and-take-my-money-futurama.gif";this.postGif(r)}if(20==e.length&&this.say("Almost there 🚀🚀🚀🚀: \nImpressive run for ".concat(e.length*this.tickFrequency," seconds.")),22==e.length){var i="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Ftenor.com%2Fview%2Fbacking-you-get-yours-danny-devito-danny-devito-gif-13052176";this.postGif(i)}e.length>=X&&(this.submittable=!0)},submittable:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e){a.next=5;break}return a.next=3,t.sendMessage({name:"Trade_ends"});case 3:t.showEndDialog=!0,t.onPause=!0;case 5:case"end":return a.stop()}}),a)})))()},currentPrice:function(e){this.$refs.listend.scrollIntoView({behavior:"smooth"}),z["a"].to(this.$data,{duration:.5,tweenedPrice:e,onUpdate:this.tweenUpd})}},created:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.say("Hello! Ready to invest with me? 📈 "),e.$nextTick((function(){e.$refs.listend.scrollIntoView({behavior:"smooth"}),e.$refs.priceGraph.chart.setSize(null,window.innerHeight-100)})),e.stockInterval=setInterval(Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.onPause||(e.timeInTrade+=e.tickFrequency,a=B.a.random(0,2),e.currentPrice+=a,n=B.a.random(0,1,!0),n<e.probToZero&&(e.submittable=!0,e.currentPrice=0),e.addMessage(e.currentPrice,a),e.prices.push(e.currentPrice),e.chartOptions.series[0].data.push([Object(_["a"])(new Date),e.currentPrice]));case 1:case"end":return t.stop()}}),t)}))),1e3*e.tickFrequency);case 3:case"end":return t.stop()}}),t)})))()},methods:{postGif:function(e){var t='<img src="'.concat(e,'" width="180px"/>');this.messages.push(t)},say:function(e){var t=this;this.currentMessage=e,setTimeout((function(){t.currentMessage=null,t.messages.push(e)}),this.messageMoveDelay)},locked:function(e){var t=this.awardsGiven.includes(e);return!t},classAward:function(e){return this.locked(e)?"gray":""},finishGame:function(){console.log("game finished")},addMessage:function(e,t){if(0===e){var a="Market crashed! 😢";this.say(a)}0!==t||this.onPause||(this.zeroCounter++,this.TwoTwosCounter=0,this.grownCounter=0),t>0&&!this.onPause&&(this.zeroCounter=0,this.grownCounter++,2==t&&this.TwoTwosCounter++)},sendMessage:function(e){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},tweenUpd:function(e){this.tweenedPrice=B.a.round(this.tweenedPrice,2)},sell:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sendMessage({name:"Sell"});case 2:e.dialog=!1,e.submittable=!0,e.onPause=!0;case 5:case"end":return t.stop()}}),t)})))()},continueKeeping:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.sendMessage({name:"continueKeeping"});case 2:e.dialog=!1,e.submittable=!1,e.showHappyFace=!0,setTimeout((function(){e.showHappyFace=!1,e.onPause=False}),3e3);case 6:case"end":return t.stop()}}),t)})))()}}},Q=F,U=(a("034f"),a("7496")),K=a("40dc"),q=a("8212"),$=a("4ca6"),ee=a("62ad"),te=a("a523"),ae=a("132d"),ne=a("adda"),re=a("8860"),ie=a("da13"),se=a("5d23"),oe=a("1baa"),ce=a("f6c4"),le=a("f774"),ue=a("a797"),de=a("0fd9"),ge=a("8dd9"),pe=a("2db4"),he=a("3a2f"),ve=Object(v["a"])(Q,r,i,!1,null,null,null),me=ve.exports;y()(ve,{VApp:U["a"],VAppBar:K["a"],VAvatar:q["a"],VBadge:$["a"],VBtn:x["a"],VCard:k["a"],VCardText:P["b"],VCardTitle:P["c"],VCol:ee["a"],VContainer:te["a"],VIcon:ae["a"],VImg:ne["a"],VList:re["a"],VListItem:ie["a"],VListItemContent:se["a"],VListItemGroup:oe["a"],VListItemTitle:se["b"],VMain:ce["a"],VNavigationDrawer:le["a"],VOverlay:ue["a"],VRow:de["a"],VSheet:ge["a"],VSnackbar:pe["a"],VSpacer:R["a"],VTooltip:he["a"]});var fe=a("f309");n["default"].use(fe["a"]);var be=new fe["a"]({icons:{iconfont:"mdi"}}),we=a("ea7f"),Ae=a.n(we),Ce=a("37d8"),Ie=a.n(Ce),ye=(a("b408"),a("467a"));a("77ed"),a("bf40");n["default"].use(ye["a"]),n["default"].use(c["b"]);var xe="https:"===window.location.protocol?"wss":"ws",ke=xe+"://"+window.location.host+window.socket_path;console.debug("WASPATH",ke),Ie()(Ae.a),n["default"].use(Z.a),n["default"].config.productionTip=!1,new n["default"]({vuetify:be,render:function(e){return e(me)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.7e0db8fc.js.map
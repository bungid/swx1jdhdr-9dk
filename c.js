/** * Time-To jQuery plug-in * Show countdown timer or realtime clock * * @author Oleksii Teterin <altmoc@gmail.com> * @version 1.3.0 * @license MIT http://opensource.org/licenses/MIT * @date 2019-05-14 */ (function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports==="object"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){var SECONDS_PER_DAY=86400;var SECONDS_PER_HOUR=3600;var defaults={callback:null,step:null,stepCount:1,captionSize:0,countdown:true,countdownAlertLimit:10,displayCaptions:false,displayDays:0,displayHours:true,fontFamily:"Verdana, sans-serif",fontSize:0,lang:"en",languages:{},seconds:0,start:true,theme:"white",width:25,height:30,gap:11,vals:[0,0,0,0,0,0,0,0,0],limits:[9,9,9,2,9,5,9,5,9],iSec:8,iHour:4,tickTimeout:1e3,intervalId:null,tickCount:0};var methods={start:function(sec){var intervalId;if(sec){init.call(this,sec);intervalId=setTimeout(tick.bind(this),1e3);this.data("ttStartTime",$.now());this.data("intervalId",intervalId)}},stop:function(){var data=this.data();if(data.intervalId){clearTimeout(data.intervalId);this.data("intervalId",null)}return data},reset:function(sec){var data=methods.stop.call(this);var secs=typeof sec==="undefined"?data.seconds:sec;this.find("div").css({backgroundPosition:"left center"});this.find("ul").parent().removeClass("timeTo-alert");init.call(this,secs,true)}};var dictionary={en:{days:"Hari",hours:"Jam",min:"Menit",sec:"Detik"},ru:{days:"дней",hours:"часов",min:"минут",sec:"секунд"},ua:{days:"днiв",hours:"годин",min:"хвилин",sec:"секунд"},de:{days:"Tag",hours:"Uhr",min:"Minuten",sec:"Secunden"},fr:{days:"jours",hours:"heures",min:"minutes",sec:"secondes"},es:{days:"días",hours:"horas",min:"minutos",sec:"segundos"},sp:{days:"días",hours:"horas",min:"minutos",sec:"segundos"},it:{days:"giorni",hours:"ore",min:"minuti",sec:"secondi"},nl:{days:"dagen",hours:"uren",min:"minuten",sec:"seconden"},no:{days:"dager",hours:"timer",min:"minutter",sec:"sekunder"},pt:{days:"dias",hours:"horas",min:"minutos",sec:"segundos"},tr:{days:"gün",hours:"saat",min:"dakika",sec:"saniye"},pl:{days:"dni",hours:"godziny",min:"minuty",sec:"secundy"}};if(typeof $.support.transition==="undefined"){$.support.transition=function(){var thisBody=document.body||document.documentElement;var thisStyle=thisBody.style;var support=thisStyle.transition!==undefined||thisStyle.WebkitTransition!==undefined||thisStyle.MozTransition!==undefined||thisStyle.MsTransition!==undefined||thisStyle.OTransition!==undefined;return support}()}$.fn.timeTo=function(){var options={};var now=Date.now();var j,arg,num,method,time,days,tt,sec,m,t;for(j=0;j<arguments.length;j+=1){arg=arguments[j];if(j===0&&typeof arg==="string"){method=arg}else if(typeof arg==="object"){if(typeof arg.getTime==="function"){options.timeTo=arg}else{options=$.extend(options,arg)}}else if(typeof arg==="function"){options.callback=arg}else{num=parseInt(arg,10);if(!isNaN(num)){options.seconds=num}}}if(options.timeTo){if(options.timeTo.getTime){time=options.timeTo.getTime()}else if(typeof options.timeTo==="number"){time=options.timeTo}if(time>now){options.seconds=Math.floor((time-now)/1e3)}else{options.seconds=0}}else if(options.time||!options.seconds){time=options.time;if(!time){time=new Date(now)}if(typeof time==="object"&&time.getTime){options.seconds=time.getDate()*SECONDS_PER_DAY+time.getHours()*SECONDS_PER_HOUR+time.getMinutes()*60+time.getSeconds();options.countdown=false}else if(typeof time==="string"){tt=time.split(":");sec=0;m=1;while(tt.length){t=tt.pop();sec+=t*m;m*=60}options.seconds=sec;options.countdown=false}}if(options.countdown!==false&&options.seconds>SECONDS_PER_DAY&&typeof options.displayDays==="undefined"){days=Math.floor(options.seconds/SECONDS_PER_DAY);options.displayDays=days<10&&1||days<100&&2||3}else if(options.displayDays===true){options.displayDays=3}else if(options.displayDays){options.displayDays=options.displayDays>0?Math.floor(options.displayDays):3}return this.each(function(){var $this=$(this);var data=$this.data();var defs,opt,i,css,language,left,ulhtml,style,dhtml1,dhtml2,dot2,maxWidth,captionSize,fsStyleVal,fsStyle,thtml,marginRight,dhtml,$digits,dif,vals,limits;if(data.intervalId){clearInterval(data.intervalId);data.intervalId=null}if(!data.vals){if(data.opt){opt=data.options}else{opt=options}defs=Object.keys(defaults).reduce(function(obj,key){if(Array.isArray(defaults[key])){obj[key]=defaults[key].slice(0)}else{obj[key]=defaults[key]}return obj},{});data=$.extend(defs,opt);data.options=opt;data.height=Math.round(data.fontSize*100/93)||data.height;data.width=Math.round(data.fontSize*.8+data.height*.13)||data.width;data.displayHours=!!(data.displayDays||data.displayHours);css={fontFamily:data.fontFamily};if(data.fontSize>0){css.fontSize=data.fontSize+"px"}language=data.languages[data.lang]||dictionary[data.lang];$this.addClass("timeTo").addClass("timeTo-"+data.theme).css(css);left=Math.round(data.height/10);ulhtml='<ul style="left:'+left+"px; top:-"+data.height+'px"><li>0</li><li>0</li></ul></div>';style=data.fontSize?' style="width:'+data.width+"px; height:"+data.height+'px;"':' style=""';dhtml1='<div class="first"'+style+">"+ulhtml;dhtml2="<div"+style+">"+ulhtml;dot2="<span>:</span>";maxWidth=Math.round(data.width*2+3);captionSize=data.captionSize||data.fontSize&&Math.round(data.fontSize*.43);fsStyleVal=captionSize?"font-size:"+captionSize+"px;":"";fsStyle=captionSize?' style="'+fsStyleVal+'"':"";thtml=(data.displayCaptions?(data.displayHours?'<figure style="max-width:'+maxWidth+'px">$1<figcaption'+fsStyle+">"+language.hours+"</figcaption></figure>"+dot2:"")+'<figure style="max-width:'+maxWidth+'px">$1<figcaption'+fsStyle+">"+language.min+"</figcaption></figure>"+dot2+'<figure style="max-width:'+maxWidth+'px">$1<figcaption'+fsStyle+">"+language.sec+"</figcaption></figure>":(data.displayHours?"$1"+dot2:"")+"$1"+dot2+"$1").replace(/\$1/g,dhtml1+dhtml2);if(data.displayDays>0){marginRight=Math.round(data.fontSize*.4||defaults.gap);dhtml=dhtml1;for(i=data.displayDays-1;i>0;i-=1){dhtml+=i===1?dhtml2.replace('">',"margin-right:"+marginRight+'px">'):dhtml2}if(data.displayDays===1){dhtml=dhtml.replace('">',"margin-right:"+marginRight+'px">')}thtml=(data.displayCaptions?'<figure style="width:'+(data.width*data.displayDays+marginRight+4)+'px">$1'+'<figcaption style="'+fsStyleVal+"padding-right:"+marginRight+'px">'+language.days+"</figcaption></figure>":"$1").replace(/\$1/,dhtml)+thtml}$this.html(thtml)}else if(method!=="reset"){$.extend(data,options)}$digits=$this.find("div");if($digits.length<data.vals.length){dif=data.vals.length-$digits.length;vals=data.vals;limits=data.limits;data.vals=[];data.limits=[];for(i=0;i<$digits.length;i+=1){data.vals[i]=vals[dif+i];data.limits[i]=limits[dif+i]}data.iSec=data.vals.length-1;data.iHour=data.vals.length-5}data.sec=data.seconds;$this.data(data);if(method&&methods[method]){methods[method].call($this,data.seconds)}else if(data.start){methods.start.call($this,data.seconds)}else{init.call($this,data.seconds)}})};function init(sec,force){var data=this.data();var $digits=this.find("ul");var isInterval=false;var days,rest,hours,minutes,secs,str,i,j,val;if(!data.vals||$digits.length===0){return}if(!sec){sec=data.seconds}if(data.intervalId){isInterval=true;clearTimeout(data.intervalId)}days=Math.floor(sec/SECONDS_PER_DAY);rest=days*SECONDS_PER_DAY;hours=Math.floor((sec-rest)/SECONDS_PER_HOUR);rest+=hours*SECONDS_PER_HOUR;minutes=Math.floor((sec-rest)/60);rest+=minutes*60;secs=sec-rest;str=(days<100?"0"+(days<10?"0":""):"")+days+(hours<10?"0":"")+hours+(minutes<10?"0":"")+minutes+(secs<10?"0":"")+secs;for(i=data.vals.length-1,j=str.length-1;i>=0;i-=1,j-=1){val=parseInt(str.substr(j,1),10);data.vals[i]=val;$digits.eq(i).children().html(val)}if(isInterval||force){data.ttStartTime=Date.now();data.intervalId=setTimeout(tick.bind(this),1e3);this.data("intervalId",data.intervalId)}}function tick(digit){var me=this;var $digits=this.find("ul");var data=this.data();var n,$ul,$li,step,tickTimeout,timeDiff;if(!data.vals||$digits.length===0){if(data.intervalId){clearTimeout(data.intervalId);this.data("intervalId",null)}if(data.callback){data.callback()}return}if(typeof digit==="undefined"){digit=data.iSec}this.data("tickCount",data.tickCount+1);n=data.vals[digit];$ul=$digits.eq(digit);$li=$ul.children();step=data.countdown?-1:1;$li.eq(1).html(n);n+=step;if(typeof data.step==="function"&&data.tickCount%data.stepCount===0){this.data("tickCount",0);data.step()}if(digit===data.iSec){tickTimeout=data.tickTimeout;timeDiff=Date.now()-data.ttStartTime;data.sec+=step;tickTimeout+=Math.abs(data.seconds-data.sec)*tickTimeout-timeDiff;data.intervalId=setTimeout(tick.bind(this),tickTimeout)}if(n<0||n>data.limits[digit]){if(n<0){n=data.limits[digit];if(digit===data.iHour&&data.displayDays>0&&data.vals[digit-1]===0){n=3}}else{n=0}if(digit>0){tick.call(this,digit-1)}}else if(!data.countdown&&digit===data.iHour&&data.displayDays>0&&data.vals[digit-1]===2&&data.vals[digit]===3){n=0;tick.call(this,digit-1)}$li.eq(0).html(n);if($.support.transition){$ul.addClass("transition");$ul.css({top:0});setTimeout(function(){$ul.removeClass("transition");$li.eq(1).html(n);$ul.css({top:"-"+data.height+"px"});if(step>0||digit!==data.iSec){return}if(data.sec===data.countdownAlertLimit){$digits.parent().addClass("timeTo-alert")}if(data.sec===0){$digits.parent().removeClass("timeTo-alert");if(data.intervalId){clearTimeout(data.intervalId);me.data("intervalId",null)}if(typeof data.callback==="function"){data.callback()}}},410)}else{$ul.stop().animate({top:0},400,digit!==data.iSec?null:function(){$li.eq(1).html(n);$ul.css({top:"-"+data.height+"px"});if(step>0||digit!==data.iSec){return}if(data.sec===data.countdownAlertLimit){$digits.parent().addClass("timeTo-alert")}else if(data.sec===0){$digits.parent().removeClass("timeTo-alert");if(data.intervalId){clearTimeout(data.intervalId);me.data("intervalId",null)}if(typeof data.callback==="function"){data.callback()}}})}data.vals[digit]=n}return $});
!function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Piano=t.call(e)}(this,function(){"use strict";var e=function(e){this.options=$.extend({albumList:{"小星星":"11556650443322105544332055443320115566504433221","茉莉花":"33568865056503356886505650555356066503235032101210321203568650523532121","光阴的故事":"555653323138868650886865565135565320555653323138868650886865565358886789","找朋友":"5656565058765530553355302432121","上学歌":"12315066865066805630653531231","一分钱":"5868503523503568565351032032123065356058865630523210","征服":"58755650587563606665334044456322","大约在冬季":"4440456880689665606542206542202455555658","沧海一声笑":"998654065421012124456809986545","童话":"543034303434321013560665224301356066765434321","我爱北京天安门":"58543210112331345058543520432650231536876750999870675053687678905678905888","同桌的你":"5555345706666465055557654044443210888856888809999876077777890507789878","葫芦兄弟":"1130113066656513086656051207535","祝你一路顺风":"3230321556503566666350366656685556312223212032303215565035666663503666566855531012223211018888986563012012320188898656805605689","老男孩":"55550565403678750556112350545312055550565403678750556112350543211","菊花台":"3323035323011235302212035365065535032353221","回忆里的疯狂":"111543212330135666876545566687655321023434211023434311","小熊和洋娃娃":"1023455543444321351023455543444321316066545554344432135606654555434044321031","爱情转移":"187767605653235650565666656530123532101235321011108888686865","红尘客栈":"1260126045065415012502405678097606676545067046756076536033677053567605350679765","小红帽":"12345031806450301234532120302050123450318064503012345321203010108064501080645030123453212030101","魔法城堡":"58856687650344345650568776598","发如雪":"23302353023302365306122612061232023302353023305236530612261220123206161612206161613103336533052332356501236535","爱情买卖":"36883680776530222623503775303688368000989000989987053566","粉刷匠":"5353531024325053535310243210224432502432505353531024321","小苹果":"66678998076767055567987065656","小苹果[长版]":"60405020654502060405055086304043203450109860605405656580888880604050206545020604050550863040432034501098606054056501020242","送别":"5358068505123021205358076850512301106880767806786065312053580768505123011","Big big world":"123330342220231110123201233303422202310322","命运交响曲":"334554321123322033455432112321102231234321210334554321123211","爸爸去哪儿":"150150333253066678760533015015033337608645678"},keyboard:{1:"A",2:"S",3:"D",4:"F",5:"G",6:"H",7:"J",8:"K",9:"L"},playKeyCallback:null,randomPlay:!0,timeSpace:50,keyLen:9},e),this.property={opernLink:"",timeRuner:null,timeCount:0,step:0,lazyTimer:[],extraTimer:null,key:{},audioReady:0,playing:!1},this.init()};return e.prototype={init:function(){this.initAudio()},getAudioFormat:function(){var e=document.createElement("audio");if(e.canPlayType){var t=e.canPlayType("audio/mpeg");e.canPlayType('audio/ogg; codecs="vorbis"');return t?"mp3":"ogg"}return null},initAudio:function(){var e=this.getAudioFormat(),t="http://www.xuanfengge.com/wp-content/themes/lee3.0/dist/media/{{key}}."+e;"localhost"==location.hostname&&(t="http://localhost/xuanfeng-v3.0/wp-content/themes/lee3.0/dev/media/{{key}}."+e);for(var o=1;o<=this.options.keyLen;o++)this.loadAudio(o,t.replace(/{{key}}/g,o))},loadAudio:function(e,t){var o=this,i=new Audio;i.addEventListener("canplay",function(){o.checkReady(e,!0)}),i.addEventListener("error",function(){o.checkReady(e,!1)}),i.src=t,this.property.key[e]=i},checkReady:function(e,t){this.property.audioReady++,this.property.audioReady==this.options.keyLen&&(this.listenEvents(),/\/\#music=(\d:\d-?)*/.test(location.href)?this.autoPlay(location.href):this.options.randomPlay&&parseInt(10*Math.random())<2&&this.autoPlay("#music=1:0-2:3-3:2-4:2-5:2-6:2-7:2-8:2-9:2"))},autoPlay:function(e){var t=e.search(/#music=/)+7,o=e.length,i=e.substring(t,o),r=i.split("-"),n=this.parseData(r);this.previewSong(n)},playKey:function(e){if(this.property.audioReady)try{var t=this.property.key[e];t.currentTime=0,t.play(),this.options.playKeyCallback&&this.options.playKeyCallback(e)}catch(o){console.log(o)}},_timeRun:function(){var e=this;this.property.step=0,clearInterval(this.property.timeRuner),this.property.timeRuner=setInterval(function(){e.property.step+=e.options.timeSpace,e.property.timeCount=e.property.step},e.options.timeSpace)},record:function(e){if(this.property.playing)if(this.property.opernLink)if(e){var t=this.property.timeCount/this.options.timeSpace;this.property.opernLink+="-"+e+":"+t,this._timeRun()}else this.property.opernLink+="-"+e+":0";else this.property.opernLink+=e+":0",this._timeRun()},startRecord:function(){this.property.opernLink="",this.property.playing=!0},finishRecord:function(){return this.property.playing=!1,location.origin+"#music="+this.property.opernLink},cancelRecord:function(){this.property.opernLink="",this.property.playing=!1},getStatus:function(){return this.property.playing},listenEvents:function(){var e=this;$(document).on("keydown",function(t){49==t.keyCode||97==t.keyCode||65==t.keyCode?(e.playKey(1),e.record(1)):50==t.keyCode||98==t.keyCode||83==t.keyCode?(e.playKey(2),e.record(2)):51==t.keyCode||99==t.keyCode||68==t.keyCode?(e.playKey(3),e.record(3)):52==t.keyCode||100==t.keyCode||70==t.keyCode?(e.playKey(4),e.record(4)):53==t.keyCode||101==t.keyCode||71==t.keyCode?(e.playKey(5),e.record(5)):54==t.keyCode||102==t.keyCode||72==t.keyCode?(e.playKey(6),e.record(6)):55==t.keyCode||103==t.keyCode||74==t.keyCode?(e.playKey(7),e.record(7)):56==t.keyCode||104==t.keyCode||75==t.keyCode?(e.playKey(8),e.record(8)):57==t.keyCode||105==t.keyCode||76==t.keyCode?(e.playKey(9),e.record(9)):32==t.keyCode?e.record(0):13==t.keyCode})},previewSong:function(e){var t=e.data,o=t.length,i=0;this.playOver();for(var r=0;o>r;r++){var n=t[r],a=n.key,y=i+n.time*this.options.timeSpace;this.playPace(a,y),i=y}},playPace:function(e,t){var o=this,i=setTimeout(function(){o.playKey(e)},t);this.property.lazyTimer.push(i)},playOver:function(){for(var e=this,t=e.property.lazyTimer.length;t>0;t--)clearTimeout(e.property.lazyTimer[t]);this.property.lazyTimer=[]},analysis:function(e){if(/#music=(\d:\d-?)*/.test(e)){var t=/#music=/,o=e.search(t)+7,i=e.length,r=e.substring(o,i),n=r.split("-");return this.parseData(n)}alert("钢琴链接格式出错，请粘贴完整！")},parseData:function(e){var t={};t.data=[];for(var o=t.data,i=e.length,r=0;i>r;r++){var n=e[r].split(":"),a=n[0],y=n[1];if(a){var p={};p.key=a,p.time=y,o.push(p)}}return t},getAlbumList:function(){return this.options.albumList||{}},getKeyboard:function(){return this.options.keyboard||{}}},e});
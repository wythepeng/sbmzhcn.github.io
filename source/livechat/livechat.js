function openZoosUrl(e,t){LC_API.open_chat_window({source:"minimized"})}!function(e,t){__lc={protocol:"https://",hostname:"sbmzhcn.github.io",iframe_src:"https://sbmzhcn.github.io/livechat/livechat-widgets.html?lng=en",setting:{status:"online",chat_window:{theme:{name:"mobile",color:"#427fe1"}},embedded:{enabled:!0,hide_when_offline:!1,eye_grabber:{path:"//sbmzhcn.github.io/livechat/images/new001.png",enabled:!0,x:43,y:79,point_zero:{x:15,y:0}},dimensions:{margin:20,width:450,height:600,width_minimized:75}}}};function i(e){return t.getElementById(e)}var o={STATE_OFFLINE:0,state:null,styles:{mobileFonts:"@font-face%20%7B%0A%20%20%20%20font-family:%20'livechat-mobile';%0A%20%20%20%20src:%20%20%20%20url('//sbmzhcn.github.io/livechat/fonts/mobile/livechat-mobile.eot');%0A%20%20%20%20src:%20%20%20%20url('//sbmzhcn.github.io/livechat/fonts/mobile/livechat-mobile_iefix.eot')%20format('embedded-opentype'),%0A%20%20%20%20%20%20%20%20url('//sbmzhcn.github.io/livechat/fonts/mobile/livechat-mobile.ttf')%20format('truetype'),%0A%20%20%20%20%20%20%20%20url('//sbmzhcn.github.io/livechat/fonts/mobile/livechat-mobile.woff')%20format('woff'),%0A%20%20%20%20%20%20%20%20url('//sbmzhcn.github.io/livechat/fonts/mobile/livechat-mobile.svg')%20format('svg');%0A%20%20%20%20font-weight:%20normal;%0A%20%20%20%20font-style:%20normal;%0A%7D%0A%0A%5Bclass%5E=%22icon-%22%5D,%20%5Bclass*=%22%20icon-%22%5D%20%7B%0A%20%20%20%20/*%20use%20!important%20to%20prevent%20issues%20with%20browser%20extensions%20that%20change%20fonts%20*/%0A%20%20%20%20font-family:%20'livechat-mobile'%20!important;%0A%20%20%20%20speak:%20none;%0A%20%20%20%20font-style:%20normal;%0A%20%20%20%20font-weight:%20normal;%0A%20%20%20%20font-variant:%20normal;%0A%20%20%20%20text-transform:%20none;%0A%20%20%20%20line-height:%201;%0A%0A%20%20%20%20/*%20Better%20Font%20Rendering%20===========%20*/%0A%20%20%20%20-webkit-font-smoothing:%20antialiased;%0A%20%20%20%20-moz-osx-font-smoothing:%20grayscale;%0A%7D%0A%0A.icon-tick:before%20%7B%0A%20%20%20%20content:%20%22%5Ce900%22;%0A%7D%0A.icon-leavemessage:before%20%7B%0A%20%20%20%20content:%20%22%5Ce90a%22;%0A%7D%0A.icon-agentonline:before%20%7B%0A%20%20%20%20content:%20%22%5Ce90b%22;%0A%7D%0A.icon-clip:before%20%7B%0A%20%20%20%20content:%20%22%5Ce90c%22;%0A%7D%0A.icon-close:before%20%7B%0A%20%20%20%20content:%20%22%5Ce90d%22;%0A%7D%0A.icon-email:before%20%7B%0A%20%20%20%20content:%20%22%5Ce90e%22;%0A%7D%0A.icon-maximize:before%20%7B%0A%20%20%20%20content:%20%22%5Ce90f%22;%0A%7D%0A.icon-menu:before%20%7B%0A%20%20%20%20content:%20%22%5Ce910%22;%0A%7D%0A.icon-minimize:before%20%7B%0A%20%20%20%20content:%20%22%5Ce911%22;%0A%7D%0A.icon-mobile:before%20%7B%0A%20%20%20%20content:%20%22%5Ce912%22;%0A%7D%0A.icon-thumbs-down:before%20%7B%0A%20%20%20%20content:%20%22%5Ce913%22;%0A%7D%0A.icon-thumbs-up:before%20%7B%0A%20%20%20%20content:%20%22%5Ce914%22;%0A%7D%0A",mobileCSS:"#content-container.new-mobile%20#content,#extra.new-mobile%7Bmargin-top:2em!important%7D#body%20input,#body%20label,#body%20select,#body%20table,#body%20textarea,a,body,input,label,select,table,table#content,textarea%7Bfont:12px/16px%20%22Lucida%20Grande%22,%22Lucida%20Sans%20Unicode%22,Arial,Verdana,sans-serif%7D.new-mobile%20#content%20a#full-view-button%20#open-label%7Bfont-size:1.1em!important;line-height:3em;padding-top:0!important%7D.new-mobile%20#full-view-button,.new-mobile%20#title%20#title-text%7Bfont-size:1em!important%7D.new-mobile%20a#full-view-button%20span:nth-child(2)%7Bpadding:.1em%20.5em!important;width:60%25!important%7D.new-mobile%20.s-maximize%7Bdisplay:none!important%7D#content-container.new-mobile%7Bpadding:0%20.5em!important;box-sizing:border-box;line-height:1em%7D#content-container.new-mobile%20#content%7Bheight:100%25;box-shadow:0%20.05em%202em%20rgba(0,0,0,.2)!important%7D.lc2%20#content%20#open-icon%7Bfont-family:livechat-mobile;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;top:0;right:0;font-size:.9em;line-height:4em;color:#fff;display:inline-block;margin-right:.8em;float:right%7D#open-icon.icon-maximize:before%7Bcontent:%22%5Ce90f%22%7D#extra.new-mobile%7Bleft:.5em!important;right:.5em!important;width:auto!important%7D"},getState:function(){return this.state},setTheme:function(e,t){var i;"false"===t&&(t=""),t||(i={sun:"#cf992d",cloud:"#799BB3",fire:"#c2613e",grass:"#949c41",night:"#3B3B3B"},i[e]&&(t=i[e],e="classic")),this.theme=e,this.color=t},getIFrameBody:function(){var e;return t.frames&&t.frames["livechat-compact-view"]?e=t.frames["livechat-compact-view"].document:(e=(e=i("livechat-compact-view")).contentWindow||e.contentDocument).document&&(e=e.document),e},escapeString:function(e){return e?e=(e=e.replace(/</g,"&lt;")).replace(/>/g,"&gt;"):""},displayLoadingMessage:function(){void 0,this._setText("Loading...")},_setText:function(e){var t;this.text_label=e,this.$iframeBody&&(t=this.$iframeBody.getElementById("open-label"))&&(t.innerHTML=this.escapeString(e))},modifyColor:function(e,t){var i,o;(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0,i="#";for(var n=0;n<3;n++)o=parseInt(e.substr(2*n,2),16),o=Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16),i+=("00"+o).substr(o.length);return i},styleForTheme:function(e,t){void 0;var i;return t&&(i=this.modifyColor(t,-.1)),void 0,{classic:"#content { background-color: "+t+"; border: 1px solid "+i+"; text-shadow: 1px 1px 0 "+i+" } #operator_avatar { background-color: "+t+"; }",modern:"#content { background-color: "+t+"; } #operator_avatar { background-color: "+t+"; }",minimal:"#content { background-color: "+t+"; } #operator_avatar { background-color: "+t+"; }",postmodern:"#operator_avatar { background-color: "+t+"; }"}[e]||""},setFontSize:function(e){this.$iframeBody&&(this.$iframeBody.body.style.fontSize=e+"px")},render:function(){var e,i,n,a,s;if(this.$iframeBody=o.getIFrameBody(),circleInvitation=!0,!0,circleInvitationText="",a=circleInvitationText?"table-cell":"none",circleInvitation?("none",s="block"):("block",s="none"),e="",i="",this.styles[this.theme+"Fonts"]?(i+=decodeURI(this.styles[this.theme+"Fonts"]),i+=decodeURI(this.styles[this.theme+"CSS"])):i+=decodeURI(this.styles[this.theme]),i=decodeURI("#content-container%7Bposition:absolute;top:0;right:0;bottom:0;left:0;width:100%25;height:100%25;z-index:6;line-height:22px%7D#content%7Bborder-radius:10px%2010px%200%200;box-shadow:inset%201px%201px%201px%20rgba(255,255,255,.2)%7D#content%20#full-view-button%7Bdisplay:block;position:relative;padding:0;outline:0;color:#fff;font-size:14px;text-decoration:none;font-weight:700%7D#content%20#open-label%7Bdisplay:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:6px%2015px%7D.lc2%20#content%20#open-icon%7Bfloat:right;position:relative%7D#mobile_invitation_container%7Bposition:absolute;left:0;right:0;width:100%25;font-size:.9em%7D#mobile_invitation_container:hover%7Bcursor:pointer%7D.invitation_message%7Bmargin-right:1em;display:table-cell;vertical-align:middle;width:100%25%7D#operator_avatar_container%7Bdisplay:table-cell;padding:.1em%7D#invitation_message_text%7Bfloat:right;color:#4a546c;background:#e7eaf1;border-radius:.3em;font-size:1em;padding:.7em%20.9em;margin-right:.8em;max-height:3.2em;line-height:1.15em;overflow:hidden;display:block;border:1px%20solid%20rgba(0,0,0,.07);box-shadow:0%201px%205px%20rgba(0,0,0,.1);margin-left:.5em%7D.invitation_message:after%7Bborder:.5em%20solid%20transparent;border-color:transparent%20transparent%20transparent%20#dfe1e4;display:block;position:absolute;content:%22%22;margin-top:.5em;right:5.1em;top:1.5em%7D#operator_avatar%7Bbackground-color:#427fe1;float:right;border-radius:50%25;width:4.5em;height:4.5em;box-shadow:0%201px%203px%20rgba(0,0,0,.2);border:.3em%20solid%20#fff;box-sizing:content-box;overflow:hidden;color:#fff;text-align:center;position:relative;transition:background-color%20.2s%20ease-in-out%20.2s;-webkit-transition:background-color%20.2s%20ease-in-out%20.2s;-ms-transition:background-color%20.2s%20ease-in-out%20.2s;-o-transition:background-color%20.2s%20ease-in-out%20.2s%7D.avatar-loaded%20#operator_avatar%7Bbackground-color:#fff%7D#operator_avatar%20img%7Bwidth:0;height:0;border-radius:50%25;overflow:hidden;box-sizing:border-box;margin-top:50%25;margin-left:50%25;opacity:.5;position:absolute;top:0;left:0;transition:all%201s;-webkit-transition:all%20.2s%20ease-in-out;-moz-transition:all%20.2s%20ease-in-out;-ms-transition:all%20.2s%20ease-in-out;-o-transition:all%20.2s%20ease-in-out%7D.avatar-loaded%20#operator_avatar%20img%7Bwidth:4.5em;height:4.5em;margin-top:0;margin-left:0;opacity:1;background-color:#fff%7D#content-container.new-mobile%20#content,#extra.new-mobile%7Bmargin-top:1.5em!important;border-radius:.5em!important%7D#extra.new-mobile%7Bleft:.5em!important;right:.5em!important;width:auto!important%7D#content%20%5Bclass*=%22%20icon-%22%5D,#content%20%5Bclass%5E=icon-%5D%7B-webkit-font-smoothing:none%7D.icon-agentonline:before%7Bfont-size:2em%7D.icon-leavemessage:before%7Bfont-size:1.8em%7D.icon-leavemessage%7Bline-height:4.5em!important%7D.icon-agentonline%7Bline-height:4.6em!important%7D.rtl-lang%7Bdirection:rtl%7D.rtl-lang.lc2%20#content%20#open-icon%7Bleft:12px;right:auto;float:left%7D.rtl-lang%20#content%20#open-label%7Btext-align:right%7D")+i,void 0,i+=this.styleForTheme(this.theme,this.color)){e=e+'<div id="mobile_invitation_container" style="display:'+s+'"><div',e+=' class="invitation_message" style="display:'+a+'"><div id="invitation_message_text"></div></div><div id="operator_avatar_container"><div id="operator_avatar"',e+=" onclick=\"parent.LC_API.open_chat_window({source:'minimized'}); return false\"",e+=">"+'<span class="icon-agentonline"></span>'+"</div></div></div>",this.$iframeBody.body.className=[].join(" "),this.$iframeBody.body.innerHTML=e,this.$iframeBody.body.style.margin="0px",this.$iframeBody.body.style.padding="0px",void 0,(n=t.createElement("style")).type="text/css",this.$iframeBody.body.appendChild(n),n.styleSheet?n.styleSheet.cssText=i:n.appendChild(t.createTextNode(i)),this.rendered=!0,"function"==typeof this._onRender&&this._onRender()}}},n={CONTAINER_WITH_FACTOR:5.3,$htmlTag:t.getElementsByTagName("html")[0],lockResize:!1,customStyle:new function(){this.selectors=["#livechat-badge","#livechat-full","#livechat-compact-container","#livechat-eye-catcher","#livechat-compact-view"],this.parseMobileCss=function(e,t){var i=function(e,t){t=t||0;var o,n,a,s;return-1!==(o=e.indexOf("}",t))&&(n=e.substr(0,o+1),a=n.match(/{/g)&&n.match(/{/g).length||0,s=n.match(/}/g)&&n.match(/}/g).length||0,a!==s?i(e,n.length):n=n.substr(n.indexOf("{")+1,n.lastIndexOf("}")-n.indexOf("{")-1))},o=-1;return-1!==(o=(e=e.replace(/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gi,"")).indexOf("@livechat-mobile"))&&(e=e.substr(o,e.length+1-o),cuttedCustomStyle=i(e),cuttedCustomStyle)},this.appendStyle=function(e){var i=t.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),t.getElementsByTagName("head")[0].appendChild(i)},this.cssProperties=function(e,i,o,n){if("string"==typeof e&&(e=t.getElementById(e)),e||e instanceof HTMLElement){var a=CSSStyleDeclaration.prototype.setProperty?"setProperty":"setAttribute";if("[object Object]"===Object.prototype.toString.call(i))for(var s in i)n?e.style[a](s,i[s]):e.style[a](s,i[s],"important");else{if(null===o||void 0===o)return e.style.getPropertyValue(i);n?(e.style[a](i,null),e.style[a](i,o)):e.style[a](i,o,"important")}return e}},this.parseCss=function(e){var t;if(-1!==e.indexOf("prevent_parsing_custom_css"))return!1;try{e=e.replace(/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gi,""),t=this.parseMobileCss(e),n.isNewMobile()||(e=e.replace(t,""));for(var i,o,a,s=-1,r=-1,l=0;l<this.selectors.length;l++)i=e.indexOf(this.selectors[l]),o=e.lastIndexOf(this.selectors[l]),-1!==i&&(-1===s||i<s)&&(s=i),-1!==o&&o>r&&(r=o);if(-1===(a=e.indexOf("}",r))&&(a=e.length),-1===s)return!1;for(var d=(e=e.substr(s,a+1-s)).replace(/{([^}]*)}/gm,"$%^"),c=(d=(d=d.replace(/\@media[^\}]*\}[^\}]*\}/,"")).replace(/(\[([^\]])*\])/gi,function(e){return e.replace(/\,/g,"*@!")})).split("$%^"),h="",m="",f="",u="",p=0;p<c.length;p++){h=c[p];for(var g=0;g<this.selectors.length;g++)if(-1!==h.indexOf(this.selectors[g])&&(m=e.substr(e.indexOf(h),e.length+1),m.length>1)){f=h.split(",");for(var b=0;b<f.length;b++)-1!==f[b].indexOf(this.selectors[g])&&(m=m.replace(/(\r\n|\n|\r)/gm,"").match(/{(.*?)}/)[0],u=u+f[b]+m)}}if(""!==u){if(-1!==u.indexOf("transform")){var y=u.split(";");for(l=0;l<y.length;l++)-1!==y[l].indexOf("transform")&&-1===y[l].indexOf("text-transform")&&(y[l]=y[l]+"!important");u=y.join(";")}return this.appendStyle(u),!0}return!1}catch(t){return Events.track("chat_window","CSS parse error: "+e),!1}}},storedDocumentHeight:null,storedDocumentWidth:null,minimizedContainerSize:"small",mobileWebsite:null,storedBodyPosition:null,storedHeadPosition:null,storedBodyOverflowY:null,storedBodyWidth:null,storedBodyHeight:null,storedBodyLeft:null,storedBodyRight:null,storedBodyTop:null,storedBodyBottom:null,storedInnerWidth:null,storedInnerHeight:null,storedBottomPosition:null,storedHorizontalPosition:null,userAgent:navigator&&navigator.userAgent?navigator.userAgent:null,isDetected:function(){return n.userAgent&&/mobile/gi.test(n.userAgent)},isNewMobile:function(){return LC_API.embedded_chat_enabled()&&n.userAgent&&/mobile/gi.test(n.userAgent)&&!this.isWindowsPhone()&&!this.isOldAndroid()&&!this.isIOSChromeAndNonMobileWebsite()&&(/(Chrome).*(Mobile)/gi.test(n.userAgent)||/(Android).*/gi.test(n.userAgent)||/(iPhone|iPod).*Apple.*Mobile/g.test(n.userAgent)||/(Android).*(Mobile)/gi.test(n.userAgent))},isOldMobile:function(){return this.isDetected()&&!this.isNewMobile()},isIOSChromeAndNonMobileWebsite:function(){return!this.isWebsiteMobile()&&this.isiOSChrome()&&this.getChromeVersion()<48},getAndroidVersion:function(){var e=n.userAgent.toLowerCase().match(/android\s([0-9\.]*)/);return!!e&&e[1]},isWindowsPhone:function(){return n.userAgent&&/Windows Phone/gi.test(n.userAgent)},isAndroid:function(){return n.userAgent&&/android/gi.test(n.userAgent)},isSamsung:function(){return n.userAgent&&/samsung/i.test(n.userAgent)},isOldAndroid:function(){if(!this.isAndroid())return!1;var e=(parseInt(this.getAndroidVersion(),10),parseFloat(this.getAndroidVersion()));return n.userAgent&&n.isAndroid()&&(n.getAppleWebkitVersion()<537||n.isSamsung()&&e<4.4)},isiOSChrome:function(){return n.userAgent&&/(iPad|iPhone|iPod).*Apple.*CriOS/g.test(n.userAgent)},getChromeVersion:function(){var e=new RegExp(/Chrome|CriOS\/([\d.]+)/);return null===e.exec(n.userAgent)?null:parseFloat(e.exec(n.userAgent)[1])},getAppleWebkitVersion:function(){var e=new RegExp(/AppleWebKit\/([\d.]+)/);return null===e.exec(n.userAgent)?null:parseFloat(e.exec(n.userAgent)[1])},isWebsiteMobile:function(){if(null!=n.mobileWebsite)return n.mobileWebsite;var e,i=t.querySelector('meta[name="viewport"]');if(void 0,!i)return n.mobileWebsite=!1,!1;if(-1!==(e=i.content.replace(/\s/gi,"")).indexOf("width=device-width"))return n.mobileWebsite=!0,!0;if(-1!==e.indexOf("user-scalable=no"))return n.mobileWebsite=!0,!0;if(-1!==e.indexOf("user-scalable=0"))return n.mobileWebsite=!0,!0;var o=e.match(/width=([0-9]*)/);return o&&o[1]&&1*o[1]<=320?(n.mobileWebsite=!0,!0):(n.mobileWebsite=!1,!1)},isiOS:function(){return n.userAgent&&!this.isWindowsPhone()&&/(?!.*IEMobile).*(iPad|iPhone|iPod)/g.test(n.userAgent)},isIOS8:function(){return n.userAgent&&/Apple(?!.*CriOS).*Mobile/g.test(n.userAgent)&&(/OS 8_/g.test(n.userAgent)||/Version\/8\./g.test(n.userAgent))},isIOS7:function(){return n.userAgent&&/Apple(?!.*CriOS).*Mobile/g.test(n.userAgent)&&(/OS 7_/g.test(n.userAgent)||/Version\/7\./g.test(n.userAgent))},isLandscapeMode:function(){return e.orientation&&(-90===e.orientation||90===e.orientation)},isTablet:function(){return!!(screen&&screen.width>500)},setContainerSize:function(e){this.minimizedContainerSize=e,this.resizeMobileWindow({force:!0})},getContainerSize:function(){return this.minimizedContainerSize},getWindowSize:function(t){var i={full:{},minimized:{}};return n.getDocumentWidth(),n.getDocumentHeight(),t=t||{},i.width=e.innerWidth,i.height=e.innerHeight,n.storedInnerWidth=e.innerWidth,n.storedInnerHeight=e.innerHeight,i.fontHeight=i.width/24,i.addBackground=!0,t.landscapeMode?(i.width>3*i.height?(i.height=i.width,i.fontHeight=i.width/25):(i.width=1.2*i.height,i.fontHeight=i.height/24),i.addBackground=!1):t.tablet&&(i.width=.85*i.width,i.height=.7*i.height,i.fontHeight=.7*i.fontHeight,i.addBackground=!1),i.fontHeight=Math.floor(i.fontHeight),void 0,i},getDocumentHeight:function(){return"offsetHeight"===n.storedDocumentHeight||t.body.offsetHeight===t.body.scrollHeight?(n.storedDocumentHeight="offsetHeight",t.body.offsetHeight):n.isWebsiteMobile()&&n.storedDocumentHeight?n.storedDocumentHeight:(n.storedDocumentHeight=t.body.scrollHeight,n.storedDocumentHeight)},getDocumentWidth:function(){return n.storedDocumentWidth=n.storedDocumentWidth||e.innerWidth,Math.max(t.body.offsetWidth,n.storedDocumentWidth)},getWindowsPosition:function(i){var o=n.getDocumentHeight(),a=n.getDocumentWidth(),s=t.compatMode&&"BackCompat"===t.compatMode?t.body.clientHeight:t.documentElement.clientHeight,r=t.body.offsetHeight>0?s:0,l=-1*(Math.max(e.innerHeight,o)-r),d=Math.floor(a-i.windowWidth),c=Math.floor(Math.max(s-(e.pageYOffset+i.windowHeight),l)),h=Math.floor(Math.min(e.innerWidth-i.windowWidth+e.pageXOffset,d)),m={full:{},minimized:{}};return void 0,i=i||{},n.storedBottomPosition=e.pageYOffset,n.storedHorizontalPosition=e.pageXOffset,(LC_API.chat_window_minimized()||LC_API.chat_window_hidden())&&(l=0),m.full.top="auto",m.full.position="fixed",m.full.bottom=0,m.full.right=0,m.full.left="auto",i.mobileSite?(m.minimized.left="auto",m.minimized.bottom=0,m.minimized.right=0,m.minimized.position="fixed"):(m.minimized.left=h,"small"===n.getContainerSize()&&(m.minimized.left=Math.floor(h+(i.windowWidth-i.fontHeight*n.CONTAINER_WITH_FACTOR))),"relative"===e.getComputedStyle(t.body).position&&(c=c+parseInt(e.getComputedStyle(t.body).height)-s),m.minimized.bottom=c,m.minimized.right="auto",m.minimized.position="absolute"),m},checkIfResizeIsNeeded:function(){if(n.isWebsiteMobile()){if(n.lockResize||n.storedInnerWidth&&n.storedInnerWidth===e.innerWidth&&n.storedInnerHeight===e.innerHeight)return!1}else if(n.lockResize||n.storedInnerWidth&&n.storedInnerWidth===e.innerWidth&&n.storedInnerHeight===e.innerHeight&&n.storedBottomPosition===e.pageYOffset&&n.storedHorizontalPosition===e.pageXOffset)return!1;return!0},initNewMobile:function(){var t=this;n.storedInnerWidth=null,n.storedInnerHeight=null,e.addEventListener("scroll",function(e){n.onScroll()}),setInterval(function(){n.resizeMobileWindow()},200),e.addEventListener("orientationchange",function(e){t.resizeMobileWindow({orientationReset:!0})})},resizeMobileWindow:function(e){e=e||{};if(!n.isNewMobile())return!1;if(void 0,!n.checkIfResizeIsNeeded()&&!e.force)return!1;var i,o,a,s=t.getElementById("livechat-compact-container"),r=t.getElementById("livechat-full"),l=t.getElementById("livechat-badge");if(e.orientationReset)return n.customStyle.cssProperties(r,{width:0,left:0}),n.customStyle.cssProperties(s,{width:0,left:0}),void(n.positionSet=!1);i=n.getWindowSize({landscapeMode:n.isLandscapeMode(),tablet:n.isTablet(),iOS:n.isiOS()}),o=n.getWindowsPosition({landscapeMode:n.isLandscapeMode(),tablet:n.isTablet(),iOS:n.isiOS(),mobileSite:n.isWebsiteMobile(),windowWidth:i.width,windowHeight:i.height,fontHeight:i.fontHeight}),a="small"===n.getContainerSize()?i.fontHeight*n.CONTAINER_WITH_FACTOR:i.width,o.minimized.left===parseInt(o.minimized.left,10)&&(o.minimized.left=o.minimized.left+"px"),o.minimized.right===parseInt(o.minimized.right,10)&&(o.minimized.right=o.minimized.right+"px"),o.full.top===parseInt(o.full.top,10)&&(o.full.top=o.full.top+"px"),o.full.bottom===parseInt(o.full.bottom,10)&&(o.full.bottom=o.full.bottom+"px"),o.full.right===parseInt(o.full.right,10)&&(o.full.right=o.full.right+"px"),o.full.left===parseInt(o.full.left,10)&&(o.full.left=o.full.left+"px"),n.setWindowHeight=i.height,void 0,n.customStyle.cssProperties(s,{left:o.minimized.left,right:o.minimized.right,bottom:o.minimized.bottom+"px",position:o.minimized.position,width:a+"px",height:5.5*i.fontHeight+"px"}),n.customStyle.cssProperties(r,{left:o.full.left,right:o.full.right,position:o.full.position,bottom:o.full.bottom,top:o.full.top,width:n.isiOS()?"100%":i.width+"px",height:n.isiOS()?"100%":i.height+"px"}),n.customStyle.cssProperties(l,{width:i.fontHeight+"px",height:i.fontHeight+"px","font-size":i.fontHeight/1.3+"px","line-height":i.fontHeight+"px",border:i.fontHeight/5+"px solid #ffffff",right:i.fontHeight/4+"px",top:0}),void 0,LC_API.update_height(i.fontHeight,i.addBackground)},onScroll:function(){n.resizeMobileWindow()},onMinimizeChatWindow:function(){var e=t.querySelector('meta[name="viewport"]'),i=t.getElementById("livechat-full");n.lockResize=!1,e&&this.storedViewport&&("no-viewport"===this.storedViewport?e.content="user-scalable=yes":e.content=this.storedViewport),n.customStyle.cssProperties(i,{bottom:0}),n.customStyle.cssProperties(t.body,"position",n.storedBodyPosition||"",!0),n.customStyle.cssProperties(t.body,"overflow-y",n.storedBodyOverflowY||"",!0),n.customStyle.cssProperties(t.body,"width",n.storedBodyWidth||"",!0),n.customStyle.cssProperties(t.body,"height",n.storedBodyHeight||"",!0),n.customStyle.cssProperties(t.body,"left",n.storedBodyLeft||"",!0),n.customStyle.cssProperties(t.body,"right",n.storedBodyRight||"",!0),n.customStyle.cssProperties(t.body,"top",n.storedBodyTop||"",!0),n.customStyle.cssProperties(t.body,"bottom",n.storedBodyBottom||"",!0),n.$htmlTag.style.position=n.storedHeadPosition,n.resizeMobileWindow({force:!0})},onShowFullView:function(){var e=t.querySelector('meta[name="viewport"]');this.storedPosition=t.body.scrollTop,n.storedDocumentHeight=!1,this.storedViewport||(e?this.storedViewport=e.content:(e=t.createElement("meta"),e.name="viewport",t.getElementsByTagName("head")[0].appendChild(e),this.storedViewport="no-viewport")),e.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",t.body.style.setProperty("position","fixed","important"),t.body.style.setProperty("overflow-y","hidden","important"),t.body.style.setProperty("width","100%","important"),t.body.style.setProperty("height","100%","important"),t.body.style.setProperty("left","0","important"),t.body.style.setProperty("right","0","important"),t.body.style.setProperty("top","0","important"),t.body.style.setProperty("bottom","0","important"),n.resizeMobileWindow()},setWindowStyle:function(){n.customStyle.cssProperties("livechat-compact-container",{position:"absolute",left:0,right:"auto",padding:0,"box-sizing":"border-box",top:"auto","-webkit-transition":"none","-moz-transition":"none","-o-transition":"none",transition:"none"}),n.customStyle.cssProperties("livechat-compact-view",{top:0,width:"100%",height:"inherit"}),n.customStyle.cssProperties("livechat-full-view",{width:"100%",height:"100%"}),n.customStyle.cssProperties("livechat-badge",{background:"#D93328",padding:0,"border-radius":"50%","text-align":"center","box-shadow":"none",left:"auto"}),n.resizeMobileWindow()}},a={_loaded:!1,_afterLoad:null,isLoaded:function(e){return null!=e&&(this._loaded=e),this._loaded},onAfterLoad:function(e){this._afterLoad=e},onload:function(){this.isLoaded(!0),this._afterLoad&&this._afterLoad()}};LC_API={embedded_chat_enabled:function(){return void 0!==p&&!0===p.embedded_chat_enabled()},get_window_type:function(){return!0===this.embedded_chat_enabled()?"embedded":"popup"},open_mobile_window:function(e){p.open_mobile_window(e)},open_chat_window:function(e){void 0,e=e||{},p.open_chat_window(e)},agents_are_available:function(){return o.getState()!==o.STATE_OFFLINE},show_full_view:function(e){void 0,p.show_full_view(e)},minimize_chat_window:function(e){p.minimize_chat_window(e)},hide_eye_catcher:function(){var e=i("livechat-eye-catcher");e&&e.parentNode.removeChild(e)},embedded_chat_supported:function(){return void 0===p||!1!==p.embeddedWindowSupported},mobile_is_detected:function(){return n.isDetected()},new_mobile_is_detected:function(){return n.isNewMobile()},chat_window_maximized:function(){var e=i("livechat-full");return!!(e&&"visible"===e.style.visibility&&e.offsetWidth&&e.offsetHeight)},chat_window_minimized:function(){var e=i("livechat-compact-container");return!!(e&&"visible"===e.style.visibility&&e.offsetWidth&&e.offsetHeight)},chat_window_hidden:function(){return!1===this.chat_window_maximized()&&!1===this.chat_window_minimized()},update_height:function(e,t){void 0,h.send("new_font_height;"+e+";"+t),o.setFontSize(e)}};var s=__lc.setting,r={appendToBody:function(e,i){var o,n;(o=function(){try{return t.body.appendChild(e),n&&(clearInterval(n),n=null),"function"==typeof i&&i(),!0}catch(e){return!1}})()||(n=setInterval(o,100))},isReady:!1,ready:function(e){t.attachEvent?this.waitForDOMReady(e):e()},waitForDOMReady:function(i){r.readyFn=i,t.attachEvent("onreadystatechange",function(){"complete"===t.readyState&&r.itsReady()}),e.attachEvent("onload",r.itsReady);var o=!1;try{o=null==e.frameElement}catch(i){}t.documentElement.doScroll&&o&&r.doScrollCheck()},doScrollCheck:function(){if(!r.isReady){try{t.documentElement.doScroll("left")}catch(e){return void setTimeout(r.doScrollCheck,1)}r.itsReady()}},itsReady:function(){if(!r.isReady){if(!t.body)return setTimeout(r.itsReady,1);r.isReady=!0,"function"==typeof r.readyFn&&r.readyFn()}},innerHTML:function(e,i){var o;try{e.innerHTML=i}catch(n){(o=t.createElement(e.tagName)).id=e.id,o.className=e.className;try{o.innerHTML=i,e.parentNode.replaceChild(o,e)}catch(t){i=(i=i.replace(/<div([^>]*)>/g,"<span$1>")).replace(/<\/div>/g,"</span>"),o.innerHTML=i,e.parentNode.replaceChild(o,e)}}}},l={set:function(e,i,o){var n,a,s,r,d;o?((s=new Date).setTime(s.getTime()+24*o*60*60*1e3),r="; expires="+s.toGMTString()):r="",1===(d=location.host).split(".").length?(!1===__lc.chat_between_groups&&__lc.skill>0&&(e=e+".group"+__lc.skill),t.cookie=e+"="+i+r+"; path=/"):((a=d.split(".")).shift(),n="."+a.join("."),t.cookie=e+"="+i+r+"; path=/; domain="+n,null!=l.get(e)&&l.get(e)==i||(n="."+d,t.cookie=e+"="+i+r+"; path=/; domain="+n))},get:function(e){for(var i=e+"=",o=t.cookie.split(";"),n=0;n<o.length;n++){for(var a=o[n];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(i))return a.substring(i.length,a.length)}return null},erase:function(e){l.set(e,"",-1)}},d={imageAppended:!1,init:function(t){this.config=t,void 0;var i=this.config.embedded.eye_grabber.path,o="";if(e.devicePixelRatio&&parseInt(e.devicePixelRatio)>1&&-1!==i.indexOf("/default/eyeCatchers/")){var n=i.match(/(.*)\.([a-z]{3,})$/i);i=n[1]+"-2x."+n[2],o='onload="this.width/=2;this.onload=null;"'}this.imageHTML='<img src="//'+i+'" style="border:0;display:block;" alt="" '+o+">"},enabled:function(){return this.config.embedded.eye_grabber.enabled},embedded_chat_enabled:function(){return void 0!==p&&!0===p.embedded_chat_enabled()},get_window_type:function(){return!0===this.embedded_chat_enabled()?"embedded":"popup"},shouldBeDisplayed:function(){return!LC_API.mobile_is_detected()&&!LC_API.new_mobile_is_detected()&&!0===this.enabled()&&"1"!==l.get("hide_eye_catcher")},appendToDOM:function(){void 0;var e,i,o,n=this;if(!this.shouldBeDisplayed())return!1;(e=t.createElement("div")).setAttribute("id","livechat-eye-catcher"),e.setAttribute("onmouseover",'var els = this.getElementsByTagName("a"); if (els.length) els[0].style.display = "block";'),e.setAttribute("onmouseout",'var els = this.getElementsByTagName("a"); if (els.length) els[0].style.display = "none";'),t.getElementsByTagName&&(e.onmouseover=function(){var e=this.getElementsByTagName("a");e.length&&(e[0].style.display="block")},e.onmouseout=function(){var e=this.getElementsByTagName("a");e.length&&(e[0].style.display="none")}),(i=e.style).position="fixed",i.right=this.config.embedded.eye_grabber.x+this.config.embedded.eye_grabber.point_zero.x+"px",i.bottom=this.config.embedded.eye_grabber.y+this.config.embedded.eye_grabber.point_zero.y+"px",i.visibility="hidden",i.zIndex="2147483639",i.background="transparent",i.border="0",i.padding="10px 10px 0 0",i.float="left",i.marginRight="-10px",i.webkitBackfaceVisibility="hidden",i=["position:absolute","display:none","top:-5px","right:-5px","padding:2px 7px","text-decoration:none","color:#000","font-size:20px","font-family:Arial,sans-serif"],"online"===this.config.status?(o=this.imageHTML,this.imageAppended=!0):o="",e.innerHTML='\t\t<a href="#" onclick="LC_API.hide_eye_catcher();return false" style="'+i.join(";")+'" onmouseover="this.style.color=\'#666\'" onmouseout="this.style.color=\'#000\'">&times;</a>\t\t<a href="#" onclick="LC_API.open_chat_window({source:\'eye catcher\'});return false" style="display:block" id="livechat-eye-catcher-img">'+o+"</a>",r.appendToBody(e,function(){n.setState("online"===n.config.status?"online":"offline")})},appendImage:function(){i("livechat-eye-catcher-img").innerHTML=this.imageHTML},setState:function(e){var t;if(!(t=i("livechat-eye-catcher")))return!1;"online"===e?(!1===this.imageAppended&&this.appendImage(),t.style.visibility="visible"):t.style.visibility="hidden"}},c=function(){var e=/[^:]+:\/\/[^\/\s]+/;return{extractDomain:function(t){var i=t.match(e);return i&&i[0]}}}(),h={init:function(){this.bindReceive()},send:function(t){var i=p.windowRef||frames["livechat-full-view"]||e["livechat-full-view"];return void 0,!!i&&(m.postMessage(encodeURIComponent(t),u,i),!1)},bindReceive:function(){var e,i=this;void 0,e=c.extractDomain("https://"+__lc.hostname),void 0,m.receiveMessage(function(e){i.receive(e)},e.replace(/^http:/,"https:")),m.receiveMessage(function(e){i.receive(e)},e.replace(/^https/,"http"))},receive:function(e){void 0;var t=e.data;"minimize"==(t=decodeURIComponent(t))?(void 0,!1===LC_API.chat_window_hidden()&&LC_API.minimize_chat_window()):/^init;/.test(t)&&(void 0,a.onload())}},m=function(){var e,t=this;return{postMessage:function(e,i,o){if(i&&(o=o||parent,t.postMessage))try{void 0,o.postMessage(e,c.extractDomain(i))}catch(e){}},receiveMessage:function(i,o){void 0,t.postMessage&&(i&&(e=function(e){if(void 0,"string"==typeof o&&e.origin!==o&&"javascript:"!==e.origin&&"javascript:"!==o||"[object Function]"===Object.prototype.toString.call(o)&&!1===o(e.origin))return!1;i(e)}),t.addEventListener?t[i?"addEventListener":"removeEventListener"]("message",e,!1):t[i?"attachEvent":"detachEvent"]("onmessage",e))}}}(),f="",u="",p=new function(s){this.conf=s,this.animationTimeout=null,this.msie=/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent),this.embedded_chat_enabled=function(){return this.conf.embedded.enabled},this.lc_open_chat=function(t,i){void 0;var o;LC_API.embedded_chat_supported()&&LC_API.embedded_chat_enabled()?LC_API.show_full_view({source:"manual"===t?"manual invitation":"embedded invitation"}):(o=f,p.windowRef=e.open(o,"Chat_window","width=530,height=520,resizable=yes,scrollbars=no"))},this.open_chat_window=function(e){void 0,void 0,void 0,e=e||{},void 0,"popup"===LC_API.get_window_type()||n.isOldMobile()?n.isDetected()?LC_API.open_mobile_window(e):this.lc_open_chat():a.isLoaded()?n.isDetected()?LC_API.open_mobile_window(e):LC_API.show_full_view(e):(o.displayLoadingMessage(),LC_API.show_full_view(),a.onAfterLoad(function(){void 0,p.open_chat_window(e)}))},this.open_mobile_window=function(t){if(void 0,LC_API.embedded_chat_enabled()&&LC_API.new_mobile_is_detected())return this.lc_open_chat();url=f,p.windowRef=e.open(url,"Chat_window")},this.init=function(){h.init(),d.init(this.conf),this.load_embedded_window()},this.iframe_full_view_loaded=function(){},this.load_embedded_window=function(){var a,s,l,c,h,m,g,b=this.conf.embedded.dimensions.width+"px",y=this.conf.embedded.dimensions.height+"px";void 0,t.querySelector('meta[name="viewport"]')||(meta=t.createElement("meta"),meta.name="viewport",t.getElementsByTagName("head")[0].appendChild(meta),meta.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),void 0,void 0,(l=t.createElement("div")).setAttribute("id","livechat-full"),(a=l.style).position="fixed",a.bottom="0",a.right=this.conf.embedded.dimensions.margin+"px",a.width=b,a.height=y,a.maxHeight="100%",a.overflow="hidden",a.visibility="hidden",a.zIndex="-1",a.background="transparent",a.border="0",a.transition="transform .2s ease-in-out",a.WebkitTransition="transform .2s ease-in-out",a.MozTransition="transform .2s ease-in-out",a.OTransition="transform .2s ease-in-out",a.MsTransition="transform .2s ease-in-out",function(){var t=e.navigator&&e.navigator.userAgent&&e.navigator.userAgent.toLowerCase();return!(!t||-1===t.indexOf("safari")||-1!==t.indexOf("chrome")||-1!==t.indexOf("mobile"))}()&&(a.transition="transform 0s ease-in-out",a.WebkitTransition="transform 0s ease-in-out",a.MozTransition="transform 0s ease-in-out",a.OTransition="transform 0s ease-in-out",a.MsTransition="transform 0s ease-in-out"),!1===n.isDetected()&&(a.webkitBackfaceVisibility="hidden"),LC_API.mobile_is_detected()&&!LC_API.new_mobile_is_detected()&&(a.position="absolute",a.top="-9999em",a.left="-9999em",a.bottom="auto",a.right="auto"),LC_API.new_mobile_is_detected()&&(a.zIndex="-1"),h=t.createElement("iframe"),b=__lc.iframe_src,b+="&r="+encodeURIComponent(t.referrer),b+="&p1="+encodeURIComponent(t.location.toString()),u=(f=b)+"#"+t.location.toString(),void 0,h.setAttribute("src",u),h.setAttribute("id","livechat-full-view"),h.setAttribute("name","livechat-full-view"),h.setAttribute("title","LiveChat Widget"),h.setAttribute("scrolling","no"),h.setAttribute("frameborder","0"),h.setAttribute("allowtransparency","true"),(m=h.style).position="absolute",m.top="0",m.right="0",m.bottom="0",m.left="0",m.width="100%",m.height="100%",m.border="0",m.padding="0",m.margin="0",m.float="none",m.background="transparent",h.onload=p.iframe_full_view_loaded,l.appendChild(h),(c=t.createElement("div")).setAttribute("id","livechat-compact-container"),(s=c.style).position="fixed",s.bottom="0",s.right=this.conf.embedded.dimensions.margin+"px",s.width=this.conf.embedded.dimensions.width_minimized+"px",s.height="115px",s.overflow="hidden",s.visibility="visible",s.zIndex="2147483639",s.background="transparent",s.border="0",s.transition="transform .2s ease-in-out",s.WebkitTransition="transform .2s ease-in-out",s.MozTransition="transform .2s ease-in-out",s.OTransition="transform .2s ease-in-out",s.MsTransition="transform .2s ease-in-out",(g=["position: absolute","display: block","visibility: hidden","height: 16px","padding: 0 4px","line-height: 16px","background: #f00","color: #fff","font-size: 10px","text-decoration: none","font-family: 'Lucida Grande', 'Lucida Sans Unicode', Arial, Verdana, sans-serif","border-radius: 3px","box-shadow: 0 -1px 0px #f00, -1px 0 0px #f00, 1px 0 0px #f00, 0 1px 0px #f00, 0 0 2px #000","border-top: 1px solid #f99"]).push("border-radius: 50%"),g.push("box-shadow: none"),g.push("border-top: 0"),g.push("padding: 0"),g.push("text-align: center"),g.push("font-family: 'Lato', sans-serif"),g.push("top: 23px"),g.push("right: 8px"),m=["position: relative","top: 20px","left: 0","width: 100%","border: 0","padding: 0","margin: 0","float: none","background: none"];var v=function(){var e=t.getElementById("livechat-compact-view"),i=e&&(e.contentWindow||e.contentDocument);if(i){var o=function(e){e.preventDefault(),LC_API.show_full_view()};t.attachEvent?i.attachEvent("onclick",o):i.addEventListener("click",o,!0)}else setTimeout(v,300)};v(),c.innerHTML='<iframe src="about:blank" id="livechat-compact-view" style="'+m.join(";")+'" scrolling="no" frameborder="0" allowtransparency="true"></iframe><a id="livechat-badge" href="#" onclick="LC_API.show_full_view({source:\'minimized click\'});return false" style="'+g.join(";")+'"></a>';var w=this;r.appendToBody(c,function(){var e;o.setTheme(w.conf.chat_window.theme.name,w.conf.chat_window.theme.color),(e=(e=(e=i("livechat-compact-view")).contentWindow||e.contentDocument).document||e)&&"complete"===e.readyState?o.render():t.attachEvent?i("livechat-compact-view").attachEvent("onload",function(){o.render()}):i("livechat-compact-view").onload=function(){o.render()},void 0,LC_API.new_mobile_is_detected()&&n.setWindowStyle()}),d.appendToDOM(),r.appendToBody(l),n.isNewMobile()&&n.initNewMobile()},this.minimize_chat_window=function(t){if(null===i("livechat-compact-container"))return!1;if(i("livechat-compact-container").style.visibility="visible",i("livechat-compact-container").style.opacity=1,i("livechat-compact-container").style.zIndex="2147483639",i("livechat-compact-container").style.transform="translateY(0%)",i("livechat-eye-catcher")&&LC_API.agents_are_available()&&(i("livechat-eye-catcher").style.visibility="visible",i("livechat-eye-catcher").style.opacity=1),i("livechat-full")){var o=e.getComputedStyle&&getComputedStyle(i("livechat-full")).transitionDuration||"200";o=-1!==o.indexOf("ms")?o.replace("ms",""):-1!==o.indexOf("s")?1e3*o.replace("s",""):200,i("livechat-full").style.transform="translateY(100%)",this.animationTimeout&&clearTimeout(this.animationTimeout),this.animationTimeout=setTimeout(function(){i("livechat-full").style.visibility="hidden",i("livechat-full").style.opacity=0,i("livechat-full").style.zIndex="-1"},o)}""!=i("livechat-badge").innerHTML&&(i("livechat-badge").style.visibility="visible",i("livechat-badge").style.opacity=1),h.send("window_state;minimized"),n.isNewMobile()&&n.onMinimizeChatWindow()},this.show_full_view=function(o){void 0;var s,r,d;if(o=o||{},n.isNewMobile()&&n.onShowFullView(),l.set("lc_window_state","full"),i("livechat-badge").innerHTML="",i("livechat-badge").style.visibility="hidden",i("livechat-badge").style.opacity=0,a.isLoaded()){d="1",h.send("maximize;"+d),i("livechat-compact-container").style.transform="translateY(100%)";var c=e.getComputedStyle&&getComputedStyle(i("livechat-full")).transitionDuration||"200";c=-1!==c.indexOf("ms")?c.replace("ms",""):-1!==c.indexOf("s")?1e3*c.replace("s",""):200,this.animationTimeout&&clearTimeout(this.animationTimeout),this.animationTimeout=setTimeout(function(){i("livechat-compact-container").style.visibility="hidden",i("livechat-compact-container").style.opacity=0,i("livechat-compact-container").style.zIndex="-1"},c),i("livechat-eye-catcher")&&(i("livechat-eye-catcher").style.visibility="hidden",i("livechat-eye-catcher").style.opacity=0),i("livechat-full").style.visibility="visible",i("livechat-full").style.opacity=1,i("livechat-full").style.zIndex="2147483639",i("livechat-full").style.transform="translateY(0%)"}else void 0,u=f+"#"+t.location.toString(),s=i("livechat-full-view"),r=function(){void 0,h.send("maximize;1"),i("livechat-compact-container").style.visibility="hidden",i("livechat-compact-container").style.opacity=0,i("livechat-compact-container").style.zIndex="2147483638",i("livechat-eye-catcher")&&(i("livechat-eye-catcher").style.visibility="hidden",i("livechat-eye-catcher").style.opacity=0),i("livechat-full").style.visibility="visible",i("livechat-full").style.opacity=1,i("livechat-full").style.zIndex="2147483639",i("livechat-full").style.transform="translateY(0%)",n.resizeMobileWindow({force:!0})},void 0,p.msie?p.iframe_full_view_loaded=r:s.onload=r,s.src?s.src=u:null!==s.contentWindow&&null!==s.contentWindow.location?s.contentWindow.location=u:s.setAttribute("src",u)}}(s);p.init()}(window,document);
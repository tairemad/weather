!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return Math.round(1.8*e+32)}function r(e,t){var n=document.getElementsByClassName("temp");n.innerHTML="",n.innerHTML=o(e)+"&deg;F<i class=\"owf owf-'"+t+"'\"></i>"}function a(e,t){document.getElementById("quote").innerHTML='"'+e+'" - '+t}var i=n(2),u=function(e){return e&&e.__esModule?e:{default:e}}(i),c=document.getElementsByName("city").value,l=document.getElementsByName("state").value;document.getElementById("btn").addEventListener("click",function(){console.log(c,l)}),function e(){var t=new Date,n=t.getFullYear(),o=t.getMonth(),r=["January","February","March"," April","May","June","July","August","September","October","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=t.getDate(),u=t.getDay(),c=t.getHours(),l=t.getMinutes();l=function(e){return e<10&&(e="0"+e),e}(l);var d=c>12?c-12+":"+l:c+":"+l;document.getElementById("time").innerHTML=d,document.getElementById("date").innerHTML=a[u]+" <br> "+r[o]+" "+i+", "+n,setTimeout(e,500)}(),function(){(0,u.default)("http://api.forismatic.com/api/1.0/",{mode:"no-cors"}).then(function(e){return a(e.quoteText,e.quoteAuthor)}).catch(function(e){return console.log(e)})}(),$(function(){function e(e){e=$("#gifSearch").val().toLowerCase().trim().replace(/ /g,"+"),console.log(e);var t=$("#gifs");t.empty(),$.ajax({url:"http://api.giphy.com/v1/gifs/search?q="+e+"&limit=4&api_key=dc6zaTOxFJmzC",success:function(e){e.data.forEach(function(e){var n=e.images.fixed_height.url;console.log(n),$('<div class="col-md-3"><img src="'+n+'"></div>').appendTo(t)})},error:function(){notOK()}})}window.navigator&&window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition(function(e){$.getJSON("http://api.openweathermap.org/data/2.5/weather",{lat:e.coords.latitude,lon:e.coords.longitude,units:"metric",APPID:"7144aed56f79b17729c466816622aa0f"}).done(function(e){r(e.main.temp,e.weather[0].id)})}),$("#searchBtn").on("click",function(t){e(),$("input:text").val("")})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t){function n(e,t){var n=document.createElement("script");return n.src=e+(e.indexOf("?")>=0?"&":"?")+"callback="+t,n}if(!e.Promise)throw"Promise not available. Use a polyfill! http://promisesaplus.com/implementations";return function(o){return new Promise(function(r,a){var i="jsonp_callback_"+Math.round(1e5*Math.random()),u=n(o,i);u.onerror=a,t.appendChild(u),/callback=?/.test(o)&&(o=o.replace("=?","="+i)),e[i]=function(n){r(n),e[i]=null,delete e[i],t.removeChild(u)}})}}(void 0,document.body);t.default=o}]);
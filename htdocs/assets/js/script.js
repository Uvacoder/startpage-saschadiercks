document.addEventListener("DOMContentLoaded",function(){function t(){document.getElementsByTagName("body")[0].className+="js"}function e(t,e,n){var o=document.getElementById(e),s=document.getElementById(t),a=s.clientHeight+"px";s.classList.add("sticky"),o.style.setProperty(n,a)}function n(t){var e=document.getElementsByClassName(t);for(i=0;i<e.length;i++)e[i].onclick=function(t){var e=this.getAttribute("data-target");o(e,t)}}function o(t,e){var n=document.getElementById(t);n.classList.contains("js-hidden")?n.classList.remove("js-hidden"):n.classList.add("js-hidden"),e.preventDefault()}function s(t){var e=document.getElementsByClassName(t);for(i=0;i<e.length;i++)e[i].onclick=function(t){var e=this.getAttribute("data-target");a(e,t)}}function a(t,e){var n=document.getElementById(t);n.classList.contains("js-closed")?n.classList.remove("js-closed"):n.classList.add("js-closed"),e.preventDefault()}function c(){e("application-header","content","padding-top"),e("application-footer","content","padding-bottom")}var l=document.getElementsByClassName("tab"),d=document.getElementsByClassName("tabbed-content");l.length!==d.length&&console.log("count of tabs and tabbed-contend isn't consistent");var r=function(t){markTabTrigger=document.getElementsByClassName("tab")[t].classList.add("active"),unhideSelectedContent=document.getElementsByClassName("tabbed-content")[t].classList.add("active"),localStorage.setItem("tabbedContentId",t),console.log("localStorage ID is: "+t)},g=function(){for(i=0;i<d.length;i++)l[i].classList.remove("active"),d[i].classList.remove("active")},m=localStorage.getItem("tabbedContentId");for(null!==m&&l.length>=m?r(m):(console.log("localStorage is empty or stored Id is no longer present - setting default"),r(0)),i=0;i<l.length;i++)!function(t){l[i].onclick=function(){return g(),r(t),!1}}(i);t(),c(),window.onresize=c,s("collapse-trigger"),n("overlay-trigger")});
//# sourceMappingURL=script.js.map

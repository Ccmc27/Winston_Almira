(function(){
  var body=document.body,env=document.getElementById("env");
  var bgMusic=document.getElementById("bgMusic");
  document.getElementById("open").addEventListener("click",function(){
    var btn=this,stage=document.querySelector(".env"),k,n;
    // Start playback directly from the seal tap to satisfy mobile browser audio policies.
    if(bgMusic && bgMusic.paused){
      bgMusic.volume=0.65;
      var playback=bgMusic.play();
      if(playback && typeof playback.catch==="function"){
        playback.catch(function(err){console.warn("Background music could not start:",err);});
      }
    }
    if(btn.classList.contains("fly"))return;
    btn.classList.add("fly");
    for(k=0;k<10;k++){n=document.createElement("i");n.className="smoke";n.style.setProperty("--dx",((Math.random()-.5)*190)+"px");n.style.setProperty("--dy",(-50-Math.random()*150)+"px");n.style.animationDelay=(k*120)+"ms";stage.appendChild(n)}
    for(k=0;k<14;k++){n=document.createElement("i");n.className="spark";n.style.setProperty("--dx",((Math.random()-.5)*260)+"px");n.style.setProperty("--dy",(-140+Math.random()*190)+"px");n.style.animationDelay=(k*60)+"ms";stage.appendChild(n)}
    setTimeout(function(){env.classList.add("opening")},850);
    setTimeout(function(){env.classList.add("gone");body.classList.remove("locked");window.scrollTo(0,0)},7400);
  });
  // Open the pinned destination in Apple Maps on iPhone/iPad and Google Maps
  // on Android and other devices. Both URLs resolve to the installed app when available.
  document.querySelectorAll("a[data-map-destination]").forEach(function(link){
    link.addEventListener("click",function(event){
      event.preventDefault();
      var destination=link.getAttribute("data-map-destination");
      var encoded=encodeURIComponent(destination);
      var isApple=/iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        (navigator.platform==="MacIntel" && navigator.maxTouchPoints>1);
      var url=isApple
        ? "https://maps.apple.com/?daddr="+encoded+"&q="+encoded
        : "https://www.google.com/maps/dir/?api=1&destination="+encoded;
      window.open(url,"_blank","noopener");
    });
  });
  var t=new Date("2027-01-21T10:00:00+08:00").getTime(),ids=["d","h","m","s"].map(function(i){return document.getElementById(i)});
  function tick(){var x=Math.max(0,t-Date.now()),v=[Math.floor(x/864e5),Math.floor(x/36e5)%24,Math.floor(x/6e4)%60,Math.floor(x/1e3)%60];v.forEach(function(n,i){ids[i].textContent=n})}
  tick();setInterval(tick,1000);
  document.querySelectorAll("img[data-from]").forEach(function(i){i.src=document.querySelector("."+i.getAttribute("data-from")).src});
  var calEl=document.getElementById("cal"),i;
  ["S","M","T","W","T","F","S"].forEach(function(x){var e=document.createElement("span");e.className="wd";e.textContent=x;calEl.appendChild(e)});
  for(i=0;i<5;i++)calEl.appendChild(document.createElement("span"));
  for(i=1;i<=31;i++){var c=document.createElement(i===21?"button":"span");c.textContent=i;if(i===21){c.className="hl";c.setAttribute("aria-label","January 21, tap for details");c.onclick=function(){document.getElementById("calinfo").classList.toggle("show");document.getElementById("tapnote").style.display="none"}}calEl.appendChild(c)}
  document.querySelectorAll(".acc").forEach(function(a){var b=a.querySelector(".ah");b.addEventListener("click",function(){var o=a.classList.toggle("open");b.setAttribute("aria-expanded",o)})});
  var pv=document.getElementById("pv"),pn=document.getElementById("pvn");
  document.querySelectorAll("#pal .sw").forEach(function(b){b.addEventListener("click",function(){document.querySelectorAll("#pal .sw").forEach(function(x){x.classList.remove("sel")});b.classList.add("sel");pv.style.background=b.dataset.c;pv.style.color=b.dataset.t;pn.textContent=b.querySelector("b").textContent})});
  document.getElementById("love").addEventListener("click",function(e){var r=e.currentTarget.getBoundingClientRect();for(var k=0;k<8;k++){var h=document.createElement("span");h.className="heart";h.textContent="♡";h.style.left=(r.left+r.width/2+(Math.random()-.5)*r.width*.7)+"px";h.style.top=(r.top)+"px";h.style.setProperty("--x",((Math.random()-.5)*90)+"px");h.style.animationDelay=(k*70)+"ms";document.body.appendChild(h);setTimeout(function(n){n.remove()},2200,h)}});
  var links=document.querySelectorAll(".nav a"),secs=["home","when","where","attire"].map(function(x){return document.getElementById(x)});
  if("IntersectionObserver"in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-40% 0px -50% 0px"});secs.forEach(function(x){so.observe(x)})}
  var prog=document.getElementById("prog"),hfs=document.querySelectorAll(".hf");
  function onScroll(){var h=document.documentElement.scrollHeight-innerHeight;prog.style.width=(h>0?scrollY/h*100:0)+"%";hfs.forEach(function(f){var r=f.parentNode.getBoundingClientRect(),d=(r.top+r.height/2-innerHeight/2)*.03;f.style.transform="translateY("+Math.max(-12,Math.min(12,d))+"px)"})}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  var els=document.querySelectorAll(".rv");
  if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});els.forEach(function(e){io.observe(e)})}else{els.forEach(function(e){e.classList.add("in")})}
})();

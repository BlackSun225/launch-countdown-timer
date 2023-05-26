$(document).ready(function(){
  var second = Number($("#second").find(".top").text());
  var minute = 0;
  var hour = 0;
  var day = 14;
  function countStart() {
    setTimeout(()=>{
      minute = 59;
      hour = 23;
      day = 13;
      let a = minute.toString().length < 2 ? "0" + minute.toString() : minute.toString();
      let b = hour.toString().length < 2 ? "0" + hour.toString() : hour.toString();
      let c = day.toString().length < 2 ? "0" + day.toString() : day.toString();
      $("#minute").find(".one").text(a);
      $("#minute").find(".top").text(a);
      $("#minute").find(".two").text(a);
      $("#minute").mousedown();
      $("#minute").mouseup();
      $("#hour").find(".one").text(b);
      $("#hour").find(".top").text(b);
      $("#hour").find(".two").text(b);
      $("#hour").mousedown();
      $("#hour").mouseup();
      $("#day").find(".one").text(c);
      $("#day").find(".top").text(c);
      $("#day").find(".two").text(c);
      $("#day").mousedown();
      $("#day").mouseup();
    },1000);
  }
  function handleSeconds() {
    //change second every 1s
    setInterval(()=>{
      second --;
      if(second === -1) {
        second = 59;
      }
      let a = second.toString().length < 2 ? "0" + second.toString() : second.toString();   
      $("#second").mousedown();
      $("#second").mouseup();
      $("#second").find(".one").text(a);
      $("#second").find(".top").text(a);
      $("#second").find(".two").text(a);
    },1000);
  }

  function handleMinutes() {
    //minute must change every 60s
    setInterval(()=>{
      minute --;
      if(minute === -1) {
        minute = 59;
      }
      let a = minute.toString().length < 2 ? "0" + minute.toString() : minute.toString();
      $("#minute").mousedown();
      $("#minute").mouseup();
      $("#minute").find(".one").text(a);
      $("#minute").find(".top").text(a);
      $("#minute").find(".two").text(a);
    },60000);
  }

  function handleHours() {
    //hour must change every 60minutes or 3600s
    setInterval(()=>{
      hour-- ;
      if(hour === -1) {
        hour = 23;
      }
      let a = hour.toString().length < 2 ? "0" + hour.toString() : hour.toString();
      $("#hour").mousedown();
      $("#hour").mouseup();
      $("#hour").find(".one").text(a);
      $("#hour").find(".top").text(a);
      $("#hour").find(".two").text(a);
    },3600000);
  }

  function handleDays() {
    //day must change every 24hours or 86400s
    setInterval(()=>{
      day-- ;
      if(day === -1) {
        day = 14;
      }
      let a = day.toString().length < 2 ? "0" + day.toString() : day.toString();
      $("#day").mousedown();
      $("#day").mouseup();
      $("#day").find(".one").text(a);
      $("#day").find(".top").text(a);
      $("#day").find(".two").text(a);
    },86400000);
  }
  countStart();
  handleSeconds();
  handleMinutes();
  handleHours();
  handleDays();
  $("footer i").hover(function(){
    $(this).css("color","hsl(345, 95%, 68%)");
  }, function(){
    $(this).css("color","hsl(237, 18%, 59%)");
  });
  $("#second, #minute, #hour, #day").mousedown(function(){
    let a = $(this).find(".one");
    a.css("animation","animeOne ease-out 0.4s");
  });
  $("#second, #minute, #hour, #day").mouseup(function(){
    let a = $(this).find(".one");
    setTimeout(()=>{
    a.css("animation","none");  
    },400);
  });
});
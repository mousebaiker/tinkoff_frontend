for (var i = 0; i < 10; i++) {
   (function(){
     var j = i;
     setTimeout(function(){
         console.log(j);
     }, 1000);
   })();
}

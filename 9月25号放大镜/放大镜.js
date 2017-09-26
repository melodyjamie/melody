/*window.addEventListener('load',function(){

    let small=document.querySelector('div.small');
    let big =document.querySelector('.big')
    let bImg=document.querySelector('.big>img');
    let bili=bImg.offsetWidth/parseInt(getComputedStyle(small,null).width);
    small.addEventListener('mousemove',function(e){
      let ox= e.offsetX, oy=e.offsetY;
      bImg.style.left=`${-ox*bili}px`;
      bImg.style.top=`${-oy*bili}px`;
    })


})*/
$(function(){
      let small=document.querySelector('div.small');
    let big =document.querySelector('.big')
    let bImg=document.querySelector('.big>img');
    let zhezhao=document.querySelector('.zhezhao');
    let opsity=document.querySelector('.opsity');
    let zw=zhezhao.offsetWidth,
        zh=zhezhao.offsetHeight,
        ow=opsity.offsetWidth,
        oh=opsity.offsetHeight,
        bw=big.offsetWidth,
        bh=big.offsetHeight,
        mw=bImg.offsetWidth,
        mh=bImg.offsetHeight

    opsity.addEventListener('mousemove',function(e){
      let ox= e.offsetX-zw/2, oy=e.offsetY-zh/2;
      //移动最大值
      if(ox>=ow-zw){
      	ox=ow-zw
      };
       if(oy<=0){
      	oy=0
      };
       if(oy>=oh-zh){
      	oy=oh-zh
      };
      if(ox<=0){
      	ox=0
      };
     
      zhezhao.style.left= ox+'px';
      zhezhao.style.top= oy+'px';

      bImg.style.width= ow/zw * bw+'px';
      bImg.style.height= oh/zh * bh+'px';

      bImg.style.left= -mw*ox/bw + 'px';
      bImg.style.top= -mh*oy/bh + 'px';
       

    })

})



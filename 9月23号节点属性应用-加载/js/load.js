
window.onload=function(){

  /*
  楼层的出现
   innerHeight+scrollTop >= offsetTop
   */
  let aside=document.querySelectorAll('.aside>li');
  let ch=innerHeight;
  let floor=document.querySelectorAll('.floor');
  let color=['red','green','pink','yellow','#0085d0','#ff7600']
  let floorArr=[];
  //搜索
  let search=document.querySelector('.search');

  let flge=true;
  floor.forEach(element=>{
  	floorArr.push(element.offsetTop); //获取子元素到父元素的高度
  });
  aside.forEach((element,index)=>{
  element.onclick=function(){
  	
  	//修改点击颜色
  	for(let i=0;i<aside.length;i++){
  		aside[i].style.background='#fff';
  	} flge=false;   
  	  element.style.background=color[index]; 	  
      animate(document.body,{scrollTop:floorArr[index]},function(){
      	flge=true;
      })
  }
});
 window.onscroll=function(){
 	if(!flge){
  		return
  	};

    let flge1=true;
 	let scrolltop=document.body.scrollTop;
 
  //搜索
  if(scrolltop>=500){
    if(flge1){ 
      animate(search,{top:0});
            flge1=!flge1; 
      console.log(flge1);
     }      
    }else{
      if(flge1){
     animate(search,{top:-50});
           flge1=!flge1;
   }
  }



 	floorArr.forEach((value,index)=>{		
 		if(ch+scrolltop >= value+200){
 					//滚动改颜色
 		for(let i=0;i<aside.length;i++){
  		aside[i].style.background='#fff';
  	}
  	  aside[index].style.background=color[index]; 

 			let imgg=floor[index].getElementsByTagName('img');
 			for(let i=0;i<imgg.length;i++){
 				imgg[i].src=imgg[i].getAttribute('imgpath')
 			}
 		}
 	})
 }



}
/*
属性：打字游戏
那些字母  个数  速度  位置  生命  分数
方法：
   产生字符  下落  消除  重新开始 下一关 

 */
  //1.函数
  function Game(){
  	this.charArr=['Q','W','E','R','T','Y','U','I',
  'O','P','A','S','D','F','G','H','J','K','L','Z',
  'X','C','V','B','N','M']
  	//存页面中的字母
  	this.current=[];
  	//页面中要产生的字符个数
  	this.number=5;
    //定义速度
    this.speed=30;
  };
  //方法
  Game.prototype={
    start:function(){
      this.getChars();
       this.drop();
       this.key();

  },

     //产生字符 getChars  for    
    getChars:function(){
   for(let i=0;i<this.number;i++){
   	  this.getChar();
    }
  },
     //产生一个随机 getChar  random  
    getChar:function(){
     let num=Math.floor(Math.random()*this.charArr.length);     
     //放到页面中 
     //创建div
     let divs=document.createElement('div');
      divs.innerHTML=this.charArr[num];//文本
      divs.classList.add('char');  //添加
      //位置浏览器两边各200 垂直0-100
      let tops=Math.random()*100
      let lefts=(innerWidth-400)*Math.random()+200   //浏览器的宽度-400 +200
      divs.style.top=`${tops}px`;
      divs.style.left=`${lefts}px`;
      document.body.appendChild(divs);
      //把divs放进数组 curent
      this.current.push(divs);
  },

     //下落
     drop:function(){
      //时间函数
     let that=this;
      this.t=setInterval(function(){
      for(let i=0;i<that.current.length;i++){
        let tops=that.current[i].offsetTop+that.speed;
        that.current[i].style.top=`${tops}px`;
        //超500从页面删除 this.curent[i] 删除节点 
        if(tops>500){
         document.body.removeChild(that.current[i]);
         //删除数组 splice(i,1)
           that.current.splice(i,1);
            //补回来一个  调回来
            that.getChar();
        }
      }
    },300);
  },
     //摁键盘
     key:function(){
      let that=this;
      document.onkeydown=function(e){
        for(let i=0;i<that.current.length;i++){
        //  e.keyCode   divs.innerText.charCodeAt()  把字符串转换成ALCSS
        //  String.fromCharCode() 把ALCSS转换成字符串
         if(that.current[i].innerText==String.fromCharCode(e.keyCode)){
          //如果一样了就清除
          document.body.removeChild(that.current[i]);
         //删除数组 splice(i,1)
           that.current.splice(i,1);
          //补回来一个  调回来
            that.getChar();
         }
        }
      }
    }

}
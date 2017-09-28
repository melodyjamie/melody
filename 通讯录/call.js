
window.addEventListener('load',function(){
     let dl=document.querySelector('dl');
     let input=document.querySelector('header>input');
     let tishi=document.querySelector('.tishi');
     let tips=document.querySelector('tips');

     // let dataObj=new storage(arr);
     //搜索个人信心
     info=[{name:'李鑫荣',tell:'13707376787',py:'lixinrong'},
	     {name:'李泽宙',tell:'13707376788',py:'lizhezhou'},
	     {name:'牛佳琦',tell:'13707376789',py:'niujiaqi'},
	     {name:'李泽路',tell:'13707376790',py:'lizhelv'},
	     {name:'张秀荣',tell:'13707376791',py:'zhangxiurong'},
	     {name:'梁飞',tell:'13707376792',py:'liangfei'},
	     {name:'张艳鑫',tell:'13707376793',py:'zhanyanxin'},
	     {name:'樊振敏',tell:'13707376794',py:'fanzhenming'},
	     {name:'靳振国',tell:'13707376795',py:'jinzhengauo'},
	     {name:'林建国',tell:'13707376786',py:'linjianguo'},
	     {name:'宋浩',tell:'13707376785',py:'songhao'},
	     {name:'吕鉴',tell:'13707376784',py:'lvjian'},
	     {name:'王有帅',tell:'13707376783',py:'wangyoushuai'},
	     {name:'燕剑豪',tell:'13707376782',py:'yanjianhao'},
	     {name:'胡海轰',tell:'13707376781',py:'huhaihong'},
	     {name:'赵爽',tell:'13707376780',py:'zhaoshuang'},
	     {name:'贾亚楠',tell:'13707376777',py:'jiayanan'},
	     {name:'樊遥遥',tell:'13707376799',py:'fanyaoyao'}];

         //搜索 把符合条件数据筛选出来
         input.onkeyup=function(){
            let value=this.value.trim();
         let add = info.filter(function(element){
              return element.py.includes(value)||element.name.includes(value)||element.tell.includes(value);
            });
             render(add);
         }
         
       render(info)
       let dts=document.querySelectorAll('dt');
	   function render(data){
        //处理首字母 
        /*
        'p':[]
        'l':[]
        'y':[]
        'u':[]
         */
        dl.innerHTML='';
        let obj={};
        data.forEach(element=>{
         let first=element.py.charAt(0).toUpperCase();
        	if(!obj[first]){
        		obj[first]=[];
        	}
             obj[first].push(element);
        });

        //放数据  排序
        let char=Object.keys(obj).sort();
        tishi.innerHTML='';
       //放数据
        char.forEach(element=>{
        	dl.innerHTML+=`<dt>${element}</dt>`;
            tishi.innerHTML+=`<li>${element}</li>`;

        	obj[element].forEach(value=>{
        		dl.innerHTML+=`
        		<dd><a href="tel:${value.tell}">${value.name}</a></dd>`
        	});
        });
         tishi.style.top=`${tishi.offsetHeight/2}px`;
        
	   }
       let Arr=[];
       dts.forEach((element,index)=>{
         Arr.push(element.offsetTop)
       })
    window.onscroll=function(index){
       let scrollTop=document.body.scrollTop;
       let height=document.querySelectorAll('header').height+tips.offsetHeight;
       if(height+scrollTop>=index)
        tips.innerHTML=dts[index].innerHTML;


    }


});

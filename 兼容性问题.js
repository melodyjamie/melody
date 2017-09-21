/*
* @Author: Administrator
* @Date:   2017-09-19 12:56:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 18:04:37
*/

//模拟 className
//方法：
//1.判断兼容性true   2.不兼容false   all->class   低版本一般用Var
//                     ranger是一个对象   求范围
function getClass(classname,ranger){
	ranger= ranger ? ranger : document;
    if( document.getElementsByClassName){
       return ranger.getElementsByClassName(classname);
    }else{
    	var newbox=[];
    var all = ranger.getElementsByTagName('*');
    for(var i=0;i<arr.length;i++){
    	if(checkClass(all[i].box,boxx)){
          newbox.push(all[i]);
    	}
    }
     return newbox;
    }
}
  //检查类名是否有class checkClass 
  //checkClass(classname,ClassName)
  //classname 里面是否包含ClassName
  //boxx  box box1  box2
  //box  box
    function checkClass(box,boxx){
    	var arr=boxx.split(' '); //拆分 一个数组是否存在某一个元素
    	for(var i=0;i<arr.lengt;i++){
    		if(arr[i]==box){
    			return true;
    		}
    	}
    	return false;
    }

//简单用获取元素  
//判断首字符        charAt(0)
  /*获取指定函数
    $(select)
    $('.one') $('#box') $(div)
    参数说明
    select 字符串   选择器
    1.  . classname
    2.  #  id
    3.     TogName 以字符开头[a-z]
    */
   //正则  是一个规则(用来判断)
/*//字符串的开头                字符串的结尾
       if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
        return doucment.getElementsByTagName(select)
       }*/
 /*^ :字符串的开头 
 $ :字符串的结尾
 test(select)  是否满足这个规则，满足true 不满足false
 */

function $(select){
	var first = select.charAt(0)
	if(first=='#'){
	return  document.getElementById(select.substring(1))
	}else if(first=='.'){
	return getClass(select.substring(1))
	}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return document.getElementsByTagName(select);
	}
}
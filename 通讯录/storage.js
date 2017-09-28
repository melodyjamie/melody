



//辅助性的不用加window.onload=function()
/*
属性：描述
存储 
方法：功能
增 删 改  查
 */

//get 获取数据   init  update save clear remove
class storage{
	constructor(data){
       this.data=data    
	}
	//加下滑线，表示只供内部调用，不希望外面调用
	//初始化数据
    _init(){
   localStorage.setItem('students',JSON.stringify(this.data));
    }
    //获取数据 返数据
    getData(){      
   let data= localStorage.getItem('students')
   if(!data){
   	this._init()
   }
   return this.data=JSON.parse(localStorage.getItem('students'))

    }
    //更新数据
    update(index,key,value){
    //index attr value
    this.data[index][key]=value;
    this.save()

    }
    //删除 第几行
    del(index){
        this.data.splice(index,1);
        this.save();  //删除后保存
    }
    //添加
    push(obj){
    	this.data.push(obj);
    	this.save();  //添加后保存
    }
    //保存
    save(){
     localStorage.setItem('students',JSON.stringify(this.data));
    }







}
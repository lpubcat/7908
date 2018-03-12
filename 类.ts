class Person{
//	name:string;
//	sex:string;
//	constructor(n,s){
//		this.name = n;
//		this.sex = s;
//	}
	constructor(public name:string,public sex:string){}
	sayHello(){
		console.log(this.name);
	}
}

//实例化一个对象，创建一个对象 new person("","")
//类是抽象的，对象是具体的，对象是类的实现

var p1 = new Person("张三","男");
p1.sayHello();


class Star extends Person{
	//子类的构造函数必须继承父类的构造函数
	constructor(public name:string,public sex:string,public job:string){
		super(name,sex);//继承父类的属性
	}
	sayHello(){
		super.sayHello();//继承父类的方法
	}
	showJob(){
		console.log(this.job);
	}
}


var s1 = new Star("黄晓明","男","演员");
s1.sayHello();
s1.showJob();

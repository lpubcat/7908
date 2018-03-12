//匿名函数
var login1 = function () {
    alert("登录");
};
//箭头表达式
//var login2 = ()=>{
//	alert("登录")
//}
//console.log(login2());
var login3 = function (name, pwd) {
    alert(name + "登录了");
};
console.log("张三", "aaa");
var sum = function (num1, num2) { return num1 + num2; }; //return num1+num2
//var sum = function(num1,num2){
//	return num1+num2;
//}
console.log(sum(2, 3));
function getStock(n) {
    var _this = this;
    //this=>stock
    this.name = n; //name="哈哈哈"
    this.showName = function () {
        alert(this.name); //name="哈哈哈"
    };
    console.log(this); //getStock
    //	var This = this;
    //	setInterval(function(){
    //		console.log(this);//window
    //		console.log(this.name); //空
    //		console.log(This.name);//"哈哈哈"
    //	},1000);
    setInterval(function () {
        console.log(_this.name);
    }, 1000);
}
//var srock = new getStock("哈哈哈");
//srock.showName();
//构造函数定义 new后面就是构造函数，构造函数中二代this就是具体的对象
//在箭头函数中。this在函数创建时就确定了指向
//在普通的函数中，this的指向是由谁调用决定的
var stu = {
    students: ["张三", "李四", "王五"],
    show: function () {
        var _this = this;
        //this=>stu
        return function () {
            console.log(_this); //window
            var num = Math.floor(Math.random() * 3);
            console.log(num);
            return _this.students[num];
        };
    }
};
var stuShow = stu.show();
console.log(stuShow());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    //	name:string;
    //	sex:string;
    //	constructor(n,s){
    //		this.name = n;
    //		this.sex = s;
    //	}
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.sayHello = function () {
        console.log(this.name);
    };
    return Person;
}());
//实例化一个对象，创建一个对象 new person("","")
//类是抽象的，对象是具体的，对象是类的实现
var p1 = new Person("张三", "男");
p1.sayHello();
var Star = /** @class */ (function (_super) {
    __extends(Star, _super);
    //子类的构造函数必须继承父类的构造函数
    function Star(name, sex, job) {
        var _this = _super.call(this, name, sex) || this;
        _this.name = name;
        _this.sex = sex;
        _this.job = job;
        return _this;
    }
    Star.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this); //继承父类的方法
    };
    Star.prototype.showJob = function () {
        alert(this.job);
    };
    return Star;
}(Person));
var s1 = new Star("黄晓明", "男", "演员");
s1.sayHello();
s1.showJob();


<meta charset="utf-8">

# 从头开始

   亲爱的晶晶同学，这是第三节课，今天来认识函数和编程模式；编程模式主要有两种，一种是面向对象编程，一种是面向函数编程；

# 第三天

函数，就是将多行代码放在一起，组成代码块，以便在其它时间点再次执行这些代码；

## 函数

	// 函数定义
	var sayHello = function (){
		console.log('hello 晶晶 !');
	}
	sayHello(); // 执行函数

	// 带参函数  
	var sayHello = function (someOne){
		console.log(`带参数执行结果：hello ${someOne} !`)
	}
	sayHello('晶晶');
	sayHello('阿开');

	// 构造函数（也叫 “类” ）
	var Person = function(age,name){
		this.age = age;
		this.name = name;
	}
	var chengCheng = new Person(9, '呈呈'); // 用构造函数，构造对象 （用构造函数构造的对象也叫 "实例"，对象chengCheng就是类Person的一个实例）
	console.log('chengcheng的年龄是：', chengCheng.age);

	// 函数可以有返回值
	var sayHello = function(){
		return 'Hello !'
	}
	var words = sayHello();
	console.log('函数的返回值是:', words);
	
## 对象
上一课讲过，对象是一种数据类型，可以拥有自己的**属性**，如：
		

    var chengCheng = { 
	    name: '呈呈',
	    age: 9,
	};
	
对象的某个属性也可以是一个函数，称为对象的**方法**，如：
	
	// 定义对象
	var chengCheng = {
		name: '呈呈',
		age: 9,
		sayAge: function () {
			console.log(`我今年${this.age}岁了。`);
		}
	}
				
	// 让对象执行某个方法：
	chengCheng.sayAge();// 控制台输出:'我今年9岁了。'
		
如果再定义一个对象'小宝':

	var xiaoBao = {
		name: '小宝',
		age: 7,
		sayAge: function ( ) {
			console.log(`我今年${this.age}岁了。`);
		}
	}	
那么，chengCheng和xiaoBao这两个对象中，sayAge 都是通过匿名函数定义的，其实就是创建了两个函数（各占用一个内存空间），分别分配给了两个对象的sayAge属性，可是这两个函数的功能是一样的，所以浪费了一定的内存空间；利用构造函数可以解决这一问题：
	
    var Person = function(age,name){
		this.age = age;
		this.name = name;
	}
	Person.prototype.sayAge = function (){
		return `我今年${this.age}岁了。`;
	}
	var chengCheng = new Person(9, '呈呈'); // 用构造函数，构造对象
	var xiaoBao = new Person(7, '小宝'); 
	console.log('呈呈说:', chengCheng.sayAge());
	console.log('小宝说:', xiaoBao.sayAge());
	// 函数Person的proptype也叫原型链，用来创建对象的方法（无内存浪费）

## 面向对象编程 VS 面向函数编程

将要书写的所有数据都归纳成一个个对象，把这些对象的属性展示在软件界面上，当点击界面时，改变自身或其它对象的属性，再把改变的结果重新展示在界面上，数据世界就变得如现实世界一样，清晰的展示在开发人员面前，这就是面向对象编程；

将要书写的功能归纳成一个个函数，数据还是数据，当用户点击界面时，把要改变的数据作为参数传给某个函数（也叫依赖注入），由函数负责去改变数据，并把新数据展示在界面了，函数就像是一个个数据的加工厂，这就是面向函数编程；

面向对象编程，结构更清晰，但数据体量容易变大；面向函数编程体量更小，自由度太高，所以要求更高的系统架构设计；

## 练习
1，用面向对象方式，创建100辆汽车，每辆车有颜色、价格属性，颜色有红色和绿色两种，价格从10万到100万元随机生成，每辆车有打折方法；100辆车创建完成后，将第5辆车，打85折；（提示获取0到1之间的随机数的程序是"Math.random()") 

2，用函数的方式实现上述功能？

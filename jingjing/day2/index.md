
<meta charset="utf-8">

# 从头开始

   亲爱的晶晶同学，第二节课，我们来认识高级程序语言的基本构成。表达式，语句，和函数；汇编是低级语言，更接近机器码；Java, C#, python, JavaScript, 等等都是高级语言，随着硬件能力的增强，现代程序都是用高级语言书写的。只有那些对硬件成本有严格要求的应用才使用低级语言编写，如洗衣机的控制芯片（一个单片机，不需要很大的计算能力，成本低廉）；

# 第二天

变量和语句；

## 概念

像上节课输入的1+2，这种简短的一行不换行并且有返回结果的程序，我们称为表达式；

**变量**，是数据在内存中存放数据的地址标识，用来代表某个数据；

    var i = 100; // 定义变量i, 它代表的值是100;

控制台输出，javascript可以向控制台，输出信息，以便开发者，查看运行结果，用英文','号分隔多条信息；

    console.log('我的变量i的值是：', i);// 控制台中会输出"我的变量i的值是：100"

数据, 可以是数字，也可以是一段文字（字符串），数据的类型主要有以下几种：

    var isTrue = true; // 布尔(Boolean)类型，值为true或者false, 或者1和0，表示是与否
    console.log('我定义的变量isTrue的值是：', isTrue); // 读取布尔类型的值
    
    var someNumber = 5; // 数字
    console.log('我定义的变量someNumber的值是:', someNumber);
    
    var someString1 = 'This is string'; // 字符串
    console.log('我定义的字符串变量someString1的值是：',someString1);
    var someString2 = 'someNumber is:' + someNumber; // 字符串和变量联合成新的字符串
    console.log('我定义的字符串变量someString2的值是：',someString2);    
    var someString3 = `someNumber is:${someNumber}`; // 另外一种联合方式，注意符号'和`的不同; ``这种方式叫字符串模板，模板中${}内可以使用变量，动态填充；
    console.log('我定义的字符串变量someString3的值是：',someString3);    
    
	var numberArray = [3, 5, 9]; // 数组，以罗列的方式定义数据,用','号分隔
    var stringArray = ['first string','another string'];// 一组字符串
    console.log('数组numberArray的第一个值是：', numberArray[0] ); // 读取数组中的第一个值，数组中值的序号从0开始
    console.log('数组numberArray的第二个值是：', numberArray[1] ); // 读取数组中的第二个值
    
    var someObject = { age: 36, name:'panJingJing' }; // 对象（以描述的方式定义数据，每个描述项，叫对象的属性，属性名也叫键名，属性值也叫值）
    console.log('对象someObject的age属性的值是：', someObject.age); // 读取对象中的属性age的值
    console.log('对象someObject的name属性的值是：', someObject.name); // 读取对象中的属性name的值

	isTrue = false; // 修改值
	console.log('我把第一行定义的变量isTrue的值改成了:', isTrue); // 再次读取isTrue
	someObject.age = 18;
	console.log('我把前面定义的变量someObject的属性age的值改成了:', someObject.age); // 再次读取someObject.age
    
但如果我们计算1+2+3....+1000, 一直加到1000的数时，如果都输入，就过于低效了，于是高级语言里提供了一些**语句**，用来动态处理这样的问题，语句有两种，循环语句和条件语句；

## 循环语句

 1. for循环 （最常用）
	格式：for ( 起始条件; 结束每件; 递增条件 )  { 每次循环执行的程序 }
	打开控制台，执行下面程序：
	
	    var i = 0;
		for ( i = 0; i < 100; i = i + 1 )  {
		     console.log(`程序执行第${i+1}步，此步中i的值为:${i}`);
		}

 2. while循环 (不常用)
	 格式: while (循环的条件) { 每次循环执行的程序 }
	 
	    var i = 0;
	    while ( i < 100 ) {
		    console.log(`程序执行第${i+1}步，此步中i的值为:${i}`);
		    i = i + 1;
		}
		
 3. for in 循环 （通常用来读取object的属性名，也叫键名）
 
		  var obj = { age: 36, name: 'pan jing jing', address:'南通' };
		  var propName = '';
		  for (propName in obj) {
		      console.log( `读取到属性名为: ${propName}, 值为：${obj[propName]}`);
		  }

## 条件语句

格式：
if ( 表达式 ) { 
	第一种情况的处理程序 
 } else if (表达式) {
    另外一种情况的处理程序
 } else (表达式) {
    除以上情况这外的情况的处理程序
 }
 
	var score = 90;
	if (score >= 90) {
		console.log('优秀');
	} else if (score > 70) {
		console.log('中等');	
	} else if (score > 60) {
		console.log('及格');
	} else {
		console.log('不及格');
	}
	// 程序输出'优秀'
	

	
## 练习题

1，自然数1到1000的和是多少？
2，自然数1到1000中，能被3整除的数的和是多少?



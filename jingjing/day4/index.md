
<meta charset="utf-8">

# 从头开始

   亲爱的晶晶同学，第三节课，我们来全面了解三种主要数据类型的处理操作，数据的处理，一般有：增、删、改、查；

# 第四天

深入数据处理；

## 字符串处理

 1. 查

	    var someString = '这是一段字符串(2018-07-11)' ;
	    console.log('取出从第3个到第6个之间的字符：', someString.substring(3, 6)); 
    	console.log('从第3个字符开始，取出3个字符：', someString.substr(3, 3));  
    	// sub和substring功能相似
    	console.log('查出"一段"所在位置:', someString.indexOf('一段'),"(序号从0开始)");
    	// 用正则表达式查询（正则表达式，是一个功能强大的动态查询表达式, 在javascript里用/.*/来创建正则表达式，两个/之间为表达式规则，如/\d{3}/用来查找3个数字；详见http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp）
		console.log('查出括号里的内容：', someString.match(/\((.*)\)/)[1]);
		// 正则表达式中可以用"("分组, 如"abc123abc".match(/abc(\d*)abc/) [1] 可以得到第一个括号内匹配的内容；因为"("已经用于表示特定分组，所以如果要查找括号就得使用字符转义,如"abc(abc)".match(/\(abc\));
		// 字符处理中最难和最强大的就是正则
		
 2. 增
	 
		var someString = '这是一段字符串'; 
		
	    var someString1 = someString + '【追加内容】'; 
	    console.log('在尾部追加字符：', someString1);
	    
	    var someString2 = someString.substring(0, 3) + '【插入内容】' + someString.substring(3);
	    console.log('在中间插入内容：', someString2);

 3. 删
	 
		var someString = '这是一段字符串';
		var someString1 = someString.substring(0, 3) + someString.substring(6)
		console.log('删除3-6字符：', someString1);

		var someString2 = someString.replace('一段', '');
		console.log('删除"一段"这两个字符：', someString2);
		
 4. 改
		
		var someString = '这是一段字符串(2018-07-11)（2018-08-09）';
		var someString1 = someString.replace('一段', '某段');
		console.log('replace', someString1);
		
		// 用正则表达式，进行更强大的修改
		console.log('正则修改日期格式:', someString.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$1年$2月$3日'));
		// 上面这句利用replace方法，第一个参数使用正则，第二个参数中的$1表示正则中第一个分组所匹配的mw内容，$2和$3依次是第二组和第三组内容; 正则下标'g'表示多次匹配，如果不写，就是只查找一次匹配
		

可以说字符串的所有操作中，最高深的就是正则表达式。

字符串参考手册见：http://www.w3school.com.cn/jsref/jsref_obj_string.asp

    

## 数组的处理

 1. 增
 
	    var arr = ['a', 'b', 'c'];
	    console.log('增加前:', arr);
	    arr.push('x'); // 在数组的尾部增加一个元素
	    arr.splice(1, 0, 'y'); // 在数组中间增加一个元素
		console.log('增加后:', arr);
		
 3. 删
	 
		 var arr = ['a', 'b', 'c'];
		 console.log('删除前:', arr);
		 arr.splice(1, 1); // 从1号位置开始，删除1个元素
		 console.log('删除后:', arr);
 4. 改
	 
		 var arr = ['a', 'b', 'c'];
		 console.log('改写前:', arr);
		 arr[1] = 'x'; // 将1号位置上的值改写成'x'
		 console.log('改写后:', arr);
		 
 5. 查
		
		var arr = ['a', 'b', 'c'];
		console.log('获取数组长度:', arr.length);
		console.log('获取1号位置上值:', arr[1]); // 序号从0开始，而非1

数组参考手册见：http://www.w3school.com.cn/jsref/jsref_obj_array.asp
		
	
## 对象的处理

 1. 增
	 
		 var obj = {};
		 console.log('增加前:', obj);
		 obj.a = 'a'; // 增加一个属性a
		 console.log('增加后:', obj);
		 
 2. 删
	 
		 var obj = { a: 'a' };
		 console.log('删除前:', obj);
		 delete obj.a; // 删除属性a
		 console.log('删除后:', obj)
		 
 3. 改
		
		var obj = { a: 'a' };
		console.log('改之前:', obj);
		obj.a = 'b'; // 改变值
		console.log('改之后:', obj);
		
 4. 查
	 
		 var obj = { a: 'a' };
		 console.log('obj属性a的值是:', obj.a);

各种高级程序语言中，最重要的三个数据处理，就是以上所列举的字符串、数组、对象的处理；


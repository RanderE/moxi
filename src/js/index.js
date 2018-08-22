jQuery(function($){
	//引入头部和尾部
	$('#bottom').load('../html/footer.html')

	// console.log($('#top'));

	//轮播图
		$('.bigbanner').myscroll({
		picEl: $('#move'), //图片父级，不传默认为banner内第1个div
		ctrlEl: $('#ctrl'), //控制条父级，包括小圆点和左右箭头，不传默认为banner内第2个div
		libs: true, //是否创建底部小圆点，true || false,不传默认true
		arrows: false, //是否创建左右箭头，true || false,不传默认true
		autoPlay: true, //是否自动播放，true || false,不传默认true
		time: 3000, //自动播放间隔时间，true || false,不传默认2000
		speed: 500, //图片切换速度，不传默认400
		effect: 'fade' //轮播的改变方式 top || left || fade，不传默认left

	});


	//img宽度改变
	$('.imgWidth').on('mouseover','li',function(){
		$(this).find('img').css({
			width:304,
			height:185
		});
	})
	$('.imgWidth').on('mouseout','li',function(){
		$(this).find('img').css({
			width:298,
			height:183
		});
	})

	//制作轮播图
	//main1
		let $m1banner = $('#main1 .lunbo');
		let $m1ul = $m1banner.find('ul');
		
		//设置初始化
		let m1index= 0;

		let m1len = $m1ul.children().length;
		

		$m1ul.append($m1ul.children().first().clone());


		$m1ul.css({width:$m1ul.children().length*$m1banner.innerWidth()});


			//设置分页
		let $m1page = $('<div></div>')

		 $m1page .addClass('page');
		 for(let i=0;i<m1len;i++){
		 	let $m1span = $('<span></span>');
		 	if(i===m1index){
		 		$m1span.addClass('active');
		 	}
		 	 $m1page .append($m1span);
		 }
		 $m1banner.append($m1page );


		 	//自动运行
		 let timer1 = setInterval(autoPlay1,2000);

		 $m1banner.on('mouseover',function(){
		 	clearInterval(timer1);
		 })

		 $m1banner.on('mouseout',function(){
		 	timer1 = setInterval(autoPlay1,2000);
		 })

		 $m1banner.on('click','img',function(){
		 	m1index = e.target.parent().parent().index();

		 	show1()
		 })

			//点击切换分页
		$m1banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m1index = $(this).index();

		 		show1();
		 	}
		 })

		 function autoPlay1(){
		 	m1index ++;

		 	show1();
		 }

		 

		 function show1(){
		 	if(m1index>m1len){
		 		$m1ul.css({left:0});
		 		m1index = 1;
		 	}else if(m1index<0){
		 		m1index = m1len-2;
		 	}

		 	$m1ul.animate({left:-m1index*$m1banner.innerWidth()});

		 	for(let i=0;i<m1len;i++){
		 		$m1page .find('span').eq(i).removeClass('active');
			 }

		 	if(m1index === m1len){
		 		$m1page .find('span').eq(0).addClass('active');
			 }else{
			 	$m1page .find('span').eq(m1index).addClass('active');
			 }
		 }


	//main2
		let $m2banner = $('#main2 .lunbo');
		let $m2ul = $m2banner.find('ul');
		
		//设置初始化
		let m2index= 0;

		let m2len = $m2ul.children().length;
		

		$m2ul.append($m2ul.children().first().clone());


		$m2ul.css({width:$m2ul.children().length*$m2banner.innerWidth()});

		let $m2page = $('<div></div>')

		 $m2page .addClass('page');
		 for(let i=0;i<m2len;i++){
		 	let $m2span = $('<span></span>');
		 	if(i===m2index){
		 		$m2span.addClass('active');
		 	}
		 	 $m2page .append($m2span);
		 }
		 $m2banner.append($m2page );

		 let timer2 = setInterval(autoPlay2,2000);

		 $m2banner.on('mouseover',function(){
		 	clearInterval(timer2);
		 })

		 $m2banner.on('mouseout',function(){
		 	timer2 = setInterval(autoPlay2,2000);
		 })

		 $m2banner.on('click','img',function(){
		 	m2index = e.target.parent().parent().index();

		 	show2()
		 })

			//点击切换分页
		$m2banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m2index = $(this).index();

		 		show2();
		 	}
		 })



		 function autoPlay2(){
		 	m2index ++;

		 	show2();
		 }

		 

		 function show2(){
		 	if(m2index>m2len){
		 		$m2ul.css({left:0});
		 		m2index = 1;
		 	}else if(m2index<0){
		 		m2index = m2len-2;
		 	}

		 	$m2ul.animate({left:-m2index*$m2banner.innerWidth()});

		 	for(let i=0;i<m2len;i++){
		 		$m2page .find('span').eq(i).removeClass('active');
			 }

		 	if(m2index === m2len){
		 		$m2page .find('span').eq(0).addClass('active');
			 }else{
			 	$m2page .find('span').eq(m2index).addClass('active');
			 }
		 }
	//main3
		let $m3banner = $('#main3 .lunbo');
		let $m3ul = $m3banner.find('ul');
		
		//设置初始化
		let m3index= 0;

		let m3len = $m3ul.children().length;
		

		$m3ul.append($m3ul.children().first().clone());


		$m3ul.css({width:$m3ul.children().length*$m3banner.innerWidth()});

		let $m3page = $('<div></div>')

		 $m3page .addClass('page');
		 for(let i=0;i<m3len;i++){
		 	let $m3span = $('<span></span>');
		 	if(i===m3index){
		 		$m3span.addClass('active');
		 	}
		 	 $m3page .append($m3span);
		 }
		 $m3banner.append($m3page );

		 let timer3 = setInterval(autoPlay3,2000);

		 $m3banner.on('mouseover',function(){
		 	clearInterval(timer3);
		 })

		 $m3banner.on('mouseout',function(){
		 	timer3 = setInterval(autoPlay3,2000);
		 })

		 $m3banner.on('click','img',function(){
		 	m3index = e.target.parent().parent().index();

		 	show3()
		 })

			//点击切换分页
		$m3banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m3index = $(this).index();

		 		show3();
		 	}
		 })


		 function autoPlay3(){
		 	m3index ++;

		 	show3();
		 }

		 

		 function show3(){
		 	if(m3index>m3len){
		 		$m3ul.css({left:0});
		 		m3index = 1;
		 	}else if(m3index<0){
		 		m3index = m3len-2;
		 	}

		 	$m3ul.animate({left:-m3index*$m3banner.innerWidth()});

		 	for(let i=0;i<m3len;i++){
		 		$m3page .find('span').eq(i).removeClass('active');
			 }

		 	if(m3index === m3len){
		 		$m3page .find('span').eq(0).addClass('active');
			 }else{
			 	$m3page .find('span').eq(m3index).addClass('active');
			 }
		 }
	//main4
		let $m4banner = $('#main4 .lunbo');
		let $m4ul = $m4banner.find('ul');
		
		//设置初始化
		let m4index= 0;

		let m4len = $m4ul.children().length;
		

		$m4ul.append($m4ul.children().first().clone());


		$m4ul.css({width:$m4ul.children().length*$m4banner.innerWidth()});

		let $m4page = $('<div></div>')

		 $m4page .addClass('page');
		 for(let i=0;i<m4len;i++){
		 	let $m4span = $('<span></span>');
		 	if(i===m4index){
		 		$m4span.addClass('active');
		 	}
		 	 $m4page .append($m4span);
		 }
		 $m4banner.append($m4page );

		 let timer4 = setInterval(autoPlay4,2000);

		 $m4banner.on('mouseover',function(){
		 	clearInterval(timer4);
		 })

		 $m4banner.on('mouseout',function(){
		 	timer4 = setInterval(autoPlay4,2000);
		 })

		 $m4banner.on('click','img',function(){
		 	m4index = e.target.parent().parent().index();

		 	show4()
		 })

			//点击切换分页
		$m4banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m4index = $(this).index();

		 		show4();
		 	}
		 })



		 function autoPlay4(){
		 	m4index ++;

		 	show4();
		 }

		 

		 function show4(){
		 	if(m4index>m4len){
		 		$m4ul.css({left:0});
		 		m4index = 1;
		 	}else if(m4index<0){
		 		m4index = m4len-2;
		 	}

		 	$m4ul.animate({left:-m4index*$m4banner.innerWidth()});

		 	for(let i=0;i<m4len;i++){
		 		$m4page .find('span').eq(i).removeClass('active');
			 }

		 	if(m4index === m4len){
		 		$m4page .find('span').eq(0).addClass('active');
			 }else{
			 	$m4page .find('span').eq(m4index).addClass('active');
			 }
		 }
	//main5
		let $m5banner = $('#main5 .lunbo');
		let $m5ul = $m5banner.find('ul');
		
		//设置初始化
		let m5index= 0;

		let m5len = $m5ul.children().length;
		

		$m5ul.append($m5ul.children().first().clone());


		$m5ul.css({width:$m5ul.children().length*$m5banner.innerWidth()});

		let $m5page = $('<div></div>')

		 $m5page .addClass('page');
		 for(let i=0;i<m5len;i++){
		 	let $m5span = $('<span></span>');
		 	if(i===m5index){
		 		$m5span.addClass('active');
		 	}
		 	 $m5page .append($m5span);
		 }
		 $m5banner.append($m5page );

		 let timer5 = setInterval(autoPlay5,2000);

		 $m5banner.on('mouseover',function(){
		 	clearInterval(timer5);
		 })

		 $m5banner.on('mouseout',function(){
		 	timer5 = setInterval(autoPlay5,2000);
		 })

		 $m5banner.on('click','img',function(){
		 	m5index = e.target.parent().parent().index();

		 	show5()
		 })

			//点击切换分页
		$m5banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m5index = $(this).index();

		 		show5();
		 	}
		 })


		 function autoPlay5(){
		 	m5index ++;

		 	show5();
		 }

		 

		 function show5(){
		 	if(m5index>m5len){
		 		$m5ul.css({left:0});
		 		m5index = 1;
		 	}else if(m5index<0){
		 		m5index = m5len-2;
		 	}

		 	$m5ul.animate({left:-m5index*$m5banner.innerWidth()});

		 	for(let i=0;i<m5len;i++){
		 		$m5page .find('span').eq(i).removeClass('active');
			 }

		 	if(m5index === m5len){
		 		$m5page .find('span').eq(0).addClass('active');
			 }else{
			 	$m5page .find('span').eq(m5index).addClass('active');
			 }
		 }
	//main6
		let $m6banner = $('#main6 .lunbo');
		let $m6ul = $m6banner.find('ul');
		
		//设置初始化
		let m6index= 0;

		let m6len = $m6ul.children().length;
		

		$m6ul.append($m6ul.children().first().clone());


		$m6ul.css({width:$m6ul.children().length*$m6banner.innerWidth()});

		let $m6page = $('<div></div>')

		 $m6page .addClass('page');
		 for(let i=0;i<m6len;i++){
		 	let $m6span = $('<span></span>');
		 	if(i===m6index){
		 		$m6span.addClass('active');
		 	}
		 	 $m6page .append($m6span);
		 }
		 $m6banner.append($m6page );

		 let timer6 = setInterval(autoPlay6,2000);

		 $m6banner.on('mouseover',function(){
		 	clearInterval(timer6);
		 })

		 $m6banner.on('mouseout',function(){
		 	timer6 = setInterval(autoPlay6,2000);
		 })

		 $m6banner.on('click','img',function(){
		 	m6index = e.target.parent().parent().index();

		 	show6()
		 })

			//点击切换分页
		$m6banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m6index = $(this).index();

		 		show6();
		 	}
		 })


		 function autoPlay6(){
		 	m6index ++;

		 	show6();
		 }

		 

		 function show6(){
		 	if(m6index>m6len){
		 		$m6ul.css({left:0});
		 		m6index = 1;
		 	}else if(m6index<0){
		 		m6index = m6len-2;
		 	}

		 	$m6ul.animate({left:-m6index*$m6banner.innerWidth()});

		 	for(let i=0;i<m6len;i++){
		 		$m6page .find('span').eq(i).removeClass('active');
			 }

		 	if(m6index === m6len){
		 		$m6page .find('span').eq(0).addClass('active');
			 }else{
			 	$m6page .find('span').eq(m6index).addClass('active');
			 }
		 }
	//main7
		let $m7banner = $('#main7 .lunbo');
		let $m7ul = $m7banner.find('ul');
		
		//设置初始化
		let m7index= 0;

		let m7len = $m7ul.children().length;
		

		$m7ul.append($m7ul.children().first().clone());


		$m7ul.css({width:$m7ul.children().length*$m7banner.innerWidth()});

		let $m7page = $('<div></div>')

		 $m7page .addClass('page');
		 for(let i=0;i<m7len;i++){
		 	let $m7span = $('<span></span>');
		 	if(i===m7index){
		 		$m7span.addClass('active');
		 	}
		 	 $m7page .append($m7span);
		 }
		 $m7banner.append($m7page );

		 let timer7 = setInterval(autoPlay7,2000);

		 $m7banner.on('mouseover',function(){
		 	clearInterval(timer7);
		 })

		 $m7banner.on('mouseout',function(){
		 	timer7 = setInterval(autoPlay7,2000);
		 })

		 $m7banner.on('click','img',function(){
		 	m7index = e.target.parent().parent().index();

		 	show7()
		 })

			//点击切换分页
		$m7banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m7index = $(this).index();

		 		show7();
		 	}
		 })
		

		 function autoPlay7(){
		 	m7index ++;

		 	show7();
		 }

		 

		 function show7(){
		 	if(m7index>m7len){
		 		$m7ul.css({left:0});
		 		m7index = 1;
		 	}else if(m7index<0){
		 		m7index = m7len-2;
		 	}

		 	$m7ul.animate({left:-m7index*$m7banner.innerWidth()});

		 	for(let i=0;i<m7len;i++){
		 		$m7page .find('span').eq(i).removeClass('active');
			 }

		 	if(m7index === m7len){
		 		$m7page .find('span').eq(0).addClass('active');
			 }else{
			 	$m7page .find('span').eq(m7index).addClass('active');
			 }
		 }
	//main8
		let $m8banner = $('#main8 .lunbo');
		let $m8ul = $m8banner.find('ul');
		
		//设置初始化
		let m8index= 0;

		let m8len = $m8ul.children().length;
		

		$m8ul.append($m8ul.children().first().clone());


		$m8ul.css({width:$m8ul.children().length*$m8banner.innerWidth()});

		let $m8page = $('<div></div>')

		 $m8page .addClass('page');
		 for(let i=0;i<m8len;i++){
		 	let $m8span = $('<span></span>');
		 	if(i===m8index){
		 		$m8span.addClass('active');
		 	}
		 	 $m8page .append($m8span);
		 }
		 $m8banner.append($m8page );

		 let timer8 = setInterval(autoPlay8,2000);

		 $m8banner.on('mouseover',function(){
		 	clearInterval(timer8);
		 })

		 $m8banner.on('mouseout',function(){
		 	timer8 = setInterval(autoPlay8,2000);
		 })

		 $m8banner.on('click','img',function(){
		 	m8index = e.target.parent().parent().index();

		 	show8()
		 })

			//点击切换分页
		$m8banner.on('click','span',function(e){
		 	if($(this).closest('div').hasClass('page') === true){
		 		m8index = $(this).index();

		 		show8();
		 	}
		 })


		 function autoPlay8(){
		 	m8index ++;

		 	show8();
		 }

		 

		 function show8(){
		 	if(m8index>m8len){
		 		$m8ul.css({left:0});
		 		m8index = 1;
		 	}else if(m8index<0){
		 		m8index = m8len-2;
		 	}

		 	$m8ul.animate({left:-m8index*$m8banner.innerWidth()});

		 	for(let i=0;i<m8len;i++){
		 		$m8page .find('span').eq(i).removeClass('active');
			 }

		 	if(m8index === m8len){
		 		$m8page .find('span').eq(0).addClass('active');
			 }else{
			 	$m8page .find('span').eq(m8index).addClass('active');
			 }
		 }
});

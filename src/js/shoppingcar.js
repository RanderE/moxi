require(['config'],function(){
	require(['jquery','common'],function($){
		jQuery(function($){

			//引入头尾
			$('#mfoot').load('footer.html')
			$('#mhead').load('top.html')	

			//cookie获取数据
			var $carContent = $('.carContent');

			var goodslist = Cookie.get('goodslist');;

			if(goodslist.length<=0){
				goodslist = [];
				$('#shoppingCar').css({display:'none'})
				$('#nogoods').css({display:'block'})
			}else{
				goodslist = JSON.parse(goodslist);
				$('#shoppingCar').css({display:'block'})
				$('#nogoods').css({display:'none'})
				
				console.log(goodslist);

			}

			render();

			//渲染页面
			function render(){

				var total = 0;
				console.log(goodslist);
				$carContent.html(goodslist.map(function(good){
					
					total += good.price * good.qty;

					return `<ul data-guid="${good.id}">
							<li class="fl"><img src="${good.imgurl}" alt="" /></li>
							<li><h3 class="fl">${good.name}</h3></li>
							<li><span class="price">${good.price}</span></li>
							<li><button class="jian">-</button>
								<input type="text" value="${good.qty}" class="number">
								<button class="sum">+</button>
							</li>
							<li><span class="currTotalPrice">${(good.price*good.qty).toFixed(2)}元</span></li>
							<li>
								<a href="#">移入收藏夹</a>
								<br />
								<span class="delBtn">删除</span>
							</li>
					</ul>`



				}))

 
				$('#totalPrice').html( total.toFixed(2));


					if(goodslist.length<=0){
					$('#shoppingCar').css({display:'none'});
					$('#nogoods').css({display:'block'});
				}else if(goodslist.length>0){
					$('#nogoods').css({display:'none'});
					$('#shoppingCar').css({display:'block'});
				}


				// 删除当前的商品
				$('ul').on('click','span',function(){
					
					if($(this).hasClass('delBtn')){
						var currentLi = $(this).closest('ul');

						var guid = currentLi.attr('data-guid');

						console.log(goodslist);

						for(var i=0;i<goodslist.length;i++){
							if(goodslist[i].id === guid){
								console.log(goodslist[i].id)
								goodslist.splice(i,1);
								break;
							}
						}

					Cookie.set('goodslist',JSON.stringify(goodslist),{path:'/'});

					console.log(goodslist);	
					// 重新渲染页面

					render();	
					}

					$('#totalBtn').on('click',function(){
					// 清空cookie
						Cookie.remove('goodslist');

						// 清空goodslist数组
						goodslist = [];

						render();


						e.preventDefault();

					})

				})

				$('ul').on('click','button',function(){
					if($(this).hasClass('sum')){
						$(this).prev().val(parseInt($(this).prev().val())+1);
						var qty = $(this).prev().val();
						var currentPrice = $(this).closest('li').prev().find('span').html();

						$(this).closest('li').next().find('span').html(`${(currentPrice*qty).toFixed(2)}元`);

						totalSum();

					}else if($(this).hasClass('jian')){
						if($(this).next().val()<=1){
							$(this).next().val(1);
							alert('商品数必须大于1')
						}else{
							$(this).next().val($(this).next().val()-1);
							var qty = $(this).next().val();
							var currentPrice = $(this).closest('li').prev().find('span').html();
							console.log(qty);
							$(this).closest('li').next().find('span').html(`${(currentPrice*qty).toFixed(2)}元`);

							totalSum();

						}
					}
				})

			}

			//设置添加和减少商品
			var $jian = $('.jian');
			var $number = $('.number');
			var $sum = $('.sum');

			



			// console.log($('.currTotalPrice').eq(0).html().slice(0,-1))

			//加总
			function totalSum(){
				var changeTotal = 0;
				for(var i=0;i<$('.carContent').children().length;i++){
					console.log(Number($('.currTotalPrice').eq(i).html().slice(0,-1)));
					changeTotal += Number($('.currTotalPrice').eq(i).html().slice(0,-1));
				}

				changeTotal = changeTotal.toFixed(2);
				$('#totalPrice').html(changeTotal);
			}

			//引入数据库数据生成商品列表切换
			//数据
			var res;
			 $.ajax({  
			        type:"POST",  
			        url:'../api/goodslist.php?',  
			        async:false, 
			        dataType:"json",  
			        //传递页面索引  
			        success:function(data){   
			        	res = data;
			        }  
      			});  

			console.log(res.data);
			 var data1 = res.data.slice(0,6)
			//生成ul
			let $firUl = $('.firUl') 
			 $firUl.html(data1.map(item=>{
			 	return `<li class="fl" data-guid="${item.id} >
			 			<a href="#">
							<img src="${item.imgurl}" alt="" />
						</a>
						</br>
						<a href="#" class="page">${item.post}${item.name}</a>
						<h4>${item.price}元</h4>
							
			 			</li>`
			 }))

			var data2 = res.data.slice(7,13);
			let $secUl = $('.secUl') 
			 $secUl.html(data2.map(item=>{
			 	return `<li data-guid="${item.id}" class="fl">
			 			<a href="#">
							<img src="${item.imgurl}" alt="" />
						</a>
						</br>
						<a href="#" class="page">${item.post}${item.name}</a>
						<h4>${item.price}元</h4>
							
			 			</li>`
			 }))

			var data3 = res.data.slice(14,20)
			 let $thrUl = $('.thrUl') 
			 $thrUl.html(data3.map(item=>{
			 	return `<li data-guid="${item.id}"  class="fl">
			 			<a href="#">
							<img src="${item.imgurl}" alt="" />
						</a>
						</br>
						<a href="#" class="page">${item.post}${item.name}</a>
						<h4>${item.price}元</h4>
							
			 			</li>`
			 }))


			//轮播
			let index = 1,
	        instance = $('.bannerUl')[0].offsetWidth,
	        oldlen = $('.bannerUl').length;

	        console.log($('.bannerUl')[0]);

	        $('.totalList').append($(".bannerUl").eq(0).clone()).prepend($(".bannerUl").eq(oldlen - 1).clone());

	        let len = $('.totalList').children().length;

		   	$('.totalList').css({
		   		width: instance*len,
		   		left: -instance
		   	});

		    $('.nextBtn').on('click', function(){

		        index++;
		        console.log(len);
		    	$('.totalList').stop().animate({left: -instance * index}, 400, function(){
		            // 当滑动到最后(复制到最后的第一张图位置)，等动画完成之后，初始化整个图片滚动层容器的位置
		            if( index>=len - 1 ){
		                index = 1;
		                $('.totalList').css({
		                	left: -instance * index
		                });
		            }
		        });
		        
		    });


		    $('.prevBtn').on('click', function(){

		        index--;
		        $('.totalList').stop().animate({left: -instance * index}, 400, function(){
		            // 当滑动到前面(复制到最前面的最后一张图位置)，等动画完成之后，初始化整个图片滚动层容器的位置
		            if( index <= 0 ){
		                index = len - 2;
		                $('.totalList').css({
		                	left: -instance*index,
		                });
		            }
		        });
		        
		    });

		    // 自动播放
		    function autoPlay(){

		        autoplay = setInterval(function(){

		            
		            $('.totalList').stop().animate({left: -instance * index}, 400, function(){
		                if( index == len - 1 ){
		                    index = 1;
		                    $('.totalList').css({left: -instance * index});
		                }

		           	index++;
		            });

		        }, 3000);    
		    };

		    autoPlay();


		});
	});
});


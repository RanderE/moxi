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

			


		});
	});
});


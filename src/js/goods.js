require(['config'],function(){
	require(['jquery','common'],function($){
		jQuery(function($){

			//引入头尾
			$('#mfoot').load('footer.html')
			$('#mhead').load('top.html')	

			//接收参数
			var param = decodeURI(location.search);
			console.log(param);

			param = param.slice(1);

			param = param.split('&');



			var obj = {};

			param.map(function(item){
				var arr = item.split('=');
				obj[arr[0]] = arr[1];
				//obj[id] = 003
			})

			console.log(obj.price);

			var nowprice = obj.price.slice(0,-1);

			console.log(obj.price.slice(0,-1));
			$('#small_box').append($(`<img src="${obj.src}">`))
			var $bigImg = $(`<img src="${obj.src}" width="800">`).addClass('bigImg')
			$('#big_box').append($bigImg);

			$('.lunboImg').append($(`<li><img src="${obj.src}" width="81"></li>`))
			$('.proname').append(obj.name);

			$('.nowp').append(nowprice);
			//放大镜

			var $floatb = $('#float_box');
			var $bigBox = $('#big_box');
			var $demo = $('#demo'); 
			
			zoom();

			function zoom(){

				$('#small_box').on('mouseover',function(){
					$floatb.show();
					$bigBox.show();

				}).on('mouseout',function(){
					$floatb.hide();
					$bigBox.hide();
				})
				.on('mousemove',function(e){
					//设定一个事件源对象
					var left = e.pageX - $demo.offset().left - $floatb.outerWidth()/2;
					var top = e.pageY - $demo.offset().top - $floatb.outerWidth()/2;

					//设定边界范围
					if(left<0){
						left = 0;
					}else if(left>$demo.outerWidth()-$floatb.outerWidth()){
						left = $demo.outerWidth()-$floatb.outerWidth()
					}

					if(top<0){
						top = 0;
					}else if(top>$demo.outerHeight()-$floatb.outerHeight()){
						top = $demo.outerHeight()-$floatb.outerHeight()
					}

					$floatb.css({
						left:left,
						top:top
					})

					//求得当前位置的比值
					var percentX = left / ($demo.outerWidth()-$floatb.outerWidth());
					var percentY = top / ($demo.outerHeight()-$floatb.outerHeight());

					//左负右正
					$('.bigImg').css({
						left:-percentX * ($('.bigImg').outerWidth() - $bigBox.outerWidth()),
						top:-percentY* ($('.bigImg').outerHeight() - $bigBox.outerHeight())
					})
				})
			}

			//商品标签切换
			var $post1 = $('.send1');
			var $post2 = $('.send2');
			var $post3 = $('.send3');
			var $post4 = $('.send4');
			
			var $postnew1 = $('.postnew1');
			var $postnew2 = $('.postnew2');
			var $postnew3 = $('.postnew3');
			var $postnew4 = $('.postnew4');

			$('.send1').on('click',function(){
				$post2.css({border:'1px solid #999'});
				$post3.css({border:'1px solid #999'});
				$post4.css({border:'1px solid #999'});				
				$post1.css({border:'1px solid red'})				
				$postnew2.css({display:'none'});
				$postnew3.css({display:'none'});
				$postnew4.css({display:'none'});
				$postnew1.css({display:'block'});
			})

			$('.send2').on('click',function(){
				$post1.css({border:'1px solid #999'});
				$post3.css({border:'1px solid #999'});
				$post4.css({border:'1px solid #999'});				
				$post2.css({border:'1px solid red'})				
				$postnew1.css({display:'none'});
				$postnew3.css({display:'none'});
				$postnew4.css({display:'none'});
				$postnew2.css({display:'block'});
			})

			$('.send3').on('click',function(){
				$post1.css({border:'1px solid #999'});
				$post2.css({border:'1px solid #999'});
				$post4.css({border:'1px solid #999'});				
				$post3.css({border:'1px solid red'})				
				$postnew1.css({display:'none'});
				$postnew2.css({display:'none'});
				$postnew4.css({display:'none'});
				$postnew3.css({display:'block'});
			})

			$('.send4').on('click',function(){
				$post1.css({border:'1px solid #999'});
				$post2.css({border:'1px solid #999'});
				$post3.css({border:'1px solid #999'});				
				$post4.css({border:'1px solid red'})				
				$postnew1.css({display:'none'});
				$postnew2.css({display:'none'});
				$postnew3.css({display:'none'});
				$postnew4.css({display:'block'});
			})

			//详细信息的tab转换

			var $productBtn = $('.productBtn');
			var $pinlunBtn	= $('.pinlunBtn');
			var $FAQBtn = $('.FAQBtn')

			var $product = $('#product');
			var $pinlun = $('#pinlun');
			var $FAQ = $('#FAQ')
			$productBtn.on('click',function(){
				$pinlunBtn.css({
					background:'#FAFAFA',
					color:'#333'
				});
				$FAQBtn.css({
					background:'#FAFAFA',
					color:'#333'
				});
				$productBtn.css({
					background:'#F86F76',
						color:'#fff'
				});

				$FAQ.css({display:'none'});
				$pinlun.css({display:'none'});
				$product.css({display:'block'});
			})

			$pinlunBtn.on('click',function(){
				$productBtn.css({
					background:'#FAFAFA',
					color:'#333'
				});
				$FAQBtn.css({
					background:'#FAFAFA',
					color:'#333'
				});
				$pinlunBtn.css({
					background:'#F86F76',
						color:'#fff'
				});

				$FAQ.css({display:'none'});
				$product.css({display:'none'});
				$pinlun.css({display:'block'});
			})

			$FAQBtn.on('click',function(){
				$pinlunBtn.css({
					background:'#FAFAFA',
					color:'#333'
				});
				$productBtn.css({
					background:'#FAFAFA',
					color:'#333'
				});
				$FAQBtn.css({
					background:'#F86F76',
						color:'#fff'
				});

				$pinlun.css({display:'none'});
				$product.css({display:'none'});
				$FAQ.css({display:'block'});
			})

			//数量的增加和减少
			var $jian = $('.jian');
			var $number = $('.number');
			var $sum = $('.sum');

			console.log(666);
			$jian.on('click',function(){
				console.log(($number).val());
				if(($number).val()<=1){
					$number.val(1);
				}else{
					$number.val($number.val()-1);
				}

			})
			$sum.on('click',function(){
				$number.val(parseInt($number.val())+1);
			})			

			//添加进购物车



			var $add = $('#add');

			$add.on('click',function(){
				var goodslist = Cookie.get('goodslist')

				if(goodslist === ''){
					goodslist = []
				}else{
					goodslist = JSON.parse(goodslist);
				}

				//判断当前商品是否存在
				var guid = obj.id

				var currentGoods = goodslist.filter(function(g){
					return g.id === obj.id
				})

				if(currentGoods.length>0){
					currentGoods[0].qty = parseInt(currentGoods[0].qty)+parseInt($number.val());
				}else{
					var good = {
						id:obj.id,
						imgurl:obj.src,
						name:obj.name,
						price:nowprice,
						qty:$number.val()
					}
					console.log($number.val())
					goodslist.push(good);
				}

				console.log(goodslist);			
				Cookie.set('goodslist',JSON.stringify(goodslist),{path:'/'});

				alert('操作成功');


			})

		});
	});
});


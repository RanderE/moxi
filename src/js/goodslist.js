require(['config'],function(){
	require(['jquery'],function($){
		jQuery(function($){

			//引入头尾
			$('#mfoot').load('footer.html')
			$('#mhead').load('top.html')

			//切换图标
			$('.fir').on('mouseover',function(){
				$('#arrow1').removeClass().addClass('glyphicon glyphicon-chevron-up');
			})
			$('.fir').on('mouseout',function(){
				$('#arrow1').removeClass().addClass('glyphicon glyphicon-chevron-down');
			})
			$('.sec').on('mouseover',function(){
				$('#arrow2').removeClass().addClass('glyphicon glyphicon-chevron-up');
			})
			$('.sec').on('mouseout',function(){
				$('#arrow2').removeClass().addClass('glyphicon glyphicon-chevron-down');
			})

			//引入数据

				var temp="";  
   				var total=0;
				var _pageNo=1;
				var _qty=40;
				var $datalist = $('#goodslistMenu');
				let res;


				render();
			    $.ajax({  
			        type:"POST",  
			        url:'../api/goodslist.php?&pageNo='+_pageNo,  
			        async:false, 
			        dataType:"json",  
			        data:{pageNo:_pageNo},
			        //传递页面索引  
			        success:function(data){   
			        	res = data;
			        }  
      			});  

      			let dataMenu = res.data;
      			console.log(dataMenu);
			    $datalist.on('click','span',function(e){
			    	if($(this).hasClass('num')){
			    		_pageNo = $(this).html();

			    		render();
			    		
			    	}
			    });

			    //获取数据及渲染
		    	function render(){
			    	$.ajax({  
				        type:"POST",  
				        url:'../api/goodslist.php?&pageNo='+_pageNo,  
				        async:false, 
				        dataType:"json",  
				        data:{pageNo:_pageNo},
				        //传递页面索引  
				        success:function(data){   
				        	let res = data;
				        	
				        	//渲染
				        	$datalist.html('');

							let $ul = $('<ul></ul>') 
								 $ul.html(res.data.map(item=>{
								 	return `<li data-guid="${item.id}">
								 			<a href="#">
												<img src="${item.imgurl}" alt="" />
											</a>
											<h4>${item.price}元</h4>
											<span class="cost">/${item.cost}折</span>
											<br />
											<a href="#" class="page">${item.post}${item.name}</a>	
								 			</li>`
								 }))
							$datalist.append($ul);

							//计算分页
							let pageLen = Math.ceil(res.total/res.qty);
							
							let $partPage = $('<div></div>');
							$partPage.addClass('partPage');

							let $prev = $('<span></span>')
							$prev.addClass('prev');
							$prev.html('上一页');
							$partPage.append($prev);

							for(var i=0;i<pageLen;i++){
								let $part = $('<span></span>');
								$part.html(i+1);
								$part.addClass('num');
								//高亮
								if(i===res.pageNo-1){
									$part.addClass('active num');
								}
								$partPage.append($part);
							}
							let $next = $('<span></span>')
							$next.addClass('prev');
							$next.html('下一页');
							$partPage.append($next);

							let $zhushi = $('<span></span>')
							$zhushi.addClass('zhushi');
							$zhushi.html(`共${pageLen}页`);
							$partPage.append($zhushi);

							let $tiaozhuan1 = $('<span></span>')
							$tiaozhuan1.addClass('tiaozhuan1');
							$tiaozhuan1.html('跳转到第');
							$partPage.append($tiaozhuan1);

							let $tiaozhuan2 = $('<input type="text" value="1"/>')
							$tiaozhuan2.addClass('tiaozhuan2');
							$partPage.append($tiaozhuan2);

							let $tiaozhuan3 = $('<span></span>')
							$tiaozhuan3.addClass('zhushi');
							$tiaozhuan3.html('页');
							$partPage.append($tiaozhuan3);	

							let $tiaozhuan4 = $('<input type="button" value="确定"/>')
							$tiaozhuan4.addClass('tiaozhuan4');
							$partPage.append($tiaozhuan4);			

							$datalist.append($partPage);



				        }  			    	
			    	});
				}

				//左边的列表
				$('#goodslistSale').html()
			    let $lsul = $('<ul></ul>');
			    let lsres = res.data.slice(0,10);
			    console.log(lsres);
				$lsul.html(lsres.map(item=>{
			 	return `<li data-guid="${item.id}">
			 			<a href="#">
							<img src="${item.imgurl}" alt="" />
						</a>
						<a href="#" class="page">${item.name}</a>
						<br />
						<h4>${item.price}元</h4>	
			 			</li>`

				 }))
				$('#goodslistSale').html($lsul);



				//价格排序
				$('#price').on('click',function(){
					let pdatalist = dataMenu.sort(function(a,b){
						return a.price - b.price;
					})
					let res = pdatalist;
					shengcheng()
					console.log(pdatalist);
				})
				console.log($('#price'));


				//时间排序
				$('#time').on('click',function(){
					let tdatalist = dataMenu.sort(function(a,b){
						return Date.parse(a.time)-Date.parse(b.time);
					})
					let res = tdatalist;
					shengcheng()
					console.log(tdatalist);
				})







				// var tdatalist = dataMenu.time.sort(function(a,b){
    //                 if(a.time < b.time) return -1;
    //                 if(a.time > b.time) return 1;
    //                 return 0;
				// })

			// 	console.log(tdatalist);
			// 	let $ul = $('<ul></ul>') 
			// 		 $ul.html(data.map(item=>{
			// 		 	return `<li>
			// 		 			<a href="#">
			// 						<img src="${item.imgurl}" alt="" />
			// 					</a>
			// 					<h4>${item.price}元</h4>
			// 					<span class="cost">/${item.cost}折</span>
			// 					<br />
			// 					<a href="#" class="page">${item.post}${item.name}</a>	
			// 		 			</li>`
			// 		 }))
			// 	$('#goodslistMenu').append($ul);	
			// })
				function shengcheng(){
		        	//渲染
		        	$datalist.html('');

					let $ul = $('<ul></ul>') 
						 $ul.html(res.data.map(item=>{
						 	return `<li data-guid="${item.id}">
						 			<a href="#">
										<img src="${item.imgurl}" alt="" />
									</a>
									<h4>${item.price}元</h4>
									<span class="cost">/${item.cost}折</span>
									<br />
									<a href="#" class="page">${item.post}${item.name}</a>	
						 			</li>`
						 }))
					$datalist.append($ul);
							//计算分页
							let pageLen = Math.ceil(res.total/res.qty);
							
							let $partPage = $('<div></div>');
							$partPage.addClass('partPage');

							let $prev = $('<span></span>')
							$prev.addClass('prev');
							$prev.html('上一页');
							$partPage.append($prev);

							for(var i=0;i<pageLen;i++){
								let $part = $('<span></span>');
								$part.html(i+1);
								$part.addClass('num');
								//高亮
								if(i===res.pageNo-1){
									$part.addClass('active num');
								}
								$partPage.append($part);
							}
							let $next = $('<span></span>')
							$next.addClass('prev');
							$next.html('下一页');
							$partPage.append($next);

							let $zhushi = $('<span></span>')
							$zhushi.addClass('zhushi');
							$zhushi.html(`共${pageLen}页`);
							$partPage.append($zhushi);

							let $tiaozhuan1 = $('<span></span>')
							$tiaozhuan1.addClass('tiaozhuan1');
							$tiaozhuan1.html('跳转到第');
							$partPage.append($tiaozhuan1);

							let $tiaozhuan2 = $('<input type="text" value="1"/>')
							$tiaozhuan2.addClass('tiaozhuan2');
							$partPage.append($tiaozhuan2);

							let $tiaozhuan3 = $('<span></span>')
							$tiaozhuan3.addClass('zhushi');
							$tiaozhuan3.html('页');
							$partPage.append($tiaozhuan3);	

							let $tiaozhuan4 = $('<input type="button" value="确定"/>')
							$tiaozhuan4.addClass('tiaozhuan4');
							$partPage.append($tiaozhuan4);			

							$datalist.append($partPage);
				}

				//传参
				$datalist.on('click','li',function(){
					// console.log(src);
					var src = $(this).find('img').attr('src');
					var name = $(this).children('a.page').html();
					var price = $(this).children('h4').html();
					var id = $(this).attr('data-guid');

					var param = '';
					
					param =	`src=${src}&name=${name}&price=${price}&id=${id}`;

	    			window.location.href = 'goods.html?'+param;

				})	
			
		});
	});
});

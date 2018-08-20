require(['config'],function(){
	require(['jquery'],function($){
		jQuery(function($){

			//更换按钮的颜色,显示不同的页面
			console.log('更换颜色和显示4-40行');
			var $mailBtn = $('.mailBtn');
			var $phoneBtn = $('.phoneBtn');

			changeColor();
			function changeColor(){
				$mailBtn.css({
					backgroundColor:'#EC8D36',
					color:'white',
				});
				$phoneBtn.css({
					backgroundColor:'white',
					color:'black'
				});

				//显示下方的开关
				$('#formP').css({display:'none'});
				$('#formM').css({display:'block'});
			};

			$mailBtn.on('click',changeColor);

			$phoneBtn.on('click',function(){
				$phoneBtn.css({
					backgroundColor:'#EC8D36',
					color:'white'
			})
				$mailBtn.css({
					backgroundColor:'white',
					color:'black'
				});
				//显示下方的开关
				$('#formM').css({display:'none'});
				$('#formP').css({display:'block'});
			});

			//随机验证码
			var $pcode = $('#precknum');
			var $mcode = $('#mchecknum');
			var $pshowCode = $('#pshowCode');
			var $mshowCode = $('#mshowCode');
			var $pbtn = $('#plogin');
			var $mbtn = $('#mlogin');

			creatCode();

			$('.pchangeNum').on('click',creatCode);
			$('.mchangeNum').on('click',creatCode);

			$pbtn.on('click',panduan);
			$mbtn.on('click',panduan);

			function panduan(){
			// 获取输入的值
				if($mcode.val() === $mshowCode.html()){
					console.log($pshowCode.html());
					
				}else if($pcode.val() === $pshowCode.html()){

				}else {
					alert('信息填写有误');
				}
			}

			function creatCode(){
				var res = '';
				for(var i=0;i<4;i++){
					var num = parseInt(Math.random()*10);

					// 拼接
					res += num;
				}

				$pshowCode.html(res);
				$mshowCode.html(res);
			}


		});
	});
});



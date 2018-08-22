require(['config'],function(){
	require(['jquery'],function($){
		jQuery(function($){

			$('#mfoot').load('footer.html')
			$('#mhead').load('top.html')

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
			var $pcode = $('#pchecknum');
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
					console.log($mshowCode.html());
					
				}else if($pcode.val() === $pshowCode.html()){
					console.log($pshowCode.html());
				}else {
					alert('信息填写有误');
					return false;
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




			//邮箱/手机 注册及验证
			var $emailad = $('#emailad');
			var $mnickname = $('#mnickname');
			var $mlogpsw = $('#mlogpsw');
			var $mdblogpsw = $('#mdblogpsw');

			var $phonead = $('#phonead');
			var $plogpsw = $('#plogpsw');
			var $pdblogpsw = $('#pdblogpsw');


			//与数据库链接及注册
			$('#mlogin').on('click',function(){
				var _nickname = $mnickname.val();
				var _mail = $emailad.val();
				var _mpas = $mlogpsw.val();
				var _dmpas = $mdblogpsw.val();

				if(!/^[0-9a-z\u2E80-\u9FFF]+$/.test(_nickname)){
					alert('昵称输入有误')
					return false;
				}
				if(!/^[a-z0-9][\w\-\.]{2,29}@[a-z0-9\-]{2,67}(\.[a-z\u2E80-\u9FFF]{2,6})$/.test(_mail)){
					alert('邮箱格式有误')
					return false;					
				}
				if(!/^\S{6,}$/.test(_mpas)){
					alert('密码格式错误')
					return false;
				}if(!_dmpas === _mpas){
					alert('两次密码输入不一致')
					return false;
				}

				$.ajax({
					type:'get',
					url:'../api/check_email.php',
					data:{email:_mail},
					success:function(xhr){
						if(xhr === 'no'){
							console.log(xhr);
							alert('该邮箱已经被注册')
							return false;
						}else{
							$.ajax({
								type:'get',
								url:'../api/check_nickname.php',
								data:{nickname:_nickname},
								success:function(xhr){
									if(xhr === 'no'){
										console.log(xhr);
										alert('该用户名已经被注册')
										return false;
									}else{
										$.ajax({
											type:'post',
											url:'../api/register.php',
											data:{
												nickname:_nickname,
												email:_mail,
												mpassword:_mpas,
												ppassword:_mpas
											},
											success:alert('注册成功')
										});
									}
								}
							})
						}
					}
				})
			});

			$('#plogin').on('click',function(){
				var _phone =$phonead.val();
				var _ppas = $plogpsw.val();
				var _dppas = $pdblogpsw.val();

				if(!/^1[3-9]\d{9}$/.test(_phone)){
					alert('手机号不合法');
					return false;
				}
				if(!/^\S{6,}$/.test(_ppas)){
					alert('密码格式错误')
					return false;
				}if(!_dppas === _ppas){
					alert('两次密码输入不一致')
					return false;
				}

				$.ajax({
					type:'get',
					url:'../api/check_phone.php',
					data:{phone:_phone},
					success:function(xhr){
						if(xhr === 'no'){
							alert('该手机号已经被注册')
							return false;
						}else{
							$.ajax({
								type:'post',
								url:'../api/register.php',
								data:{
									mpassword:_ppas,
									ppassword:_ppas,
									phone:_phone
								},
								success:alert('注册成功')
							});							
						}
					}
				})
			});		

			//登录效果
			var $deluUsername = $('#deluUsername');
			var $deluPassword = $('#deluPassword');


			$('#deluBtn').on('click',function(){
				var _username = $deluUsername.val();
				var _password = $deluPassword.val();

				$.ajax({
					type:'post',
					url:'../api/login.php',
					data:{
						phone:_username,
						email:_username,
						nickname:_username,
						ppassword:_password,
						mpassword:_password
					},
					success:function(xhr){
						if(xhr === 'no'){
							alert('用户名或密码错误')
							return false;
						}else{
							// window.location.href="success.html";
						}
					}
				})
			})





		});
	});
});



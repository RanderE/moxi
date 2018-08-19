jQuery(function($){
	
	//更换按钮的颜色,显示不同的页面
	var $mailBtn = $('.mailBtn');
	var $phoneBtn = $('.phoneBtn');

	changeColor();
	function changeColor(){
		$mailBtn.css({
			backgroundColor:'#EC8D36',
			color:'white'
		});
		$phoneBtn.css({
			backgroundColor:'white',
			color:'black'
		});
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
	});
});
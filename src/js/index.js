require(['config'],function(){
	require(['jquery'],function($){
		jQuery(function($){
			//引入头部和尾部
			$('#top').load('top.html #top');
			$('bottom').load('footer.html #links,#special,#bottom')



		});
	});
});
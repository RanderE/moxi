let gulp = require('gulp');
let sass = require('gulp-sass');


// gulp的使用
// gulp都是通过任务的形式来执行某些功能的


// 1.创建任务
gulp.task('compileSass',function(){
	// 执行任务时，会执行这里的代码

	// 在此把sass编译成css
	// 2.找出sass文件
	gulp.src(['./src/sass/*.scss'])	//返回一个文件流

	// 编译scss->css
	.pipe(sass({outputStyle:'compact'}).on('error', sass.logError))	// 得到css文件流

	
	// 输出到硬盘
	.pipe(gulp.dest('./src/css/'))

	console.log(666);
});


// 自动化编译
gulp.task('autoSass',function(){
	// 监听文件修改，如果有修改，则执行compileSass任务
	gulp.watch('./src/sass/*.scss',['compileSass']);
});


// 自动刷新页面
// 文件有修改，自动刷新页面

var browserSync = require('browser-sync');

gulp.task('server',function(){
	// 启动一个自动刷新的服务器
	browserSync({
		//创建一个静态服务器
		// server:'./src',

		// 指定端口
		port:1212,

		// 代理服务器
		// 用browserSync代理php服务器
		// 	* 识别php
		// 	* 自动刷新
		proxy:'http://localhost:1212',

		// 监听文件修改
		files:['./src/**/*.html','./src/css/*.css']
	});

	// 监听sass修改
	gulp.watch('./src/sass/*.scss',['compileSass']);
});
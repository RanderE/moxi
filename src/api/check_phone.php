<?php
	// 引入connect.php
	include 'connect.php';

	/*
		接口功能：验证用户名是否存在
		所需参数：
			* username
	 */
	
	$phone = isset($_GET['phone']) ? $_GET['phone'] : null; 

	// 查找数据库中是否存在同名用户
	$sql = "select * from db_customer where phone='$phone'";

	// 执行sql语句
	$result = $conn->query($sql);


	if($result->num_rows>0){
		echo "no";
	}else{
		echo "yes";
	}

?>
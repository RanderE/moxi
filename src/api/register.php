<?php
	include 'connect.php';

	$nickname = isset($_POST['nickname']) ? $_POST['nickname'] : null; 
	$mpassword = isset($_POST['mpassword']) ? $_POST['mpassword'] : null; 
	$ppassword = isset($_POST['ppassword']) ? $_POST['ppassword'] : null; 
	$email = isset($_POST['email']) ? $_POST['email'] : null;
	$phone = isset($_POST['phone']) ? $_POST['phone'] : null;

	// 查找数据库中是否存在同名用户
	$sql = "insert into db_customer(nickname,mpassword,ppassword,email,phone) values('$nickname','$mpassword','$ppassword','$email','$phone')";

	// 执行sql语句
	$result = $conn->query($sql);


	if($result){
		echo "success";
	}else{
		echo "fail";
	}

?>
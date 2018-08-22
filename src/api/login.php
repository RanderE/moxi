<?php
	include 'connect.php';

	$nickname = isset($_POST['nickname']) ? $_POST['nickname'] : null; 
	$mpassword = isset($_POST['mpassword']) ? $_POST['mpassword'] : null; 
	$ppassword = isset($_POST['ppassword']) ? $_POST['ppassword'] : null; 
	$email = isset($_POST['email']) ? $_POST['email'] : null;
	$phone = isset($_POST['phone']) ? $_POST['phone'] : null;

	// 查找数据库中是否存在同名用户
	$sql = "select * from db_customer where (email='$email' OR phone='$phone' OR nickname='$nickname') AND mpassword='$mpassword' AND ppassword='$ppassword'";

	// 执行sql语句
	$result = $conn->query($sql);


	if($result->num_rows>0){
		echo "yes";
	}else{
		echo "no";
	}

?>
<?php

    //响应头
    header('Content-Type:text/html;charset=utf-8');	

	// 配置参数
	$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'moxi';



    // 创建连接（实例化）
    $conn = new mysqli($servername, $username, $password, $dbname);

    mysqli_query($conn,"set names utf8");

     // 检测连接
    if ($conn->connect_error) {
    	// 输出信息并结束连接
        die("连接失败: " . $conn->connect_error);
    }

?>

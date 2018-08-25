<?php
	// 设置响应头
	// header('Content-Type:application/json;charset=utf-8');	

	// 引入connect.php
	include 'connect.php';

	// 获取前端传入的参数
	$pageNo =isset($_POST['pageNo']) ? $_POST['pageNo'] : null;
	$qty = 40;
	
	$sql = "select * from db_goodslist";

	// 执行sql语句
	$result = $conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);

	$res = array(
		"total" => count($row),
		"data" => array_slice($row,($pageNo-1)*$qty,$qty),
		"pageNo" => $pageNo,
		"qty" => $qty
	);

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>
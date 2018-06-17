<?php
include ('config.php');
$stmt = $conn->prepare("select * from rules");
$stmt->execute();
$result = $stmt->get_result();
$resArray = mysqli_fetch_assoc($result);
echo json_encode($resArray);
?>
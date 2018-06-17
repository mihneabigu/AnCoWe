<?php
include ('config.php');
if (!(isset($_GET['id']) && !empty($_GET['id']))){
    $stmt = $conn->prepare("select username, email from users");
    $stmt->execute();
    $result = $stmt->get_result();
    $json = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($json);
} else {
    $stmt = $conn->prepare("select username, email from users where id=?");
    $stmt->bind_param("i", $_GET['id']);
    $stmt->execute();
    $result = $stmt->get_result();
    echo json_encode(mysqli_fetch_assoc($result));
}
?>
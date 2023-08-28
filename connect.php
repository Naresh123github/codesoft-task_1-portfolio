<?php
include 'connect.php';
if(isset($_POST['submit']))

	$firstName = $_POST['Name'];
	$email = $_POST['email'];
	$number = $_POST['number'];
    $message = $_POST['message'];

	// Database connection
	$conn = new mysqli('localhost','root','','aboutform');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into enquiry(Name, email, number, message) values(?, ?, ?, ?)");
		$stmt->bind_param("ssis", $Name, $email, $number, $message);
		$execval = $stmt->execute();
		echo $execval;
		echo "enquiry successfully...";
		$stmt->close();
		$conn->close();
	}
?>
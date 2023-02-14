<?php

$name = $_POST["name"];
$email = $_POST["email"];
$time = $_POST["time"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "devphilbolton@gmail.com";
$mail->Password = "Uncledad2007";

$mail->setFrom($email, $name);
$mail->addAddress("devphilbolton@gmail.com", "Phil");

$mail->Subject = $time;
$mail->Body = $message;

$mail->send();

header("Location: sent.html");
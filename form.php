<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "wedmeclickcoin@gmail.com"; // Replace with your email address
    $subject = "New message from your website";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "You will be contacted soon!";
    } else {
        echo "Failed to send email.";
    }
}
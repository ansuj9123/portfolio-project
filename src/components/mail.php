<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "ansuj9@yahoo.com"; // Your email
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";
    
    $emailBody = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";
    
    mail($to, $subject, $emailBody, $headers);
    echo "Thank you! Your message has been sent.";
} else {
    echo "Something went wrong, please try again!";
}
?>
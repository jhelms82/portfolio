<?php




$message_Sent = false;
if (isset($_POST['email']) && $_POST['email'] != '') {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $mailto = "jhelms1014@gmail.com"; //My email address


        $userName = $_POST['name']; //getting customer  name
        $userEmail = $_POST['email']; //getting customer email
        $messageSubject = $_POST['subject'];
        $message = $_POST['message'];
        $subject2 = "Confirmation: Message was submitted successfully - James Helms"; // For customer confirmation

        //Email body I will receive
        $message = "Client Name: " . $userName . "" . "\n"
            . "Email: " . $userEmail . "\n\n"
            . "Client Message: " . "\n" . $message;


        //Message for client confirmation
        $message2 = "Dear " . $userName . "\n"
            . "Thank you for contacting us. We will get back to you shortly!" . "\n\n"
            . "You submitted the following message: " . "\n" . $message . "\n\n"
            . "Regards," . "\n" . "- James Helms";


        //Email headers
        $headers = "From: " . $userEmail; // Client email, I will receive
        $headers2 = "From: " . $mailto; // This will receive client

        //PHP mailer function
        $result1 = mail($mailto, $messageSubject, $message, $headers); // This email sent to My address
        $result2 = mail($userEmail, $subject2, $message2, $headers2); //This confirmation email to client

        //Checking if Mails sent successfully
        if ($result1 && $result2) {
            $success = "Your Message was sent Successfully!";
        }
        else {
            $failed = "Sorry! Message was not sent, Try again Later.";
        }

    }

}
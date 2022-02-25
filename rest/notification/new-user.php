<?php 
    
    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	
	require 'PHPMailer/PHPMailer.php';
	require 'PHPMailer/SMTP.php';
	require 'PHPMailer/Exception.php';

    include_once("mail-config.php");
    include_once("html/html-new-user.php");
	// include_once($_SERVER['DOCUMENT_ROOT'] . "/rest/notification/html/html-new-account.php");
    
	function sendEmail($email, $key, $name) {
        $mail = new PHPMailer(true);
		$mail->isSMTP();
		$mail->Host = 'smtp.gmail.com'; // if gmail use smtp.gmail.com
		$mail->Port = 587;
		$mail->SMTPSecure = "tls";
		$mail->SMTPAuth = true;		
		$mail->Username =  USERNAME; // if gmail use your gmail email
		$mail->Password = PASSWORD; // if gmail use your email password
		$mail->Subject = SUBJECT_NEW_ACCOUNT;
		$mail->setFrom(USERNAME, FROM);
		$mail->isHTML(true);
        $mail->Body = getHtmlNewUser($key, $name, ROOT_DOMAIN);
        $mail->addAddress($email);
        
        if($mail->Send()){
            return "Success sending email.";
        }else {
            return "Failed sending email.";
        }
    }

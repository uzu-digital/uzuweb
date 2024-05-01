<?php
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $name = $_POST["name"];
        $tel = $_POST["tel"];
        $email = $_POST["email"];
        $message = $_POST["message"];
    
    
        $to = 'el.buho.ac@gmail.com';
        $subject = "¡$name quiere contactarnos!";
        $message = "Nombre: $name\nTel: $tel\nEmail: $email\nMensaje: $message" ;
        $headers = 'From: test@uzu.digital'."\r\n".
                    'Reply-To: test@uzu.digital'."\r\n".
                    'X-Mailer: PHP/'.phpversion();

        $smtp_server = "mail.uzu.digital";
        $smpt_port = 465;
        $smtp_username = "test@uzu.digital";
        $smtp_password = "9$~3~i41$&jl";
        if(mail($to, $subject, $message, $headers, "-a $smtp_server:$smtp_port -u $smtp_username -ssl")) {
            echo "Email sent successfully!";
        } else {
            echo "Error sending email.";
        }
    }
?>
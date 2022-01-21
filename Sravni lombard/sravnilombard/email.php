-<?php
    $email3 = $_POST['advice-email'];
    $emai33 = htmlspecialchars($email3);
    $email3 = urldecode($email3);
    $email3 = trim($email3);
 
    //echo $fio;
    //echo "<br>";
    //echo $email;
        if (mail("byt1kip82@gmail.com", "Хочу советы про ломбарды", "Отправьте на почту советы, о том как найти надёжный ломбард
 \n\n E-mail: ".$email3, "From: byt1kip82@gmail.com \r\n"))
         {     /*echo "сообщение успешно отправлено";*/ 
                echo '<meta http-equiv="refresh" content="0;URL=/email-success.php">';
        } else { 
            echo "при отправке сообщения возникли ошибки";
    }
?>

/*<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.php");}
window.setTimeout("changeurl();",3000);
</script>*/



<?php
    $name1 = $_POST['request-name'];
    $tel1 = $_POST['request-tel'];
    $email1 = $_POST['request-email'];
    $name1 = htmlspecialchars($name1);
    $tel1 = htmlspecialchars($tel1);
    $email1 = htmlspecialchars($email1);
    $name1 = urldecode($name1);
    $tel1 = urldecode($tel1);
    $email1 = urldecode($email1);
    $name1 = trim($name1);
    $tel1 = trim($tel1);
    $email1 = trim($email1);
    //echo $fio;
    //echo "<br>";
    //echo $email;
        if (mail("byt1kip82@gmail.com", "Заявка с Sravni lombard", "Имя:".$name1.". E-mail: ".$email1.". Телефон: ".$tel1 ,"From: byt1kip82@gmail.com \r\n"))
         {     /*echo "сообщение успешно отправлено";*/ 
                echo '<meta http-equiv="refresh" content="0;URL=/send-success.php">';
        } else { 
            echo "при отправке сообщения возникли ошибки";
    }
?>

<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.php");}
window.setTimeout("changeurl();",3000);
</script>
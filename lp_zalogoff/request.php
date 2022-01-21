


<?php
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $text = $_POST['text'];
    /*$phone = htmlspecialchars($phone);
    $phone = urldecode($phone);
    $phone = trim($phone);*/
 
        if (mail("byt1kip82@gmail.com", "Заявка", "Имя: ". $name ."\rТелефон: ". $tel . "\rСообщение: ". $text,"From: admin@rebottle.by \r\n"))
         {     /*echo "сообщение успешно отправлено";*/ 
                echo '<meta http-equiv="refresh" content="0;URL=/call-success.php">';
        } else { 
            echo "при отправке сообщения возникли ошибки";
    }
?>

<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="/");}
window.setTimeout("changeurl();",3000);
</script>
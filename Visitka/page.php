<?
// if (isset ($_POST['phone']) || isset ($_POST['name'])) {
//   mail ("vanish7@mail.ru",
//         "Новая заявка с моего сайта".$_SERVER['HTTP_REFERER'],
//         "Имя: ".$_POST['nameFF']."\nPhone: ".$_POST['phone']);
  
//   header("Location: http://visitka/#contacts");
  
// } else {
//   echo ("Проверьте правильность заполнения полей");
// }

if(isset($_POST["name"]))
{
        if(isset($_POST["name"]))
        {
                $name = $_POST["name"];
        }
        if(isset($_POST["phone"]))
        {
                $phone= $_POST["phone"];
        }
        

        if($name=="" or $phone=="")
        { // Проверяем на заполненность всех полей.
                echo "Пожалуйста, заполните все поля";
        }
        else
        {
                //$ip=$_SERVER["REMOTE_ADDR"]; // Вычисляем ip пользователя
                //$brose=$_SERVER["HTTP_USER_AGENT"]; // Вычисляем браузер пользователя
                $to = "vanish7@mail.ru"; // Ваш email адрес
                $subject = "Сообщение c моего сайта "; // тема письма
                $headers .= "Content-Type: text/html;
                ";
                $headers .= "Отправитель: Посетитель сайта"; // Отправитель письма
                $message = "
                Имя: $name<br>
                Телефон: $phone<br>
                ";

                $send = mail($to, $subject, $message, $headers);
                if ($send == "true")
                {
                        echo "Ваше сообщение отправлено. Мы ответим вам в ближайшее время.";
                }
                else
                {
                        echo "Не удалось отправить, попробуйте снова!";
                }
        }
}
?>
<!DOCTYPE html>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
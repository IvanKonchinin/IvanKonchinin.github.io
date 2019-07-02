<?
if (isset ($_POST['messageFF'])) {
  mail ("vanish7@mail.ru",
        "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nСообщение: ".$_POST['messageFF']);
  // echo ('<p style="color: green">Ваше сообщение получено, спасибо!</p>');
  header("Location: http://santehinnovatsii/#contacts");
}?>
<!DOCTYPE html>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
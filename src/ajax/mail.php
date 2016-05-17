<?php
$form = $_POST['form'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_term = $_POST['utm_term'];
$source_type = $_POST['source_type'];
$source = $_POST['source'];
$position_type = $_POST['position_type'];
$position = $_POST['position'];
$added = $_POST['added'];
$creative = $_POST['creative'];
$matchtype = $_POST['matchtype'];
$location = $_POST['location'];

$subject = 'Заявка Converse';	

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
//$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "sales@маркетинговое-агенство.рф, russia-converse@mail.ru";

$message = "Форма: $form\n\n";
$message .= "Имя: $name\n";
$message .= "Телефон: $phone\n";
$message .= "Email: $email\n\n";

if(isset($_POST['skidka'])){
$skidka = $_POST['skidka'];
$message .= "Скидка: $skidka\n";
}

if(isset($_POST['model'])){
$model = $_POST['model'];
$sex = $_POST['sex'];
$color = $_POST['color'];
$size = $_POST['size'];
$message .= "Sex: $sex\n";
$message .= "Model: $model\n";
$message .= "Color: $color\n";
$message .= "Size: $size\n\n";
}
if(isset($_POST['alt_model'])){
$alt_model = $_POST['alt_model'];
$alt_sex = $_POST['alt_sex'];
$alt_color = $_POST['alt_color'];
$alt_size = $_POST['alt_size'];
$message .= "Atl.Sex: $alt_sex\n";
$message .= "Atl.Model: $alt_model\n";
$message .= "Atl.Color: $alt_color\n";
$message .= "Atl.Size: $alt_size\n\n";
}

$message .= "Источник: $utm_source\n";
$message .= "Тип источника: $utm_medium\n";
$message .= "Кампания: $utm_campaign\n";
$message .= "Ключевое слово: $utm_term\n";
$message .= "Тип площадки(поиск или контекст): $source_type\n";
$message .= "Площадка: $source\n";
$message .= "Спецразмещение или гарантия: $position_type\n";
$message .= "Позиция объявления в блоке: $position\n";
$message .= "Показ по дополнительным ролевантным фразам: $added\n";
$message .= "Идентификатор объявления: $creative\n";
$message .= "Тип соответствия ключа(e-точное/p-фразовое/b-широкое): $matchtype\n";
$message .= "Гео-положение: $location\n";

mail($to,$subject,$message,$headers);
?>
<?php
// ✅ Yo habilito CORS por si necesitás (en producción normalmente no hace falta si está en el mismo dominio)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// ✅ Yo solo acepto POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "message" => "Método no permitido"]);
  exit;
}

// ✅ Yo leo el JSON que manda React
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$message = trim($data["message"] ?? "");

// ✅ Acá valido lo mínimo para que no me manden basura
if ($name === "" || $email === "" || $message === "") {
  http_response_code(400);
  echo json_encode(["ok" => false, "message" => "Faltan datos obligatorios"]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(["ok" => false, "message" => "Email inválido"]);
  exit;
}

/*
  ✅ ACÁ CAMBIO EL MAIL DESTINO (esto lo vas a poder cambiar cuando DonWeb te lo dé)
*/
$to = "TU_MAIL_DESTINO@TUDOMINIO.COM"; // <-- CAMBIAME ESTO

$subject = "Nuevo contacto desde la web - Estudio Jurídico Salinas";

// ✅ Yo armo el mensaje bonito
$body  = "Nuevo mensaje desde el formulario:\n\n";
$body .= "Nombre: $name\n";
$body .= "Email: $email\n";
$body .= "Teléfono: $phone\n\n";
$body .= "Mensaje:\n$message\n";

// ✅ Yo seteo headers para que llegue prolijo
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: Web Estudio Salinas <no-reply@tudominio.com>"; // esto puede variar según DonWeb
$headers[] = "Reply-To: $name <$email>";

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
  echo json_encode(["ok" => true]);
} else {
  http_response_code(500);
  echo json_encode(["ok" => false, "message" => "No se pudo enviar el correo"]);
}

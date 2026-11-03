<?php
// Improx Tech - API Reverse Proxy for Hostinger
// Relays incoming /api/* and /wp-json/* requests to the local Python FastAPI backend (port 8000)

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$request_uri = $_SERVER['REQUEST_URI'];
$backend_url = "http://127.0.0.1:8000" . $request_uri;

$ch = curl_init($backend_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $_SERVER['REQUEST_METHOD']);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);

// Forward incoming HTTP headers
$forward_headers = [];
foreach (getallheaders() as $name => $value) {
    if (!in_array(strtolower($name), ['host', 'content-length'])) {
        $forward_headers[] = "$name: $value";
    }
}
curl_setopt($ch, CURLOPT_HTTPHEADER, $forward_headers);

// Forward incoming request body for POST/PUT
if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
    $raw_input = file_get_contents('php://input');
    curl_setopt($ch, CURLOPT_POSTFIELDS, $raw_input);
}

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$content_type = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
$curl_error = curl_error($ch);
curl_close($ch);

if ($response === false) {
    http_response_code(502);
    header("Content-Type: application/json");
    echo json_encode([
        "status" => "error",
        "message" => "Could not connect to Python backend on 127.0.0.1:8000",
        "detail" => $curl_error
    ]);
    exit;
}

http_response_code($http_code ?: 200);
header("Content-Type: " . ($content_type ?: "application/json"));
echo $response;
?>

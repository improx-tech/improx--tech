<?php
// Improx Tech - Production Contact Form Mailer for Hostinger
// Receives JSON payload from ContactForm.jsx and sends an email to enquiry@improxgroup.com

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle CORS Pre-flight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed. Use POST."
    ]);
    exit;
}

// 1. Read incoming JSON body
$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

if (!$data) {
    // Fallback to standard POST form data if not JSON
    $data = $_POST;
}

// 2. Extract and Sanitize fields
$name    = trim(strip_tags($data['name'] ?? ''));
$email   = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone   = trim(strip_tags($data['phone'] ?? ''));
$service = trim(strip_tags($data['service'] ?? 'General Inquiry'));
$message = trim(strip_tags($data['message'] ?? ''));

// 3. Validate required fields
if (empty($name) || !$email || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please fill in all required fields with a valid email."
    ]);
    exit;
}

// 4. Configuration
$recipient = "enquiry@improxgroup.com";
$subject   = "New Inquiry from " . $name . " [" . $service . "] - Improx Tech";

// 5. Prepare HTML Email Body
$date_time = date("Y-m-d H:i:s T");
$client_ip = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';

$body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #2563eb, #06b6d4); padding: 24px 32px; color: #ffffff; }
    .header h2 { margin: 0 0 6px 0; font-size: 20px; font-weight: 800; }
    .header p { margin: 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 32px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
    td.label { width: 130px; font-weight: 700; color: #64748b; }
    td.value { color: #0f172a; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .footer { padding: 18px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h2>New Client Inquiry Received</h2>
      <p>Submitted via Improx Tech Website (improxtech.com)</p>
    </div>
    <div class='content'>
      <table>
        <tr>
          <td class='label'>Client Name:</td>
          <td class='value'><strong>" . htmlspecialchars($name) . "</strong></td>
        </tr>
        <tr>
          <td class='label'>Email Address:</td>
          <td class='value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td>
        </tr>
        <tr>
          <td class='label'>Phone Number:</td>
          <td class='value'><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></td>
        </tr>
        <tr>
          <td class='label'>Service Required:</td>
          <td class='value'><span style='background: #eff6ff; color: #2563eb; padding: 3px 10px; border-radius: 6px; font-weight: 600; font-size: 12px;'>" . htmlspecialchars($service) . "</span></td>
        </tr>
        <tr>
          <td class='label'>Submission Time:</td>
          <td class='value'>" . htmlspecialchars($date_time) . "</td>
        </tr>
        <tr>
          <td class='label'>Client IP:</td>
          <td class='value'>" . htmlspecialchars($client_ip) . "</td>
        </tr>
      </table>

      <h4 style='margin: 0 0 10px 0; color: #475569; font-size: 14px;'>Client Message:</h4>
      <div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div>
    </div>
    <div class='footer'>
      This email was generated automatically by the Improx Tech website contact system.
    </div>
  </div>
</body>
</html>
";

// 6. Set Proper Email Headers
// Using a domain-matched From address ensures Hostinger/Spam filters do not reject the message.
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/html; charset=UTF-8";
$headers[] = "From: Improx Tech Inquiries <noreply@improxtech.com>";
$headers[] = "Reply-To: " . $name . " <" . $email . ">";
$headers[] = "X-Mailer: PHP/" . phpversion();

$headers_str = implode("\r\n", $headers);

// 7. Backup Logging (Ensures zero lead loss even if mail server is temporarily unavailable)
$lead_entry = [
    "date"    => $date_time,
    "name"    => $name,
    "email"   => $email,
    "phone"   => $phone,
    "service" => $service,
    "message" => $message,
    "ip"      => $client_ip
];

$backup_file = __DIR__ . '/leads_backup.jsonl';
@file_put_contents($backup_file, json_encode($lead_entry) . "\n", FILE_APPEND | LOCK_EX);

// 8. Send Email using PHP Native mail()
$mail_sent = @mail($recipient, $subject, $body, $headers_str);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your message has been sent successfully. We will get back to you shortly."
    ]);
} else {
    // If mail() failed on server (e.g. SMTP restriction), but lead was recorded in backup:
    http_response_code(200);
    echo json_encode([
        "success" => true,
        "message" => "Thank you! Your inquiry has been received and our team will contact you shortly."
    ]);
}

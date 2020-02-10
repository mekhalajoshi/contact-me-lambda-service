exports.formatEmail = (data) => {
  console.log("**************** format Email ********************");

  const emailData = JSON.parse(data);
  const subject = "AWS SES email from " + emailData.senderName;
  const body = "Sender email: " + emailData.senderEmail + "\n" + "Sender Message: " + emailData.senderMessage;

  const email = {
      subject: subject,
      body: body
  };
  return email;
}

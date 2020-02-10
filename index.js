var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'us-east-1' });
var formatEmail = require('./formatEmail');
exports.handler = (event, context, callback) => {

  console.log("**************** contact-me-lambda ********************");

  var email = formatEmail.formatEmail(event.body);

  var SENDER = "mekhalajoshi2@gmail.com";
  var RECIEVER = "mekhalajoshi2@gmail.com";
  var params = {
    Destination: {
      ToAddresses: [SENDER]
    },
    Message: {
      Body: {
        Text: { Data: email.body }
      },
      Subject: {
        Data: email.subject
      }
    },
    Source: RECIEVER
  };

  ses.sendEmail(params, function(err, data) {
    callback(null, { err: err, data: data });
    if (err) {
      console.log(err);
      context.fail(err);
    }
    else {
      console.log(data);
      context.succeed(event);
    }
  });
callback(null, { statusCode: 200});
};

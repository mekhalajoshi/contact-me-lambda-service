var aws = require('aws-sdk');
var ses = new aws.SES({region: 'us-east-1'});

exports.handler = (event, context, callback) => {
    
     var params = {
        Destination: {
            ToAddresses: ["mekhalajoshi2@gmail.com"]
        },
        Message: {
            Body: {
                Text: { Data: "Test"
                    
                }
                
            },
            
            Subject: { Data: "Lambda email"
                
            }
        },
        Source: "mekhalajoshi2@gmail.com"
    };

    
     ses.sendEmail(params, function (err, data) {
        callback(null, {err: err, data: data});
        if (err) {
            console.log(err);
            context.fail(err);
        } else {
            
            console.log(data);
            context.succeed(event);
        }
    });
};
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region:"ap-south-1",apiVersion:'2012-08-10'})

exports.handler = (event,context,callback) => {
    // TODO implement
    const params = {
        Key:{
            "year":{
                S:event.year
            },
            "title":{
                S:event.title
            }
        },
        TableName:"Movies-Table"
    };
    dynamodb.getItem(params,function(err,data){
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            console.log(data)
            callback(null,data);
        }
    })
};


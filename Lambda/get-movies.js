const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region:"ap-south-1",apiVersion:'2012-08-10'})

exports.handler = (event,context,callback) => {
    // TODO implement
    const params = {
        TableName:"Movies-Table"
    };
    dynamodb.scan(params,function(err,data){
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

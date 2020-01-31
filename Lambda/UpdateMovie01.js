//const AWS = require('aws-sdk');
//const dynamo = new AWS.DynamoDB({region:"ap-south-1",apiVersion:'2012-08-10'})

var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-south-1"
});

var docClient = new AWS.DynamoDB.DocumentClient()
exports.handler = (event,context,callback) => {
 
    // TODO implement

var table = "Movies-Table";

// Update the item, unconditionally,

var params = {
    TableName:table,
    Key:{
        "year": event.year,
        "title": event.title
    },
    ExpressionAttributeNames:{"#c":"cast"},
    UpdateExpression: "set #c=:c,description = :d, rating=:r",
    ExpressionAttributeValues:{
        ":c":event.cast,
        ":d":event.description,
        ":r":event.rating
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});

};
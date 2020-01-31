const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region:"ap-south-1",apiVersion:'2012-08-10'})
exports.handler = (event) => {
    // TODO implement
    //var docClient = new AWS.DynamoDB.DocumentClient();


const params = {
    Item:{
        "year": {S:event.year},
        "title": {S:event.title},
        "description":{S:event.description},
        "rating":{S:event.rating},
        "cast":{S:event.cast}
    },
    TableName:"Movies-Table"
};
console.log("Adding a new item...");
dynamodb.putItem(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
};

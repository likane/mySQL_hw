var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection ({
	host:'localhost',
	port: 3306,

	user: 'root',

	password: '55capone',
	database: 'bamazon'
});

connection.connect(function(err) {
	if(err) throw err;
	console.log("connected as id " + connection.threadId);
});

var start = function() {
	inquirer.prompt({
		name:"productID",
		type:"list",
		message: "What is the product ID you would like to search?",
		choices: ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
	}).then(function(answer){
		
	})
}
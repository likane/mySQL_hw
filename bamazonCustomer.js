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

var startStore = function() {
	inquirer.prompt([
	{
		name:"productID",
		type:"list",
		message: "What is the product ID you would like to search?",
		choices: ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
	},

	{

		name:"amount",
		type:"input",
		message:"how many items would you like to purchase?",
		validade:function(value){
			if(isNaN(value)===false){
				return true;
			}
				return false;
		}

	}]).then(function(answer){
		var userStock = "SELECT stock_quantity, price FROM products WHERE ?";
		connection.query(userStock, 
		{
			item_id: answer.productID
		},
		function(error,res){
			if(error){

			} else if (res[0].stock_quantity === 0) {
				startStore();
			}
		})
		
	});
};



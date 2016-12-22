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

//Display all items before user manipulation
var displayStock = function() {
	var query = "SELECT * FROM products";

	connection.query(query, function(err, response){
		if(err){
			console.log("Could not display stock");
		} else {
			for (var i = 0; i<response.length; i++) {
				console.log("Item_ID: " + response[i].item_id + "\n Product: " + response[i].product_name + "\n Department: " + response[i].department_name + "\n Price: " + response[i].price + "\n Quantity In Stock: " + response[i].stock_quantity);
			}
		}
	});
};



//User chooses product ID and quantity to purchase
var startStore = function() {
	inquirer.prompt([
	{
		name:"productID",
		type:"list",
		message: "What is the product ID you would like to search?",
		choices: ["0", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
	},

	{

		name:"orderTotal",
		type:"input",
		message:"how many items would you like to purchase?",
		validade:function(value){
			if(isNaN(value)===false){ //check for numerical value
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
				console.log("Out of Stock!");
				startStore();//start user over again
			} else if(res[0].stock_quantity < answer.orderTotal){
				console.log("Insufficient quantity!");
				startStore(); // start user over again
			} else {
				cartTotal();
				updateDB();
			}
		})

		var cartTotal = function() {
			var total = ((answer.orderTotal) * (res[0].price));
			console.log("Your cart total is "+ total + " dollars.");
		}

		var updateDB = function() {
			var newStock = "UPDATE products set ? WHERE ?";
			connection.query(newStock, [{stock_quantity: (res[0].stock_quantity - answer.orderTotal)}, {item_id: answer.productID}], function(error, dataresponse){
				if(error){
					console.log("unable to update DB from purchase");
				} else {

					console.log("Your purchase has been processed!");
					displayStock();
					startStore();
				}
			});
		}
		
	});
};



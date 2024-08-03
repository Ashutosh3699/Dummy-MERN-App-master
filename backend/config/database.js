// Importing the Mongoose library
const mongoose = require("mongoose");

// Importing the environment variables using the dotenv library
require("dotenv").config();

console.log(process.env.DATABASE_URL);

// Defining a function to connect to the database
const dbConnect = () => {
	// Connecting to the database using the provided URL from the environment variables
	mongoose
		.connect(process.env.DATABASE_URL)
		.then(() => console.log("DB CONNECTION SUCCESS"))
		.catch((err) => {
			console.log(`DB CONNECTION ISSUES`);
			console.error(err.message);
			process.exit(1);
		});
};

// Exporting the dbConnect function for use in other files
module.exports = dbConnect;

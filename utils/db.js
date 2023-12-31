const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      `mongodb+srv://deeladmin:Sfja3tt2xmJBSOJH@deel.hwdezj6.mongodb.net/recruteur_lambda`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connected to recruteur_lambda DB");
  } catch (error) {
    console.log("Failed to connect to recruteur_lambda DB");
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;

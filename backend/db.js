const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://prabhu013:<password>@cluster0.s5potnx.mongodb.net/gofoodmern?retryWrites=true&w=majority'
// const mongoDB = async () => {
//     await mongoose.connect(mongoURI);
    
//         console.log("connected");
//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function (data){
//              console.log(data);
//         })
// }

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
      global.food_items = data;

      let foodCategory = mongoose.connection.db.collection("foodCategory");
      let catData = await foodCategory.find({}).toArray()
      global.foodCategory = catData;
      
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports = mongoDB;
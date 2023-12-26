import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://admin:deagless2378@balloons.drolm7t.mongodb.net/balloons-db?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;

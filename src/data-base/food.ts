import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function createFood() {
  configDotenv();
  const uri = process.env.MONGO_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("food_delivery");
    const collection = database.collection("food");

    // const food = await collection.insertOne({
    //   name: "Brie Crostini Appertizer",
    //   img: "res.clod",
    //   price: "$12.99",
    //   description:
    //     "Fluffy pancakes stacked with fruits, cream, syrup, and powdere sugar.",
    // });
    const food = await collection.insertMany([{
      name: "Brie Crostini Appertizer",
      img: "res.clod",
      price: "$12.99",
      description: "Fluffy pancakes stacked with fruits, cream, syrup, and powdere sugar.",
    },
    {
      name: "Budaatai huurga",
      img: "res.clod",
      price: "15000",
      description: "Uhriin mahtai budaatai huurga",
    },
    {
      name: "Budaatai huurga",
      img: "res.clod",
      price: "15000",
      description: "Uhriin mahtai budaatai huurga",
    },])
    return food;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function createStudents() {
  configDotenv();
  const uri = process.env.MONGO_URL || "";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("school");
    const collection = database.collection("students");

    const students = await collection.insertMany([
      {
        name: "Bilguun",
        age: 21,
        gender: "male",
        gpa: 4,
        courses: ["Mathematics", "Physics", "Computer Science"],
      },
      {
        name: "Horloo",
        age: 30,
        gender: "male",
        gpa: 3.9,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Muugii",
        age: 30,
        gender: "female",
        gpa: 3.8,
        courses: ["Biology", "Japan Language", "Computer Science"],
      },
      {
        name: "Ochiroo",
        age: 18,
        gender: "male",
        gpa: 3,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Sapar",
        age: 18,
        gender: "male",
        gpa: 2.8,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Zulaa",
        age: 25,
        gender: "female",
        gpa: 2.7,
        courses: ["Mathematics", "English Language", "Computer Science"],
      },
      {
        name: "Batzorig",
        age: 22,
        gender: "male",
        gpa: 3.6,
        courses: ["History", "Mathematics", "Computer Science"],
      },
      {
        name: "Tsetseg",
        age: 19,
        gender: "female",
        gpa: 3.9,
        courses: ["English Language", "Computer Science", "Physics"],
      },
      {
        name: "Ganbaa",
        age: 35,
        gender: "male",
        gpa: 3.2,
        courses: ["Economics", "Mathematics", "Computer Science"],
      },
      {
        name: "Anujin",
        age: 28,
        gender: "female",
        gpa: 3.5,
        courses: ["Mathematics", "Art", "English Language"],
      },
      {
        name: "Narantuya",
        age: 20,
        gender: "female",
        gpa: 3.1,
        courses: ["Biology", "Chemistry", "English Language"],
      },
      {
        name: "Otgonbayar",
        age: 24,
        gender: "male",
        gpa: 3.7,
        courses: ["Computer Science", "Mathematics", "Data Science"],
      },
      {
        name: "Delgermaa",
        age: 27,
        gender: "female",
        gpa: 3,
        courses: ["Psychology", "English Language", "Computer Science"],
      },
      {
        name: "Erdene",
        age: 23,
        gender: "male",
        gpa: 2.5,
        courses: ["Mathematics", "English Language", "Music"],
      },
      {
        name: "Suvd",
        age: 29,
        gender: "female",
        gpa: 3.4,
        courses: ["Japanese Language", "English Language", "Business"],
      },
      {
        name: "Munkhbat",
        age: 26,
        gender: "male",
        gpa: 3.9,
        courses: ["Physics", "Engineering", "Computer Science"],
      },
    ]);
    return students;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

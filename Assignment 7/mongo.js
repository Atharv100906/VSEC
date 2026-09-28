const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
    await client.connect();

    console.log("MongoDB Connected");

    const db = client.db("studentsDB");
    const students = db.collection("students");

    await students.insertOne({
        name: "Atharv",
        age: 20,
        course: "IT"
    });

    console.log("Student Added");

    const data = await students.find().toArray();
    console.log(data);

    await students.updateOne(
        { name: "Atharv" },
        { $set: { age: 21 } }
    );

    console.log("Student Updated");

    await students.deleteOne({ name: "Atharv" });

    console.log("Student Deleted");

    await client.close();
}

main();
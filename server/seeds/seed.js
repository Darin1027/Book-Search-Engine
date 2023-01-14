const db = require("../config/connection");
const { User } = require("../models");

const bookData = require("./bookData.json");

db.once("open", async () => {
  await User.deleteMany({});
  const books = await User.insertMany(bookData);
  console.log("Books seeded!");
  process.exit(0);
});
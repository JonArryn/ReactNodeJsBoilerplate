import { userTable } from "../schemas/user";
import { db } from "../../index";

const seedUsers = async function () {
  const user: typeof userTable.$inferInsert = {
    name: "Jon Arryn",
    email: "development@arryn.net",
    password: "password",
  };

  await db.insert(userTable).values(user);
  console.log("New User Created");
};

export { seedUsers as default };

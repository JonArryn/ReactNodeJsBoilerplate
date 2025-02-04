import seedUsers from "./user.seeder";

const seedDatabase = async function() {
    await seedUsers();
}

seedDatabase();
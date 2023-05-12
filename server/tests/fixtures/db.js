const { faker } = require("@faker-js/faker");
const User = require("../../src/models/user");
const Task = require("../../src/models/task");

async function startDatabase() {
    await mongoConnect();
    await User.deleteMany({})
    await Task.deleteMany({})
}

async function generateNewUser() {
    const name = faker.name.fullName(); // Rowan Nikolaus
    const email = faker.internet.email().toLocaleLowerCase();
    const password = faker.internet.password(10)
    const newUser = {
        email, password, name
    };
    return newUser
}
async function generateNewTask() {
    const newTask = {
        title: faker.lorem.words(5),
        description: faker.lorem.words(10),
        completed: faker.datatype.boolean()
    }
    return newTask
}
module.exports = {
    startDatabase,
    generateNewUser,
    generateNewTask
}
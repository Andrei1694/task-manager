const request = require('supertest');
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, './', '.env') });
const app = require('../src/app');
const { mongoDisconnect, mongoConnect } = require('../src/utils/mongoose');
const { faker } = require('@faker-js/faker');
describe('Launches API', () => {
    beforeAll(async () => {
        await mongoConnect();
    });

    afterAll(async () => {
        await mongoDisconnect();
    });

    describe('Test users endpoints', () => {
        const name = faker.name.fullName(); // Rowan Nikolaus
        const email = faker.internet.email().toLocaleLowerCase();
        const password = faker.internet.password(10)
        const newUser = {
            email, password, name
        };
        let token = null
        test('It should register new user', async () => {
            const response = await request(app)
                .post('/users')
                .send(newUser)
                .expect(201);
            expect(response.body).toHaveProperty('user.email', email)
        });
        test('It should login user', async () => {
            const response = await request(app)
                .post('/users/login')
                .send(newUser)
                .expect(200);
            token = response._body.token
        });
        test('It create a new task for the user', async () => {
            const newTask = {
                title: faker.lorem.words(5),
                description: faker.lorem.words(10),
                completed: faker.datatype.boolean()
            }
            const response = await request(app)
                .post('/tasks')
                .set('Authorization', `Bearer ${token}`)
                .send(newTask)
                .expect(201);
        });

    });
});

// describe('Hello World', () => {
//     test('It should say hello world', async () => {
//         console.log("Hello World")
//     })
// })
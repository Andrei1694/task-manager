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

    describe('Test POST /launch', () => {
        const name = faker.name.fullName(); // Rowan Nikolaus
        const email = faker.internet.email().toLocaleLowerCase();
        const password = faker.internet.password(10)
        const newUser = {
            email, password, name
        };
        test('It should register new user', async () => {
            const response = await request(app)
                .post('/users')
                .send(newUser)
                .expect(201);

            console.log(response.body)
            expect(response.body).toHaveProperty('user.email', email)

        });


    });
});
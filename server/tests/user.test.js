const request = require('supertest');
const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, './', '.env') });
const app = require('../src/app');
const { mongoDisconnect, mongoConnect } = require('../src/utils/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');
const { startDatabase, generateNewUser, generateNewTask } = require('./fixtures/db');

const newUser = generateNewUser()
const newTask = generateNewTask()

describe('Launches API', () => {
    beforeAll(startDatabase);

    afterAll(async () => {
        await mongoDisconnect();
    });

    describe('Test users endpoints', () => {
        test('It should register new user', async () => {
            const response = await request(app)
                .post('/users')
                .send(newUser)
                .expect(201);
            expect(response.body).toHaveProperty('user.email', email)
            newUser._id = response.body.user._id
        });
        test('It should login user', async () => {
            const response = await request(app)
                .post('/users/login')
                .send(newUser)
                .expect(200);
            newUser.token = response._body.token
        });
        test('It create a new task for the user', async () => {
            const response = await request(app)
                .post('/tasks')
                .set('Authorization', `Bearer ${token}`)
                .send(newTask)
                .expect(201);
        });
        test('Should upload avatar image', async () => {
            const response = await request(app)
                .post('/users/me/avatar')
                .set('Authorization', `Bearer ${token}`)
                .attach('avatar', 'tests/fixtures/profile-pic.jpg')
                .expect(200)
            const user = await User.findById(newUser._id)
            expect(user.avatar).toEqual(expect.any(Buffer))
        });
    });
});

// describe('Hello World', () => {
//     test('It should say hello world', async () => {
//         console.log("Hello World")
//     })
// })
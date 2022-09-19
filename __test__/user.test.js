'use strict';

const server = require('../server');

const supertest = require('supertest');

const request = supertest(server.app);

jest.setTimeout(10000)

describe("Test SignUp Route", () => {

    test('test with exisiting email credentials', async () => {

        await request.post('/signup').send({
            email: "test@malek.com",
            password: "malek123",
            userName: "test"
        }).
            expect(409)
    });

    test('test with exisiting username credentials', async () => {

        await request.post('/signup').send({
            email: "test@malek.com",
            password: "malek123",
            userName: "malek"
        }).
            expect(409);
    });
});


describe("Test SignIn Route", () => {

    test("test with correct credentials", async () => {

    })
    test("test with wrong credentials", async () => {

    });
});
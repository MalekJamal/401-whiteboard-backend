'use strict';

const server = require('../server');
const supertest = require('supertest');

const request = supertest(server.app);

describe('Test Home Page', () => {

    test('Home page work!', async () => {

        const res = await request.get('/');

        expect(res.status).toEqual(200);
        expect(res.text).toEqual(`Welcome To Malek Server, This app mainly will be a stress-relief cheerful whiteboard for 401 classes :(`);

    });
});



describe("Test wrong Route", () => {

    it("404 error handler works!", async () => {

        const res = await request.get('/unknown').query(4);

        expect(res.status).toEqual(404);
        expect(JSON.parse(res.text))
            .toEqual({
                code_error: 404,
                message: `error: Page Not Found!`
            });
    });
});
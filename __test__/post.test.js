'use strict';

const server = require('../server');
const supertest = require('supertest');

const request = supertest(server.app);

jest.setTimeout(9000)

describe("Test Create a New Post", () => {

    test('should store a new post', async () => {
        const response = await request.post('/post').send({
            post: "new post from testing file"
        })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .expect('{"post":"new post from testing file"}');
    });

});


describe('Test Get All Posts From The Database', () => {

    it('should get list of records', async () => {
        const response = await request.get('/post');
        expect(response.status).toBe(200);
    });
});

// Read one post using GET
describe('Test Get One Post By ID', () => {

    it('should get a single record by it\'s ID', async () => {
        const response = await request.get('/post/7')
            .expect(200)
            .expect('{"post":"new post from testing file"}');

    });
});


// Update a post using PUT
describe('Test Update a Single Post By ID', () => {

    it('should get updated post', async () => {
        const response = await request.put('/post/6')
            .expect(200)
    });
});


// Delete a post using DELETE
describe('Test DELETE a Single Post By ID', () => {

    it('should delete post', async () => {
        const response = await request.delete('/post/5')
            .expect(200)
    });
});
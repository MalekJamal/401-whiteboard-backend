'use strict';

const server = require('../server');
const supertest = require('supertest');

const request = supertest(server.app);

jest.setTimeout(9000);

describe("Test Create a New Post", () => {

    test('should store a new post', async () => {
        const post = {
            title: "test",
            body: "inside body",
            postType: "Funny",
            imgUrl: "www.image.com"

        }
        await request.post('/post').send(post)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)

    });

});


describe('Test Get All Posts From The Database', () => {

    it('should get list of records', async () => {

        await request.get('/post')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/);
    });
});

// Read one post using GET
describe('Test Get One Post By ID', () => {

    it('should get a single record by it\'s ID', async () => {
        await request.get('/post/7')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/);
    });
});


// Update a post using PUT
describe('Test Update a Single Post By ID', () => {

    it('should get updated post', async () => {
        await request.put('/post/6')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/);
    });
});


// Delete a post using DELETE
describe('Test DELETE a Single Post By ID', () => {

    it('should delete post', async () => {
        await request.delete('/post/5')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /charset=utf-8/);
    });
});
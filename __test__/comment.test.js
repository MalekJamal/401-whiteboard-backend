'use strict';

const server = require('../server');
const supertest = require('supertest');



const request = supertest(server.app);

jest.setTimeout(9000);

describe("Test Create a New Comment", () => {

    test('should store a new comment', async () => {
        await request.post('/comment/:postid').send({
            post: "new comment from testing file"
        })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
    });
});


describe('Test Get All Comments From The Database', () => {

    it('should get list of records', async () => {

        // await request.get('/comment')
        //     .set('Accept', 'application/json')
        //     .expect(200)
            
    });
});



describe('Test Update a Single Comment By ID', () => {

    it('should get updated comment', async () => {
            // await request.put('/post/6')
            //     .set('Accept', 'application/json')
            //     .expect(200)
            //     .expect('Content-Type', /json/);
    });
});


describe('Test DELETE a Single Comment By ID', () => {

    it('should delete comment', async () => {
        await request.delete('/comment/:id')
            .set('Accept', 'application/charset=utf-8')
            .expect(200)
            .expect('Content-Type', /charset=utf-8/);
    });
});
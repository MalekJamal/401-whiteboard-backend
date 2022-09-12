'use strict';

const server = require('../server');
const supertest = require('supertest');

const request = supertest(server.app);
const {db} = require('../models/index');

beforeAll(async ()=>{
   await db.sync();
});

afterAll(async ()=>{
   await db.drop();
});

describe("Test Create a new post", ()=>{

    test('should store a new post', async()=>{

        const response = await request.post('/post').send({
            post:"new post"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        

        // expect(response.body).toEqual({

        //     post: 'new post'
        // })

    });
});


describe('testing db routes', () => {

    it('can get list of records', async () => {
        const response = await request.get('/post');
        expect(response.status).toBe(200);
        // expect(Array.isArray(response.body)).toBeTruthy();
        // expect(response.body.length).toEqual(1);
    });

});
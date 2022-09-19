'use strict';

const userComment = require('../collections/user-comment-routes');

describe("Test creating instance from user-comment-collection", () => {

    test("It correct!", async () => {
        const collection = new userComment();

        expect(collection).toBeDefined();
    });

    test("test methods", async () => {
        const collection = new userComment();
        expect(collection.create).toBeDefined();
        expect(collection.read).toBeDefined();
        expect(collection.delete).toBeDefined();
        expect(collection.readPostWithComment).toBeDefined();
        expect(collection.update).toBeDefined();
    });
});
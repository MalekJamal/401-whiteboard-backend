'use strict';

const UserComment = require('../collections/user-comment-routes');

describe("Testing UserComment class", () => {

    it('create new collection', async () => {
        const seq = { name: "Malek", age: "25" };
        const obj = new UserComment(seq);
        expect(obj).toBeInstanceOf(UserComment);
    })
})
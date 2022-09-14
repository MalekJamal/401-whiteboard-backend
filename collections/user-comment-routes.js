'use strict';

class UserComment {
    constructor(model) {
        this.model = model;
    }

    async create(data) {

        try {
            return await this.model.create(data);
        } catch (error) {
            console.error(error);
        }
    }

    async read(id) {

        try {
            if (id) {
                return await this.model.findOne({ where: { id: id } });
            } else {
                return await this.model.findAll();
            }
        } catch (error) {

            console.error(error);
        }
    }

    async update(id, data) {

        try {
            const getDataByID = await this.model.findOne({ where: { id: id } });
            return getDataByID.update(data);
        } catch (error) {
            console.error(error);
        }
    }

    async delete(id) {

        try {
            return await this.model.destroy({ where: { id: id } });
        } catch (error) {
            console.error(error);
        }
    }

    async readPostWithComment(comment) {

        try {
            return await this.model.findAll({ include: [comment] });
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = UserComment;
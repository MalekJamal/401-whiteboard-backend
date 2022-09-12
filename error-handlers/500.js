'use strict';

module.exports = (error, req, res, next)=>{
    res.status(500)
    .send(`Server error: ${error.message || error}`);
}
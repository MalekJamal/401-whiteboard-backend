'use strict';

module.exports = (req, res, next)=>{

    res.status(404).json({
        code_error:404,
        message: `error: Page Not Found!`
    });
}
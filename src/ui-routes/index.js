const express = require('express');
const app = express();
const schema = require('../db/schema');
const db = require('../db/connection');

const employees = db.get('employees');

const router = express.Router();

router.get('/', async (req, res, next) => {

    const allEmployees = await employees.find({});
    res.render('employees/list', {
        data: allEmployees,
    });
});
module.exports = router;

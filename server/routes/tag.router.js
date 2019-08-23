const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// Get all tags
router.get('/', (req, res) => {
  let queryText = `SELECT * FROM "tags" ORDER BY "name";`;
  pool.query(queryText).then(result => {
    // Sends back the results in an object
    res.send(result.rows);
  })
  .catch(error => {
    console.log('error getting tags', error);
    res.sendStatus(500);
  });
});

module.exports = router;

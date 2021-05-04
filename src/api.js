const express = require('express');
const router = express.Router();

router.get('/data/:id', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set('Cache-Control', 'private, max-age=10');
    res.json({
        data: {
            id: req.params.id,
            name: 'Robert',
            age: 22,
            status: 'active',
        },
    });
});

module.exports = router;

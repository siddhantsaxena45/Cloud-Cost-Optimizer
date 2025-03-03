const express = require('express');
const costTracker = require('./costTracker');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Cloud Cost Optimization Tool is Running!');
});

app.get('/track-cost', async (req, res) => {
    const costData = await costTracker.getCostData();
    res.json(costData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

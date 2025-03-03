const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const costExplorer = new AWS.CostExplorer();

async function getCostData() {
    const params = {
        TimePeriod: {
            Start: "2024-01-01",
            End: "2024-03-01"
        },
        Granularity: "MONTHLY",
        Metrics: ["BlendedCost"]
    };

    return new Promise((resolve, reject) => {
        costExplorer.getCostAndUsage(params, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

module.exports = { getCostData };

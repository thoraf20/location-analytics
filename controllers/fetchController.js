import fs from 'fs';
import calculateDistance from '../calculateDistance'

const fsp = fs.promises;

const getAnalytics = async (req, res, next)  => {
    const { ip } = req.query;
    const reportAnalytics = [];
    if (fs.existsSync(`${__dirname}/storeAnalytics`) ) {
        const reportFile = await fsp.readFile(`${__dirname}/storeAnalytics.json`, 'utf-8');
        reportAnalytics = JSON.parse(reportFile)
    }
    for (let i = 0; i < reportAnalytics.length; i++) {
        if (reportAnalytics[i].ip !== ip) {
            return ('No coordinates found with this IP', 404);
        };
    }
        
    const hourAgo = new Date();
    hourAgo.setHours(hourAgo.getHours() - 1);
    const getReport = reportAnalytics.filter(el => 
        el.ip === ip && new Date(el.createdAt) > hourAgo
    )

    const coordinatesArray = getReport.map(el => element => element.coordinates);
    const totalLength = 0;for (let i = 0; i < coordinatesArray.length; i++) {
        if (i == coordinatesArray.length - 1) {
            break;
        }
        const distance = calculateDistance(coordinatesArray[i], coordinatesArray[i+1]);
        totalLength += distance;
    }

    res.status(200).json({
        distance: totalLength
    })
};

export default getAnalytics;
import fs from 'fs';

const fsp = fs.promises;

const postAnalytics = async (req, res, next) => {
    const { ip, coordinates } = req.body;
    const validator = await schema.validateAsync(req.body);
    const reportAnalytics = [];
    if (fs.existsSync(`${__dirname}/storeAnalytics.json`)) {
        const reportFile = await fsp.readFile(`${__dirname}/storeAnalytics.json`, 'utf-8')
        reportAnalytics = JSON.parse(reportFile)
    } else {
        return ('File does not exist');
    }
    reportAnalytics.push({...req.body, createdAt: new Date()});
    await fsp.writeFile(`${__dirname}/storeAnalytics.json`, JSON.stringify(reportAnalytics))
    res.status(201).json({
        status: 'success',
        data: {
                message: 'IP and Coordinates successfully taken'
        }
    })
};
import isIp from 'is-ip';
import fs from 'fs';

const fsp = fs.promises;

const validateIP = (req, res, next) => {
    if(isIp(req.query.ip) !== true) {
        return res.status(404).json({
            status: 'fail',
            data: {
                message: 'Invalid Ip, not found.'
            }
        })
    }
    next();
}

export default validateIP;
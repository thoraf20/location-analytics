const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    });
}

const sendErrorProd = (err, res) => {
    if (ErrorEvent.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
        });
    } else {
        console.error('Error', err.message);
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}
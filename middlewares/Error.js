
const ErrorMiddleware = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Enternal Server Error";
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorMiddleware;
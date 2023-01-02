export default function headersMiddleware(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, DELETE, POST');
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
}
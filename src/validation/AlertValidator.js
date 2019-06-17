import Alert from '../models/Alert';
class AlertError extends Error {
    constructor(...args) {
        super(...args)
        Error.captureStackTrace(this, AlertError);
    }
}
function alertValitator (alert) {
    if (!(alert instanceof Alert)) {
        new AlertError('alert was not an instance of Alert');
    }
}
export default alertValitator;
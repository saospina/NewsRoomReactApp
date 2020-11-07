import moment from 'moment';

export const getCurrentDate = () => {
    const format = "YYYY-MM-DD"
    let date = new Date();
    let currentDate = moment(date).format(format);
    return currentDate;
}

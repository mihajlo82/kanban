import moment from "moment";

export const isEndDateGreaterThanStartDate = (startDate, endDate) => {
    if ((startDate === null && endDate === null) || (endDate === null)) return true;

    if (moment(endDate).isSameOrAfter(startDate, 'year')) return true;

    return false;
}
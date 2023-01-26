import moment from "moment";

export const formatDate = (startDate, endDate) => {

    if(startDate === null && endDate === null){
        return '';
    }

    if (startDate !== null && endDate !== null) {

        if (moment(startDate).isSame(endDate, 'year')) {
            return moment(startDate).format('MMM D') + ' - ' + moment(endDate).format('MMM D.')
        } else {
            return moment(startDate).format("MMM D") + '-' + moment(endDate).format("MMM D. YY");
        }
    } else {
        return moment(endDate).format('MMM D.')
    }
}
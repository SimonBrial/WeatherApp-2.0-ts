import dayjs from "dayjs";

function getDate(dateStr?: string) {
    const dateWithoutStr = dayjs(new Date()).format("ddd. D MMM");
    const dateWithStr = dayjs(dateStr).format("ddd. D MMM")

    if (!dateStr) {
        return dateWithoutStr;
    } else {
        return dateWithStr
    }
}
export default getDate;

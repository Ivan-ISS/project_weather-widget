const days = {
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
    0: 'вс',
}

const getDay = (date) => {
    return days[date.getDay()];
}

function dateFormat(time) {

    const date = new Date(time * 1000); // умножаем на 1000, так как в JavaScript время измеряется в миллисекундах
    date.setHours(date.getHours() + 3);

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1; // добавляем 1, так как месяцы в JavaScript нумеруются с 0
    const day = date.getUTCDate();
    const hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    // const seconds = date.getUTCSeconds();

    const dayWeek = getDay(date);

    const currentDate = year + "-" + month + "-" + day;
    const currentTime = hours + ":" + minutes /* + ":" + seconds */;

    return {
        currentDate: currentDate,
        currentTime: currentTime,
        dayWeek: dayWeek,
    }
}

export {dateFormat}

//console.log(year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds);
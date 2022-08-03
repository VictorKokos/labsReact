const AMOUNT_OF_DAYS_IN_A_WEEK = 7;
const AMOUNT_OF_DAYS_IN_A_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
const FEBRUARY = 1

export const areDaysEqual = (a,b) =>
{
    if(!a || !b)
    {return false}
    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    )
}



const isItVisokosniyYear =(year) =>
{
return ((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
}


const getDaysInMonth = (date) =>
{
const month = date.getMonth()
const year = date.getFullYear()

if(isItVisokosniyYear(year) && month===FEBRUARY)
{
    return AMOUNT_OF_DAYS_IN_A_MONTH[month] + 1;
}
else
{
    return AMOUNT_OF_DAYS_IN_A_MONTH[month]
}
}

const getMonthStartsOn = (date) => //Сколько дней пропускаем в начале месяца
{
    const dayOfWeek = date.getDay()
if(dayOfWeek === 0)
{
    return 6;
}
else
{
    return dayOfWeek-1
}
}




export const getMonthData = (year, month) =>
{
    const result = []
    const date = new Date(year, month)
    let day = 1;
    const daysInMonth = getDaysInMonth(date)
    const monthStartsOn = getMonthStartsOn(date)
for(let i = 0; i< (daysInMonth + monthStartsOn)/AMOUNT_OF_DAYS_IN_A_WEEK; i++)
{
    result[i] = []
    for(let k = 0; k<AMOUNT_OF_DAYS_IN_A_WEEK; k++)
    {
        if(((i===0) && (k<monthStartsOn)) || (day > daysInMonth ))
        {
            result[i][k] = undefined;
        }
        else
        {
            result[i][k] = new Date(year, month, day++)
        }

    }

}



    return result

}
export function getFormattedDate(date){
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son base 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function getDateMinusDays(date, days){
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate;
}
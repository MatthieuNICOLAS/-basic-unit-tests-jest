function computeAge(birthDay, currentDay){
    year = currentDay.getYear() - birthDay.getYear();
    month = currentDay.getMonth() - birthDay.getMonth();
    day = currentDay.getDate() - birthDay.getDate()
    if(year > 0){
        if(month == 0){
            if(day >= 0 )
                return year;
            else
                return year - 1;
        }
        else if(month < 0)
            return year -1;
    
        else
            return year;

    }
    else if(year == 0)
        return 0
    else
        return 'Votre date d\'anniversaire dépasse celle d\'aujourd\'hui'
}
module.exports = computeAge
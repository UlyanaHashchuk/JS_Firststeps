//Dedicating the sleeping day
const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 9;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 10;
            break;
        case 'saturday':
            return 7;
            break;
        case 'sunday':
            return 10;
            break;
        default:
            console.log('Choose correct day');
    }
};

//Total hours I slept for all days
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//IDeal sleep hours
const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};

//Sleep debt calculation
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed.');
    } else {
        console.log('You should sleep ' + (idealSleepHours - actualSleepHours) + ' hours more.');
    }
};
calculateSleepDebt();
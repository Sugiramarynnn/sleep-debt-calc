const getSleepHours = day;
if (day === 'monday') {
    return 8;
} else if (day === 'tuesday'){ 
    return 8;
} else if (day === 'wednesday'){ 
    return 6;
} else if (day === 'Thursday'){ 
    return 7;
} else if (day === 'Friday'){ 
    return 8;
} else if (day === 'Saturday'){ 
    return 9;
} else if (day === 'Sunday'){ 
    return 10;
}
console.log(getSleepHours(monday));
console.log(getSleepHours(tuesday));
console.log(getSleepHours(wednesday));
console.log(getSleepHours(Thursday));
console.log(getSleepHours(Friday));
console.log(getSleepHours(Saturday));
console.log(getSleepHours(Sunday));

// to get the total hours slept 
const GET =  day => {

};
const getActualSleepHours = () => { getSleepHours('monday') +
getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') +
getSleepHours('Saturday') + getSleepHours('Sunday')    
};

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };

  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());

  // we can now calculate the sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
}

if (actualSleepHours === idealSleepHours) {
    console.log('perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('more sleep than needed');
  } else {
    console.log('should get some rest');
  }

  // add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().
  if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
  





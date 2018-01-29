const getSleepHours = day => {
  this.day = day.toLowerCase(); 
  switch(day){
    case 'monday':
      return parseInt(prompt('How many hours of rest do you have on Monday?'));
      break;
    case 'tuesday':
      return parseInt(prompt('How many hours of rest do you have on Tuesday?'));;
      break;
    case 'wednesday':
      return parseInt(prompt('How many hours of rest do you have on Wednesday?'));;
      break;
    case 'thursday':
      return parseInt(prompt('How many hours of rest do you have on Thursday?'));;
      break;
    case 'friday':
      return parseInt(prompt('How many hours of rest do you have on Friday?'));;
      break;
    case 'saturday':
      return parseInt(prompt('How many hours of rest do you have on Saturday?'));;
      break;
    case 'sunday':
      return parseInt(prompt('How many hours of rest do you have on Sunday?'));;
      break;
            };
};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours){
    return 'You\'re getting the perfect amount of sleep';
  }
  
  else if (actualSleepHours < idealSleepHours){
    let amount = idealSleepHours - actualSleepHours;
    return 'You should get more rest, try to increase it by ' + amount;
  }
  
  else if (actualSleepHours > idealSleepHours){
    let amount = actualSleepHours - idealSleepHours;
    return 'You\'re getting more sleep than needed, reduce it by ' + amount + ' hours';
  }
};

console.log(calculateSleepDebt());

export const image = decs => {
  switch (decs) {
    case '01n':
    case '01d':
      return require('../assets/01n.png');
    case '02n':
    case '02d':
      return require('../assets/02n.png');
    case '03n':
    case '03d':
      return require('../assets/03n.png');
    case '04n':
    case '04d':
      return require('../assets/04n.png');
    case '09n':
    case '09d':
      return require('../assets/09n.png');
    case '10n':
    case '10d':
      return require('../assets/10n.png');
    case '11n':
    case '11d':
      return require('../assets/11n.png');
    case '13n':
    case '13d':
      return require('../assets/13n.png');
    default:
      return require('../assets/50n.png');
  }
};

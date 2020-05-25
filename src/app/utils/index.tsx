export const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const renderWeatherIconAccordingToWeather = (_weatherType: string) => {
  switch (_weatherType) {
    case 'Rain':
      return 'rain.svg';
    case 'Thunderstorm':
      return 'thunderstorm.svg';
    case 'Drizzle':
      return 'drizzle.svg';
    case 'Snow':
      return 'snow.svg';
    case 'Clear':
      return 'clear.svg';
    case 'Clouds':
      return 'clouds.svg';
    default:
      return 'default.svg';
  }
};

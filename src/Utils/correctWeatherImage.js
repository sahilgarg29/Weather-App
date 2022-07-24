import Sunny from './../images/sun.png';
import Rainy from './../images/rain.png';
import FewClouds from './../images/clouds.png';
import Clouds from './../images/scattered_clouds.png';
import ThunderStorm from './../images/thunderstorm.png';
import Snow from './../images/snow.png';
import Haze from './../images/mist.png';

export default function correctImage(icon){
    switch(icon){
      case '01d':
      case '01n':
        return Sunny;
      case '02d':
      case '02n':  
        return FewClouds;
      case '03d':
      case '04d':
      case '03n':
      case '04n':
        return Clouds;
      case '09d':
      case '10d':
      case '09n':
      case '10n':
        return Rainy;
      case '011d':
      case '011n':
        return ThunderStorm;
      case '13d':
      case '13n':
        return Snow;
      case '50d':
      case '50n':
        return Sunny;
      default:
        return Sunny;
    }
  }
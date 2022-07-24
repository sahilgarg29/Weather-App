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
        return FewClouds;
      case '03d':
      case '04d':
        return Clouds;
      case '09d':
      case '10d':
        return Rainy;
      case '011d':
        return ThunderStorm;
      case '13d':
        return Snow;
      case '50d':
        return Sunny;
      default:
        return Sunny;
    }
  }
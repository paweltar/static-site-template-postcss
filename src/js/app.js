import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import $ from 'jquery';
import 'aos/dist/aos.css';
import AOS from 'aos'
import uikitCss from 'uikit/dist/css/uikit.css'

UIkit.use(Icons);

$(window).on("load", function(){
  // AOS is just a great animation library. You can read more here https://github.com/michalsnik/aos 
  AOS.init({
      disable: window.innerWidth < 960,
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
  });
  console.log('hello');
});

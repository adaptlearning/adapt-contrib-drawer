import Adapt from 'core/js/adapt';
import drawer from 'core/js/drawer';
import logging from 'core/js/logging';


Object.defineProperties(Adapt, {
  drawer: {
    get() {
      logging.deprecated('Adapt.drawer, please use core/js/drawer directly');
      return drawer;
    }
  }
});

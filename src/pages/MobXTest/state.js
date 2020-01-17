import { observable, action } from 'mobx';
import moment from 'moment';

class AppState {
  @observable timer = { time: 0, localTime: 0 };
  tId = 0;
  constructor() {
    this.start();
  }

  start() {
    this.tId = setInterval(() => {
      const m = moment();

      this.timer = {
        time: m.valueOf(),
        localTime: m.format('YYYY年MM月DD日 HH:mm:ss.SSS'),
      };
    }, 32);
  }

  @action.bound
  reset() {
    this.timer = { time: 0, localTime: 0 };
    if (this.tId) {
      clearInterval(this.tId);
    }
    setTimeout(() => {
      this.start();
    }, 1000);
  }
}

export default AppState;

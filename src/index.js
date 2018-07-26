import './ncpc';

class sd {
  static noCaptcha(opt) {
    if (!(typeof noCaptcha === 'undefined')) {
      const nc = new noCaptcha(opt);
      // 删除 window noCaptcha 方法，避免全局暴露
      delete window.noCaptcha;

      return nc;
    }
  }
}

export default sd;

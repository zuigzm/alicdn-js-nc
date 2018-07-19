import './ncpc';

class sd {
  static noCaptcha(opt) {
    const newNcpc = noCaptcha;
    // 删除 window noCaptcha 方法，避免全局暴露
    delete window.noCaptcha;

    return newNcpc(opt);
  }
}

export default sd;

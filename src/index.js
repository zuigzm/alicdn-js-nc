import './ncpc';

class sd {
  noCaptcha(opt) {
    const newNcpc = noCaptcha;
    // 删除 window noCaptcha 方法，避免全局暴露
    delete window.noCaptcha;

    return newNcpc(opt);
  }
}

const __ = new sd();

export default __;

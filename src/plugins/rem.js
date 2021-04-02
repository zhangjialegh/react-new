;(function (window) {
  const baseFontSize = 75
  const _baseFontSize = baseFontSize;//设计htmlfotnszie
  const ua = navigator.userAgent;
  const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i);
  const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi);
  let dpr = window.devicePixelRatio || 1;
  if (!isIos && !(matches && matches[1] > 534)) {
      // 如果非iOS, 非Android4.3以上, dpr设为1;
      dpr = 1;
  }
  const scale = 1 / dpr;//设备像素比
  let metaEl = document.querySelector('meta[name="viewport"]');
  if (!metaEl) {
      metaEl = document.createElement('meta');
      metaEl.setAttribute('name', 'viewport');
      window.document.head.appendChild(metaEl);
  }
  metaEl.setAttribute('content', 'width=device-width,user-scalable=no,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale);

  document.documentElement.style.fontSize = document.documentElement.clientWidth / (750 / _baseFontSize) + 'px';
})(window)

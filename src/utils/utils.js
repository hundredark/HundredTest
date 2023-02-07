export const getUrlParameter = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const sleep = (n = 500) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, n);
});

export const getMixinEnvironment = () => {
  if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.MixinContext) {
    return 'iOS';
  }
  if (window.MixinContext && (typeof window.MixinContext.getContext === 'function')) {
    const ctx = JSON.parse(window.MixinContext.getContext());
    return ctx.platform || 'Android';
  }
  return undefined;
};
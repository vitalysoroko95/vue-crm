export default {
  install: (Vue) => {
    // inject a globally available $translate() method
    Vue.config.globalProperties.$message = (html) => {
      // eslint-disable-next-line no-undef
      M.toast({ html });
    };
    Vue.config.globalProperties.$error = (html) => {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[Ошибка]: ${html}` });
    };
  },
};

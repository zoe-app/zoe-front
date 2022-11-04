export const asyncLocalStorage = {
  async setItem(key: string, value: string) {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, value);
    });
  },
  async getItem(key: string) {
    return Promise.resolve().then(() => {
      return localStorage.getItem(key);
    });
  },
};

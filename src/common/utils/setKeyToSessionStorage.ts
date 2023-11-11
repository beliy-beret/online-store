export const setKeyToSessionStorage = (key: string, value: unknown) => {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

export const getKeyFromSessionStorage = (key: string) => {
  const value = window.sessionStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  } else {
    return value
  }
}

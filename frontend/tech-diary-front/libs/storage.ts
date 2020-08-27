
export function getStorage<T>(key: string): T|null {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

export function setStorage<T>(key: string, obj: T) {
  const value = JSON.stringify(obj);

  localStorage.setItem(key, value);
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

export function updateStorage<T>(key: string, obj: T) {
  removeStorage(key);
  setStorage(key, obj);
}

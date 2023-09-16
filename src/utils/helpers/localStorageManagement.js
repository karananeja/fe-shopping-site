const setValue = (name, value) =>
  localStorage.setItem(name, JSON.stringify(value));

const getValue = (name) => JSON.parse(localStorage.getItem(name));

const deleteValue = (name) => localStorage.removeItem(name);

const clearAll = () => localStorage.clear();

export { setValue, getValue, deleteValue, clearAll };

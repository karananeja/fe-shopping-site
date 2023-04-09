export const setValue = (name, value) => {
  // const hostName = window.location.hostname;
  // window.document.cookie = `${name}=${value}; path=/; domain=${hostName}; samesite; max-age=${
  //   30 * 24 * 60 * 60
  // }`;

  localStorage.setItem(name, value);
};

export const getValue = (name) => {
  // let matches = document.cookie.match(
  //   new RegExp(
  //     "(?:^|; )" +
  //       name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
  //       "=([^;]*)"
  //   )
  // );
  // return matches ? decodeURIComponent(matches[1]) : undefined;
  return localStorage.getItem(name);
};

export const deleteValue = (name) => {
  localStorage.removeItem(name);
};

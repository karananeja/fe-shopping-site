export const setCookie = (name, value) => {
  //make this dynamic.
  const hostName = window.location.hostname;

  window.document.cookie = `${name}=${value}; path=/; domain=${hostName}; samesite; max-age=${
    10 * 24 * 60 * 60
  }`;
};

export const getCookie = (name) => {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name) => {
  setCookie(name, '', {
    'max-age': -1,
  });
};

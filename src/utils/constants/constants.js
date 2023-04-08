export const PASSWORD_CHECK = [
  {
    id: 'uppercase',
    label: 'Uppercase',
    valid: false,
    pattern: new RegExp(/[A-Z]/),
  },
  {
    id: 'lowercase',
    label: 'Lowercase',
    valid: false,
    pattern: new RegExp(/[a-z]/),
  },
  {
    id: 'number',
    label: 'Number',
    valid: false,
    pattern: new RegExp(/[0-9]/),
  },
  {
    id: 'special_character',
    label: 'Special character',
    valid: false,
    pattern: new RegExp(/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/),
  },
];

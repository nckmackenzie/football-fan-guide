export const getInitialsFromName = name => {
  return name
    .split(' ')
    .map(nameArr => nameArr[0].toUpperCase())
    .join('');
};

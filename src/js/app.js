export default function orderByProps(obj, keys = ['name', 'level']) {
  const arrayWithProps = [];
  const arrayWithoutProps = [];

  for (const prop in obj) {
    if (!keys.includes(prop)) {
      arrayWithoutProps.push(prop);
    }
  }
  arrayWithoutProps.sort();
  arrayWithoutProps.forEach((item) => {
    keys.push(item);
  });

  // eslint-disable-next-line guard-for-in
  for (const item in keys) {
    const key = keys[item];
    arrayWithProps.push({ key, value: obj[key] });
  }

  return arrayWithProps;
}

/* eslint-disable linebreak-style */
export default function numberFormat(value) {
  return new Intl.NumberFormat().format(value);
}

const thouSep = '.';
const decSep = ',';
export const toMoney = (num: string) => {
  return (Math.round(parseInt(num) * 100) / 100)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
    .replace(/[,.]/g, function (m) {
      return m === ',' ? thouSep : decSep;
    });
};

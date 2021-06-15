const toK = (num) => {
  if (num >= 1000) {
    return Math.round(num / 100) / 10 + ' K';
  }
  return String(Math.round(num));
};


export default toK;
const truncateText = (str, size) => {
  if (str && str.length > size) {
    return str.substring(0, size-4) + '...';
  }
  return str;
};


export default truncateText;
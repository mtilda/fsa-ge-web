const pzfEmoji = (str) => {
  return (
    str === 'PASS' ? str + ' ✅' :
      str === 'ZONE' ? str + ' ⚠️' :
        str === 'FAIL' ? str + ' ❌' :
          str
  );
};

export default pzfEmoji;
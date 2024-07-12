// parenthesis-less function & template literal

div = function (s, ...v) {
  console.log(s, v);
  return function () {
    return <div style={{}}></div>;
  };
};

div`
    color: #fff;
    font-size: 20px;
    font-weight: 20px;
`;
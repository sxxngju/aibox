const useNumberFormat = (number: number) => {
  let strNumber = number.toString();
  let length = strNumber.length;

  if (length <= 4) {
    // 4자리 이하일 경우 그대로 반환
    return strNumber;
  } else if (length == 5) {
    // 5자리일 경우 "X만" 형식으로 변환
    return strNumber[0] + '.' + strNumber[1] + '만';
  } else if (length == 6) {
    // 6자리일 경우 "XX만" 형식으로 변환
    return strNumber.substring(0, 2) + '만';
  } else {
    // 7자리 이상일 경우 "X.X만" 형식으로 변환
    return strNumber[0] + '.' + strNumber[1] + '만';
  }
};

export default useNumberFormat;

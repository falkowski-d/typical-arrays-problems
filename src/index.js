exports.min = function min(array) {
    if (typeof array !== 'undefined' && array.length > 0) {
        function compareNumbers(a, b) {
            return a - b;
        }
        return array.sort(compareNumbers)[0];
    } else return 0;
};

exports.max = function max(array) {
  if (typeof array !== 'undefined' && array.length > 0) {
    function compareNumbers(a, b) {
        return b - a;
    }
    return array.sort(compareNumbers)[0];
} else return 0;
};

exports.avg = function avg(array) {
  let calculateAvg = 0;
  if (typeof array !== 'undefined' && array.length > 0) {
    for (i = 0; i < array.length; i++) {
      calculateAvg += array [i];
    } return calculateAvg / array.length;  
  } else return 0;
};

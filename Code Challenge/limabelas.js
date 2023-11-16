var expect = function (val) {
    let toBe = function (x) {
      if (x === val) return true;
      throw new Error('Not Equal');
    };
  
    let notToBe = function (x) {
      if (x !== val) return true;
      throw new Error('Equal');
    };
  
    return { toBe, notToBe };
  };
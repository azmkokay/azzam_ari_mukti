function memoize(fn) {
    let callCount = 0;
    let lookup = {};
  
    return function (...args) {
      const key = args.join("#");
  
      if (key in lookup) {
        return lookup[key];
      }
  
      lookup[key] = fn(...args);
      callCount++;
  
      return lookup[key];
    };
  }
  

var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;
    let hasRejected = false;

    function checkCompletion() {
      if (completedCount === functions.length) {
        if (hasRejected) {
          reject(results.find((result) => result.status === 'rejected').reason);
        } else {
          resolve({
            t: Date.now(),
            resolved: results.filter((result) => result.status === 'resolved').map((result) => result.value),
          });
        }
      }
    }

    functions.forEach((func, index) => {
      func()
        .then((value) => {
          results[index] = { status: 'resolved', value };
        })
        .catch((reason) => {
          results[index] = { status: 'rejected', reason };
          hasRejected = true;
        })
        .finally(() => {
          completedCount++;
          checkCompletion();
        });
    });
  });
};

// Example 1
const functions1 = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200)),
];
promiseAll(functions1).then(console.log).catch(console.error);

// Example 2
const functions2 = [
  () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
  () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)),
];
promiseAll(functions2).then(console.log).catch(console.error);

// Example 3
const functions3 = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100)),
];
promiseAll(functions3).then(console.log).catch(console.error);

//* ================= 1
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}


let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

const millis = 200;

sleep(millis).then((result) => {
  console.log(result); // Output: 200
});

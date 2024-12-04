//your JS code here. If required.

document.getElementById("btn").addEventListener("click", () => {
  const input = document.getElementById("ip").value;
  const output = document.getElementById("output");

  
  new Promise((resolve, reject) => {
    const num = parseFloat(input);
    if (isNaN(num)) {
      reject("Please enter a valid number.");
    } else {
      setTimeout(() => {
        output.textContent = `Result: ${num}`;
        resolve(num);
      }, 2000);
    }
  })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num + 10;
          output.textContent = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })
    .then((finalResult) => {
      output.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      output.textContent = `Error: ${error}`;
    });
});

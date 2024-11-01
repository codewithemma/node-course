const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("something went wrong");
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log("something went wrong");
      return;
    }
    const second = result;
    writeFile(
      "./content/third.txt",
      `here is the result okay: ${first},${second}`,
      (err, result) => {
        if (err) {
          console.log("something went wrong");
          return;
        }
        console.log(result);
      }
    );
  });
});

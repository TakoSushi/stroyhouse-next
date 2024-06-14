const replace = require("replace-in-file");
const options = {
  //you may need to modify the file address to suite your project
  files: "./dist/_next/static/css/*.css",
  from: ["_next/static"],
  to: [".."],
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();

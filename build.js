const fs = require("fs");
const path = require("path");

// Create dist directory if it doesn't exist
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
} else {
  // Clean dist directory
  const files = fs.readdirSync("dist");
  files.forEach((file) => {
    try {
      fs.unlinkSync(path.join("dist", file));
    } catch (err) {
      console.log(`Warning: Could not delete ${file}:`, err.message);
    }
  });
}

// Files to exclude
const excludeFiles = ["build.js", "package.json", "package-lock.json"];

// Get all files in current directory
const allFiles = fs.readdirSync(".");

// Copy HTML files
const htmlFiles = allFiles.filter(
  (file) => file.endsWith(".html") && !excludeFiles.includes(file)
);
htmlFiles.forEach((file) => {
  try {
    fs.copyFileSync(file, path.join("dist", file));
    console.log(`Copied: ${file}`);
  } catch (err) {
    console.error(`Error copying ${file}:`, err.message);
  }
});

// Copy JS files
const jsFiles = allFiles.filter(
  (file) => file.endsWith(".js") && !excludeFiles.includes(file)
);
jsFiles.forEach((file) => {
  try {
    fs.copyFileSync(file, path.join("dist", file));
    console.log(`Copied: ${file}`);
  } catch (err) {
    console.error(`Error copying ${file}:`, err.message);
  }
});

// Copy JPG files
const jpgFiles = allFiles.filter(
  (file) => file.endsWith(".jpg") && !excludeFiles.includes(file)
);
jpgFiles.forEach((file) => {
  try {
    fs.copyFileSync(file, path.join("dist", file));
    console.log(`Copied: ${file}`);
  } catch (err) {
    console.error(`Error copying ${file}:`, err.message);
  }
});

// Copy README.md
if (fs.existsSync("README.md")) {
  try {
    fs.copyFileSync("README.md", path.join("dist", "README.md"));
    console.log("Copied: README.md");
  } catch (err) {
    console.error("Error copying README.md:", err.message);
  }
}

console.log("Build completed successfully!");

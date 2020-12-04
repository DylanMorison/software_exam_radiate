const path = require("path");
const express = require("express");
const app = express();

/**
 * !Your task is to write a function that uses the Random.org HTTP API to
 * !create an RGB image that measures 120 by 120 pixels, where each pixel is a random RGB color.
 * !BMP, PNG, or JPG images are fine. Use whichever language you’d prefer
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.all("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => console.log("Server starting up!"));

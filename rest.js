const http = require("http");
const https = require("https");

module.exports.getJSON = (options, onResult) => {
    console.log("rest::getJSON");

    const port = options.port == 443 ? https : http;

    let output = "";

    const request = port.request(options, (response) => {
        console.log(`${options.host} : ${response.statusCode}`);

        response.setEncoding("utf8");

        response.on("data", (chunk) => {
            output += chunk;
        });

        response.on("end", () => {
            let jsonOutput = JSON.parse(output);

            onResult(response.statusCode, jsonOutput);
        });
    });

    request.on("error", (error) => {
        response.send(`Error: ${err.message}`);
    });

    request.end();
};
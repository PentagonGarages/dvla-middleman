const app = require("./expressApp.js");
const axios = require("axios");

const port = process.env.PORT || 5000;

app.post("/api/vehicleInformation", async (request, response) => {
    try {
        let config = {
            headers: {
                "x-api-key": "CLeY9icu8S3L2JvGEQykN1OExR9ydMy3b4hqYsg5",
                "Content-Type": "application/json",
            }
        }

        const axiosResponse = await axios.post("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles/", {
            registrationNumber: request.body.registrationNumber,
        }, config);

        console.log(axiosResponse.data);

        response.send(axios);
    } catch (error) {
        response.json({
            Message: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`DVLA Middleman is up and running on port number: ${port}!`);
})

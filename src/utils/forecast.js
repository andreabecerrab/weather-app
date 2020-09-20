const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/3e255eb7e8285ddc741a4e8cfec3aa4e/" + latitude + "," + longitude + "?units=si";

  request({ url, json: true }, (error, { body }) => {
    console.log(body);
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      callback("no", undefined);
    } else {
      callback(undefined, {
        temp: body.currently.temperature,
        summary: body.currently.summary,
      });
    }
  });
};

module.exports = forecast;

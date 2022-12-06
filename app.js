const express = require("express");
const app = express();
const { json, urlencoded } = require("body-parser");

app.use(
    urlencoded({
        extended: true,
    })
);
app.use(
    json({
        extended: true,
    })
);

require("./routes/movesRoutes")(app);

app.listen(8080, () => {

    console.log("listening to port number 8080");

});

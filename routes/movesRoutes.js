module.exports = (app) => {
    const performAction = require("../controllers/movesController");

    app.post("/moves/forward",performAction.forward);
    app.post("/moves/backward",performAction.backward);
    app.post("/moves/right",performAction.right);
    app.post("/moves/left",performAction.left);
    app.put("/moves/resetRobot",performAction.reset);
};
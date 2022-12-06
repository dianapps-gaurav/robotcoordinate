module.exports = (app) => {
    const performAction = require("../controllers/movesController");
    const robotMiddleWare = require("../middleware/robotMiddleware");

    app.post("/moves/forward", robotMiddleWare.middlewareValidator, performAction.forward);
    app.post("/moves/backward", robotMiddleWare.middlewareValidator, performAction.backward);
    app.post("/moves/right", robotMiddleWare.middlewareValidator, performAction.right);
    app.post("/moves/left", robotMiddleWare.middlewareValidator, performAction.left);
    app.put("/moves/resetRobot", performAction.reset);
};
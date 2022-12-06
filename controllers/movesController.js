let batteryHealth = 100;
let lastMove = " ";
let maxMoves = 0;
const x1 = -10;

const x2 = 10;

const y1 = -10; 

const y2 = 10;

let currX = 0; 
let currY = 0;

const check = (moves,batteryPercent,batteryConsumed) => {
    if (moves > 4 || batteryPercent !== batteryHealth) {
        const obj = 
            {
                statusCode: 400,
                message: "enter correct number of moves or battery percent"
            };

        return obj;
        
    } else if (batteryConsumed > batteryHealth) {
        const obj1 = 
            {
                statusCode: 400,
                message: "battery insufficient to perform action"
            };

        return obj1;
    }
};

module.exports.forward = (req,res) => {
    if (lastMove === "forward" && maxMoves === 4) {
        return res.send({
            message: "you can  only perform one type of instruction 4 times at a time" 
        });
    } else if (maxMoves === 4 && lastMove !== "forward") {
        maxMoves = 0;
    }
    const moves = req.body.moves;
    
    const batteryPercent = req.body.battery;
    const batteryConsumed = moves * 2 ;
    const data = check(moves,batteryPercent,batteryConsumed);

    if (data) {
        res.send(data);
    } else if (currY + moves > y2) {
        res.send({
            statusCode: 402,
            message: "number of moves exceeded.please enter moves within limits"
        });
    } else {
        currY += moves;
        batteryHealth -= batteryConsumed;
        lastMove = "forward";
        maxMoves += 1;
        res.send({
            statusCode: 200,
            message: "action performed successfully",
            updatedPosition: { currX , currY } ,
            currentBatteryHealth: batteryHealth
        }); 
    }

};

module.exports.backward = (req,res) => {
    if (lastMove === "backward" && maxMoves === 4) {
        return res.send({
            message: "you can  only perform one type of instruction 4 times at a time" 
        });
    } else if (maxMoves === 4 && lastMove !== "backward") {
        maxMoves = 0;
    }
    const moves = req.body.moves;
    const batteryPercent = req.body.battery;
    const batteryConsumed = moves * 2 ;
    const data = check(moves,batteryPercent,batteryConsumed);

    if (data) {
        res.send(data);
    } else if (currY - moves < y1) {
        res.send({
            statusCode: 402,
            message: "number of moves exceeded.please enter moves within limits"
        });
    } else {
        currY -= moves;
        batteryHealth -= batteryConsumed;
        lastMove = "backward";
        lastMove += 1;
        res.send({
            statusCode: 200,
            message: "action performed successfully",
            updatedPosition: { currX , currY } ,
            currentBatteryHealth: batteryHealth
        }); 
    }

};

module.exports.right = (req,res) => {
    if (lastMove === "right" && maxMoves === 4) {
        return res.send({
            message: "you can  only perform one type of instruction 4 times at a time" 
        });
    } else if (maxMoves === 4 && lastMove !== "right") {
        maxMoves = 0;
    }
    const moves = req.body.moves;
    const batteryPercent = req.body.battery;
    const batteryConsumed = moves * 2 ;
    const data = check(moves,batteryPercent,batteryConsumed);

    if (data) {
        res.send(data);
    } else if (currX + moves > x2) {
        res.send({
            statusCode: 402,
            message: "number of moves exceeded.please enter moves within limits"
        });
    } else {
        currX += moves;
        batteryHealth -= batteryConsumed;
        lastMove = "right";
        maxMoves += 1;
        res.send({
            statusCode: 200,
            message: "action performed successfully",
            updatedPosition: { currX , currY } ,
            currentBatteryHealth: batteryHealth
        }); 
    }

};

module.exports.left = (req,res) => {
    if (lastMove === "left" && maxMoves === 4) {
        return res.send({
            message: "you can  only perform one type of instruction 4 times at a time" 
        });
    } else if (maxMoves === 4 && lastMove !== "left") {
        maxMoves = 0;
    }
    const moves = req.body.moves;
    const batteryPercent = req.body.battery;
    const batteryConsumed = moves * 2 ;
    const data = check(moves,batteryPercent,batteryConsumed);

    if (data) {
        res.send(data);
    } else if (currX + moves < x1) {
        res.send({
            statusCode: 402,
            message: "number of moves exceeded.please enter moves within limits"
        });
    } else {
        currX -= moves;
        batteryHealth -= batteryConsumed;
        lastMove = "left";
        maxMoves += 1;
        res.send({
            statusCode: 200,
            message: "action performed successfully",
            updatedPosition: { currX , currY } ,
            currentBatteryHealth: batteryHealth
        }); 
    }

};

module.exports.reset = (req,res) => {
    batteryHealth = 100;
    currX = 0; 
    currY = 0;
    res.send({
        statusCode: 200,
        message: "batteryHealth is 100% and robot is set to origin (0,0)"
    });
};


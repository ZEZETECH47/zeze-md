// action/index.js
const { handleEvent } = require("./events");

async function actionHandler(conn, message) {
    await handleEvent(conn, message);
}

module.exports = actionHandler;

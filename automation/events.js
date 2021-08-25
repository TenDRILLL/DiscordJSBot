module.exports.create = (bot) => {
    const {readdirSync} = require("fs");
    readdirSync("./events").forEach(f => {
        if(f.endsWith(".js")){
            let js = require("../events/" + f);
            if(js instanceof require("./eventClass")){
                if(js.isRunOnce()){
                    bot.once(js.getEventName(), (...args) => js.exec(...args, bot));
                } else {
                    bot.on(js.getEventName(), (...args) => js.exec(...args, bot));
                }
            } else {
                console.log("Non-event file in folder: " + f);
            }
        } else {
            console.log("Non-event file in folder: " + f);
        }
    });
}
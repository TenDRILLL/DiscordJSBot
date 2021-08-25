class Ready extends require("../automation/eventClass"){
    constructor() {
        super("ready",true);
    }

    exec(bot){
        console.log("Bot has started, using account: " + bot.user.tag);
    }
}

module.exports = new Ready();

const {Client} = require("discord.js");
const bot = new Client();
const {token} = require("./token.json");

bot.prefix = "!";
bot.commands = require("./automation/commands").get();

console.log("Bot starting up ^^");
require("./automation/events").create(bot);

bot.login(token);

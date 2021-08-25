class Message extends require("../automation/eventClass"){
    constructor() {
        super("message",false);
    }

    exec(message,bot){
        if(!message.guild) return;
        if(message.content === "<@" + bot.user.id + ">" || message.content === "<@!" + bot.user.id + ">"){
            return message.channel.send("Hi there! I'm " + message.guild.me.displayName + "!\nMy prefix is: " + bot.prefix);
        }
        if(!message.content.startsWith(bot.prefix)) return;
        const args = message.content.slice(bot.prefix.length).split(" ");
        const command = args.shift().toLowerCase();
        const cmd = bot.commands.get(command);
        if(cmd){ cmd.run(message,bot,args); }
    }
}

module.exports = new Message();
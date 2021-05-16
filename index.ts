import { Telegraf } from 'telegraf'
const secrets = require('./secrets.json');
const bot = new Telegraf(secrets.BOT_TOKEN);

const {Commands} = require('./lib/Commands');
const cmd = new Commands(bot);
const {InlineCommands} = require('./lib/Commands');
const inlineCmd = new InlineCommands(bot);

async function main() {
    
    const botInfos = await bot.telegram.getMe();
    bot.on('text', async (ctx:any) => {
        console.log(ctx.update.message.text);
        let ctxArray = ctx.update.message.text.substring(1).split(' ')
        let cmdName = ctxArray[0].split('@')[0].toLowerCase()
        ctx.props = ctxArray
        new RegExp(`(^${cmdName})(@${botInfos.username})?$`).test(ctxArray[0].toLowerCase()) && typeof cmd[cmdName] === "function" ? cmd[cmdName](ctx) : cmd.errorCmd(ctx);
    });
    
    bot.on('callback_query', async (ctx: any) => {
        console.log(ctx.update.callback_query.message.chat);
        console.log(ctx.update.callback_query.data);
        var props:string[] = ctx.update.callback_query.data.split(" ");
        ctx.props = props;
        typeof inlineCmd[0] === "function" ? cmd[props[0]](ctx) : inlineCmd.errorCmd(ctx);
    });
}
main();
bot.launch();
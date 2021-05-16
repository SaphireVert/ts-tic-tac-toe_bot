export class InlineCommands {

    bot: any;

    constructor(bot:any){
        this.bot = bot;
    }

    async errorCmd(ctx:any) {
        console.log("Commande introuvable...")
    }

    test(ctx:any) {
        ctx.reply("Welcome to tic-tac-toe !\nType /newgame to begin new game.");
    }
}
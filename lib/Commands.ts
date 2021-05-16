export class Commands {

    bot: any;

    constructor(bot:any){
        this.bot = bot;
    }

    async errorCmd(ctx:any) {
        ctx.reply("Commande introuvable...")
    }

    start(ctx:any) {
        ctx.reply("Welcome to tic-tac-toe !\nType /newgame to begin new game.");
    }

    newgame(ctx:any){
        ctx.reply("Game started");
    }

}
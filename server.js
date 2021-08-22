var Aoijs = require("aoi.js")
var fs = require("fs")

const bot = new Aoijs.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]",
});
 
bot.onMessage()
bot.onJoined()
bot.onLeave()

//Variable
bot.variables({
 prefix: process.env.PREFIX,
 token: process.env.TOKEN,
 rch: "",
 rmsg: "Congrats {user.mention} You Level Now Is **{level}**",
 lvl: "0",
 exp: "0",
 rexp: "40",
 rsystem: "0"
})
  
 //Command Handler
var reader = fs.readdirSync("./command/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./command/${file}`)
  bot.command({
channel: command.channel,
name: command.name, 
aliases: command.aliases,
code: command.code
  })
  
//Reset Rank
}
bot.command({
 name: "resetrank",
 usage: "resetrank",
 description: "reset the levelup channel",
 code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]`
})


bot.awaitedCommand({
 name: "errorrank",
 code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})


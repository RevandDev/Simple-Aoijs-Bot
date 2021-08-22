
module.exports = {
  
  name: "ban",
  code: `
$ban[$mentioned[1]]
$color[#b56310]
$footer[Success Banned User ]
$author[Ban Succesfully!;$userAvatar[$clientID]]
$description[Don't Forget Check The Server Rules!]
$addField[Banned;<@$mentioned[1]>]
$addField[Admin;<@$authorID>]
$addField[Reason;$noMentionMessage]
$argsCheck[>2;Use: \`$getServerVar[prefix]ban <@user> <Reason>\`]
$onlyPerms[manageserver;❌ **You need Manage Server Permissions!**]
`}

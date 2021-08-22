module.exports = {
  
  name: "avatar",
  aliases: ['av', 'pictureprofile'],
  code: `$image[$userAvatar[$mentioned[1]]]
$footer[REV Plays]
$colot[#b56310]
$addTimestamp
$argsCheck[>1;Use: \`$getServerVar[prefix]avatar <Tag>\`]`
}

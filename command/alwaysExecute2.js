module.exports = ({

 name: "$alwaysExecute",

 code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]

$onlyIf[$getServerVar[rsystem]>=1;]

$onlyForServers[$guildID;]`

})

 

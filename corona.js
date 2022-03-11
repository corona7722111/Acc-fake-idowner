const Discord = require("discord.js");
const Yaxi = new Discord.Client();
//////// playing or dnd  streaming ////////
corona.on("ready", () => {
  console.log(
    `Online In Servers`
  );
  let statuses = [
  
  `You only live once, so try to live for God.`,
 
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    Yaxi.user.setActivity(STREAMING, {      
    type: "STREAMING", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
///////////////////////
corona.on("ready", () => {
    var join = corona.channels.get(""); /// id voice
    if (join) join.join();
  });
//////////////// tokn lera da bne 
corona.login("");

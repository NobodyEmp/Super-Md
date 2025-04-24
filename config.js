/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

const chalk = require("chalk")
const fs = require("fs")

//======= Change settings =======\\
global.owner = ["2349060830780"] 
global.botname = ["Super MD"]
global.simbol = "♘"
global.typeMenu = 'v5' //don't change 
global.anticall = false // set true to turn anticall always on
global.xprefix = '.' // your desired prefix
global.presence = 'available' // available to show always online // unavailable to show not oniline //composing to show fake typing //recording to show fake recording audio
global.thumb = 'https://pomf2.lain.la/f/4pdqc01o.jpg' // your menu image
global.timezone = 'Africa/Lagos' // input timezone codrectly with continuent then / city if input wrongly might cause error
global.tempatDB = 'database.json'
global.packname = "Super"
global.author = "𓄂⍣⃝𝐄𝐌𝐏𝄟✮͢≛𝐍𝐎𝐁𝐎𝐃𝐘𝄟✮"
global.creator = "2349060830780@s.whatsapp.net"
global.botname = 'Super•MD' //ur bot name
global.ownernumber = '2349060830780' //ur owner number
global.ownername = '𓄂⍣⃝𝐄𝐌𝐏𝄟✮͢≛𝐍𝐎𝐁𝐎𝐃𝐘𝄟✮' //ur owner name
global.amira = "120363301425971442@newsletter"
global.amiraname = "𝔸ℝℂℋℰℛ ℙℝ𝕠ʝ𝔼ℂ𝕋"
global.thumbUrl = "https://files.catbox.moe/akdqw5.jpg"
global.wagc = "https://whatsapp.com/channel/0029VagLJFx4CrfkyNJUsg1Y"
global.themeemoji = "😇"
global.autoblocknumber = '44' //set autoblock country code
global.antiforeignnumber = '' 
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true
global.session = "SUPER-MD_5e9d779cd4a982b0e0057b143e58f404"
//======= Don't change =======\\

global.prefa = ['.']
global.ytname = "YT: NOBODY EMP" //ur yt chanel name
global.socialm = "NOBODYEMP" //ur github or insta name
global.location = "NIGERIA" //ur location

//======= Don't touch =======\\
global.mess = {
    succes: 'Success',
    owner: 'This feature could be used by owner only',
	admin: 'This feature could be used by group admin only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    botAdmin: "*𝙱𝙾𝚃 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳* This feature is only for when the bot is an admin.!",
    bot: 'This feature could be used by bot only',
    wait: 'processing...',
    linkm: 'Where is the link?',
    ban: 'Sorry you have been banned 🚶from using command contact owner to unban ❌'
    }
//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
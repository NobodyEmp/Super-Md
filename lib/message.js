/* 

   Contact: https://wa.me/2347036214381
   Telegram: https://t.me/Ednut_x    
   Developer : https://wa.me/2348102487241
  
*/

require('../config');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const FileType = require('file-type');
const PhoneNumber = require('awesome-phonenumber');
        const isCreator = [ ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const { jidNormalizedUser, proto, getBinaryNodeChildren, getBinaryNodeChild, generateWAMessageContent, generateForwardMessageContent, prepareWAMessageMedia, delay, areJidsSameUser, extractMessageContent, generateMessageID, downloadContentFromMessage, generateWAMessageFromContent, jidDecode, generateWAMessage, toBuffer, getContentType, getDevice } = require('@whiskeysockets/baileys');
const {
    randomBytes
} = require('crypto')

async function LoadDataBase(conn, m) {
	try {
		const botNumber = await conn.decodeJid(conn.user.id);
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isBoolean = x => typeof x === 'boolean' && Boolean(x)
		let setBot = global.db.settings
		if (typeof setBot !== 'object') global.db.settings = {}
		if (setBot) {
			if (!('anticall' in setBot)) setBot.anticall = false
			if (!('available' in setBot)) setBot.available = false
			if (!('autoread' in setBot)) setBot.autoread = false
			if (!('autorecording' in setBot)) setBot.autorecording = false
			if (!('autotyping' in setBot)) setBot.autotyping = false
			if (!('unavailable' in setBot)) setBot.unavailable = false
			if (!('readsw' in setBot)) setBot.readsw = false
			if (!('unavailable' in setBot)) setBot.unavailable = false
			if (!('readsw' in setBot)) setBot.readsw = false 
			if (!('autosticker' in setBot)) setBot.autosticker = false 
               if (!('autobio' in setBot)) setBot.autobio = false 
               if (!('autorecordtype' in setBot)) setBot.autorecordtype = false
               if (!('autoblocknum' in setBot)) setBot.autoblocknum = false
               if (!('onlyindia' in setBot)) setBot.onlyindia = false
               if (!('onlyindo' in setBot)) setBot.onlyindo = false
               if (!('onlygrub' in setBot)) setBot.onlygrub = false	
				if (!('mode' in setBot)) setBot.mode = true	
								if (!('send' in setBot)) setBot.send = false
		} else {
			global.db.settings = {
				anticall: false,
				autoread: false,
				autorecording: false, 
				autotyping: false,
				available: false,
				unavailable: false,
				readsw: false, 
				autosticker: false,
               autobio: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
				mode: true,				
				send: false
			}
		}
		

let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
        


if (user) {
  if (!('banned' in user)) user.banned = false
  if (!('setalive' in user)) user.setalive = ''
  if (!('warn' in user)) user.warn = 0
} else {
  global.db.users[m.sender] = {
    banned: false,
    setalive: '',
    warn: 0
  }
}


		if (m.isGroup) {
			let group = global.db.groups[m.chat]
			if (typeof group !== 'object') global.db.groups[m.chat] = {}
			if (group) {
				if (!('antilink' in group)) group.antilink = false
				if (!('antilink2' in group)) group.antilink2 = false
				if (!('welcome' in group)) group.welcome = false
				if (!('goodbye' in group)) group.goodbye = false
						if (!('mute' in group)) group.mute = false
														if (!('open' in group)) group.open = false
															if (!('antitag' in group)) group.antitag = false	
		if (!('banned' in group)) group.banned = false
		if (!('badword' in group)) group.badword = false
                  if (!('antiforeignnum' in group)) group.antiforeignnum = false
                  if (!('antibot' in group)) group.antibot = false
                  if (!('antiviewonce' in group)) group.antiviewonce = false
                  if (!('antimedia' in group)) group.media = false
                  if (!('antivirtex' in group)) group.antivirtex = false
                  if (!('antiimage' in group)) group.antiimage = false
                  if (!('antivideo' in group)) group.video = false
                  if (!('antiaudio' in group)) group.antiaudio = false
                  if (!('antipoll' in group)) group.antipoll = false
                  if (!('antisticker' in group)) group.antisticker = false
                  if (!('anticontact' in group)) group.anticontact = false
                  if (!('antilocation' in group)) group.antilocation = false
                  if (!('antidocument' in group)) group.antidocument = false 
			} else {
				global.db.groups[m.chat] = {
					antilink: false,
					antilink2: false,
					welcome: false, 
					goodbye: false,
					mute: false,
					open: false,
					antitag: false,
					badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
					banned: false
				}
			}
		}
	} catch (e) {
		throw e;
	}
}
		

module.exports = { LoadDataBase }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});

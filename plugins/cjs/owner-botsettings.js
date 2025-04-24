module.exports = {
    command: ['autoread','autorecord','autotype','online','unavailable','autostatus'],
    description: 'change bot settings',
    owner: true,
    group: false,
    private: false,
    limit: false,
    execute: async (m, { ednut, isOwner, command, isCmd, reply, addCountCmd, getPosiCmdUser, randomemoji, isCreator, example, quoted, reaction, text, fetchJson, args, botNumber, pushname, isGroup, isPrivate, pickRandom, prefix, ftroli, fkontak }) => {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.mess.ban)
if (!text) return m.reply(example("on/off"))
if (!/on|off/.test(text)) return m.reply(example("on/off"))
let event
let name
let actions 
if (command == "autoread") {
event = global.db.settings.autoread
name = "autoread"
actions = async (kondisi) => {
global.db.settings.autoread = kondisi
}
}
if (command == "autorecord") {
event = global.db.settings.autorecording
name = "autorecord"
actions = async (kondisi) => {
global.db.settings.autorecording = kondisi
}
}
if (command == "autotype") {
name = "autotype"
event = global.db.settings.autotyping
actions = async (kondisi) => {
global.db.settings.autotyping = kondisi
}
}
if (command == "online") {
  event = global.db.settings.available
  name = "online"
  actions = async (kondisi) => {
    global.db.settings.available = kondisi
  }
}

if (command == "unavailable") {
  event = global.db.settings.unavailable
  name = "unavailable"
  actions = async (kondisi) => {
    global.db.settings.unavailable = kondisi
  }
}
if (command == "autostatus") {
event = global.db.settings.readsw
name = "astatus"
actions = async (kondisi) => {
global.db.settings.readsw = kondisi
}
}
if (text == "on") {
if (event == true) return m.reply(`*${name} already on!*`)
actions(true)
m.reply(`*successfully turned on ${name} ✅*`)
}
if (text == "off") {
if (event == false) return m.reply(`*${name} already off!*`)
actions(false)
m.reply(`successfully turned off ${name} ✅`)
}  
}
}
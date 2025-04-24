module.exports = {
    command: ['block'],
    description: 'block user from sending text',
    owner: true,
    group: false,
    private: false,
    limit: false,
    execute: async (m, { ednut, isOwner, command, isCmd, reply, addCountCmd, getPosiCmdUser, randomemoji, isCreator, example, quoted, reaction, text, fetchJson, args, botNumber, pushname, isGroup, isPrivate, pickRandom, prefix, ftroli, fkontak }) => {
if (m.isGroup) {
if (global.db.groups[m.chat].banned) return
}
if (global.db.users[m.sender].banned) return m.reply(global.mess.ban)
    const mem = !isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await ednut.updateBlockStatus(mem, "block");
if (isGroup) ednut.sendMessage(m.chat, {text: `Successfully blocked @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
 
}
}
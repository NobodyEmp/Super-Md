module.exports = {
    command: ['test'],
    description: 'test bot status',
    owner: false,
    group: false,
    private: false,
    limit: false,
    execute: async (m, { ednut, isOwner, command, isCmd, reply, addCountCmd, getPosiCmdUser, randomemoji, isCreator, example, quoted, reaction, text, fetchJson, args, botNumber, pushname, isGroup, isPrivate, pickRandom, prefix, ftroli, fkontak }) => {
        await m.reply('bot online ✅!');
    }
};
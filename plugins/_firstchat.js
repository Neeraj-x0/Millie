let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai,
 'I am ᴍɪʟʟɪᴇ, please dont spam,call,ask to save to this number. Can I help you?, Type .menu To Get Bot Menu'
`.trim(), watermark, user.banned ? 'Bot Owner' : 'Menu',`.menu`,'.owner' ,`.owner`, m)
    user.pc = new Date * 1
}

module.exports = handler

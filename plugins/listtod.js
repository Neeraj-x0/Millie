let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let mods = global.tod.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `┌〔 Truth or Dare 〕\n├   *Currently playing* ` + `\n` + mods.map(v => isOwner ? '├ @' + v.replace(/@.+/, '') : '│ ' + conn.getName(v)).join`\n` + '\n└────', m, { contextInfo: { mentionedJid: tod } })
}
handler.help = ['listtod']
handler.tags = ['fun']
handler.command = /^listtod$/i

module.exports = handler
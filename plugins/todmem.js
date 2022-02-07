let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/tod.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) throw `${conn.getName(who)} is already added to the list`
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/tod.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} added to truth or dare players`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['addtod [@user]']
handler.tags = ['fun']
handler.command = /^(addtod)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

module.exports = handler

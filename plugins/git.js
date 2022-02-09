let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/Neeraj-x0/Millie/main/Millie/millie.jpg")).buffer(), devil, 'ᴍɪʟʟɪᴇ ʙʏ ɴᴇᴇʀᴀᴊ\nᴛʜᴀɴᴋs ᴛᴏ ᴀᴊᴍᴀʟ-ᴀᴄʜᴜ & ᴅᴇᴠɪʟ sᴇʀ\n\nhttps://github.com/Neeraj-x0/Millie \n\n\ © ᴍɪʟʟɪᴇ' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler

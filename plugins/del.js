let handler = function (m) {
  if (!m.quoted) throw 'Reply message!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Can only delete messages from me'
  if (!isBaileys) throw 'ʀᴇᴘʟʏ ᴛᴏ ᴍʏ ᴍꜱɢ'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^(del|delete)/i
module.exports = handler

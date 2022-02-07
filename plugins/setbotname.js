// NurNurz
let handler = async (m, { conn, text }) => {
  if (!text) throw `uhm.. where's the text?`
  try {
    await conn.updateProfileName(text)
    m.reply('Succeed!')
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setname <txt>']
handler.tags = ['owner']
handler.command = /^(setname)$/i
handler.owner = true

module.exports = handler

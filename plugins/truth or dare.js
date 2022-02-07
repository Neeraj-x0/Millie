let handler = async (m, { conn, usedPrefix, command }) => {
    await conn.send2Button(m.chat, `“${pickRandom(global.tod)}\nPICK ONE”`, watermark, 'TRUTH', `.truth`,'DARE',`.dare`)
  }
  handler.help = ['tod']
  handler.tags = ['fun']
  handler.command = /^(tod)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
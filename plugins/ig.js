let scraper = require('@bochilteam/scraper')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw '𝚄𝙼𝙷...𝚆𝙴𝚁𝙴-𝙸𝚂-𝚃𝙷𝙴-𝚄𝚁𝙻?'
  
  let res = await scraper.instagramdl(args[0])
  for (let i = 0; i < res.length; i++) await conn.sendFile(m.chat, res[i].url, '', '', m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(ig(dl)|insta?)$/i

module.exports = handler

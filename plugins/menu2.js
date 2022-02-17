let handler = async (m, {conn}) => {
    conn.send2ButtonLoc(m.chat, require('fs').readFileSync('./Millie/millie.jpg'),`             💋 ᴍɪʟʟɪᴇ 💋 \n\n\n» ᴍɪʟʟɪᴇ ɪs ᴀ ᴍᴏᴅᴜʟᴀʀ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴡʀɪᴛᴛᴇɴ ɪɴ ɴᴏᴅᴇ.ᴊs\n\n» ᴊᴏɪɴ ᴍɪʟʟɪᴇ sᴜᴘᴘᴏʀᴛ ᴄʜᴀᴛ ғᴏʀ ᴀɴʏ ᴋɪɴᴅ ᴏғ ʜᴇʟᴘ\n\nhttps://chat.whatsapp.com/BcOf8vB5KAlFQhb3c5d06b
`,watermark, 'Menu', `.listt`,'Owner',`.owner`)
    }
    handler.help = ['menu']
    
    handler.command = /^(menu)$/i
    module.exports = handler



       

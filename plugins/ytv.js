let fetch = require('node-fetch')

let handler = async (m, { conn, args, isPrems, isOwner }) => {
	if (!args || !args[0]) throw 'Uhm... where is the url?'
	let chat = db.data.chats[m.chat]
	let dl_link = `https://yt-downloader.akkun3704.repl.co/?url=${args[0]}&filter=audioandvideo&quality=highestvideo&contenttype=`
	let json = await (await fetch(`https://yt-downloader.akkun3704.repl.co/yt?url=${args[0]}`)).json()
	let res = await (await fetch(dl_link)).buffer()
	let _thumb = {}
	try { _thumb = { thumbnail: await (await fetch(json.result.videoDetails.thumbnails[0].url)).buffer() } }
	catch (e) { }
	conn.sendFile(m.chat, res, json.result.videoDetails.title + '.mp4', `
Title: ${json.result.videoDetails.title}
Upload: ${json.result.videoDetails.uploadDate}
Views: ${json.result.videoDetails.viewCount}
Likes: ${json.result.videoDetails.likes}
`.trim(), m, false, { ..._thumb, asDocument: chat.useDocument })
}
handler.help = ['mp4','v',''].map(v => 'yt' + v)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i


module.exports = handler

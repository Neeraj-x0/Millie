let fs = require('fs')
global.owner = ['919074692450'] // Put your number here
global.mods =  JSON.parse(fs.readFileSync('./src/moderator.json'))// Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium users do not need a limit
global.tod = JSON.parse(fs.readFileSync('./src/tod.json'))
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  l0lhuman: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // The APIKey is here
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'FuckBitch',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://fxc7-api.herokuapp.com':'pnj8NAJb',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'FuzBot1',
  'https://api.lolhuman.xyz': 'sdz8VotwEnDd4HvdIUfy1e4qTDx',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = 'ABHISHEK SER'
global.author = 'ABHISHEK SURESH'


global.wait = '_*Please Wait..*_'
global.eror = '_*Server Error*_'
global.fla = 'https://github.com/neera-j/Bot-Files/blob/main/images/millie.jpg'

global.watermark = '© ABHI'

global.multiplier = 69 // The higher it is, the harder it is to level up

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

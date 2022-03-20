
# *Millie Whatsapp Bot*
<div align="center">
  
  [![Millie Whatsapp Bot](https://readme-typing-svg.herokuapp.com?font=times-bold-italic&color=%23F7F7F7&duration=4862&center=true&vCenter=true&lines=WELCOME+TO+MILLIE+WHATSAPP+BOT)](https://github.com/Neeraj-x0/Millie)
</div>
<div align="center">
  <img border-radius: 15px src="https://i.imgur.com/Pf1Wynm.png" width="200" height="200"/>

<p align="center">
  <a href="https://instagram.com/neer_j_"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/> 
  <a href="https://wa.me/918113921898"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</p>
<div align="center">
  
## JOIN MILLIE WHATSAPP GROUP

  [![join](https://github.com/Alien-alfa/PublicBot/blob/main/wlogo.svg.png?size=1)](https://chat.whatsapp.com/BcOf8vB5KAlFQhb3c5d06b)
 
## Yotube Tutorial If You have any doubts 
  
  [![Watch Tutorial](https://img.youtube.com/vi/5ox6VPzVSKs/0.jpg)](https://www.youtube.com/watch?v=5ox6VPzVSKs)

## `FORK AND CHANGE SETTINGS`

- OWNER NUMBER         [`CLICK HERE`](https://github.com/Neeraj-x0/Millie/blob/main/config.js#L2)
- SESSION           [`Click Here`](https://github.com/Neeraj-x0/Millie/blob/main/session.data.json#L1)

<div align="left">

# DEPLOYING ON HEROKU
  
### SCAN QR

[![Run on Repl.it](https://repl.it/badge/github/quiec/whatsAlfa)](https://replit.com/@neera-j/Sonic-QR)

### DEPLOY

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Neeraj-x0/Millie)


### CHANGE DYNO

###### MUST TURN OFF WEB NODE SERVER AND ENABLE WORKER NPM START TO WORK YOUR BOT PROPERLY

<p align="LEFT">
  <a href="https://github.com/Neeraj-x0/Millie"><img src="https://telegra.ph/file/c38e56370ba19bb784699.jpg" />
</p>

  
  ## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
apt install imagemagick -y
git clone https://github.com/Neeraj-x0/Millie
cd Millie
npm install
npm update
```

##### INSTALL ON TERMUX WITH UBUNTU

[ INSTALLING UBUNTU ]

```bash
apt update && apt full-upgrade
apt install wget curl git proot-distro
proot-distro install ubuntu
echo "proot-distro login ubuntu" > $PREFIX/bin/ubuntu
ubuntu
```
---------

##### [ INSTALLING REQUIRED PACKAGES ]

```bash
ubuntu
apt update && apt full-upgrade
apt install wget curl git ffmpeg imagemagick build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev dbus-x11 ffmpeg2theora ffmpegfs ffmpegthumbnailer ffmpegthumbnailer-dbg ffmpegthumbs libavcodec-dev libavcodec-extra libavcodec-extra58 libavdevice-dev libavdevice58 libavfilter-dev libavfilter-extra libavfilter-extra7 libavformat-dev libavformat58 libavifile-0.7-bin libavifile-0.7-common libavifile-0.7c2 libavresample-dev libavresample4 libavutil-dev libavutil56 libpostproc-dev libpostproc55 graphicsmagick graphicsmagick-dbg graphicsmagick-imagemagick-compat graphicsmagick-libmagick-dev-compat groff imagemagick-6.q16hdri imagemagick-common libchart-gnuplot-perl libgraphics-magick-perl libgraphicsmagick++-q16-12 libgraphicsmagick++1-dev
```

---------

##### [ INSTALLING NODEJS & MILLIE ]

```bash
ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
apt install -y nodejs gcc g++ make
git clone https://github.com/Neeraj-x0/Millie
cd Millie
npm install
npm update
```

---------

### FOR WINDOWS/VPS/RDP USER

* Download And Install Git [`Click Here`](https://git-scm.com/downloads)
* Download And Install NodeJS [`Click Here`](https://nodejs.org/en/download)
* Download And Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget Add FFmpeg to PATH enviroment variables**)
* Download And Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Neeraj-x0/Millie
cd Millie
npm install
npm update
```

---------

## Run

```bash
node .
```

---------

## Arguments `node . [--options] [<session name>]`

### `--session <file name>`

Use another session with another name, default is ```session.data.json```

### `--prefix <prefixes>`

* `prefixes` are seperated by each character
Set prefix

### `--server`

Used for [heroku](https://heroku.com/) or scan through website

### `--db <json-server-url>`

Use external db instead of local db, 
Example Server `https://json-server.team-electra4.repl.co//`

Code: `https://replit.com/@Team-Electra4/json-serve`

`node . --db 'https://json-server.team-electra4.repl.co/'`

The server should have like this specification

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

If small qr unicode doesn't support

### `--img`

Enable image inspector through terminal

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

## Settings

Now set using switch [enable.js](https://github.com/Neeraj-x0/Millie/blob/master/plugins/enable.js), among others are

```js
anticall: false, // Auto Reject better than autoblock
autoread: false, // If true all chats are automatically read
nyimak: false, // No bot, just print received messages and add users to database
restrict: false, // Enables restricted plugins (which can lead your number to be banned if used too often)
self: false, // Activate self mode (Ignores other)
pconly: false, // If that chat not from private bot, bot will ignore
gconly: false, // If that chat not from group, bot will ignore
jadibot: false, 
```


## Developers
  <div align="center">
    
  [![I_AM_DEVIL](https://telegra.ph/file/fb0b36ed9cdcf93b24df7.jpg?size=25)](https://github.com/D-3-V-1-L) |  [![Neeraj](https://telegra.ph/file/74e9659166febabb45aa0.jpg?size=100)](https://github.com/Neeraj-x0) | [![Ajmal-Achu](https://telegra.ph/file/fa920b55caaa8e8be6f04.jpg?size=100)](https://github.com/Ajmal-Achu) 
----|----|----
[I_AM_DEVIL](https://github.com/D-3-V-1-L)  | [Neeraj](https://github.com/Neeraj-x0) | [Ajmal-Achu](https://github.com/Ajmal-Achu)
Base, Bug Fixes, Modules | Bug fixes, Modules | Bug Fixes, Modules
  </div>
                                  
  </div>

<div align="left">
  
### THANKS TO :
  
- [Nurutomo](https://github.com/Nurutomo) 
- [adiwajshing/Baileys](https://github.com/adiwajshing/Baileys)
 

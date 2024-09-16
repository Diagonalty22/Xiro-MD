//===============================//
// SC BUG BOT XHIRO GENERASI KE TIGA 
// BASE : ALWAYSXDAMR66 
// RECODE FULL : NOXXHIRO / XHIRO
// USAHAKAN GUNAKAN BOT SEBAIK MUNGKIN
// BUY NO ENC? SUNG KELEGRAM OWNER
// @PENULISCODEX

//GUNAKAN BOT SEWAJARNYA BIAR GAK KENA BANNED DAN JANGAN LUPA SUBSCRIBE YT ALWAYSXDAMR66 
//XHIRO BOT GENERASI 3

//INFO BOT XHIRO GEN 3
//BASE : ALWAYSXDAMR66 
//RECODE : XHIRO
//CREDITS : NOXXHIRO
//YOUTUBE : https://www.youtube.com/@penuliscodexx
//===============================//
require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6285601800364" // ADD NOMOR LU BIAR BISA AKSES FITUR BOT XHIRO
global.namaowner = "ᴹᴿメ 𝐇𝐞𝐧𝐝𝐫𝐚 [𝗝𝗕]"

//======== Setting Bot & Link ========//
global.namabot = "ᴹᴿメ 𝐇𝐞𝐧𝐝𝐫𝐚 [𝗝𝗕]" 
global.namabot2 = "ᴹᴿメ 𝐇𝐞𝐧𝐝𝐫𝐚 [𝗝𝗕]"
global.ownerbot = "HENDRA"
global.foother = "© COPYRIGHT PENULISCODEX++"
global.idsaluran = "https://whatsapp.com/channel/0029VanqCbu3QxS2PhMIw332"
global.linkgc = '-'
global.linksaluran = "https://whatsapp.com/channel/0029VanqCbu3QxS2PhMIw332"
global.apitokendo = '-' // API AKUN DIGITAL OCEAN ANDA
global.linkyt = 'https://www.youtube.com/@%E4%B9%82-b10real'
global.linktele = "https://t.me/6285601800364"
global.packname = "CREATED BY ©ᴹᴿメ 𝐇𝐞𝐧𝐝𝐫𝐚 [𝗝𝗕]🕊∞"
global.author = "-"
global.footer2 = '©-XXXXX'
global.foter1 = 'SCRIPT TYPE CASE ARIIXOS++'
global.foter2 = 'XHIRO400++ XSENTRY 608HZ'

//========== Setting Event ==========//
global.welcome = true
global.autoread = true
global.anticall = true
global.owneroff = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "_"
global.apikey = "_"
global.capikey = "_"

//========== Setting Panell 2 ==========//
global.domain2 = "-"
global.apikey2 = "-"
global.capikey2 = "-"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "-"
global.gopay = "-"
global.ovo = "-"
global.qr = fs.readFileSync("./media/qr.jpg")
                             
//========== Api Domain 1 ===========//
global.zone1 = "-"
global.apitoken1 = "-"
global.tld1 = "-"
//========== Api Domain 2 ==========//
global.zone2 = "-";
global.apitoken2 = "-";
global.tld2 = "-";
//========== Api Domain 3 ==========//
global.zone3 = "-";
global.apitoken3 = "-";
global.tld3 = "-";
//========== Api Domain 4 ==========//
global.zone4 = "-";
global.apitoken4 = "-";
global.tld4 = "-";
//========== Api Domain 5 ==========//
global.zone5 = "-";
global.apitoken5 = "-";
global.tld5 = "-";
//========== Api Domain 6 ==========//
global.zone6 = "-";
global.apitoken6 = "-";
global.tld6 = "-";

//========= Setting Message =========//
global.msg = {
"error": "⚠︎ -Error terjadi kesalahan- ⚠︎",
"done": "Done Bang 👤☕", 
"wait": "Bot Sedang Memproses Tunggu Sebentar. . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup !", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin 🕊", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot! ", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer "
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
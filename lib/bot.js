const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARAFAT-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/ArslanMDofficial/ARAFAT-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/Arslan-MD/⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸",
REPO_NAME: process.env.REPO_NAME || "⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸",
BOT_NAME: process.env.BOT_NAME || "⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸",
DESCRIPTION: process.env.DESCRIPTION || "⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸 MD RAJSHAHI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923392616263",
OWNER_NAME: process.env.OWNER_NAME || "ArafatMD Official",
ST_SAVE: process.env.ST_SAVE || "Arafat-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "Arafat-MD-BY-ARSLANMD-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY ⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸`* _*POWERD BY*_ *⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸 Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ ⏤͟͟ 𝐌𝐚𝐲𝐛𝐞 Ä𝐫ā𝐟ā𝐭 ! ¡ 🕸 BY ARSLAN-MD OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363348739987203@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VarfjW04tRrmwfb8x306",
INSTA: process.env.INSTA || "https://Instagram.com/arslanmdofficial",
ALIVE_IMG: process.env.ALIVE_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
OWNER_IMG: process.env.OWNER_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
CONVERT_IMG: process.env.CONVERT_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
AI_IMG: process.env.AI_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
SEARCH_IMG: process.env.SEARCH_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
MAIN_IMG: process.env.MAIN_IMG || "https://ibb.co.com/Kzwfb7tb",
GROUP_IMG: process.env.GROUP_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
FUN_IMG: process.env.FUN_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
TOOLS_IMG: process.env.TOOLS_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
OTHER_IMG: process.env.OTHER_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
MOVIE_IMG: process.env.MOVIE_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
NEWS_IMG: process.env.NEWS_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg",
PP_IMG: process.env.PP_IMG || "https://d.uguu.se/qSCCRRRzOxKQ.jpg"
};

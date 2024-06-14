huhconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_23_49_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAzNixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0bDB5WGJMQzZ1eXRvbGlyK2hGYWRuOXgyWkI4YlZDVnk2VGlyVVFvZ05jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzQ4MzQ4MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY1RjBENDY5REJBNTdFNDA0REUzMzVCMDUxMkQ1RkI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODMyMjU0NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLWnh5cXl2b1RNSzVqRElCbmxQRkVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0ZWUxYjViLTlmZWQtNDk2Yy05ZjUyLTdkZWE5Yjc2YTBhYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAxNDMsXG4gICAgICAxMjUsXG4gICAgICAxNDgsXG4gICAgICAzMSxcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDExLFxuICAgICAgMTk5LFxuICAgICAgODEsXG4gICAgICAxNTEsXG4gICAgICAxNTUsXG4gICAgICAzNCxcbiAgICAgIDUwLFxuICAgICAgMTAwLFxuICAgICAgNzQsXG4gICAgICAxOTcsXG4gICAgICA5LFxuICAgICAgMTk1LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDIyMSxcbiAgICAgIDIyMixcbiAgICAgIDU1LFxuICAgICAgNDEsXG4gICAgICAxODYsXG4gICAgICAyMjksXG4gICAgICA5MCxcbiAgICAgIDIwNCxcbiAgICAgIDIwLFxuICAgICAgNjMsXG4gICAgICAyMjcsXG4gICAgICA0NyxcbiAgICAgIDIwMyxcbiAgICAgIDE3OSxcbiAgICAgIDEyMCxcbiAgICAgIDg5LFxuICAgICAgMjUzLFxuICAgICAgMTYzLFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNaVlFKU1NEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0ODM0ODE5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw4DDscO4w7F5bcO4w7xzXCIsXG4gICAgXCJsaWRcIjogXCIyNjA5MTUzMDM4NjY1MTA6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlRYNHFJRkVPU0tyck1HR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxRllGMi8xVS9idm43bkNZaUJmM2pNay9WN3JMdllwMlk5cGRMMmhJbmxzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJFbFhwUlpWZEhuc013N2hxQ3JSS0xMM28xdTI2VzEzWFlHU0JKbi9XRTc3QXRRbHp5eW0xdEVFS3B4Nk02WEpNVnkvazcrL1lwcDR6YWVsbGhIOUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkk0cDBKclM5dDRMaGRFckM3NXZOaHpvN2J4V2JOWUdqeWpGVEthMXE2WTdRSFpRZ3g5RFBKZ2JxVS9Gbmk2MTVEY2phMG5xNDc4eGJUUVp3MFdtcmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzQ4MzQ4MTk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzMjI1MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDL25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMvbi5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

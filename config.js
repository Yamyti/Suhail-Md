const fs = require('fs-extra')
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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256765953364";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "all";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "256753538980";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "all";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_27_04_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgNixcbiAgICAgICAgMjAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg2LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1WWpHTU81R2FoNkdXR2YrQzBXU3M4YkROZUNHTDhmbU5IUGZJREdSNkY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1VURpdHdxVFJ0SzNQOXQtY3pjYmh3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3MDAwMmNiLWRlMzQtNDBlNC04NzdhLTRkMTYyYzFkMWM0M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDIwLFxuICAgICAgMTYsXG4gICAgICAyMzAsXG4gICAgICAzNCxcbiAgICAgIDEwOSxcbiAgICAgIDQyLFxuICAgICAgNzIsXG4gICAgICAxMDgsXG4gICAgICAxNDUsXG4gICAgICAxMyxcbiAgICAgIDE0NyxcbiAgICAgIDE1LFxuICAgICAgMTQzLFxuICAgICAgNDQsXG4gICAgICAxNzMsXG4gICAgICAxNTgsXG4gICAgICAyMjEsXG4gICAgICAyMjYsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQsXG4gICAgICAxNzQsXG4gICAgICAxMjMsXG4gICAgICAyMzgsXG4gICAgICAxMjYsXG4gICAgICA0OSxcbiAgICAgIDE1MixcbiAgICAgIDIxLFxuICAgICAgMTQwLFxuICAgICAgMTUxLFxuICAgICAgMCxcbiAgICAgIDg0LFxuICAgICAgNzQsXG4gICAgICAyMDEsXG4gICAgICAyMjAsXG4gICAgICAxMTIsXG4gICAgICAxNyxcbiAgICAgIDI0OSxcbiAgICAgIDg1LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTZNNEUxNFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc2NTk1MzM2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWWFteXBpZVwiLFxuICAgIFwibGlkXCI6IFwiMjA5NTQzMzUwOTk3MTYxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTURCaEZJUSsrUzRzUVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGSFJXTUhDemo5MnVmZUQzZDBUZlpuSEtOSEZwUFJVZ0tYMkZFRHNTV3dvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjh4ZzlzYlI4aWQ0SGlpOWF6Q2NkTmNZSERudDRpWnc4Z2ZJeW1oWUNhQzVGTVB5NEdYTkpCNnhzRExqRFJaSFNodDI0MTdoaERaQ0JzZ2RMamJZN0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImM3bENTK3JxMVJONWpGT1A3K1dsdHppOUFsclZtcWltWU5FNU1rNzFydE5oWEM3U09RUEhQK25qcTBLUlBLa2JxSUpnaGR6WllqQUpvYjh4SDc4bENRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc2NTk1MzM2NDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDMwMzYxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxvYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTG9iLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYWRwemVHSFViMnowMnk4T1BwKzNFcVdwTmF6QlJmYS9POXZBRVdIRmkzVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzIwNDAzODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDMwMzYxNzIzN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Yamy",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Yamy",
  ownername:process.env.OWNER_NAME|| "SHARIF",


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

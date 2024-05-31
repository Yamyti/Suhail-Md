const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Jinja, Uganda."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "256753538980" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256753538980";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "0783583514,0765953364";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_30_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICA5MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwLFxuICAgICAgICA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibkJ6S29EejNzZXU4eVFxeVdBaUUrdXQ5cUh2SWpKQUsyZXdLNDBNRlErRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOERYZE9oM3pUZXFPT2JLQl9NaUtId1wiLFxuICBcInBob25lSWRcIjogXCJkMTIyYmY2OS00NWVkLTQ1YzYtYWUxZC0yZGQ5OTFmNGFkOWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ2LFxuICAgICAgMTI0LFxuICAgICAgNDEsXG4gICAgICA3LFxuICAgICAgMTU1LFxuICAgICAgMTI4LFxuICAgICAgNjIsXG4gICAgICA2NCxcbiAgICAgIDEwMixcbiAgICAgIDI5LFxuICAgICAgOTIsXG4gICAgICA4NixcbiAgICAgIDE1LFxuICAgICAgMjU1LFxuICAgICAgMTU2LFxuICAgICAgMjM1LFxuICAgICAgODIsXG4gICAgICA2MyxcbiAgICAgIDEzMSxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxMzMsXG4gICAgICAyMyxcbiAgICAgIDEzMyxcbiAgICAgIDk5LFxuICAgICAgMjE1LFxuICAgICAgMTAyLFxuICAgICAgMjIsXG4gICAgICAxMDEsXG4gICAgICAxMTAsXG4gICAgICAyMjEsXG4gICAgICAyMDgsXG4gICAgICAzNSxcbiAgICAgIDk5LFxuICAgICAgMTE4LFxuICAgICAgMTQ0LFxuICAgICAgMTkyLFxuICAgICAgNjgsXG4gICAgICAyNTIsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVFRBS0U3SjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc1MzUzODk4MDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzgxMDM4MzAwOTM4MzQ6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLigZbihJjgvJLJjsi6TcmOIOGViMaXReKBluKEmOC8klwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s2OGdxd0JFSVhacnJFR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ1J0cnR0M3pqK2lYOHBncTNsdnVYN0RqYkZBZFZEc2NXRzRrdGJZVnV4RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpYVlGcVUvUVFuNnd0cExGT3RzMlBkQ0t4RlI1dUVFcmNTdjFZcVVrL3VwNWVHR1JaU0JEblR3MER0MkFpQXVidUJzWW9kWkdqaFQyY1lsSkhHTVpEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqWlJGdVJLSm9JSnMxWDVwSlRZYVE2V1JyNml4dFE1em9YRTliNWkxcVpBOGdLSC80YWYzZGRKQXlQZ3c4OUZuRFUra3dBSTZCRUNLOFh6K1ZLVjVBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTM1Mzg5ODA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDEzODI0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZlWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmVYLmpzb24iOiAie1wia2V5RGF0YVwiOlwid0JVUjJGWU4yeTFNcnVtQ21Ydk1BYVVzNkx5RXlPRm0wQThuTXA1Y3hMcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjA3NTA2MzcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzEzOTYxOTc3NzQyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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

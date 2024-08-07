//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://www.instagram.com/najjari_anas?igsh=ZDNsdWduZXdjM3Bv";
global.gurl = process.env.GURL || "https://www.instagram.com/najjari_anas?igsh=ZDNsdWduZXdjM3Bv";
global.website = process.env.GURL || "https://www.instagram.com/najjari_anas?igsh=ZDNsdWduZXdjM3Bv";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/48e22d72d6efcc2fd95a1.jpg";
global.devs = "https://www.instagram.com/najjari_anas?igsh=ZDNsdWduZXdjM3Bv";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2126398180";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/48e22d72d6efcc2fd95a1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hINUxGVElvNFowWnNkVk02WTd4VFQ3WGZtNStCUnpHWm11eFlGZlpGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSk5GU1VxcmlDNmV0QVRsUGd5Vk9WMWR0anVDWmNIenZHeno1Wm9WdVFSND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySjVrS0xHUlRyZE8wYUhaZUhKWHR4Y3ZNVzNud2pTMTR1VU5HN0VqWEVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlbExnYjFyUzRCR1hMdmgvdjNFbjc2d3A4c04xdmV6OWk1T0F1YjdwbUZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVGeER3azc4ak5oUm4wRThpZzdydEtCRVNCZVdNSlBtUVNSdWExMnd2MTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1ZcGw2WXFTL0FDSGtpWDUzSHhUNUpwWU1uMWttQ2lNYVRTTFNPZHhMa009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0hGT3lkM3B3L2FBb3pjdE5IdW5wLzRJV3ZuT041Rm9mTXlZaGR0M3MyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZXN0S2pOMG1xZ1IydDZZOG9qWDdyWU11MUUxcEl3NGg1Rk1MQVBRbzBSUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkzT25XWENpdDJKeG8wUk03SnhEaDRELy9UUk1mTTBLVXRDVnRTYU5JMVpNL2lPQzJVYy9HYTJaZHRFZ045TW9UT3hwU01Kc1ViYUJVVzNJNEdNVkN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiI1Ym9yUEU0WDk2bUxPZWhtbWptYnFUUEcrTi9SWGVJMXZ5aW9WMVNvNHE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4cmQyNVJkV1JvLVh6SGpMZWx6R1FnIiwicGhvbmVJZCI6IjA0OGQxYmYxLTc1ZDktNDExNS05MTYwLTk3MjFmZWFhYzMwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJseUorbnFMS0xyd29Ga1Y1M3RpdDQ1d0wvWW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXpPTUFYSkErNmdpN05NeWV2UzZxZzR4eiswPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhWUDE5UDJaIiwibWUiOnsiaWQiOiIyMTI2Mzk4MTgwOTg6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVhlNHFJQkVNRGR6N1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaXdOYzdhS3lIL1BzTzROTFluUHYrUVRGelA5MFFHUTMwRVhtdmlqN0JVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiczdGdm5najZOYkgvd1ZuSHROeS9oRWxnOWdwNjc4R3pPLzdyNktGSkI4K0RON3NJMzIzZlBZMmJjNC9udG1HZ3d3T3ZRNHYvOWl3aE1sVkdUZVM0Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6IktqSlpXdVZmNU41QUhjYy9WVS9EMVFwL1lJS1BKTHFLcEUzaUlCUDVXTkRDQXdyWkNadXVuOFlEUVFuTEw5R0ZWbTlheG4vemwvMjcxdVNJSFJIZUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEyNjM5ODE4MDk4OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXNEWE8yaXNoL3o3RHVEUzJKejcva0V4Y3ovZEVCa045QkY1cjRvK3dWQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzA2ODEwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCaTAifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Anas En Najjari™`",
  author: process.env.PACK_AUTHER || "Anas En Najjari",
  packname: process.env.PACK_NAME || "HSVXDX",
  botname: process.env.BOT_NAME || "Anas En Najjari",
  ownername: process.env.OWNER_NAME || "Anas Dx0",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || Anas En Najjari").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

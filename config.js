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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURETzZJdld3VEtkbE9yOU1PYjU3L1dzd2ZsVG5tRDY1eitvNEdjdVBVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm5IZEYxZm1YN1h3MjlCZktVamgzbVFVZUg3bUNpS2c1YW9sakpFSmYwVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmFEcStRcjNCd3NZWXhiZXI4MjgvajRKOThoNnFUUHZWdUFFTk1JZDF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwMytwUDBKL3BLNjlXQnNtb2Q4dHhLQ295TDZBWHJ3SmkzR0ZZci9aWnhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIcEdab1R3N1BCWkgwaXVKQnZoZUZYRWFTcDdRL2RGL0krYjJQUTQ4RVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQza0pFYzNlZjM0NVhwNGV5bFRKeEFXSUZPWTY2RFRxYmttWmR4RVg3bFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBpZHgzV0Q1NVJtU3FWWEsyUWJ0Vkx5NFl2L2puTFRVU3lyckhrVnRFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczg1NkVSekJMZFJ1SVN4Wmw0VzNnVWtTbHJsSnZreTJLdUhRZWI2QW5GOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5nMFgrVW5ZSWRGTDEvZWFsdm05WUIwT0RiWC84bkRZOTA5T1ZBNUFhMkFOdXR1N05QU21xdm1NTGozNHdCUW8zZnlMR3BPOHVwRVBqVlZocytFd0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJtMnNxcjdJREx6eHBCVGd4anBsbm1OS1NJK2tiWjY5ZDFHcE5YWWsvemNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIxMjYzOTgxODA5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NUZGOUE0NTUzRjc2OEM1NjgwQzI1RUQ4RDk0NjE4RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyOTg0MTU4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxbGFKdWdHNFJxMmg0cnRXVURySjFRIiwicGhvbmVJZCI6ImRiNTFjN2M3LTNhNjAtNDUxNC04MDU4LWZlMWY3ODY1NWQwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLWlNJUWpCa1pYb2o4aG5qdzJoZ1QyeTVDNjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2tMZ3ZBL1FDQmE4NEI5Q0UxS2RJaW9oV1EwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlUMjc5S0JBIiwibWUiOnsiaWQiOiIyMTI2Mzk4MTgwOTg6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEWDAgREFSSyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVBlNHFJQkVNL055clVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaXdOYzdhS3lIL1BzTzROTFluUHYrUVRGelA5MFFHUTMwRVhtdmlqN0JVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRmJTcC9uY2Jtc01CVFNGTHhlR2oxOUdpT1BpY2E4MGs1NFRESDRiTjM5MmRmamdZZkFBby9CRHpjNjZzUnFBYVNoc25WcHZmYzd1MUxyY1AyYjBEQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkhTN3ZpNy81dXZYcXF2cXNmekYzRlh5bWRkYVRpd1ZzRldpNnJmTmRPK090ZzFLSG50cmo5VkcvbVc1bm9HK05WaEI1d21sd1JLTDgyRlJuUGdENER3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjEyNjM5ODE4MDk4OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXNEWE8yaXNoL3o3RHVEUzJKejcva0V4Y3ovZEVCa045QkY1cjRvK3dWQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk4NDE1NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCaTAifQ=="
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

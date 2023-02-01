let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `🤔𝙔 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚\n😼 𝙄𝙣𝙜𝙧𝙚𝙨𝙖 𝙚𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n#join ${nn}`

if ( isMods || isOwner || m.fromMe) {
m.reply(`*el Bot se ha unido al grupo✅*`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([id]) => id)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`*[❗] 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙐𝘿 𝘿𝙀 𝘽𝙊𝙏 𝙋𝘼𝙍𝘼 𝙐𝙉 𝙂𝙍𝙐𝙋𝙊 [❗]*\n\n*👤 𝙉𝙪𝙣𝙚𝙧𝙤 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙖𝙣𝙩𝙚:*\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n*🔮 𝙇𝙞𝙣𝙠 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤:*\n ' + link, jid)

m.reply(`*✅ 𝙎𝙪 𝙚𝙣𝙡𝙖𝙘𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙤́ 𝙖𝙡 𝙢𝙞 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙖)*.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *𝙎𝙪 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚𝙧𝙖́ 𝙚𝙫𝙖𝙡𝙪𝙖𝙙𝙤 𝙮 𝙦𝙪𝙚𝙙𝙖𝙧𝙖́ 𝙖 𝙙𝙚𝙘𝙞𝙨𝙞𝙤́𝙣 𝙙𝙚𝙡 𝙢𝙞 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙖).*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *𝙀𝙨 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙦𝙪𝙚 𝙨𝙪 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙪𝙙 𝙨𝙚𝙖 𝙧𝙚𝙘𝙝𝙖𝙯𝙖𝙙𝙖 𝙥𝙤𝙧 𝙡𝙖𝙨 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚𝙨 𝙘𝙖𝙪𝙨𝙖𝙨:*\n1️⃣ *𝙀𝙡 𝙗𝙤𝙩 𝙚𝙨𝙩𝙖́ 𝙨𝙖𝙩𝙪𝙧𝙖𝙙𝙤* .\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *𝙀𝙡 𝙗𝙤𝙩 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *𝙀𝙡 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙘𝙪𝙢𝙥𝙡𝙞𝙧 𝙘𝙤𝙣 𝙡𝙖𝙨 𝙣𝙤𝙧𝙢𝙖𝙩𝙞𝙫𝙖 𝙙𝙚 𝙀𝙡 𝙗𝙤𝙩*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4⃣ *𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙩𝙞𝙚𝙣𝙚 𝙦𝙪𝙚 𝙩𝙚𝙣𝙚𝙧 𝙢𝙞𝙣𝙞𝙢𝙤 80 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚𝙨 𝙥𝙖𝙧𝙖 𝙚𝙫𝙞𝙩𝙖𝙧 𝙜𝙧𝙪𝙥𝙤 𝙞𝙣𝙖𝙘𝙩𝙞𝙫𝙤 𝙮 𝙨𝙖𝙩𝙪𝙧𝙖 𝙖𝙡 𝙗𝙤𝙩*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5⃣ *𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚 𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙤*.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n6️⃣ *𝙉𝙤 𝙨𝙚 𝙖𝙜𝙧𝙚𝙜𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚𝙜𝙪́𝙣 𝙢𝙞 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙖)*.\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n💌 *𝙇𝙖𝙨 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙪𝙙 𝙥𝙪𝙚𝙙𝙚 𝙩𝙖𝙧𝙙𝙖 𝙝𝙤𝙧𝙖𝙨 𝙚𝙣 𝙨𝙚𝙧 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙞𝙙𝙖𝙨. 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙩𝙚𝙣𝙚𝙧 𝙥𝙖𝙘𝙞𝙚𝙣𝙘𝙞𝙖 𝙜𝙧𝙖𝙘𝙞𝙖𝙨*`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
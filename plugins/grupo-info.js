let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「информация о группе 」*\n
*Идентификатор группы:* 
${groupMetadata.id}

*Название:* 
${groupMetadata.subject}

*Создатель группы:* 
@${owner.split('@')[0]}

*Описание:* 
${groupMetadata.desc?.toString() || 'Безописания'}

*Всего участников:*
${participants.length} участников

*𝘼𝙙𝙢𝙞𝙣𝙨:*
${listAdmin}

*Автоматические опции:*
—◉ Приветствие: ${welcome ? '✅' : '❌'}
—◉ Антиссылка: ${antiLink ? '✅' : '❌'} 
—◉ антиссылка 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ Антивирус: ${antiTraba ? '✅' : '❌'} 
—◉ Автостикер: ${autosticker ? '✅' : '❌'} 
—◉ Обнаружение: ${detect ? '✅' : '❌'} 
—◉ 18+: ${modohorny ? '✅' : '❌'} 
—◉ Голосовые: ${audios ? '✅' : '❌'} 
—◉ Антираз: ${antiviewonce ? '✅' : '❌'} 
—◉ Антимат: ${antiToxic ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler

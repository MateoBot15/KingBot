let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ ${lenguajeGB['𝐊𝐢𝐧𝐠 𝐁𝐨𝐭']()} ${pesan}`
let teks = `╭━〔 𝐒𝐮 𝐥𝐢́𝐝𝐞𝐫 𝐥𝐨𝐬 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐚 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃😈😡😜 @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃\n`
teks += `╰━━━━━[ 𝐊𝐢𝐧𝐠 𝐁𝐨𝐭 ${vs} ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler

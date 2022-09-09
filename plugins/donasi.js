let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [6285796582392]
│ • Dana [6285796582392]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

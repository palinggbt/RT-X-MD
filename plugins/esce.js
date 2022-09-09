// ini link nya boleh ganti tapi penjelasan nya jangan
// penjelasan berfungsi buat user lain bila gak tau

let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `*BETA V2.0.1.6*
PRIVATE 
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler

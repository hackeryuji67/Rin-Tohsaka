const Command = require('../../Structures/Command')
const Message = require('../../Structures/Message')
const axios = require('axios')
module.exports = class command extends Command {
    constructor() {
        super('support', {
            description: "Displays the bot's support group link",
            category: 'general',
            exp: 20,
            usage: 'supprt',
            cooldown: 10
        })
    }

    /**
     * @param {Message} m
     * @param {import('../../Handlers/Message').args} args
     * @returns {Promise<void>}
     */

    execute = async (m, args) => {
        m.reply(`Support group link have been sent to your dm.`)
        let gif = 'https://telegra.ph/file/0405b77936b0ebd67f3f1.mp4'
        let text = `\n *〽️Support〽️*
Need help with using the bot? Join our official support group on WhatsApp! Our community of users and developers will be happy to assist you. 

 *✅️ join our WhatsApp groups*: https://chat.whatsapp.com/DZwunmSD5rn7WmCP5vDIqm

🌟 *Donate*
You can also donate to help us add more features and more games!

📂 *Repository Link*:  Private`
        await this.client.sendMessage(
            m.sender.jid,
            {
                video:{url:gif}, 
                gifPlayback: true ,
                caption:text
            },
            {
                quoted:m.message
            })
    }
}

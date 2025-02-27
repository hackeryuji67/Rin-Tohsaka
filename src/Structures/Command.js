const Baileys = require('@whiskeysockets/baileys').default
const Helper = require('./Helper')
const Message = require('./Message')
const MessageHandler = require('../Handlers/Message')

module.exports = class Command {
    /**
     * @param {string} name
     * @param {config} config
     */

    constructor(name, config) {
        /**
         * @type {string}
         */
        this.name = name
        /**
         * @type {config}
         */
        this.config = config
        /**
         * @type {Helper}
         */
        this.helper
        /**
         * @type {client}
         */
        this.client
        /**
         * @type {MessageHandler}
         */
        this.handler
    }

    /**
     * @param {Message} m
     * @param {args} args
     * @returns {Promise<void | never>}
     */

    execute = async (m, args) => {
        throw new Error('Command method not implemented')
    }
}

/**
 * @typedef {{category: 'general' | 'dev' | 'weeb' | 'utils' | 'category', description: string, usage: string, aliases?: string[], exp?: number, dm?: boolean, cooldown?: number , react?: object}} config
 */

/**
 * @typedef {ReturnType<typeof Baileys>} client
 */

/**
 * @typedef {import('../Handlers/Message').args} args
 */

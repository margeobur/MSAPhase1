const express = require('express');

const router = express.Router();

const fetch = require('node-fetch');
const config = require('./config.json')
const BOT_TOKEN = config.BOT_TOKEN;
const GUILD_ID = config.GUILD_ID;

const { catchAsync } = require('../utils');

router.get('/getChannels', catchAsync(async(req, res) => {

    try {
        //Console.log('awaiting this getChannels');
        const response = await fetch(`https://discordapp.com/api/v6/guilds/${GUILD_ID}/channels`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bot ${BOT_TOKEN}`,
                'user-agent': 'DiscordBot (https://discordapp.com/developers/applications/486305247698878475/bots, 6)'
            },
        });
        //Console.log('awaiting a response');
        const json = await response.json();

    res.json(json);

    } catch (error) {
        res.json({ 
            message: "Error calling API",
            ERROR: error
        });
    }
}));

router.get('/getChannelMessages', catchAsync(async(req, res) => {

    if(!req.query.channel) {
        var err = {
            error: "ERROR_NO_CHANNEL"
        }
        res.json(err);
        return;
    }

    //Console.log('awaiting this getChannelMessages');
    try {
        const response = await fetch(`https://discordapp.com/api/v6/channels/${req.query.channel}/messages`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bot ${BOT_TOKEN}`,
                'user-agent': 'DiscordBot (https://discordapp.com/developers/applications/486305247698878475/bots, 6)'
            },
        });
        //Console.log('awaiting a response');
        const json = await response.json();
        res.json(json);
    } catch (error) {
        res.json({ 
            message: "Error calling API",
            ERROR: error
        });
    }
    //Console.log(json);
}));

module.exports = router;
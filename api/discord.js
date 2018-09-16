const express = require('express');

const router = express.Router();
const Console = require('console');

const fetch = require('node-fetch');
const btoa = require('btoa');
const { catchAsync } = require('../utils');

const config = require('./config.json')
const CLIENT_ID = config.CLIENT_ID;
const CLIENT_SECRET = config.CLIENT_SECRET;
const BOT_TOKEN = config.BOT_TOKEN;
const GUILD_ID = config.GUILD_ID;

Console.log(config);
const redirect = encodeURIComponent('http://localhost:5000/api/discord/callback');

router.get('/getToken')

// router.get('/callback', catchAsync(async (req, res) => {
//     if (!req.query.code) {
//         res.redirect('http://localhost:3000/error');
//     }
//     const code = req.query.code;
//     const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
//     const response = await fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
//         {
//             method: 'POST',
//             headers: {
//                 Authorization: `Basic ${creds}`,
//             },
//         });
//     const json = await response.json();
//     res.redirect(`/LoggedIn`);
//     Console.log(json);
// }));

router.get('/getChannels', catchAsync(async(req, res) => {

    Console.log('awaiting this getChannels');
    const response = await fetch(`https://discordapp.com/api/v6/guilds/${GUILD_ID}/channels`,
      {
        method: 'GET',
        headers: {
            Authorization: `Bot ${BOT_TOKEN}`,
            'user-agent': 'DiscordBot (https://discordapp.com/developers/applications/486305247698878475/bots, 6)'
        },
      });
    Console.log('awaiting a response');
    const json = await response.json();

    res.json(json);
    Console.log(json);
}));

router.get('/getChannelMessages', catchAsync(async(req, res) => {

    if(!req.query.channel) {
        var err = {
            error: "ERROR_NO_CHANNEL"
        }
        res.json(err);
        return;
    }

    Console.log('awaiting this getChannelMessages');
    const response = await fetch(`https://discordapp.com/api/v6/channels/${req.query.channel}/messages`,
      {
        method: 'GET',
        headers: {
            Authorization: `Bot ${BOT_TOKEN}`,
            'user-agent': 'DiscordBot (https://discordapp.com/developers/applications/486305247698878475/bots, 6)'
        },
      });
    Console.log('awaiting a response');
    const json = await response.json();

    res.json(json);
    Console.log(json);
}));

module.exports = router;
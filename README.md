# MSAPhase1

## BeDisBot

This is my submission for the first assignment in MSA.
It uses the Discord REST api.

Initially it was going to allow users to enter messages as a bot, but that would have required using Discord's
WebSocket Gateway. Then I decided I could get users to authenticate with Discord and show them info about their
servers, but I ran into many issues trying to implement that. After a lot of experimentation and mind-changing, I
settled upon authenticating with my Bot and getting information about the dummy 
server (which you can join [here](https://discord.gg/e9FThFc))

<This Web App utilises a small Express server that hides the bot's authentication token. The server offers api
endpoints that wrap Discord's api.
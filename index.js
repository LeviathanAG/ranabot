const WOK = require("wokcommands");
const path = require("path");
const { Client, IntentsBitField, Partials } = require("discord.js");
const { DefaultCommands } = require("wokcommands");
require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("ready", async () => {
  console.log(
    "\x1b[31m%s\x1b[0m",
    `[BOT] Logged in as ${client.user.username}#${client.user.discriminator}`
  );

  new WOK({
    client,
    commandsDir: path.join(__dirname, "commands"),
    disabledDefaultCommands: [
      DefaultCommands.ChannelCommand,
      DefaultCommands.CustomCommand,
      DefaultCommands.Prefix,
      DefaultCommands.RequiredPermissions,
      DefaultCommands.RequiredRoles,
      DefaultCommands.ToggleCommand,
    ],
  });
});

client.login(process.env.TOKEN);

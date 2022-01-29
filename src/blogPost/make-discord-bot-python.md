---
title: "Making discord bot with discord.py"
description: "You are most probably using Discord, and you also want to make a bot, so here is a guide on `how to start making a discord bot in Python`."
date: "2022-01-24"
author: "BIGBEASTISHANK"
authlink: "https://github.com/bigbeastishank"
readtime: "5 min"
tags: ["Discord", "Python", "discord.py", "AI", "Bot"]
---

# Why we need bot in discord

A Discord bot is a bot that can only be used and run on Discord. According to the website Probot, it can provide you with more functionality than a normal user would have, and the best part – you can code your very own bot and make it do whatever you want. A discord bot can be:

1. **A Chat Bot** – a bot that tries to chat and behave like a human.

2. **A Moderation Bot** – which can automatically moderate your server. You can ban, mute, or kick users if someone is spamming or doing something that is forbidden by the channel rules.

3. **A Music Bot** – which can play music on a Discord server from YouTube or another place.

## What is required??

1. Python basic knowladge
2. How to operate discord

# Let's start!!!

For better understanding refer the [discord.py](https://discordpy.readthedocs.io/en/stable/index.html) docs.

- Download necessary **packages**.

  Execute: `$ python3 -m pip install -U discord.py`

- Go to [Discord Developer Portal](https://discord.com/developers/applications)
  \
  \
  ![discord developer portal](/img/blog/make-dicord-bot-python/discord-developer-portal.webp)

- Click on **New Applications** then set the name of your bot
  \
  \
  ![create a bot](/img/blog/make-dicord-bot-python/create-a-bot.webp)

- On far left click on **bot**
  \
  \
  ![bot panel](/img/blog/make-dicord-bot-python/bot-panel.webp)

- Click on **_add bot_** then **_yes do it_**
  \
  \
  ![add bot](/img/blog/make-dicord-bot-python/add-bot.webp)

- Click on copy token
  \
  \
  ![copy token](/img/blog/make-dicord-bot-python/copy-token.webp)

- Now go in your project folder

- Create a file named **_main.py_**
  \
  \
  Enter these lines

  ```py
  import discord

  client = discord.Client()

  @client.event
  async def on_ready():
     print('We have logged in as {0.user}'.format(client))

  @client.event
  async def on_message(message):
     if message.author == client.user:
         return

     if message.content.startswith('$hello'):
         await message.channel.send('Hello!')

  client.run('paste_your_token_here')
  ```

- Now execute python file by typing this command in terminal

  `$ python main.py`

- Now add your bot in your server

  - Click on **O Auth2 > URL Generator**
    \
    \
    ![add bot in server](/img/blog/make-dicord-bot-python/add-bot-in-server.webp)

  - Now click on **bot > (select permission)** (for this tutorial I am choosing admin permission)
    \
    \
    ![bot link](/img/blog/make-dicord-bot-python/bot-link.webp)

  - Open link and add bot in your server, like you add other bots.

### Now your bot is online, send `$hello` and your bot will reply `Hello`

## Sources

- [discord.py docs](https://discordpy.readthedocs.io/en/stable/index.html)
- [Discord Developer Portal](https://discord.com/developers/applications)

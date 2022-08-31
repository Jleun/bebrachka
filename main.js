const Discord = require('discord.js') // подключение библиотеки         
const db = require('quick.db');  
const client = new Discord.Client() // создание клиента

client.on('ready', () => {
    console.log(`Bot is ready`);
    client.user.setPresence({
        status: 'idle',
        activity: {
            type: 'WATCHING',
            name: `фотки нормана`,
}})})

client.on('message', message =>{ // ивент, когда приходит любое сообщение в чат https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
    if (message.author.bot) return; // если автор сообщения - бот, ничего не происходит 
    if (message.content == '!профиль') { // если пользователь написал "!профиль" 
    let embed = new Discord.MessageEmbed() // создание ембед сообщения
    .setTitle(message.author.username) // в тайтле имя автора 
    let status = ''
    switch (message.author.presence.status) { // проверка статусов 
        case 'online':
            status = 'онлайн'; break; 
            case 'idle':
                status = ':orange_circle:нет на месте'; break;
                case 'offline':
                    status = 'нет в сети'; break;
                    case 'dnd':
                        status = ':red_circle:не беспокоить'; break;
    }
    embed.setDescription(`**Ваш дискорд айди: ${message.author.id}
    Дата создания аккаунта: ${message.author.createdAt.toLocaleDateString()}
    Дата входа на сервер: ${message.member.joinedAt.toLocaleDateString()}
    **`) // описание ембеда
    .setColor('RANDOM') // рандомный цвет ембеда
    .setThumbnail(message.author.avatarURL()) // вставляем в ембед аватарку пользователя
    message.channel.send(embed) // отправляем сообщение в канал где была написана команда   
    }
})
client.on('message', message =>{ // ивент, когда приходит любое сообщение в чат https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
    if (message.author.bot) return; // если автор сообщения - бот, ничего не происходит 
    if (message.content == '!котейка') { // если пользователь написал "!профиль" 
     message.channel.send('https://images-ext-1.discordapp.net/external/zutPbRy8513NGJCTOuGMAqhYlRkrXRhda_48THF-Sqw/https/c.tenor.com/rSxzfOFUeb8AAAAd/cat-spin.gif');
    }
})




const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Запустился бот ' + bot.user.tag);
})

bot.on('message', message => {
    if(message.content == '$meme') message.channel.send('https://images-ext-1.discordapp.net/external/zutPbRy8513NGJCTOuGMAqhYlRkrXRhda_48THF-Sqw/https/c.tenor.com/rSxzfOFUeb8AAAAd/cat-spin.gif');
    if(message.content == '$UwU') message.channel.send('UwU');
})        
const хуйсоси = new Discord.Client() // создание клиента

client.on('ready', () => {
    console.log(`запуск`);
    client.on('message', message => {
    
        if (!message.guild) return;
      
      
        if (message.content.startsWith('kashjkfksdhjfhjkdsjfjkhsdjkfsdklafkljdsjklsdbhjafhjksdkjf')) {
          const user = message.mentions.users.first()
        
          if (user) {
           
            const member = message.guild.member(user);
         
            if (member) {
             
              member.ban({
                reason: ' ',
              }).then(() => {
                message.reply(` ${user.tag} Забанен!`); // this is the message that will be.
              }).catch(err => {
              
                message.reply('У вас нет прав, чтобы банить на этом сервере.'); // if a user does not have permission to use a command on a user or as a member, this message will be send.
    //** for my bot I would say message.reply(`${author.tag}, sorry, I was unable to ban this user! Check to see if there roles are above mine, or if this user is an admin!`)**\\
            
                console.error(err);
              });
            } else {
             
              message.reply('Данный пользователь не находится на сервере. ');
            }
          } else {
          
            message.reply('Вы не можете забанить этого пользователя. Правильное использование команды !ban @user');
          }
        }
      });
})

const хуйсосиq = new Discord.Client() // создание клиента

client.on('ready', () => {
    console.log(`запуск`);
        bot.on('messageDelete', message => {
            let nenekadjklf = new Discord.MessageEmbed()
              .setAuthor(`${message.author.username} (${message.author.id})`, message.author.avatarURL())
              .setDescription(message.content)
          
            const channel = bot.channels.cache.get('982722756317704222')
            channel.send(nenekadjklf)
          })
    })

    client.on('ready', () => {
        console.log(`запуск`);
             client.on('message', message => {
        
          
            const prefix = '*';
            client.on('message', (message) => {
                /* Проверяем что сообщение начинается с префикса */
                if (!message.content.startsWith(prefix)) return;
                /* Разделяем сообщение на массив из аргументов обрезая на длину префикса */
                let args = message.content.substring(prefix.length).split(' ');
                /* Получаем комманду, первый элемент массива */
                let command = args.shift();
                if (command === 'clear') {
                    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Для использования данной команды тебе необходимы права для удаления сообщения');
                    /* Получаем кол-во сообщений к удалению, проверяем, что колд-во указанно корректно, если нет задаем кол-во равным 100 */
                    let count = Number.parseInt(args[0]);
                    if (!count || count > 1000 || count <= 0) count = 1000;
                    message.channel
                        .bulkDelete(count)
                        
                        .then(() => {
                            setTimeout(() => { pingEnabled = true }, 2000);
                        
                        })
                        .catch((err) => {
                            message.channel.send('Ошибка');
                        });
                }
            });


            })})

            client.on('ready', () => {
                console.log(`запуск`);
                    client.on("message", message => {
                      const express = require('express')
                      const app = express();
                      const port = 3000
                      client.snipe = new Discord.Collection()
                      client.on("messageDelete", deletedMsg => {
                        client.snipe.set(deletedMsg.channel.id, deletedMsg)
                      })
                      client.on("guildMemberAdd", member => {
                      const myServer = "734019387610234952"; 
                      const welcomeChannel = "734033082553729064";
                       if(member.guild.id === myServer) {
                       client.channels.cache.get(welcomeChannel).send(`Welcome ${member}!`)
                       }
                      })
                      
                      const canvacord = require("canvacord")
                      
                      client.on("guildMemberAdd", member => {
                        if(member.member.guild.id !== "860470067397132328") return;
                        const welcomeCard = new canvacord.Welcomer()
                        .setUsername(member.user.username)
                        .setDiscriminator(member.user.discriminator)
                        .setAvatar(member.user.displarAvatarURL({format: "png"}))
                        .setColor("title", "#ffffff")
                        .setColor("username-box", "#00ffff")
                        .setColor("discriminator-box", "#17ff87")
                        .setColor("border", "#0f0f0f")
                        .setColor("avatar", "#00ff1a")
                        member.guild.channels.cache.get("860498090178904074").send
                        (member.user.toString(), attachment)
                      })
                      client.on("message", message => {
                        const args = message.content.split(" ").slice(1)
                        if(message.content === " ") {
                          message.channel.send(" ") 
                      }
                      })
                      if(message.content.startsWith("!thanks")) {
                      let victim = message.mentions.users.first()
                       if(!victim) message.reply("Упомяните кого-нибудь, кого нужно поблагодарить.")
                       else{
                       message.channel.send(`${victim} Was thanked by ${message.author}!`)
                      
                       }
                       }
                       if (message.content === "!avatar" || message.content === "!Avatar" || message.content === "!AVATAR") { 
                       let embed = new Discord.MessageEmbed()
                      .setTitle("YOUR AVATAR!")
                      .setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
                      .setColor("PURPLE")
                      .setFooter(`${message.author.username}`)
                      message.channel.send(embed)
                      message.author.send(embed)
                      }
                       if(message.content.toLowerCase() === ";verify") {
                      let role = message.guild.roles.cache.find(role => role.name === "VERIFIED")
                      message.member.roles.add(role)
                      let embed = new Discord.MessageEmbed()
                       .setTitle("Verified")
                       .setDescription('Now U Can See All Visible Channel')
                       
                      .setColor("RED")
                       .setFooter('Verified')
                       
                       message.channel.send(embed)
                       .then(msg => {
                       msg.delete({ timeout: 5000 })
                       })
                       }
                      if(message.content === "!verify") {
                      message.delete()
                      }
                      if(message.content.toLowerCase().startsWith(";whois")) {
                      let user = message.mentions.users.first() || message.author;
                      let member = message.mentions.members.first() || message.member;
                      let e = new Discord.MessageEmbed()
                      .setColor("#C724B1")
                      .setTimestamp()
                      .addFields({
                      name: "User Joined Server At",
                      value: member.joinedAt
                      }, {
                      name: "User Created At",
                      value: user.createdAt
                      }, {
                      name: "User Name & Tag",
                      value: user.tag
                      }, {
                      name: "User ID",
                      value: user.id
                      })
                      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
                      message.channel.send(e);
                      };
                    
                    
                      if (message.content === ';ping') {
                       let pingEmbed = new Discord.MessageEmbed()
                       .setTitle("Your Ping :ping_pong:")
                       .setDescription(`**Latency (ping)**: ${Date.now() - message.createdTimestamp}ms. 
                      **API Latency**: ${Math.round(client.ws.ping)}ms`)
                       .setColor("BLUE")
                      message.channel.send(pingEmbed);
                      }
                      if (message.content.startsWith('!ban')) {
                      if(message.member.hasPermission("BAN_MEMBERS")) {
                       const user = message.mentions.users.first();
                       
                       if (user) {
                       
                       const member = message.guild.member(user);
                      
                       if (member) {
                      
                       member
                       .ban({
                       reason: 'They were bad!',
                       })
                       .then(() => {
                       message.reply(`Успешно забанен ${user.tag}!`);
                       })
                       .catch(err => {
                      
                       message.reply("Я не могу забанить данного пользователя.");
                       
                       console.error(err);
                       });
                       } else {
                       
                       message.reply("That user isn't in this guild!");
                       }
                       } else {
                       
                       message.reply("Вы не упомянули пользователя, которого нужно забанить!");
                       }
                       }
                      }
                      if(message.content === "!help") {
                        let embed = new Discord.MessageEmbed()
                        .setTitle("Commands")
                        .addField("MEMBERS CAN USE", "`!ping` `!invite` `!thanks`")
                        .addField("FUN", "`!avatar`")
                        .addField("ADMIN", " `!kick` `$ban` `!mute` `!unmute` ")
                        .setColor("GREEN")
                        .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
                        message.channel.send(embed)
                      }
                      if(message.content.startsWith("!mute")) {
                       if(message.member.hasPermission("ADMINISTRATOR")) {
                       let member = message.mentions.members.first()
                       if(!member) message.channel.send("Упомяните, кого нужно замутить.")
                       else {
                       member.roles.add("983096527746650113")
                       message.channel.send("Пользователь успешно замучен.")
                       }
                      
                       } else {
                       message.reply("У вас нет прав.")
                       }
                      }
                      if(message.content.startsWith("!unmute")) {
                       if(message.member.hasPermission("ADMINISTRATOR")) {
                       let member = message.mentions.members.first()
                       if(!member) message.channel.send("Упомяните, кого нужно размутить.")
                       else {
                       member.roles.remove("983096527746650113")
                       message.channel.send("Пользователь успешно размучен.")
                       }
                      
                       } else {
                       message.reply("У вас нет прав.")
                       }
                      }

                      if (message.content.startsWith("!kick")) {
                        if (message.member.hasPermission("KICK_MEMBERS")) {
                       let member = message.mentions.members.first()
                       if (!member) message.channel.send("Пожалуйста выберите пользователя. !mute @user")
                       else {
                       member.kick().then(mem => {
                       message.channel.send(`Kicked ${mem.user.username}!`)
                       })
                       }
                       } else {
                       message.reply("Вы не имеете права, для использования данной команды.")
                         }
                       }
                      client.login(process.env.token);
                      client.login('OTgyNzE0MjE0MDU1NTYzMzM1.Gg_Q6V.xc1ZXPhTFj0D_jHbjGq7-iKsNZyWowOaIJFoks');
                     
                    })})

const client1 = new Discord.Client();
const prefix = '!';
client.on('message', (message) => {
    /* Проверяем что сообщение начинается с префикса */
    if (!message.content.startsWith(prefix)) return;
    /* Разделяем сообщение на массив из аргументов обрезая на длину префикса */
    let args = message.content.substring(prefix.length).split(' ');
    /* Получаем комманду, первый элемент массива */
    let command = args.shift();
    if (command === 'clear') {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Для использования данной команды тебе необходимы права для удаления сообщения');
        /* Получаем кол-во сообщений к удалению, проверяем, что колд-во указанно корректно, если нет задаем кол-во равным 100 */
        let count = Number.parseInt(args[0]);
        if (!count || count > 100 || count <= 0) count = 100;
        message.channel
            .bulkDelete(count)
            .then(() => {
                message.channel.send(`Успешно удалено ${count} сообщений`);
            })
            .catch((err) => {
                message.channel.send('Ошибка удаления сообщений');
            });
    }
});
bot.login('OTgyNzE0MjE0MDU1NTYzMzM1.GxIjmm.nFsV9ZDxRhtE2dBlaIrHS0YGnLArLU_biIGSnk');
client.login('OTgyNzE0MjE0MDU1NTYzMzM1.GxIjmm.nFsV9ZDxRhtE2dBlaIrHS0YGnLArLU_biIGSnk') // токен вашего бота
client.login(process.env.token);
bot.login(process.env.tokenm);
// Хотите, чтобы ваш бот работал 24/7 бесплатно? Смотрите это видео: https://www.youtube.com/watch?v=wxdl4QK0am4

// Bot by Sanich https://youtube.com/sanich - фишки, гайды по приложению Discord
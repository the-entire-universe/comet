module.exports = {
	main: function(bot, msg) {
    if(msg.author.id == bot.OWNERID) {
      bot.user.setGame(msg.content);
    }
	},
	hide: true
};
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('d8')
        .setDescription('Rolls a d8'),
    async execute(interaction) {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var roll = getRandomIntInclusive(1, 8);

        await interaction.reply(roll.toString());
    },
}
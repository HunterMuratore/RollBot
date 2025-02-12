const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('d6')
        .setDescription('Rolls a d6'),
    async execute(interaction) {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var roll = getRandomIntInclusive(1, 6);

        await interaction.reply(roll.toString());
    },
}
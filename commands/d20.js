const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('d20')
        .setDescription('Rolls a d20'),
    async execute(interaction) {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var roll = getRandomIntInclusive(1, 20);

        if (roll === 20) {
            await interaction.reply(roll + "\nBIG POGGERS");
        } else if (roll === 1) {
            await interaction.reply(roll + "\nSoi Bad :()");
        } else {
            await interaction.reply(roll.toString());
        }
    },
}
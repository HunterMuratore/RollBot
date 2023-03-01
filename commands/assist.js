const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('assist')
        .setDescription('Rolls a d20 to assist previous roll'),
    async execute(interaction, start) {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var roll = getRandomIntInclusive(1, 20);
        var final = roll + start;

        if (final === 20) {
            await interaction.reply("You rolled a " + roll + "\nAssist successful!");
        } else if (final > 20) {
            await interaction.reply("You rolled a " + roll + "\nAssist failed :()");
        } else {
            await interaction.reply("You rolled a " + roll + "\n" + start + " + " + roll + " = " + final + "\nTry another assist!" );
        }
    },
}
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('assist')
        .setDescription('Rolls a d20 to assist previous roll')
        .addIntegerOption(option =>
            option.setName('start')
                .setDescription('Previous d20 roll')
                .setMinValue(1)
                .setMaxValue(19)
                .setRequired(true)),
    async execute(interaction) {

        let start = interaction.options.getInteger('start');

        if (start >= 20 || start <= 0) {
            await interaction.reply({ content: "Enter a number between 1 and 19.", ephemeral: true });
        }

        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var roll = getRandomIntInclusive(1, 20);
        var final = roll + start;

        if (final === 20) {
            await interaction.reply("You rolled a " + roll + "\n" + start + " + " + roll + " = " + final + "\nAssist successful!");
        } else if (final > 20) {
            await interaction.reply("You rolled a " + roll + "\n" + start + " + " + roll + " = " + final + "\nAssist failed :()");
        } else {
            await interaction.reply("You rolled a " + roll + "\n" + start + " + " + roll + " = " + final + "\nTry another assist!" );
        }
    },
}
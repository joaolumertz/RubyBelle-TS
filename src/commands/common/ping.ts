import { ActionRowBuilder, ApplicationCommandType, ButtonBuilder, ButtonStyle, Collection } from "discord.js";
import { Command } from "../../structs/types/Command";

export default new Command({
    name: "ping",
    description: "Reply eith ping",
    type: ApplicationCommandType.ChatInput,
    run({ interaction }) {

        const row = new ActionRowBuilder<ButtonBuilder>({ components: [
            new ButtonBuilder({ customId: "test-button", label: "Clique aqui", style: ButtonStyle.Success })
        ]})

        interaction.reply({ ephemeral: true, content: "Pong", components: [row] });
    },
    buttons: new Collection([
        ["test-button", async (interaction) => {
            interaction.update({ components: [] })
        }]
    ])
})
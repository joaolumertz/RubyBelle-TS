import { ExtendedClient } from "./structs/ExtendedClient";
export * from "colors";

const client = new ExtendedClient();

client.start();

export { client }

client.once("ready", () => {
    console.log('Bot Online'.green)
})
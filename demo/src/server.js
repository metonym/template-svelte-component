import polka from "polka";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .use(dev ? "/" : "/template-svelte-component", sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });

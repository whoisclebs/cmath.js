import { addAlias } from "module-alias";
import { resolve } from "path";

addAlias("@", resolve(__dirname, "dist"));
#!/usr/bin/env node
"use strict";

import { NetlifyAPI } from "@hrdtbs/netlify";
import argsParser from "args-parser";

const token = process.env["NETLIFY_AUTH_TOKEN"];
const client = new NetlifyAPI(token);

const main = async () => {
  const args = argsParser(process.argv);
  const { dir, ...options } = args;
  const siteId = process.env["NETLIFY_SITE_ID"];

  const development = await client.deploy(siteId, dir, options);
  console.log(JSON.stringify(development));
};

main();

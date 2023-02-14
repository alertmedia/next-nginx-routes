#!/usr/bin/env node
"use strict";

const { cwd } = require("process");
const { readFileSync, writeFileSync } = require("fs");

const routesManifest = "./.next/routes-manifest.json";
const manifest = JSON.parse(readFileSync(routesManifest, "utf8"));

const dynamicAndStaticRoutes = manifest.staticRoutes
  .concat(manifest.dynamicRoutes)
  .map((route) => {
    if (route.page === "/") {
      route.page = "/index";
    }
    return `
location ~ ${route.regex} {
    try_files ${route.page}.html /index.html;
}`;
  });

const redirectRoutes = manifest.redirects.map((route) => {
  // # NOTE: If an internal route, then we ignore.
  if (route.internal) {
    return "";
  }
  return `
location = ${route.source} {
  return ${route.statusCode} ${route.destination};
}`;
});

writeFileSync(
  "./next-routes.conf",
  [...redirectRoutes, ...dynamicAndStaticRoutes].join("\n")
);

console.log(`Nginx routes configuration written to ${cwd()}/next-routes.conf`);

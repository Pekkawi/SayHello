#!/usr/bin/env node

function SayHello() {
  return " Say hi to the world";
}

let app = {
  SayHi: () => SayHello(),
};

try {
  app = await import("@markjameshoward/sayhelloplugin");
} catch (e) {
  console.log("no plugin");
}

console.log(app.SayHi());

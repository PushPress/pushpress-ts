import { PushPress } from "./src";

const pp = new PushPress({
  // apiKey: "sk_c3a5287bb82b4c8b80be020301435025",
  apiKey: "32e4c868ff8f55ea420493548becf616",
  companyId: "client_e5b4158e7ce242",
  server: "local",
});

async function main() {
  const res = await pp.company.get({
    companyId: "client_e5b4158e7ce242",
  });
  console.log(res);
}
main();

import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createTrailer } from "./queries/trailers.js";
import { createIndustry } from "./queries/industries.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("Nathan", "nharris@gmail.com", "TripleFull26573", "Admin");
  await createUser("Courtney", "cwagner@gmail.com", "Password123", "Customer");

  await createIndustry(
    "Construction", 
    "Construction is the process of building, modifying, or assembling infrastructure, buildings, and other physical structures. It spans a wide range of activities — from residential housing and commercial buildings to roads, bridges, and industrial facilities.");
  await createIndustry(
    "Agriculture", 
    "Agriculture is the science, art, and practice of cultivating the soil, growing crops, and raising animals to produce food, fiber, and other useful products for human use"); 

  await createTrailer(
    "Flatbed",
    "Fontaine",
    "Infinity",
    2026,
    {
    dimensions: {
      length: "53 ft",
      width: "102 in",
      height: "55"
    },
    gvwr: "80,000 lbs",
    axle_count: 2,
    composition: "Combo",
    axle_configuration: "Sliding Rear Axle"
  },
    ["https://media.sandhills.com/img.axd?id=8055871311&wid=4326209787&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=ZWQq%2fyEBNyeYSDQwtFS%2fdwkQ9AkfDQwxI8rPJ517TMg%3d"],
    49900
);

await createTrailer(
    "Drop Deck",
    "Benson",
    "524",
    2025,
    {
    dimensions: {
      length: "53 ft",
      width: "102 in",
      height: "36"
    },
    gvwr: "80,000 lbs",
    axle_count: 2,
    composition: "Aluminum",
    axle_configuration: "Sliding Rear Axle"
  },
    ["https://media.sandhills.com/img.axd?id=7290547127&wid=4326185391&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=Um%2FVjiraH4YqznLAm8yY6LiLOvMrf%2FmRFsV5Ls%2BLKYw%3D"],
    64800

);
}

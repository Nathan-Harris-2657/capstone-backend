import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createTrailer } from "./queries/trailers";
import { createIndustry } from "./queries/industries";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("Nathan", "TripleFull26573", "Admin");
  await createUser("Courtney", "Password123", "Customer");

  await createIndustry(
    "Construction", 
    "Construction is the process of building, modifying, or assembling infrastructure, buildings, and other physical structures. It spans a wide range of activities — from residential housing and commercial buildings to roads, bridges, and industrial facilities.")
  await createIndustry(
    "Agriculture", 
    "Agriculture is the science, art, and practice of cultivating the soil, growing crops, and raising animals to produce food, fiber, and other useful products for human use")  

  await createTrailer(
    "Flatbed",
    "Fontaine",
    "Infinity",
    1,
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
    ["https://media.sandhills.com/img.axd?id=8055871311&wid=4326209787&rwl=False&p=&ext=&w=614&h=460&t=&lp=&c=True&wt=False&sz=Max&rt=0&checksum=ZWQq%2fyEBNyeYSDQwtFS%2fdwkQ9AkfDQwxI8rPJ517TMg%3d"]
)
}

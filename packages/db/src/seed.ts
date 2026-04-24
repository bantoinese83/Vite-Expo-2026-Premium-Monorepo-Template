import { getDb } from "./index";
import "dotenv/config";

async function main() {
  const db = getDb();
  console.log("🌱 Seeding database...");

  // Example seeding logic:
  // await db.insert(users).values(Array.from({ length: 50 }).map(() => ({
  //   id: faker.string.uuid(),
  //   name: faker.person.fullName(),
  //   email: faker.internet.email(),
  //   isPro: faker.datatype.boolean(0.2), // 20% chance of being Pro
  // })));

  console.log("✅ Database seeded successfully!");
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});

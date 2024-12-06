import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Hacher le mot de passe de test
  const hashedPassword = await bcrypt.hash("test_password123", 10);

  // Création d'un utilisateur administrateur
  const user = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "ADMIN",
      isActive: true,
      emailVerified: new Date("2024-11-11T22:31:45.581Z"),
      image: null,
    },
  });

  console.log("Utilisateur admin créé :", user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

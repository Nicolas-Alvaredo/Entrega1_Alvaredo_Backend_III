import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generateUsersMock = async (amount = 50) => {
  const hashedPassword = await bcrypt.hash("coder123", 10);

  const roles = ["user", "admin"];

  const users = Array.from({ length: amount }, () => ({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPassword,
    role: faker.helpers.arrayElement(roles),
    pets: []
  }));

  return users;
};

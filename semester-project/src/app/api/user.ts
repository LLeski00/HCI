'use server';
import { db } from '@/db/drizzle';
import { users } from '@/db/schemas/user';
import { User } from '@/types/user';
import { eq } from 'drizzle-orm';

export async function getUserById(userId: string): Promise<User> {
  const dbData = await db.select().from(users).where(eq(users.id, userId));

  if (dbData.length === 0) {
    throw new Error(`User with ID ${userId} not found`);
  }

  const user: User = {
    id: dbData[0].id,
    email: dbData[0].email,
    name: dbData[0].name,
    bio: dbData[0].bio,
  };

  return user;
}

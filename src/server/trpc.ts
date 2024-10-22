import { z } from 'zod';

import { initTRPC } from '@trpc/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const t = initTRPC.context<{}>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  getTasks: publicProcedure.query(async () => {
    return prisma.task.findMany();
  }),
  createTask: publicProcedure
    .input((z) => ({
      title: z.string(),
      description: z.string(),
    }))
    .mutation(async ({ input }) => {
      return prisma.task.create({
        data: {
          title: input.title,
          description: input.description,
        },
      });
    }),

    getTasks: publicProcedure.query(async () => {
      return prisma.task.findMany();
    }),

  deleteTask: publicProcedure
    .input((z) => z.number())
    .mutation(async ({ input }) => {
      return prisma.task.delete({
        where: { id: input },
      });
    }),
});




export type AppRouter = typeof appRouter;

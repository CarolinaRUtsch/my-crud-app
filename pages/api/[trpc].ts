
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/server/trpc';

// Export the handler that exposes the tRPC router at /api/trpc
export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}), // Se você precisar de contexto, pode configurar aqui
});

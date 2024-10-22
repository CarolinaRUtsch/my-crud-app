import { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { httpBatchLink } from '@trpc/client'; // Import necessário
import { AppRouter } from '@/server/trpc';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config() {
    const url = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api/trpc'; // URL do servidor tRPC

    return {
      links: [
        httpBatchLink({
          url,
        }),
      ],
      transformer: undefined, // Se você usa um transformer como 'superjson', pode definir aqui
    };
  },
  ssr: false, // Se você quiser habilitar Server-Side Rendering, pode mudar para true
})(MyApp);

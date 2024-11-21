import { revalidatePath } from 'next/cache';

export const GET = async () => {
  return new Response('Hello, revalidate!');
};

export const POST = async (request: Request) => {
  try {
    console.log('[Next.js] Revalidating /');
    revalidatePath('/');
  } catch (error) {
    return new Response(`Webhook error: ${error}`, {
      status: 400,
    });
  }
  return new Response('Revalidation successful');
};

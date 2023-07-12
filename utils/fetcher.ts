import { auth } from '@clerk/nextjs';

interface Response<T> {
  data?: T;
  error?: string;
}

export const fetcher = async <T>(
  path: string,
  method: 'GET' | 'POST',
  body?: object
): Promise<Response<T>> => {
  try {
    const { getToken } = auth();

    console.log(`http://localhost:3001/api${path}`);

    const res = await fetch(`http://localhost:3001/api${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${await getToken()}`
      },
      method,
      ...(body ? { body: JSON.stringify(body) } : {})
    });
    console.log(res);
    if (res.ok) {
      return await res.json();
    }

    throw new Error(res.statusText);
  } catch (e) {
    if (e instanceof Error) return { error: e.message };
    else return { error: 'An unknown error occurred.' };
  }
};

delete window.fetch;
import 'whatwg-fetch';

export class ErrorAPI extends Error {
  status: number;

  constructor({ status }: { status: number }) {
    super('API Error');
    this.status = status;
  }
}

const call = (api?: string) => async <R>(
  method: string,
  url: string,
  token?: string,
  body?: object,
  options: RequestInit = {}
): Promise<R> => {
  const finalHeaders = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(`${api}/${url}`, {
    ...options,
    body: JSON.stringify(body),
    headers: finalHeaders,
    method: method,
    mode: 'cors',
  });

  if (response.ok) {
    try {
      return await response.json();
    } catch (e) {
      return Promise.resolve();
      // Error / Different content type ?
    }
  }

  throw new ErrorAPI({
    status: response.status,
  });
};

export const callApi = call(process.env.INSIGHTS_API_URL);

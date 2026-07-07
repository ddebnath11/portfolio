interface FetchParams {
  endpoint: string;
}

export async function fetchFromStrapi<T>({ endpoint }: FetchParams): Promise<T> {
  const url = `${import.meta.env.STRAPI_URL}/api/${endpoint}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.STRAPI_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
  }

  const { data } = await response.json();
  return data;
}
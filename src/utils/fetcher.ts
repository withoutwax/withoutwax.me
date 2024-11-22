// Assuming the token is stored in local storage under 'token'
export const fetcher = async (url: string) => {
  const response = await fetch(`${url}`, {
    headers: {
      Authorization: `Bearer ${'secret_7184EERuNiX4dBYA0bP4grJLM9yXOGkyyGRIUCSbDRa'}`, // Include the token in the Authorization header
      Accept: 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Assuming the token is stored in local storage under 'token'
export const fetcher = async (url: string, token: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CAIOS_URL}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

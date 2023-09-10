export const FetchUser = async ({ limit = 300, page = 1 }) => {
  const Users = await fetch(
    `https://randomuser.me/api?seed=brayan&results=${limit}&page=${page}`
  );
  if (!Users.ok) {
    throw new Error("Error fetching users");
  }
  const { results } = await Users.json();    
  return results;
};

export async function handler(event) {
  const { userId } = event.queryStringParameters;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing userId" }),
    };
  }

  try {
    const res = await fetch(`https://users.roblox.com/v1/users/${userId}`);
    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Roblox data" }),
    };
  }
}

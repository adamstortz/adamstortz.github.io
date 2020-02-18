async function fetchGraphQL(text, variables) {
    const GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;
  
    // Fetch data from GitHub's GraphQL API:
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    });
  
    // Get the response as JSON
    return await response.json();
  }
  
  export default fetchGraphQL;
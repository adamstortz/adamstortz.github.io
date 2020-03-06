import { Base64 } from 'js-base64';
async function fetchGraphQL(text, variables) {
  const REACT_APP_GITHUB_AUTH_TOKEN = Base64.decode(
    'MjNiYzQzZWY2MjRhNWJmZmM5ZTkzZjI5NzVlMjFmODBkY2NjNDBjNAo='
  );

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;

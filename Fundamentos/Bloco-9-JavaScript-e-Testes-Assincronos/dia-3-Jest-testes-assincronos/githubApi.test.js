// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

it('gets a list of repositories names', async () => {
  const repo = await getRepos('https://api.github.com/orgs/tryber/repos');
  
  expect(repo).toContain('sd-01-week10-movie-card-library-tests');
  expect(repo).toContain('sd-03-block5-project-meme-generator-tests');
});
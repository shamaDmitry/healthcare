const contentful = require('contentful');

const CONTENTFUL_SPACE_ID = 'vsru4e9t40dc';
const CONTENTFUL_ACCESS_TOKEN = 'cCI9z9IEr-ZVzwv9cJdqkBvMHLm0fsFHbTbiyFuecJM';

export const client = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
});

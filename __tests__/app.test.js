require('dotenv').config();

const { execSync } = require('child_process');

const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
    let token;
  
    beforeAll(async () => {
      execSync('npm run setup-db');
  
    });

    test('returns a city', async() => {

      const expectation = {
        'formatted_query': expect.any(String),
        'latitude': expect.any(String),
        'longitude': expect.any(String)
      };
        

      const data = await fakeRequest(app)
        .get('/location?search=Portland')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });
  });
});

test('returns weather', async() => {

  const expectation = [
    {
      'forecast': expect.any(String),
      'time': expect.any(String)
    },
    {
      'forecast': expect.any(String),
      'time': expect.any(String)
    },
    {
      'forecast': expect.any(String),
      'time': expect.any(String)
    },
    {
      'forecast': expect.any(String),
      'time': expect.any(String)
    },
    {
      'forecast': expect.any(String),
      'time': expect.any(String)
    },
    {
      'forecast': expect.any(String),
      'time': expect.any(String)
    },
    {
      'forecast': expect.any(String),
      'time': expect.any(String)
    }
  ];
    

  const data = await fakeRequest(app)
    .get('/weather?latitude=45.523064&longitude=-122.676483')
    .expect('Content-Type', /json/)
    .expect(200);

  expect(data.body).toEqual(expectation);
});


test('returns reviews', async() => {

  const expectation = 
    {
      'name': expect.any(String),
      'image_url': expect.any(String),
      'price': expect.any(String),
      'rating': expect.any(Number),
      'url': expect.any(String),
    };
    

  const data = await fakeRequest(app)
    .get('/reviews?latitude=45.523064&longitude=-122.676483')
    .expect('Content-Type', /json/)
    .expect(200);

  expect(data.body).toEqual(expect.arrayContaining([expectation]));
});

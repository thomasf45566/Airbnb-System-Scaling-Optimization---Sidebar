import * as request from 'supertest';
import app from '../server/index';

describe('/api/projects integration test', () => {
  test('should be able save a project and find it in the db', async () => {
    expect.assertions(2);
    const { body, statusCode } = await request(app)
      .get('/sidebar/wolfexperience1')
    expect(JSON.stringify(body[0])).toBe(JSON.stringify({
      experience: 'wolfencounter1',
      original: `http://loremflickr.com/480/640/wolves?lock=1`,
      embedUrl: 'https://www.youtube.com/embed/tRTTMNr10u8',
    }));
    expect(statusCode).toBe(200);      
  });
});
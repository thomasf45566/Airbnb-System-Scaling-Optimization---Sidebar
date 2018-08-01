/*
require('dotenv').config();
require('dotenv').load();
*/

import * as request from 'supertest';
import app from '../server/index';

// const testProject: testProjectObj = {
//   title: 'test',
//   description: 'test',
//   collaborators: 'test1, test2, test3',
//   userId: 1
// };


describe('/api/projects integration test', () => {
  test('should be able save a project and find it in the db', async () => {
    expect.assertions(2);
    // await request(app)
      // .post('/sidebar')
      // // .set('authorization', token)
      // .send(testProject);
    const { body, statusCode } = await request(app)
      .get('/sidebar/wolfexperience')
      // .set('authorization', token);
    expect(JSON.stringify(body[0])).toBe(JSON.stringify({
      experience: 'wolfencounter',
      original: `https://i.pinimg.com/originals/76/19/44/7619448dbe56dfb24d7362db904cd82d.jpg`,
      embedUrl: 'https://www.youtube.com/embed/tRTTMNr10u8',
    }));
    expect(statusCode).toBe(200);      
  });
});
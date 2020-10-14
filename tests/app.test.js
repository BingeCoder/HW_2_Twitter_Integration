/*
 @author Gunjan Srivastava
 */
const twit = require('twit');
const request = require('supertest');
const app = require('../app');

jest.mock('twit', () => jest.fn());
test('testing post tweet functionality', async () => {
    const post = jest.fn(() => {status: 200});
    twit.mockImplementation(() => ({post}))
    const response = await request(app)
        .post('/post')
        .send({ status: 'This sounds cool.' });
    expect(response.status).toBe(200);
});

afterAll(async () => {
    app.close();
});
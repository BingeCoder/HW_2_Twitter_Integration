/**
 * @author Shivam Tomar
 */

const twit = require('twit');
const request = require('supertest');
const app = require('../app');

jest.mock('twit', () => jest.fn());
test('Tweet deletion', async () => {
    const response = jest.fn(() => {status: 200});
    twit.mockImplementation(() => ({post}))
    const response = await request(app)
        .delete('/delete/1')
        
    expect(response.status).toBe(200);
});
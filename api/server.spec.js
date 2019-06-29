const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    xit('should set the test env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('GET /', () => {  //this way uses promises
        it('should return 200', () => {
            return request(server)
                .get('/')
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        it('should return 200 using async/await', async () => { //this way uses async/await
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        })
        
    })

})
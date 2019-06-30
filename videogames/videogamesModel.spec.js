const db = require('../data/dbConfig.js'); //lets us access our database

const Videogames = require('./videogamesModel.js');

describe('the videogames model', () => {
    
    describe('insert()', () => {

        afterEach(async () => {
            //clean up
            await db('videogames').truncate();
        });

        it('should insert videogames into the db', async () => {
            //using our model method
            await Videogames.insert({ name: 'Call of Duty' });
            await Videogames.insert({ name: 'Cuphead' })

            //confirm with knex
            const videogames = await db('videogames');

            expect(videogames).toHaveLength(2);
            expect(videogames[0].name).toBe('Call of Duty');
        })

    })
})
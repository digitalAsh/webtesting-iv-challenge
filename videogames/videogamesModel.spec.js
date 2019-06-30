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

        afterEach(async () => {
            //clean up
            await db('videogames').truncate();
        });

        it('should return the new videogame on insert', async () => {
            const videogame = await Videogames.insert({ name: 'Call of Duty' })

            expect(videogame).toEqual({ id: 1, name: 'Call of Duty' })
        })

    describe('remove()', () => {
       
        afterEach(async () => {
            //clean up
            await db('videogames').truncate();
        });

        it('should remove videogame from the db', async () => {
            await Videogames.insert({ name: 'Call of Duty' });
            await Videogames.insert({ name: 'Cuphead' })
            await Videogames.remove(1);

            const videogames = await db('videogames');

            expect(videogames).toHaveLength(1);
            expect(videogames[0]).toEqual({ id: 2, name: 'Cuphead' })

        })
    })    

    })
})
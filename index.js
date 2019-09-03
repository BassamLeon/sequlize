const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');

const Movie = sequelize.define('movie',{
    title: Sequelize.TEXT,
    yearOfRelease: Sequelize.INTEGER,
    synopsis: Sequelize.TEXT
});

sequelize.sync() 
    .then(() => Movie.truncate()) 
    .then(() => Promise.all([ 
        Movie.create({ title: 'Troy', yearOfRelease: 2004 , synopsis: 'Based on Homers lliad' }),
        Movie.create({ title: 'Zoro', yearOfRelease: 1998 , synopsis: 'After being imprisoned for 20 years,' }),
        Movie.create({ title: 'The Avengers', yearOfRelease: 2012 , synopsis: 'gains access to the unlimited power of the energy cube called the Tesseract' })
    ]))
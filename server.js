const express = require('express');
const apiT = express();



apiT.use(express.urlencoded({ extended: true }));
apiT.use(express.json());

const userRoutes=require('./routes/usersRoutes');


apiT.get('/', (req, res) => {
    res.status(200).send({ response: 'un nuevo MATCH' })
});

apiT.use(userRoutes)


apiT.listen(3000, () => {
    console.log('comencemos con los MATCH', 'server-ON')
})
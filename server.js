const express = require('express');
const apiT = express();



apiT.use(express.urlencoded({ extended: true }));
apiT.use(express.json());

const userRoutes = require('./routes/usersRoutes');
const skillRoutes = require('./routes/skillsRoutes');
const serviceRoutes = require('./routes/servicesRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');
const matchesRoutes = require('./routes/matchesRoutes');


apiT.get('/', (req, res) => {
    res.status(200).send({ response: 'un nuevo MATCH' })
});

apiT.use(userRoutes);
apiT.use(skillRoutes);
apiT.use(serviceRoutes);
apiT.use(paymentsRoutes);
apiT.use(matchesRoutes);

apiT.listen(3000, () => {
    console.log('comencemos con los MATCH', 'server-ON')
})
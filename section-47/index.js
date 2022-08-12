const express = require('express');
const app = express();
const shelterRoutes = require('./shelters');
const dogRoutes = require('./dogs');
const adminRoutes = require('./admin');

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRoutes);

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})
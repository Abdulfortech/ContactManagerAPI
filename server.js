const express = require('express');
const dotenv = require('dotenv').config();
const contactsRouter = require('./routes/contactRoutes.js');
const errorHandler = require('./middleware/errorHandler.js');

// // Use the router
// app.use('/contacts', contactsRouter);

const app = express();

const port = process.env.PORT || 5670;
app.use(express.json());

app.use("/api/contacts", require('./routes/contactRoutes'));
app.use(errorHandler);
// app.get();

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
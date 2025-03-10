const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/save', (req, res) => {
    const userData = req.body;

    fs.appendFile('user_data.json', JSON.stringify(userData, null, 2) + ',\n', (err) => {
        if (err) {
            res.status(500).json({ message: 'Error saving data' });
        } else {
            res.json({ message: 'Data saved successfully!' });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

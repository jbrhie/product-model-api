const express = require('express');
const app = express();

const PORT = 8000;

const products = {
    'a1879': {
        'type': 'accessories',
        'name': 'Lightning to 3.5 mm Audio Jack Cable'
    }, 
    'a2096': {
        'type': 'headphones',
        'name': 'Airpods Max'
    },
    'unknown': {
        'type': 'unknown',
        'name': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/model/:name', (req, res) => {
    const modelName = req.params.name.toLowerCase();
    if (products[modelName]) {
        res.json(products[modelName]);
    }
    else {
        res.json(products['unknown']);
    }
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
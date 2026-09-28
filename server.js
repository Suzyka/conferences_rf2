import express from 'express';

const app = express();
const PORT = 3507;

app.get('/', (req, res) => {
    res.send('Конференции.РФ');
});

app.get('/about', (req, res) => {
    res.send('О портале');
});

app.get('/contact', (req, res) => {
    res.send('Контакты');
});

app.get('/help', (req, res) => {
    res.send('Помощь');
});

app.get('/rooms', (req, res) => {
    res.send('Список помещений');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});
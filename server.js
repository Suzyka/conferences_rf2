import express from 'express';

const app = express();
const PORT = 3507;

app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    res.send(`
        Регистрация пользователя
        <form method="POST" action="/register">
            <input name="login" placeholder="Логин"><br>
            <input name="password" type="password" placeholder="Пароль"><br>
            <input name="name" placeholder="ФИО"><br>
            <input name="phone" type="tel" placeholder="Телефон"><br>
            <input name="email" type="email" placeholder="Email"><br>
            <input name="city" placeholder="Город"><br>
            <button type="submit">Создать пользователя</button><br>
            <button type="reset">Очистить форму</button>
        </form>
    `);
});

app.post('/register', (req, res) => {
    res.send(`
        Данные регистрации получены:
        Пользователь ${req.body.login} зарегистрирован<br>
        Пользователь ${req.body.password} ввел пароль<br>
        Пользователь ${req.body.name} написал имя<br>
        Пользователь ${req.body.phone} написал телефон<br>
        Пользователь ${req.body.email} ввел почту<br>
        Пользователь ${req.body.city} проживает по этому адресу<br>
    `);
});

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
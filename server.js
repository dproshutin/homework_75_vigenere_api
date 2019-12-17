const express = require("express");
const app = express();
const PORT = 8000;
const Vigenere = require('caesar-salad').Vigenere;

app.get("/", (req, res) => {
    res.send(`
    <div style="margin-left: 20px;">
        <h2>API для шифра Виженера</h2>
        <p>
        Сервер принимает данные POST-запросом в таком формате:
            <p style="font-size: 14px;color: blue;margin-left: 20px;">
            POST /encode HTTP/1.1<br>
            Content-Type: application/json<br>
            {"password": "testpassword", "message": "Test message"}
            </p>
        В ответ на такой запрос сервер должен ответить:
            <p style="font-size: 14px;color: blue;margin-left: 20px;">
            {"encoded": "mikm mwkooxh"}
            </p>
        Для расшифровки похожим способом, указываете пароль и зашифрованное сообщение, отправляете POST-запрос на /decode
            <p style="font-size: 14px;color: blue;margin-left: 20px;">
            POST /decode HTTP/1.1<br>
            Content-Type: application/json<br>
            {"password": "testpassword", "message": "mikm mwkooxh"}
            </p>
        Ответ:
            <p style="font-size: 14px;color: blue;margin-left: 20px;">
            {"decoded": "test message"}
            </p>
        </p>
    </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
});
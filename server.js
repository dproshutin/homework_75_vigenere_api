const express = require("express");
const app = express();
const PORT = 8000;
const Vigenere = require('caesar-salad').Vigenere;

app.use(express.json());

app.post("/encode", (req, res) => {
    const plainText = req.body.message;
    const key = req.body.password;
    const cypherText = Vigenere.Cipher(key).crypt(plainText);
    res.send({"encoded": cypherText});
});

app.post("/decode", (req, res) => {
    const cypherText = req.body.message;
    const key = req.body.password;
    const plainText = Vigenere.Decipher(key).crypt(cypherText);
    res.send({"decoded": plainText});
});

app.get("/", (req, res) => {
    res.send(`
    <style>
        div {
            margin-left: 20px;
        }
        .small {
            font-size: 14px;
            color: blue;
            margin-left: 20px;
        }
    </style>
    <div>
        <h2>API для шифра Виженера</h2>
        <p>
        Сервер принимает данные POST-запросом в таком формате:
            <p class="small">
            POST /encode HTTP/1.1<br>
            Content-Type: application/json<br>
            {"password": "testpassword", "message": "Test message"}
            </p>
        В ответ на такой запрос сервер должен ответить:
            <p class="small">
            {"encoded": "mikm mwkooxh"}
            </p>
        Для расшифровки похожим способом, указываете пароль и зашифрованное сообщение, отправляете POST-запрос на /decode
            <p class="small">
            POST /decode HTTP/1.1<br>
            Content-Type: application/json<br>
            {"password": "testpassword", "message": "mikm mwkooxh"}
            </p>
        Ответ:
            <p class="small">
            {"decoded": "test message"}
            </p>
        </p>
    </div>
    `);
});


app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
});
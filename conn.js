import express from 'express'
import { Sequelize } from 'sequelize'

const PORT = 5000

const app = express()

const sequelize = new Sequelize('test_db', 'postgres','qazqazqaz', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    define: {
        underscored: true
    }
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT || PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
    } catch (e) {
        console.log(e)
    }
}


app.get('/', (req, res) => {
    res.end(`
        <style>
            .main-div {
                padding: 20px;
            }
        </style>
        <div class="main-div">
            <nav>
                <ul style="display:flex; flex-direction: row; gap: 20px; list-style: none">
                    <li>
                        <a href="/" style="text-decoration: none">Home</a>
                    </li>
                    <li>
                        <a href="/about" style="text-decoration: none">About</a>
                    </li>
                </ul>
            </nav>
            <h1>Home page</h1>
        </div>
    `)
})

app.get('/about', (req, res) => {
    res.end(`
        <style>
            .main-div {
                padding: 20px;
            }
        </style>
        <div class="main-div">
            <nav>
                <ul style="display:flex; flex-direction: row; gap: 20px; list-style: none">
                    <li>
                        <a href="/" style="text-decoration: none">Home</a>
                    </li>
                    <li>
                        <a href="/about" style="text-decoration: none">About</a>
                    </li>
                </ul>
            </nav>
            <h1>About page</h1>
        </div>
    `)
})

start()
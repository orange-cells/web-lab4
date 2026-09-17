export default (express, fetch) => {
    const app = express();

    app.get('/login/', (req, res) => {
        res.send('orangecells_1');
    });

    app.get('/id/:N', async (req, res) => {
        const response = await fetch(
            `https://nd.kodaktor.ru/users/${req.params.N}`, {
                method: 'GET',
                headers: {}
            });
        
        const data = await response.json();
        res.send(data.login);
    });

    app.all('*', (req, res) => {
        res.send('orangecells_1');
    });

    return app;
}
import Express from 'express';
import router from '../api_router'

let app = Express();

app.use('/', router);

app.listen(3000, () => {
    console.log('server running http://localhost:3000');
});
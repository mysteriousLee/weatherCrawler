import Express from 'express'
import getWeather from './api/getWeather'

let router = Express.Router();

router.get('/getweather', getWeather);

export default router;
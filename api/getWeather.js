import stdRes from '../stdRes.js'
import http from 'http'
import cheerio from 'cheerio'
import cityData from '../data.json'

//获取页面数据
function filterWeather(html) {
	let $ = cheerio.load(html);
	let results = $('#7d').find('ul').find('li');
	let resultData = [];
	for(let i = 0;i < 7; i++){
		let dayWeather = {};
		if(results[i].name === 'li'){
			dayWeather.time = results[i].children[1].children[0].data;
			dayWeather.weather = results[i].children[7].children[0].data;
			if(results[i].children[9].children[1].name === 'span' && results[i].children[9].children[3].name === 'i') {
				dayWeather.hightem = results[i].children[9].children[1].children[0].data;
				dayWeather.lowtem = results[i].children[9].children[3].children[0].data;
			} else if(results[i].children[9].children[1].name === 'i') {
				dayWeather.lasttem = results[i].children[9].children[1].children[0].data;
			}
			dayWeather.win = results[i].children[11].children[3].children[0].data;
		}
		resultData.push(dayWeather);
	}
	return resultData;
}

let getWeather = (req, res) => {
	let cityCode;
	for(let i = 0;i < cityData.datas.length; i++){
		if(cityData.datas[i].city == req.params.city){
			cityCode = cityData.datas[i].code;
		}
	}
	let url = 'http://www.weather.com.cn/weather/' + cityCode + '.shtml';
	let html = '';
	http.get(url, (resData) => {
		resData.on('data', (data) => {
			html += data
		});
		resData.on('end', () => {
			let weatherResult = filterWeather(html);
			res.json(weatherResult);
		});
	});
};
export default getWeather;
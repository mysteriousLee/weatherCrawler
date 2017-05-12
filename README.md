## node的爬虫小练习
### 根据提供的城市从中国天气官网http://www.weather.com.cn/
### 爬取近七天天气
### 请求方法
#### localhost:3000/getWeather/ + 城市汉字名
### 返回数据
`
    [
        {
    		time: '12日（今天）',
    		weather: '晴',
    		hightem: '32',
    		lowtem: '18℃',
    		win: '微风'
        },
        {
    		time: '13日（明天）',
    		weather: '阴',
    		hightem: '32',
    		lowtem: '19℃',
    		win: '微风'
        }
        ...
    ]
`

### 官网上面是根据城市代码来请求的，后台相当于把城市名称转换为对应代码然后爬取相应页面内容，数据太多我在data.json里只列举了直辖市及省会城市，更详细的见https://wenku.baidu.com/view/c1c74a2d7cd184254b3535f6.html
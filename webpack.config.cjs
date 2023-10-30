// import path from 'path';
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './app/main.jsx', // входная точка - исходный файл
	output: {
		path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
		publicPath: '/public/',
		filename: 'bundle.js', // название создаваемого файла
	},
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, '/'),
		},
		port: 8081,
		open: true,
	},
	module: {
		rules: [
			//загрузчик для jsx
			{
				test: /\.jsx?$/, // определяем тип файлов
				exclude: /(node_modules)/, // исключаем из обработки папку node_modules
				loader: 'babel-loader', // определяем загрузчик
				options: {
					presets: ['@babel/preset-react'], // используемые плагины
				},
			},
			{
				test: /\.(sass|scss)$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'sass-loader', // compiles Sass to CSS
					},
				],
			},
		],
	},
};

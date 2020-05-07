const path = require('path'); // подключение модуля path для работы с путями
const HTMLWebpackPlugin = require('html-webpack-plugin'); // подключение плагина для взаимодействия с html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключение плагина для очистки папки dist от старых сборок
const CopyWebpackPlugin = require('copy-webpack-plugin'); // плагин для копирования файлов
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // плагин для css
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // оптимизация css
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const optimization = () => {
    const config = { // если jquery 2 и более импорта, то нужна оптимизация
                        splitChunks: {
                            chunks: 'all',
                        },
                    }
    if (isProd) {
        config.minimizer = [
           new OptimizeCssAssetWebpackPlugin(),
           new TerserWebpackPlugin()
        ]
    }
    
    return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev, // изменение без перезагрузки. hmr работает если isDev true
                reloadAll: true,
            },
        },
            'css-loader'
    ] // подключение css. 'css-loader' - берем стили, MiniCssExtractPlugin.loader - записываем стили

    if (extra) {
        loaders.push(extra);
    }
    return loaders;
}

const babelOptions = preset => {
    const opts = {
            presets: [
                '@babel/preset-env',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties',
            ],
        }
    if (preset) {
        opts.presets.push(preset);
    }
    return opts;
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: babelOptions(),
    }];

    if (isDev) {
        loaders.push('eslint-loader');
    }

    return loaders;
}

const plugins = () => {
    const base = [ // сдесь указываются плагины
        new HTMLWebpackPlugin({
            // title: 'First WEBPACK', // если есть параметр template то title отсюда не работает
            template: './index.html', // указывается файл который берется за основу - параметр title отсюда не работает
            minify: {
                collapseWhitespace: isProd, // минифицируется html если production

            },
        }),
        new CleanWebpackPlugin(), // очистка папки dist от старых сборок - остаются только актуальные файлы
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist'),
            },
        ]),
        new MiniCssExtractPlugin({
            // filename: '[name].[hash].css' // файл на выходе- в который будут записаны стили
            // вместо предыдущего
        filename: filename('css')
        }),
    ]

    if (isProd) {
        base.push(new BundleAnalyzerPlugin());
    }

    return base;
}

const isDev = process.env.NODE_ENV === 'development'; // доступ к систееме переменных
console.log('IS DEV', isDev);
const isProd = !isDev; // переменная для production

module.exports = {
    context: path.resolve(__dirname, 'src'), // указывается та папка от которой будет отталкиваться webpack
    mode: 'development', // режим сборки - по умолчанию production
    entry: {
       main: [
           '@babel/polyfill',
           // './index.js', // Закоментировано т.к. работает index.jsx
           './index.jsx', // Работает вместо index.js
        ], // точки входа
    //    analytics: './analytics.js',
    // Тест analytics.ts
       analytics: './analytics.ts',
    }, // откуда начинается работа приложения
    output: {
        // filename: '[name].bundle.js', // если в entry более однойточки входа то надо перед bundle.js указать [name].
        // filename: '[name].[hash].js', // при изменении содержимого файла, при сборке будет указываться хэш
        // вместо предыдущего
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist') //возвращает путь к каталогу, в который будет добавлен файл
    }, // куда складывается результат работы webpack
    resolve: {
        extensions: ['.js', '.json', '.png'], // расширения подставляемые к файлам
        alias: {
            '@models': path.resolve(__dirname, 'src/models'), // Записывается путь в алиас
            '@': path.resolve(__dirname, 'src'),
        },
    },
    optimization: optimization(), // вместо следующего
    // { // если jquery 2 и более импорта, то нужна оптимизация
        // splitChunks: {
        //     chunks: 'all',
        // },
    // },
    // Создание сервера
    devServer: {
        port: 5100,
        hot: isDev, // изменение без перезагрузки. hmr работает если isDev true
    },
    devtool: isDev ? 'source-map' : '', // добавление исходных карт в режиме разработки - для отображения исходных кодов в консоли
    plugins: plugins(),
    // Далее закоментировано т.к. используется webpack-bundle-analyzer
    // [ // сдесь указываются плагины
    //     new HTMLWebpackPlugin({
    //         // title: 'First WEBPACK', // если есть параметр template то title отсюда не работает
    //         template: './index.html', // указывается файл который берется за основу - параметр title отсюда не работает
    //         minify: {
    //             collapseWhitespace: isProd, // минифицируется html если production

    //         },
    //     }),
    //     new CleanWebpackPlugin(), // очистка папки dist от старых сборок - остаются только актуальные файлы
    //     new CopyWebpackPlugin([
    //         {
    //             from: path.resolve(__dirname, 'src/favicon.ico'),
    //             to: path.resolve(__dirname, 'dist'),
    //         },
    //     ]),
    //     new MiniCssExtractPlugin({
    //         // filename: '[name].[hash].css' // файл на выходе- в который будут записаны стили
    //         // вместо предыдущего
    //         filename: filename('css')
    //     }),
    // ],
    module: {
        rules: [
            // РАБОТА С CSS
            {
                test: /\.css$/, // подключение css
                use: cssLoaders(),
                // Вместо того что ниже - добавлена cssLoaders()
                    // [
                    //         {
                    //             loader: MiniCssExtractPlugin.loader,
                    //             options: {
                    //                 hmr: isDev, // изменение без перезагрузки. hmr работает если isDev true
                    //                 reloadAll: true,
                    //         },
                    //     },
                    //     'css-loader'
                    // ], // подключение css. 'css-loader' - берем стили, MiniCssExtractPlugin.loader - записываем стили
            },
            {
                test: /\.(png|jpg|svg|gif)$/, // подключение картинок
                use: ['file-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/, // подключение шрифтов
                use: ['file-loader'],
            },
            {
                test: /\.(xml)$/, // работа с XML
                use: ['xml-loader'],
            },
            {
                test: /\.(csv)$/, // работа с csv
                use: ['csv-loader'],
            },
            // РАБОТА С LESS
            {
                test: /\.less$/, // подключение less
                use: cssLoaders('less-loader'),
                // Вместо того что ниже - добавлена cssLoaders()
                // [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             hmr: isDev, // изменение без перезагрузки. hmr работает если isDev true
                //             reloadAll: true,
                //         },
                //     },  'css-loader',
                //         'less-loader'
                // ], // подключение less. 'less-loader' - берем стили, MiniCssExtractPlugin.loader - записываем стили
            },
            // РАБОТА С SASS SCSS
            {
                test: /\.s[ac]ss$/, // подключение sass, scss
                use: cssLoaders('sass-loader'),
                // Вместо того что ниже - добавлена cssLoaders()
                // [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             hmr: isDev, // изменение без перезагрузки. hmr работает если isDev true
                //             reloadAll: true,
                //     },
                // },  'css-loader',
                //     'sass-loader'
                // ], // подключение sass. 'sass-loader' - берем стили, MiniCssExtractPlugin.loader - записываем стили
            },
            // РАБОТА С BABEL
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(), // Если не нужен то можно закоментировать и раскоментировать ниже
                // Ниже закоментировано т.к. добавлен jsLoaders для использования ESlint
                // loader: {
                //     loader: 'babel-loader',
                //     options: babelOptions(), // Подключается функция вместо объекта ниже
                //     // {
                //     //     presets: [
                //     //         '@babel/preset-env',
                //     //     ],
                //     //     plugins: [
                //     //         '@babel/plugin-proposal-class-properties',
                //     //     ],
                //     // }
                // },
            },
            // TS
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript'), // Подключается функция вместо объекта ниже
                    // {
                    //     presets: [
                    //         '@babel/preset-env',
                    //         '@babel/preset-typescript',
                    //     ],
                    //     plugins: [
                    //         '@babel/plugin-proposal-class-properties',
                    //     ],
                    // }
                },
            },
            // React
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react'), // Подключается функция вместо объекта ниже
                    // {
                    //     presets: [
                    //         '@babel/preset-env',
                    //         '@babel/preset-react',
                    //     ],
                    //     plugins: [
                    //         '@babel/plugin-proposal-class-properties',
                    //     ],
                    // }
                },
            },
        ]
    },
};

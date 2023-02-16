
// esta dependencia ya viene con node.js, no se requiere instalar
// creamos variable para identifica donde se encuentra nuestro proyecto
const path = require('path')
// traemos le plugin de html que instalamos previamente
const HtmlWebpackPlugin = require('html-webpack-plugin')

// se crea modulo para exportar, con la config que requiere, cada uno de los casos de uso.
//  creamos un objeto con llave valor para las distintas configuraciones    
module.exports = {
    // la primera es donde se encuentra nuestro archivo ppal
    entry: './src/index.js',
    // ahora el punto de salida, tenemos un obj, a donde le pasamos path e indicamos donde me encuentro con __dirname y despues creara una carpeta 'dist' de distribution, que es a donde envia todos los archivos una vez terminado.
    // indicamos el nombre del archivo resultante, main.js, no es relevante el nombre, pero dist, si.
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // nos permite identificar las distintas extensiones que estemos trabajando, en este caso .js, para react es .jsx, asi crea los bundles de los distintos archivos
    resolve:{
        extensions: ['.js']
    },
    // creamos un modulo con distintas reglas a aplicar, en este caso el uso de babel-loader, para identificar las ventajas que tiene js moderno, este nos regresa un objeto
    // rules es un array en donde agregamos diferentes plugins o recursos claves para webpack, como poder trabajar con imagenes o archivos.
    module:{
        rules:[
            {
                // identificaremos los archivos que usan .js
                test: /\.js?$/,
                    // excluimos la carpeta node_modules, por que es muy grande
                exclude:/node_modules/,
                // indicamos que utilice loader para optimizarlo para cualquier navegador
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    //agregamos plugins mediante un array 
    plugins: [
        // configuramos htmlwbpackplugin, indicamos el archivo ppal de .html, este sera copiado a dist con el filename index.html
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}
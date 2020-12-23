module.exports = {
    //部署应用的基本url  可用 process.env.NODE_ENV 环境变量控制
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
    outputDir: 'dist',

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: '',

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    indexPath: 'index.html',

    /**
     *  是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
        设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
        如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'default'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
        设置为 error 将会使得 eslint-loader 把 lint 警告也输出为编译错误，这意味着 lint 警告将会导致编译失败。
     */
    lintOnSave: 'default',

    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: false,

    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
    transpileDependencies: [],

    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,

    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
    // 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
    crossorigin: undefined,

    /**
     *  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
        需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
        另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个 bug 会导致文件被下载两次。
     */
    integrity: false,

    /** 
     *  configureWebpack
     *  Type: Object | Function
     *  
     * 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
     *  如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
     */

    /**
     * chainWebpack
     * Type: Function
     * 
     * 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
     */


    /**
     * css.requireModuleExtension
     * Type: boolean
     * Default: true
     * 
     * 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
     * 设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
     * 提示: 如果你在 css.loaderOptions.css 里配置了自定义的 CSS Module 选项，则 css.requireModuleExtension 必须被显式地指定为 true 或者 false，
     * 否则我们无法确定你是否希望将这些自定义配置应用到所有 CSS 文件中。
     */

    /**
     * css.extract
     * Type: boolean | Object
     * Default: 生产环境下是 true，开发环境下是 false
     * 
     * 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
     * 同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
     * 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
     * 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
     */

    /**
     * css.sourceMap
     * Type: boolean
     * Default: false
     * 
     * 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
     */

    /**
     * css.loaderOptions
     * Type: Object
     * Default: {}
     * 
     * 向 CSS 相关的 loader 传递选项。例如：
     * 
        // module.exports = {
        //     css: {
        //         loaderOptions: {
        //             css: {
        //                 // 这里的选项会传递给 css-loader
        //             },
        //             postcss: {
        //                 // 这里的选项会传递给 postcss-loader
        //             }
        //         }
        //     }
        // }
     */

    //开发服务配置
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://qym.jjyapp.com',
                changeOrigin: true
            }
        },
    },
}
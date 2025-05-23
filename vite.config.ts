import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import process from "node:process";
import { defineConfig, loadEnv } from "vite";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import iconPreview from "./src/plugins/vite-plugin-icon-preview";
import { vitePluginForArco } from "@arco-plugins/vite-react";

// 获取当前目录路径
const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  // 指定环境变量文件所在目录
  const envDir = resolve(__dirname, 'env'); 
  
  const { VITE_BASE_URL_DEV, VITE_DEV_PREFIX } = loadEnv(mode, envDir);

  return defineConfig({
    // 生产环境打包路径
    base: "/",
    // 插件
    plugins: [
      Unocss(),
      react(),
      iconPreview({
        entry: "/icons",
        iconDirs: resolve(process.cwd(), "./src/assets/icons"),
      }), // 自定义图标预览插件
      vitePluginForArco({
        style: "css",
      }),
      createSvgIconsPlugin({
        // 要缓存的图标文件夹
        iconDirs: [resolve(__dirname, "src/assets/icons")],
        symbolId: "icon-[name]",
      }),
    ],

    // 解析器配置
    resolve: {
      // 别名
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    // css 相关配置
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData 的内容会在每个 scss 文件的开头自动注入
        },
      },
      // 进行 PostCSS 配置
      postcss: {
        plugins: [
          autoprefixer({
            // 指定目标浏览器
            overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"], // 自动为不同浏览器添加样式前缀，解决兼容性问题
          }),
        ],
      },
    },
    // 服务运行配置
    server: {
      // 代理转发
      proxy: {
        [VITE_DEV_PREFIX]: {
          target: VITE_BASE_URL_DEV,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${VITE_DEV_PREFIX}`), ""),
        },
      },
      open: true, // 自动打开浏览器
      port: 4500, // 服务端口
    },

    // 打包配置
    build: {
      assetsInlineLimit: 4 * 1024, // 4kb 以下的文件会被转为 base64，否则会被打包成单独的文件
      polyfillModulePreload: true, // 模块预加载
      minify: "esbuild", // 使用 esbuild 压缩
      target: "modules", // 产物目标环境
      chunkSizeWarningLimit: 1024, // 单个 chunk 文件大小的警告阈值
      outDir: "dist", // 输出目录
      assetsDir: "assets", // 静态资源存放目录
      terserOptions: {
        compress: {
          drop_console: true, // 移除 console.log
          drop_debugger: true, // 移除 debugger
        },
      },
      reportCompressedSize: false, // 是否显示压缩后的文件大小
      sourcemap: false, // 如果不需要 source map，可以设置为 false，减少构建时间
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name].js",
          chunkFileNames: "assets/[name].js",
          // assetFileNames: "assets/[name].[ext]",
          assetFileNames({ name }: { name: any }) {
            const info = name.split(".");
            let ext = info[info.length - 1];
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(name)) {
              ext = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(name)) {
              ext = "img";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(name)) {
              ext = "fonts";
            }
            return `${ext}/[hash:16][extname]`;
          },
        },
      },
    },
  });
};
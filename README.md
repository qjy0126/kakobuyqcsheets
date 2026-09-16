# Kakobuy Spreadsheet

独立目录站（后期域名 [kakobuygoodqc.com](https://kakobuygoodqc.com)）。

参考了常见 spreadsheet 站点的信息架构（分类、QC、链接转换、Kakobuy 下单），但配色、版式和文案都是原创，不是原站拷贝。

## 本地预览

```bash
cd /Users/cusky/Desktop/kakobuy
python3 -m http.server 5173
```

打开 http://localhost:5173

## 上线 kakobuygoodqc.com

把本目录部署到任意静态托管（Cloudflare Pages、Netlify、GitHub Pages），再把域名 `kakobuygoodqc.com` 指过来即可。`CNAME` 文件已写好。

商品数据目前是演示用的，之后把 `js/data.js` 里的 `KF.products` 换成你的真实链接和图片。

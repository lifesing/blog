> 主题的静态页面开发

# 方法一:使用http-server

```
cnpm install http-server -g 

http-server -p 8088

http://127.0.0.1:8088

```

# 方法二:使用 browser-sync 实现页面实时刷新  

```
cnpm install -g browser-sync

browser-sync start --server --files "css/*.css, *.html"

```
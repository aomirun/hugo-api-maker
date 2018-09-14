# Hugo JSON API using Hugo's Custom Output Formats

使用 Hugo 的自定义输出功能，可以让 Hugo 摇身一变为 `JSON API Maker`，快速生成你想要的 API。

接口模板定义可以在 `layouts` 中找到，接口路由重写规则可以在 `layouts/_default/index.redirect` 中找到。

## 使用方法

切换到目录中，执行 `hugo` 即可。

```txt
                   | EN  
+------------------+----+
  Pages            | 32  
  Paginator pages  |  0  
  Non-page files   |  0  
  Static files     |  1  
  Processed images |  0  
  Aliases          |  0  
  Sitemaps         |  1  
  Cleaned          |  0  

Total in 13 ms
```

输出结果在 `public` 中。

```txt
public
public/page
public/page/about
public/page/about/index.json
public/page/index.json
public/players
public/players/zoe-flanders
public/players/zoe-flanders/index.json
...
```

但是输出内容夹杂大量无用空白，使用 `CI` 或者手动执行 `node cli`，即可去除无用空白。

## Inspire By

Source code for [Build a JSON API With Hugo's Custom Output Formats](https://forestry.io/blog/build-a-json-api-with-hugo/)

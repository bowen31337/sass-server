####Usages

```bash
git clone git@github.com:bowen31337/sass-server.git

cd sass-server

npm install yarn -g

yarn install

yarn run sass-server


```

####Studio Setup

```
Responsive Skin CSS URL : http://localhost:8000/css/main.css
(webroot:'sass-server')

```

####Working SCSS

add your custom scss in 

```
sass/_style.scsss
sass/_variables.scss

```

####Peak Version
17.1

####Notes
if chrome is complaing about loading unsafe script on the address bar, tick it, so the local css can work.
use chrome dev tool for Live SASS /in-browser Sass editing, please refer to this [article](https://medium.com/@toolmantim/getting-started-with-css-sourcemaps-and-in-browser-sass-editing-b4daab987fb0#.mtu17dwaz)
other reload tips
```js
!function(t){t("head link").each(function(){0===t(this).attr("href").indexOf("http://localhost:8000")&&t(this).attr("href","http://localhost:8000/css/main.css?v"+Math.random())})}(LITHIUM.jQuery);
```
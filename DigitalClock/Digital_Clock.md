```html
HTML CODE

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital_Clock</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orangered;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="center">
        <div id="banner"><span>Your local time</span></div>
        <div id="clock"></div>
    </div>
  </body>
  <script src="script.js"></script>
</html>
```



```js

JS CODE

const clock = document.getElementById('clock');

setInterval(() => {
    let date = new Date();
// console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();
},1000)
```
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle
`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1615258875035'); /* IE9 */
    src: url('./iconfont.eot?t=1615258875035#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQgAAsAAAAACDwAAAPTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDeINJATYCJAMQCwoABCAFhG0HRxs6B8gOJcHAwABIAABsPHyN/f7c3X22D/UkGi36dBLTTUqw6ZBolVRI8L+X8P7/31YXGSdwOtgqnOgSZ3oBH4qFB9nO+qrO/7mc3rUF57eznOaY1jsMMA4ooL19TA20gALEmPuADd3PfgLVgu6w4/zSWnBWmMMC8SDoGXDO6JWG0tAWmhVzC8QbKLXTOMUZAK/B5+M/RIczSBoZzINOrvJ0kPkr5rkzPvT/o6Y8B4ZNZwW/iIxNoBA3lfYzeBTfhKvqdxzsAG1tiV8xz+KfO///j8KjyNvWXx4hyUQTzOI+sEWyfGECByP4FY+R+O2sl5FYBrfRwTuAL1DPTfOMIs24ujg7+6kolwHrumjWXb1wLfkaPXu275VH9LXb2usPNVdrfXtev669do2+cqX26tWGxKIBYI9BehC0ay1hUtU3zA4nFgbWMQdUEwBqEEeJ8eewYVrtsCAzVbNzLQxdV1p1AsNMGnpvqYOkogfbru2+8KpfrXbW9ZQlal+7Iwa5Ae1Exqtcvp4x+4Fh/OqQ25877fwQGYWjPps2vsdKN5Qp3A0GvYFeKp9g9MviL7fZtD9wS8fdYUHnA/e4jc7qVaArHIAvX471w/uvWNaffvCSlVh/vM/ypXwYrhvZT4N5UKVOFfVpcJQvuNg59yJy/8/mXDOmV2gU2ayQft3hd7pdPpWoxpRZlNiFFtyaVSWZyU9atPLpIL/fwR0+dgiHt8uGGzqXvVUGjUqytOjCZqTJvQe121Ewdst0qnRLfff6njlbD7ph35X9YIp61rExsSbh6Jt+2MLY7LIG6L/a2sJmCXiHh4+9q/EzrO+I6eFRt8AG9J7/H+KgwOdE0f/5KA6Enlcm/uh+XtaPVbZ6pH51Vj1o6NOi/EU1wwR/S9BZ8FtlZVLkn1gTmfpSFEPveSDoHlDspkZKqCp66B5xbwrluFpMaBtPIGmZh6xtES3kTWjo2oKmtj2oNhQs7holwUVxAdaNAghDtkAy4AOyIWfRQr4LDRPeQtNQ4FCdhs+aXcshEDkSYmSkI9l+pMCJVt42yURYWo30vcyMlBYFdBpJdiFERlGR+VQBsiJpign23vpoWeZJXhItZD4chsxmkbRJohFxMmWQZVuyWs1XXYjiRAsQjkgQhgzRIbH6IQk4IiveaywjCu+vhuj1YsaQGnBVThoisRNaJ0WhRHZAC+TWTrhb6WzXm140mYxnBvEkIgtSPloRsxUXkWzVvYwQjoxiGBC1SaamenxXObW80vKGm6Ay1ymhwHDMAVNCvWKseh1jFLzpiixGVYms9n69LIzICgAA') format('woff2'),
    url('./iconfont.woff?t=1615258875035') format('woff'),
    url('./iconfont.ttf?t=1615258875035') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1615258875035#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconfangdajing:before {
    content: "\e633";
  }

  .iconAa:before {
    content: "\e636";
  }

  .iconPensyumaobi:before {
    content: "\e708";
  }
`

export default GlobalStyle;






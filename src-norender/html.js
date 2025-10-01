import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
              <link
        rel="stylesheet"
        href="https://js.arcgis.com/4.23/esri/themes/light/main.css"
      />
      {/* <script src="https://js.arcgis.com/4.23/" />
      <script>
      console.log(typeof require)
      if (typeof require === "function"){
        require(["esri/config","esri/Map", "esri/views/MapView"], function(esriConfig,Map, MapView) {
          esriConfig.apiKey = "YOUR_API_KEY"
        })
      }
      </script> */}
      </head>
      <body {...props.bodyAttributes}>

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

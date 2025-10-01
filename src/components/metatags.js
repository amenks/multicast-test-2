import React from "react"
import Helmet from "react-helmet"

import AppleTouchIcon57x57 from "../images/meta/apple-touch-icon-57x57.png"
import AppleTouchIcon60x60 from "../images/meta/apple-touch-icon-60x60.png"
import AppleTouchIcon72x72 from "../images/meta/apple-touch-icon-72x72.png"
import AppleTouchIcon76x76 from "../images/meta/apple-touch-icon-76x76.png"
import AppleTouchIcon114x114 from "../images/meta/apple-touch-icon-114x114.png"
import AppleTouchIcon120x120 from "../images/meta/apple-touch-icon-120x120.png"
import AppleTouchIcon144x144 from "../images/meta/apple-touch-icon-144x144.png"
import AppleTouchIcon152x152 from "../images/meta/apple-touch-icon-152x152.png"
import Favicon16x16 from "../images/meta/favicon-16x16.png"
import Favicon32x32 from "../images/meta/favicon-32x32.png"
import Favicon96x96 from "../images/meta/favicon-96x96.png"
import Favicon128x128 from "../images/meta/favicon-128x128.png"
import Favicon196x196 from "../images/meta/favicon-196x196.png"
import MsAppTileImage from "../images/meta/mstile-144x144.png"
import MsAppTileImage70x70 from "../images/meta/mstile-70x70.png"
import MsAppTileImage150x150 from "../images/meta/mstile-150x150.png"
import MsAppTileImage310x150 from "../images/meta/mstile-310x150.png"
import MsAppTileImage310x310 from "../images/meta/mstile-310x310.png"

const Metatags = ({ title, description, url, image, keywords }) => {
  return (
    <Helmet>
      <html lang="en" amp />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="Generator" content="Netbistrot serverless" />
      <meta name="keywords" content={keywords} />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href={AppleTouchIcon57x57}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href={AppleTouchIcon60x60}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href={AppleTouchIcon72x72}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href={AppleTouchIcon76x76}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href={AppleTouchIcon114x114}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href={AppleTouchIcon120x120}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={AppleTouchIcon144x144}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href={AppleTouchIcon152x152}
      />
      <link rel="icon" type="image/png" href={Favicon16x16} sizes="16x16" />
      <link rel="icon" type="image/png" href={Favicon32x32} sizes="32x32" />
      <link rel="icon" type="image/png" href={Favicon96x96} sizes="96x96" />
      <link rel="icon" type="image/png" href={Favicon128x128} sizes="128x128" />
      <link rel="icon" type="image/png" href={Favicon196x196} sizes="196x196" />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content={MsAppTileImage} />
      <meta
        name="msapplication-square70x70logo"
        content={MsAppTileImage70x70}
      />
      <meta
        name="msapplication-square150x150logo"
        content={MsAppTileImage150x150}
      />
      <meta
        name="msapplication-wide310x150logo"
        content={MsAppTileImage310x150}
      />
      <meta
        name="msapplication-square310x310logo"
        content={MsAppTileImage310x310}
      />
      <link hrefLang="en" href={url} />
      <link rel="canonical" href={url} />
      <link rel="shortlink" href={url} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="NetBistrot" />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

 
    </Helmet>
  )
}

export default Metatags

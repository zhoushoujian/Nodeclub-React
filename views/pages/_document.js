import Document, { Html, Head, Main, NextScript } from 'next/document';
import config from "../../config"
import "../theme/less/index.less"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <base href="/" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
          <meta name="referrer" content="always" />
          { config.site_headers_react && config.site_headers_react.map((item, index) => <meta name="author" key={index} content={item} />) }
          <link title="RSS" type="application/rss+xml" rel="alternate" href="/rss"/>
					{ config.site_icon && <link rel="icon" href={config.site_icon} type="image/x-icon"/> }
					<link rel="stylesheet" href="/public/libs/editor/editor.css" media="all"></link>
					<script src="/public/libs/jquery-2.1.0.js"></script>
					<script src="/public/javascripts/main.js"></script>
        	<script src="/public/javascripts/responsive.js"></script>
					<script src="/public/libs/lodash.compat.js"></script>
					<script src="/public/libs/jquery-ujs.js"></script>
        	<script src="/public/libs/bootstrap/js/bootstrap.js"></script>
        	<script src="/public/libs/jquery.caret.js"></script>
        	<script src="/public/libs/jquery.atwho.js"></script>
        	<script src="/public/libs/markdownit.js"></script>
        	<script src="/public/libs/code-prettify/prettify.js"></script>
        	<script src="/public/libs/qrcode.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
				{ config.cnzz_tracker_id && <script src={`//s95.cnzz.com/z_stat.php?id=${config.cnzz_tracker_id}&web_id=${config.cnzz_tracker_id}`} language="JavaScript"></script> }
      </Html>
    );
  }
}

export default MyDocument;

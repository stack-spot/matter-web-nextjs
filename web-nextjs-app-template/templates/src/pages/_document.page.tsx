import { createElement } from 'react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const Document = () => (
  <Html>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#f56300" />
      <title>Matter-web-nextjs</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Generate by matter-web-nextjs" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

Document.getInitialProps = async function getInitialProps(ctx: DocumentContext): Promise<{
  styles: JSX.Element
  html: string
  head?: Array<JSX.Element | null>
}> {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(createElement(App, props)),
      })

    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: createElement(Html, {}, [initialProps.styles, sheet.getStyleElement()]),
    }
  } finally {
    sheet.seal()
  }
}

export default Document

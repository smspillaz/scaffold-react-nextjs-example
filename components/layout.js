import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>Scaffold</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    </Head>
    <style jsx global>{`
      body {
        background: #f8f8f8
      }
    `}
    </style>
    {props.children}
  </div>
)

export default Layout

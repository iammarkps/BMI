import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <title>BMI | Calculator</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Kanit:300|Montserrat:300"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
    </Head>
    {children}
    <style jsx global>
      {`
        body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
        }
      `}
    </style>
  </div>
)

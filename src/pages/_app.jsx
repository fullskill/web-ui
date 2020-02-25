import '../css/tailwind.css'
import { Auth0Provider } from '../lib/auth0'

const TailwindApp = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain="appwish.eu.auth0.com"
      audience="https://api.appwish.org"
      client_id="zxGlPDKB222ddKk9PbJ3c0fgG2I9dBuf"
      redirect_uri="http://localhost:3000"
      onRedirectCallback={it => console.log(it)}
      response_type="id_token token"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default TailwindApp

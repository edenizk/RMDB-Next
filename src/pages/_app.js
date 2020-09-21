import '../styles/globals.scss'
import { myTheme } from '../styles/main'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={myTheme}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider> 
    </ThemeProvider>)
}

export default MyApp

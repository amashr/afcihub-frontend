import React from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import MyLayout from '../components/MyLayout';
import withApollo from '../lib/withApollo';
import { Auth0Provider} from '../auth/react-auth0-wrapper'; 
import config from '../auth/auth_config.json'; 

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }
 
  render() {
    const onRedirectCallback = appState => {
      window.history.replaceState({},
        document.title,
        appState && appState.targetUrl ?
        appState.targetUrl :
        window.location.pathname
      );
    };

    const { Component, pageProps, apollo } = this.props;
    return (
       <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        //redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <ApolloProvider client={apollo}>
          <MyLayout>
            <Component {...pageProps} />
          </MyLayout>
        </ApolloProvider>
      </Auth0Provider>
    );
  }
}

export default withApollo(MyApp);

import React from 'react';
import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import MyLayout from '../components/MyLayout';
import withApollo from '../lib/withApollo';

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
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

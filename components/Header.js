import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const Header = () => (
  <>
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  </>
);

export default Header;

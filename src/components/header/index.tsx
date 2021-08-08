import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from '@/assets/webpack.svg';
import GitHub from '@/assets/github.svg';
import Svg from '@/components/svg';

import styles from './index.less';

const menus = [
  {
    path: '/herz/',
    text: '🏠',
  },
];

const Header = () => (
  <header className="sticky-top py-3 shadow-sm bg-light">
    <div className="container d-flex justify-content-between align-items-center">
      <Link to="/herz/" className={classnames('w-25', styles.logo)}>
        <Svg content={Logo} />
      </Link>
      <div>
        {menus.map((m) => (
          <Link
            key={m.path}
            className="link-secondary ms-5 text-decoration-none fs-4"
            to={m.path}
          >
            {m.text}
          </Link>
        ))}
        <a
          href="https://github.com/LiJiahaoCoder"
          target="_blank"
          rel="noreferrer"
          className="fs-4 ms-5"
        >
          <Svg content={GitHub} />
        </a>
      </div>
    </div>
  </header>
);

export default Header;

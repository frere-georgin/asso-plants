import Link from "next/link";

export default () => (
  <nav className="nav">
    <Link href="/">
      <a className="nav__logo nav__link">asso-plants </a>
    </Link>{" "}
    <div className="nav__right">
      <Link href="https://github.com/frere-georgin/asso-plants/#contribute">
        <a className="nav__link">contribuer</a>
      </Link>{" "}
      -
      <Link href="https://github.com/frere-georgin/asso-plants/#sources">
        <a className="nav__link">sources</a>
      </Link>{" "}
      -
      <Link href="https://github.com/frere-georgin/asso-plants/#about">
        <a className="nav__link">à propos</a>
      </Link>{" "}
    </div>
  </nav>
);

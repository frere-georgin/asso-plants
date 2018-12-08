import Link from "next/link";
export default () => (
  <nav>
    <Link href="/">
      <a>asso-plants </a>
    </Link>{" "}
    <Link href="/contribute">
      <a>contribuer</a>
    </Link>{" "}
    -
    <Link href="/sources">
      <a>sources</a>
    </Link>{" "}
    -
    <Link href="/about">
      <a>à propos</a>
    </Link>{" "}
  </nav>
);

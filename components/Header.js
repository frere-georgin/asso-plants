import Link from "next/link";
export default () => (
  <nav>
    asso-plants{" "}
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

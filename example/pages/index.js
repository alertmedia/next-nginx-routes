import Link from "next/link";

export default function IndexPage() {
  return (
    <ul>
      <li>
        <Link href="/foo/bar/example">
          <a>Foo Bar example</a>
        </Link>
      </li>
      <li>
        <Link href="/foo/bar/hello">
          <a>Foo Bar Hello example</a>
        </Link>
      </li>
      <li>
        <Link href="/foo">
          <a>Foo index example</a>
        </Link>
      </li>
      <li>
        <Link href="/hello">
          <a>Hello example</a>
        </Link>
      </li>
      <li>
        <Link href="/hello/world">
          <a>Hello world example</a>
        </Link>
      </li>
      <li>
        <Link href="/detail">
          <a>Detail Parent Route</a>
        </Link>
      </li>
      <li>
        <Link href="/detail/child">
          <a>Detail Sub Route</a>
        </Link>
      </li>
    </ul>
  );
}

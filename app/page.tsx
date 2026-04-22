import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hello from index page</h1>
      <Link href="/abc">Go to abc</Link>
    </div>
  );
}

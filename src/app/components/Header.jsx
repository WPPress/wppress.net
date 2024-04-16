import Link from "next/link";

export default function Header() {
  return (
    <header id="header" className="w-full sticky top-0 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto py-5 font-nunito">
        <div className="flex flex-row justify-between gap-4">
          <div>
            <Link href="/" className="font-bold uppercase text-lg">
              WPPress.net
            </Link>
          </div>
          <div>
            <ul className="list-none inline-flex gap-5 uppercase text-sm font-bold">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

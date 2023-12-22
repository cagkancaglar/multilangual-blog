import Link from "next/link";
import PaddingContainer from "./PaddingContainer";

const Navigation = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white border-b  backdrop-blur-md bg-opacity-50">
      <PaddingContainer>
        <div className="flex justify-between items-center py-5">
          <Link href="/" className="font-bold text-lg">
            Explorer
          </Link>
          <nav>
            <div className="flex items-center gap-4 text-neutral-600">
              <div>
                <Link href="/cities">Cities</Link>
              </div>
              <div>
                <Link href="/experiences">Experiences</Link>
              </div>
            </div>
          </nav>
        </div>
      </PaddingContainer>
    </header>
  );
};

export default Navigation;

import Link from 'next/link';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ ...headerProps }) => {
  return (
    <header {...headerProps} className="w-full absolute">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="space-x-5">
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
            <Link href="/">
              <a className="hover:underline">Store</a>
            </Link>
          </div>
          <div className="space-x-5">
            <Link href="/">
              <a className="hover:underline hidden sm:inline">Gmail</a>
            </Link>
            <Link href="/">
              <a className="hover:underline hidden sm:inline">Images</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

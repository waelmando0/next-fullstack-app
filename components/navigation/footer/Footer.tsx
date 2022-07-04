export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  return (
    <footer {...footerProps} className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="md:flex md:items-center md:justify-between py-4 md:py-6">
          <p>Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

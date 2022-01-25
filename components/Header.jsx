import Nav from './Nav';

const Header = () => (
  <div className="container mx-auto px-5 mb-8">
    <div className="border-b w-full inline-block border-blue-400 py-8">
      <div className="center md:float-left block">
        <Nav />
      </div>
    </div>
  </div>
);

export default Header;

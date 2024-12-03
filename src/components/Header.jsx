const Header = ({ name, hsize }) => {
    const Tag = hsize || 'h1';
    return (
      <header>
        <Tag>{name}</Tag>
      </header>
    );
  };
  
  export default Header;
  
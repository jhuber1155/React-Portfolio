import '../assets/css/footer.css';

function Footer() {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    bottom: 0,
    width: '99vw',
    height: 40,
    backgroundColor: 'rgba(82, 153, 211)',
  };

  const iconStyle = {
    fontSize: '2rem'
  };

  return (
    <footer style={footerStyle} className="footer">
      <a href="www.github.com">
        <i className="fab fa-github g-icon" style={iconStyle} />
      </a>
    </footer>
  );
}

export default Footer;
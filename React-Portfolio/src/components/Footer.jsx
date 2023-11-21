import '../assets/css/footer.css';

function Footer() {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    bottom: 0,
    width: '99.1vw',
    height: 40,
    backgroundColor: '#1d1f1c',
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
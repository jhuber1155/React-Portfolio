import '../assets/css/footer.css'

function Footer() {
  const footerStyle = {
    backgroundColor: 'rgba(82, 153, 211)',
  };

  return (
    <footer style={footerStyle} className="footer">
  <a href='www.github.com'>
            <i className="fab fa-github g-icon" />
        </a>
    </footer>
  );
}

export default Footer;
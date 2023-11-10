
const styles = {
    footerStyle: {
      background: 'white',
    },
    footingStyle: {
      fontSize: '100px',
    },
  };


function Footer() {
    return (
      <header style={styles.footerStyle} className="footer">
        <h1 style={styles.footingStyle}>Footer Example</h1>
      </header>
    );
  }
  
  export default Footer;
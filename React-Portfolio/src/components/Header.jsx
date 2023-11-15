import '../assets/css/project.css'

const styles = {
    headerStyle: {
      display: 'block',
      position: 'absolute',
      top: 0,
      width: '99vw',
      height: 'auto',
      padding: 10,
      marginTop: 100,
      backgroundColor: 'rgba(162, 188, 224)',
    },
    headingStyle: {
      fontSize: '10px',
    },
  };
  
  function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}> </h1>
      </header>
    );
  }
  
  export default Header;
  
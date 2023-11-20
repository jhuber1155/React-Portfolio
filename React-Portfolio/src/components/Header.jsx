import '../assets/css/project.css'

const styles = {
    headerStyle: {
      display: 'block',
      position: 'absolute',
      top: 0,
      width: '100vw',
      height: 'auto',
      padding: 10,
      marginTop: 55,
      backgroundColor: '#1d1f1c',
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
  
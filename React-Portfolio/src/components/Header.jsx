import '../assets/css/project.css'

const styles = {
    headerStyle: {
      backgroundColor: 'rgba(162, 188, 224)',
    },
    headingStyle: {
      fontSize: '100px',
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
  
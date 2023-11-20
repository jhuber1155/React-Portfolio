import '../assets/css/backgroundvideo.css'

const BackgroundVideo = () => {
    return (
      <div className="background-video">
        {<video autoPlay loop muted>
  <source src="../assets/images/geometrical-lines.mp4" type="video/mp4" />
</video>}
      </div>
    );
  };
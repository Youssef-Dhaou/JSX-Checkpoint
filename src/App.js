import myWonderfulImage from "./imageInSrc.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title"> <span className="red"> Youssef DHAOU </span></h1> <br/>
        <img className="srcImg" src={myWonderfulImage} alt="myImagesrc" />
        <br/>
        <img src="./imageInPublic.jpg" alt="myimagepub" />
      </div>

      <video width="720" height="460" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;

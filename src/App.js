import React from 'react';
//import Banner from './Heading/Banner';
import './App.css';
import Trending from './Heading/Trending';
import NetflixOriginal from './Heading/NetflixOriginal';
import Toprated from './Heading/Toprated';
import Horrormovies from './Heading/Horrormovies';
//import Comedymovies from './Heading/Comedymovies';
import Documentries from './Heading/Documentries';
import Romancemovies from './Heading/Romancemovies';
import Actionmovies from './Heading/Actionmovies';



// import requests from './requests';

function App( {title} ) {
  return (
    <div className="App">
      {/* <Banner /> */}
      <NetflixOriginal title ="NETFLIX ORIGINALS" />
      <Trending title ="Trending" /> 
      <Actionmovies title ="Actionmovies" />
      <Romancemovies title ="Romancemovies" /> 
      <Documentries title ="Documentries" />
      <Horrormovies title ="Horrormovies" />
      <Toprated title ="Toprated" />
      {/* <Row title ="Trending Now" /> */}

    </div>
  );
}

export default App;

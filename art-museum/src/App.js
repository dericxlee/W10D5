
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import {Route} from 'react-router-dom';

function App() {

  return (
    <>
    <h1>Hello from App</h1>
    <GalleryNavigation galleries = {harvardArt.records}  />
    <Route path='/galleryview/:galleryId'>
      <GalleryView galleries = {harvardArt.records} />
    </Route>
    </>
  );

}

export default App;

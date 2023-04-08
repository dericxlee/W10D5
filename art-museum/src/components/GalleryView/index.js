import {useParams} from 'react-router-dom';

const  GalleryView= ({galleries}) => {

    const params = useParams();
  
    const gallery = galleries[{gallerynumber:params.galleryId}]
   
 


    return (
        <>
       <h1>testing</h1>
        </>
    )

}

export default GalleryView;
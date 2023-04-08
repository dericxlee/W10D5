import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'


// const gallery = {useParams}
const  GalleryNavigation = ({galleries}) => {
    // console.log(galleries, "console")
    return (
        <>
        <nav>
            <h1>hello</h1>
            <NavLink to="/">Home</NavLink>

            {galleries.map((gallery, idx) => (
                // <h1>${gallery.gallerynumber}</h1>
                // console.log(gallery.gallerynumber)
                // <NavLink  to="galleries/{gallery.gallerynumber}">{gallery.gallerynumber}</NavLink>  
             <li key = {idx} > <NavLink  to={`/galleries/${gallery.galleryid}`}>{gallery.name}</NavLink></li>
            ))}
        </nav>
        </>
    )

}

export default GalleryNavigation;
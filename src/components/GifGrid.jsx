import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGif(category);

    {
        isLoading && ( <h2>Cargando...</h2> )
    }

    return (
        <>
            <h3>{category}</h3>
            
            <div className="card-grid">
                {
                    images.map(( image ) => (
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>

        </>
    )
}

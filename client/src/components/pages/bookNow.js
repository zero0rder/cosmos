import { useParams } from "react-router-dom";

const BookNow = () => {
    let { planetId } = useParams();
    
    return (
        <>
            <div>Book trip to { planetId } Now</div>
        </>
    );
}

export default BookNow;
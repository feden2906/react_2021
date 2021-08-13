export default function Geo({item: {lat,lng}}){
    return(
        <div>
            <ul>
                <li>Latitude - {lat}</li>
                <li>Longitude - {lng}</li>
            </ul>
        </div>
    );
}
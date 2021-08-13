import Geo from "../geo/Geo";

export default function Address(props) {
    let {item:{street, suite, city, zipcode, geo}} = props;

    return(
        <div>
            <ul>
                <li>Street - {street}</li>
                <li>Suit - {suite}</li>
                <li>City - {city}</li>
                <li>ZipCode - {zipcode}</li>
                {
                    geo.map(value => <Geo item={value}/>)
                }
            </ul>
        </div>
    );
}
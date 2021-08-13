import Address from "../address/Address";

export default function User(props) {
    let {items:{id, name, username, email, address}} = props;
    return(
        <div>
            <p>{id} - {name}</p>
            <h4>{username}</h4>
            <p>{email}</p>
            {
                address.map(value => <Address item={value}/>)
            }
        </div>
    );
}
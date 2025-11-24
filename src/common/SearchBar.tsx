import { Icons } from "../assets/icons";

export default function SearchBar (search = '') {
    return (
        <div className={`search-bar ${search}`}>
            <input type="text" />
            <Icons.Search/>
        </div>
    )
}
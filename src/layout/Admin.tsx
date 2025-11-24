import '../assets/sass/admin.scss'

import MenuAdmin from '../components/MenuAdmin';

export default function Admin() {
    return (
        <div className="admin">
            <div>
                <MenuAdmin/>
            </div>
            <div>
                This is admin
            </div>
        </div>
    );
}
import '../assets/sass/main.scss'

import MenuMain from '../components/MenuMain';

export default function Main() {
    return (
        <div className="main">
            <div>
                <MenuMain />
            </div>
            <div>
                This is Main
            </div>
        </div>
    );
}
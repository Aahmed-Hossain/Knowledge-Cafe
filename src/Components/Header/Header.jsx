import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className="font-bold text-4xl flex justify-between items-center  p-4 border-b-2 max-w-6xl mx-auto">
            <h1>Knowledge Cafe With React</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4">MundoPodcast.</h1>
                    <p className="text-sm text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                    </p>
                </div>

                <div className="w-full md:w-1/4">
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className="flex flex-col gap-2">
                        <Link to="/" spy={true} smooth={true} duration={500} className="hover:underline transition-all cursor-pointer">123 Fictitious St, Faketown, Fakeland, 12345, Fictional Country</Link>
                        <Link to="/" spy={true} smooth={true} duration={500} className="hover:underline transition-all cursor-pointer">mundopodcast@example.com</Link>
                        <Link to="/" spy={true} smooth={true} duration={500} className="hover:underline transition-all cursor-pointer">+000 000-000</Link>
                    </nav>
                </div>
            </div>
            <div className="text-center py-4">
                <p>@Copyright Mundo Podcast  | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
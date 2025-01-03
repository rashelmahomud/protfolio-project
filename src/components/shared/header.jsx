import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {

   

    return (
       <div className="bg-[#292F36] text-gray-300 font-semibold ">
         <div className="container mx-auto flex justify-between py-12 px-2 border-b-2">
            <div>
                <span>md.Rashel</span>
            </div>
            <div>
                <ul className="lg:flex gap-5">
                    <li className="text-[#12F7D6]"><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/blog'}>Blog</Link></li>
                    <li className="relative"><Link href={'/search'}><FontAwesomeIcon icon={faMagnifyingGlass}className="w-5 absolute ml-40 mt-1 text-gray-500" /><input type="text" className="rounded-full outline-none"  placeholder=""/></Link></li>
                    <li className="flex justify-center items-center gap-2"><FontAwesomeIcon icon={faInstagram}  className="w-5 text-[#12F7D6]"/><Link href={'/instagram'}>Instagram</Link></li>
                    <li className="flex justify-center items-center gap-2"><FontAwesomeIcon icon={faDiscord} className="w-5 text-[#12F7D6]"/><Link href={'/discord'}>Discord</Link></li>
                    <li className="flex justify-center items-center gap-2"><FontAwesomeIcon icon={faGithub} className="w-5 text-[#12F7D6]"/><Link href={'/github'}>Github</Link></li>
                </ul>
               
            </div>
        </div>
       </div>
    );
};

export default Header;
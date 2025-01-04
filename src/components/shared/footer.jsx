import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 bg-[#1A1E23] p-4 border-t-2 border-gray-700 text-gray-400">
      <div>
        <p>© 2023 rashel. All rights reserved.</p>
      </div>
      <ul className="flex gap-2">
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
      <div className="flex gap-3">
        <FontAwesomeIcon icon={faInstagram}  className="w-5 text-[#12F7D6]"/>
        <FontAwesomeIcon icon={faGithub}  className="w-5 text-[#12F7D6]"/>
        <FontAwesomeIcon icon={faDiscord}  className="w-5 text-[#12F7D6]"/>
      </div>
      <div className="flex gap-2">
        <p>Design</p>
        <span className="text-[#12F7D6]">rashelmahomud</span>
      </div>
    </div>
  );
};

export default Footer;

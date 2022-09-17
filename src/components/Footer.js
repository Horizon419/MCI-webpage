import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer>
//       <div className="container footer__container">
        
//         <article>
//           <h3 className="font-bold uppercase pt-2">MENU</h3>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//         </article>
//         <article>
//           <h3 className="font-bold uppercase pt-2">MENU</h3>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/projects">Projects</Link>
//           <Link to="/contact">Contact</Link>
//         </article>
//         <article>
//           <h3 className="font-bold uppercase pt-2">MENU</h3>
//           <Link to="/projects">Projects</Link>
//           <Link to="/contact">Contact</Link>
//           <div className="col-span-2 pt-8 md:pt-2">
//             <p className="font=bold uppercase">Register With Us Today</p>
//             <form className="">
//               <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" />
//               <button className="p-2 mb-4">Register</button>
//             </form>
//           </div>
//         </article>
//       </div>
//       <div className="footer__copyright">
//         <small>2022 MCI Academy © All rights reserved</small>
//         <div>
//           <FaLinkedin />
//           <FaFacebook />
//           <FaTwitter />
//           <FaInstagram />
//         </div>
//       </div>
//     </footer>
//   );
// };
// export default Footer;





import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading, 
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About us</Heading>
            <Link to="/about" className="s">
              <FooterLink>Vision</FooterLink>
            </Link>
            <Link to="/about" className="s">
              <FooterLink>Mission</FooterLink>
            </Link>
            <Link to="/contact">
              <FooterLink>Contact</FooterLink>
            </Link>
          </Column>
          
          <Column>
            <Heading>Menu</Heading>
            <Link to="/about" className="s">
              <FooterLink>About</FooterLink>
            </Link>
            <Link to="/services" className="s">
              <FooterLink>Services</FooterLink>
            </Link>
            <Link to="/contact">
              <FooterLink>Contact</FooterLink>
            </Link>
            <Link to="/projects">
              <FooterLink>Projects</FooterLink>
            </Link>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

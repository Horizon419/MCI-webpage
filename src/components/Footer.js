import { Link } from "react-router-dom";
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
    <>
      <hr/>
      <Box>
        <hr/>
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
    </>
  );
};
export default Footer;

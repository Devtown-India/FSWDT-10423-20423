const Footer = () => {
  const currentYear = new Date().toISOString();
  return <p>Footer {currentYear}</p>;
};

export default Footer;

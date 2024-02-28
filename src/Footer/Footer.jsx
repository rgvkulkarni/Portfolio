import GithubLogo from "../Hero/socialsLogo/Github.png";
import TwitterLogo from "../Hero/socialsLogo/Twitter.png";
import LinkedinLogo from "../Hero/socialsLogo/Linkedin.png";

function Footer() {
  let socialsData = [
    {
      image: GithubLogo,
      url: "https://github.com/rgvkulkarni",
    },
    {
      image: TwitterLogo,
      url: "https://twitter.com/rgvkulkarni",
    },
    {
      image: LinkedinLogo,
      url: "https://www.linkedin.com/in/rgvkulkarni/",
    },
  ];
  return (
    <footer className="footer">
      <p>&copy; 2024 Raghavendra kulkarni</p>
      <div className="socials-wrapper-footer">
        {socialsData.map((social) => (
          <a key={`${social.url}-Footer`} href={social.url} target="_blank">
            <img src={social.image} alt="" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

import GithubLogo from "./socialsLogo/Github.png";
import TwitterLogo from "./socialsLogo/Twitter.png";
import LinkedinLogo from "./socialsLogo/Linkedin.png";

function Socials() {
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
    <div className="socials-wrapper">
      {socialsData.map((social) => (
        <a key={`${social.url}-Hero`} href={social.url} target="_blank">
          <img src={social.image} alt="" />
        </a>
      ))}
    </div>
  );
}

export default Socials;

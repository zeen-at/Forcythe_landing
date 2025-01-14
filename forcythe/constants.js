import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { LiaPodcastSolid } from "react-icons/lia";
import { TbBrandYoutube } from "react-icons/tb";
import Forcythe from "./public/forcythe1.png";
import { GoStack } from "react-icons/go";
import SpotlightImg1 from "./public/forcythe3.svg";
import SpotlightImg2 from "./public/forcythe4.svg";
import SpotlightImg3 from "./public/forcythe1.png";
import Partner1 from "./public/partner1.jpg";
import Partner2 from "./public/partner2.jpg";
import Partner3 from "./public/partner3.jpg";
import Beaupreneur from "./public/beaupreneur.png";
import Iwaria from "./public/iwaria.png";
import Stacai from "./public/stacai.png"
import Starks from "./public/starks.png"
import ExecPro from "./public/executivepro.png"


export const navLinks = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "Services",
    link: "/",
  },
  {
    title: "Portfolio",
    link: "/",
  },
  {
    title: "Studio",
    link: "/",
  },
  {
    title: "Foundation",
    link: "/",
  },
]
 
export const SocialLinks = [
  {
    title: "fb",
    icon: <GrFacebookOption />,
    link: "/",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    link: "/",
  },
  {
    title: "Twitter",
    icon: <BsTwitterX />,
    link: "/",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    link: "/",
  },
  {
    title: "Youtube",
    icon: <TbBrandYoutube />,
    link: "/",
  },
  {
    title: "Podcast",
    icon: <LiaPodcastSolid />,
    link: "/",
  },
];

export const companyDetails = [
  {
    title: "About",
    link: "/",
  },
  {
    title: "Services",
    link: "/",
  },
  {
    title: "Portfolio",
    link: "/",
  },
  {
    title: "Studio",
    link: "/",
  },
  {
    title: "Foundation",
    link: "/",
  },
  {
    title: "Careers",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
];

export const CompanyBlog = [
  {
    link: "/",
    blog: "Will AI take over Art?",
    img: Forcythe,
  },
  {
    link: "/",
    blog: "Cryptocurrency vs Tokens",
    img: Forcythe,
  },
  {
    link: "/",
    blog: "Cryptocurrency and cryptoasset",
    img: Forcythe,
  },
];

export const product = [
  {
    title: "Experience",
    content:
      "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
    icon: <GoStack />,
    link: "/",
  },
  {
    title: "Quick Support",
    content:
      "We are your reliable partner,always there when you need us, ensuring smooth operations at every stage of your growth.",
    icon: <GoStack />,
    link: "/",
  },
  {
    title: "Cost Savings",
    content:
      "Maximising impact, minimising cost efficiency is key. We provide cost effective solutions without comromising on quality.",
    icon: <GoStack />,
    link: "/",
  },
];

export const solutions = [
  {
    value: "50+",
    solution: "Clients",
  },
  {
    value: "120+",
    solution: "Projects",
  },
  {
    value: "10+",
    solution: "Team Leads",
  },
  {
    value: "10+",
    solution: "Glorious Years",
  },
];

export const Spotlight = [
  {
    img: SpotlightImg1,
    button: "Idea",
    title: "Your vision is unique",
    content:
      "Nurture your Idea into a Blueprint for success with our strategic insights and industry expertise. Your vision is unique, let us shape it",
  },
  {
    img: SpotlightImg2,
    button: "Design",
    title: "Crafting the blueprint for success",
    content:
      "Design more than aesthetics, it's about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
  },
  {
    img: SpotlightImg1,
    button: "Develop",
    title: "Turning blueprints into reality.",
    content:
      "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
  },
  {
    img: SpotlightImg3,
    button: "Launch",
    title: "Your Launchpad to the market",
    content:
      "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition",
  },
];

export const PartnerCompanies = [
  {
    company: "Starks",
    review:
      "Partnering with Forcythe was like discovering a hidden gem. Their genuine interest in our success was palpable and the continuous support post-launch has been a testament to their commitment. They've become more than a service provider; they've become an ally",
    reviewer: "John, Management",
    img: Partner3,
    position: "Starks Associate",
  },
  {
    company: "ExecutivePros",
    review:
      "The team understood the assignment and delivered very well. One of the things that stood them out is how they took our concept and turned it into visually appealing designs that caught the eyes of our clients and increased web engagement. Kudos!",
    reviewer: "Testimony, Co-Founder",
    img: Partner2,
    position: "ExecutivePros",
  },
  {
    company: "Stac.ai",
    review: "Forcythe is seriously amazing when it comes to coming up with good ideas. They took our rough idea and turned it into something amazing online. Their team's commitment to our vision was evident every step of the way",
    reviewer: "Edwin, Former CTO",
    img: Partner3,
    position: "Stac AI",
  },
  {
    company: "Iwaria",
    review:
      "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but enriched our brand's story, captivating our audience like never before.",
    reviewer: "Iwaria, Founder",
    img: Partner1,
    position: "Iwaria",
  },
  {
    company: "Beaupreneur",
    review:
      "I'm beyond impressed with the dedication Forcythe showed. They didn't just deliver, they educated us involving us in the creative process. The result?, a website that truly feels like ours and speaks directly to our customers' hearts",
    reviewer: "Christiana, Founder",
    img: Partner2,
    position: "Beaupreneur"
  },
];


export const PartnerImages = [Stacai, Beaupreneur, Iwaria, ExecPro, Starks]
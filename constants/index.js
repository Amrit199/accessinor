import user from "../public/usertesting.jpg";
import inspection from "../public/inspection.png";
import audit from "../public/auditing.png";

export const navbar = {
    logo: "AccessiNor",
    menus: [
        {
            name: "Home",
        },
        {
            name: "Product",
        },
        {
            name: "Services",
        },
        {
            name: "Pricing",
        },
        {
            name: "Blogs",
        },
    ],
    button: "Login"
}

export const serciser = [
    {
      name: "User Testing",
      desc: "Website is not just compliant but truly user-friendly by involving actual users with disabilities",
      descfull: "Dive deep into real user experiences. We provide thorough user testing to ensure your website is not just compliant but truly user-friendly. By involving actual users with disabilities, we ensure that your website's accessibility extends beyond just ticking checkboxes.",
      img: user,
      alt: "User testing with assistive technology",
    },
    {
      name: "Inspection",
      desc: "Our tools scan and inspect your website, pinpointing areas that need accessibility improvements",
      descfull: "Harness the power of advanced technology. Our tools scan and inspect your website, pinpointing areas that need accessibility improvements. With our scanning service, nothing slips through the cracks.",
      img: inspection,
      alt: "Website and code inspection",
    },
    {
      name: "Auditing",
      desc: "With our in-depth auditing service, we provide actionable feedback and counsel",
      descfull: "Elevate your web accessibility game. With our in-depth auditing service, we provide actionable feedback and counsel you on the best practices, ensuring that your site remains accessible for everyone, everywhere.",
      img: audit,
      alt: "Team analyzing website data",
    },
  ];
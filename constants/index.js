import user from "../public/usertesting.jpg";
import inspection from "../public/inspection.png";
import audit from "../public/auditing.png";
import webacc from '../public/webaccesi.png'
import whatacces from '../public/whaccessibility.jpg'

export const navbar = {
  logo: "AccessiNor",
  menus: [
    {
      name: "Home",
      link: "/product",
    },
    {
      name: "Product",
      link: "/product",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
  ],
  button: "Login",
};

export const serciser = [
  {
    name: "User Testing",
    desc: "Website is not just compliant but truly user-friendly by involving actual users with disabilities",
    descfull:
      "Dive deep into real user experiences. We provide thorough user testing to ensure your website is not just compliant but truly user-friendly. By involving actual users with disabilities, we ensure that your website's accessibility extends beyond just ticking checkboxes.",
    img: user,
    alt: "User testing with assistive technology",
  },
  {
    name: "Inspection",
    desc: "Our tools scan and inspect your website, pinpointing areas that need accessibility improvements",
    descfull:
      "Harness the power of advanced technology. Our tools scan and inspect your website, pinpointing areas that need accessibility improvements. With our scanning service, nothing slips through the cracks.",
    img: inspection,
    alt: "Website and code inspection",
  },
  {
    name: "Auditing",
    desc: "With our in-depth auditing service, we provide actionable feedback and counsel",
    descfull:
      "Elevate your web accessibility game. With our in-depth auditing service, we provide actionable feedback and counsel you on the best practices, ensuring that your site remains accessible for everyone, everywhere.",
    img: audit,
    alt: "Team analyzing website data",
  },
];

export const posts = [
  {
    id: 1,
    slug: "web-accessibility-strategy",
    name: "Web Accessibility Strategy",
    title: "How to Make a Web Accessibility Strategy",
    tags: ["Web Accessibility", "6 Min read"],
    img: webacc,
    alt: "Diagram",
    contentTitle: "The Short-Term Approach to Accessibility",
    contentdesc:
      "Web accessibility isn’t something that you can fix once on your site and then forget about. To make sure your website is compliant and stays compliant, you will have to incorporate new policies into your overall website strategy. However, not all companies and organizations have the resources to initiate large web accessibility projects. These initiatives can be left until a website redesign. Right now, you can focus on fixing what you can. A website that is 50% accessible is better than a website that isn’t accessible at all!",
    contentdesc1:
      "With the short-term approach to web accessibility, you will follow these three basic steps: Scan website to find issues: Start by finding out what issues are currently affecting your website so you have an idea of where problems lay. Prioritize issues: If you can’t fix all of the errors right now, then focus on the high-priority issues. There are a few ways that accessibility issues can be prioritized. One is to fix issues with key processes on your website, such as checkout or registration. Another option is to fix issues on important pages, such as your homepage or most-accessed content. Yet another option is to see what issues can be most easily fixed and return the greatest benefits. For example, you may decide to make transcripts for all of your audio content because it improves accessibility for the hearing impaired as well as improving SEO. Fix issues: Make sure the staff members in charge of fixing any accessibility issues have the right training and resources to do the job. Remember that web accessibility requires clear policies and a long-term strategy. Even if you can’t implement this strategy now, it is something that you should be thinking about.",
  },
  {
    id: 2,
    slug: "what-is-web-accessibility",
    name: "What is Web Accessibility",
    title: "What is Web Accessibility and Why It Matters for Your Website",
    tags: ["Web Accessibility", "8 Min read"],
    img: whatacces,
    alt: "Graphical user interface, application, icon",
    contentTitle: "What is Web Accessibility?",
    contentdesc:
      "If you don’t have a disability, it is hard to imagine using the web. How do you read blogs if you are visually impaired? How do you browse the web if you are physically impaired and can’t click a mouse? How do you watch a video online if you are hearing impaired?",
    contentdesc1:
      "People with disabilities utilize a wide range of tools to help them access the web, such as screen readers, Braille keyboards, and voice commands. When a website is accessible, then it can be used as effectively by a person with a disability as a person without a disability. As Jim Thatcher points out here, this doesn’t mean that it will take the person with a disability the same amount of time to complete a task, but the process must be comparable. Don’t let the term “accessible” confuse you. Web accessibility is not just about allowing people with disabilities access to your website in the same way a ramp allows wheelchair access to a building. Web accessibility means that people with disabilities can use your website in a meaningful way. For example, part of web accessibility involves putting ALT text on images so they can be read by people with visual impairments using screen readers. If your website is accessible, then those ALT texts will actually make sense to people who can’t see the image.",
  },
];

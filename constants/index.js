import user from "../public/usertesting.jpg";
import inspection from "../public/inspection.png";
import audit from "../public/auditing.png";
import webacc from "../public/webaccesi.png";
import whatacces from "../public/whaccessibility.jpg";

export const navbar = {
  logo: "AccessiNor",
  menus: [
    {
      name: "Produkter",
      link: "/products",
    },
    {
      name: "Tjenester",
      link: "/services",
    },
    {
      name: "Prissetting",
      link: "/pricing",
    },
    {
      name: "Blogger",
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
    intro:
      "Whether you want to improve your website accessibility because of legal reasons, to expand reach, or simply because it is the moral thing to do, it is imperative that you have a plan for how you will proceed. It is generally best to think about accessibility when you first build your website or during a major redesign. However, it is possible to get an existing website up to compliance. Here we will talk about the two approaches you can take for your website accessibility strategy.",
    contentTitle: "The Short-Term Approach to Accessibility",
    contentdesc:
      "Web accessibility isn’t something that you can fix once on your site and then forget about. To make sure your website is compliant and stays compliant, you will have to incorporate new policies into your overall website strategy. However, not all companies and organizations have the resources to initiate large web accessibility projects. These initiatives can be left until a website redesign. Right now, you can focus on fixing what you can. A website that is 50% accessible is better than a website that isn’t accessible at all!",
    contentTitle1: "The Long-Term Approach to Web Accessibility",
    contentdesc1:
      "With this approach, the goal is to build a website which is accessible now and will remain accessible in the future. The strategy can be broken down into three parts with multiple steps under each: Initiate, Plan and Implement. Learn the basics about accessibility. Hold a meeting to raise awareness about accessibility and gather support. Make your case about how this will benefit the company or organization. You want all the major stakeholders to be on board! Use Monsido to scan your website. Note what the current issues are and where your strengths are. Further your knowledge. Once you know what accessibility issues your website currently has, you can seek out training and other forms of knowledge related specifically to those issues. Find information which is appropriate for team member’s role.",
  },
  {
    id: 2,
    slug: "what-is-web-accessibility",
    name: "What is Web Accessibility",
    title: "What is Web Accessibility and Why It Matters for Your Website",
    tags: ["Web Accessibility", "8 Min read"],
    img: whatacces,
    alt: "Graphical user interface, application, icon",
    intro:
      "When you go to the doctor’s office or a government building, you will find wheelchair ramps at the entrance and Braille on the elevators. When you turn on the TV, you will find an option for closed captioning. These are all steps taken – and often required by law – to ensure people with disabilities have equal access and equal opportunity. Yet, when it comes to the web, accessibility is usually an afterthought or not even considered at all. There are millions of people in the world with disabilities and, as a website owner, it is your responsibility to make sure that everyone has access to your website regardless of disability. This is known as web accessibility.",
    contentTitle: "What is Web Accessibility?",
    contentdesc:
      "If you don’t have a disability, it is hard to imagine using the web. How do you read blogs if you are visually impaired? How do you browse the web if you are physically impaired and can’t click a mouse? How do you watch a video online if you are hearing impaired? People with disabilities utilize a wide range of tools to help them access the web, such as screen readers, Braille keyboards, and voice commands. When a website is accessible, then it can be used as effectively by a person with a disability as a person without a disability. As Jim Thatcher points out here, this doesn’t mean that it will take the person with a disability the same amount of time to complete a task, but the process must be comparable. Don’t let the term “accessible” confuse you. Web accessibility is not just about allowing people with disabilities access to your website in the same way a ramp allows wheelchair access to a building. Web accessibility means that people with disabilities can use your website in a meaningful way. For example, part of web accessibility involves putting ALT text on images so they can be read by people with visual impairments using screen readers. If your website is accessible, then those ALT texts will actually make sense to people who can’t see the image.",
    contentTitle1: "How Do People with Disabilities Use the Web?",
    contentdesc1:
      "An important part of making your website accessible is understanding how people with disabilities use the web. At the W3 Web Accessibility Initiative, you can find an overview of How People with Disabilities Use the Web including real stories from people, examples of tools they use, and some of the limitations they face with accessibility. Computer World also has a good article with examples of devices people use to access the web. Here is an overview: Visually Impaired Web Users: According to WHO, 285 million people in the world are visually impaired. Of these, 39 million are blind and 246 million have low vision. Visually impaired people can access the web with tools like screen readers and using keyboard-only navigation. People with moderate visual impairment (such as is common in elderly people) may rely on screen enlargement and require websites with good color contrast and well-labeled graphics. Hearing Impaired Web Users: Hearing impairment isn’t an issue for many websites, but it can be if your website contains video or audio content. People with hearing disabilities rely on good volume controls and deaf people rely on transcripts and Closed Captioning for videos and audio content.",
  },
];

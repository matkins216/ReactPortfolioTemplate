import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Matt",
  lastName: "Atkins",
  initials: "ma", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🥊",
      text: "fueled by muay thai",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },
    {
      emoji: "💼",
      text: "Freelance Software Engineer/Web Developer",
    },
    {
      emoji: "📧",
      text: "matt.atkins216@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/matkins216",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/matthewatkins216/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Matt. I am an account manager at Covene, helping clients with their IT solution needs. I graduated the fullstack software engineer program at General Assembly. I also have my BA in Marketing from Carthage College. My end-user experience in SaaS allows me to have a unique perspective for software projects.",
  skills: {
    proficientWith: [
      "Javascript",
      "React",
      "TailwindCSS",
      "Git",
      "Github",
      "MaterialUI",
      "HTML5",
      "CSS3",
      "Figma",
      "LucidChart",
      "SemanticUI",
      "SQL",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Django",
    ],
    exposedTo: ["AWS", "Azure", "PostgresSQL", "Next.js", "Typescript"],
  },
  hobbies: [
    {
      label: "Muay Thai",
      emoji: "🥊",
    },
    {
      label: "Golf",
      emoji: "⛳",
    },
    {
      label: "DJing/Producing",
      emoji: "🎛️",
    },
    {
      label: "Cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Recipe Book",
      live: "https://odd-plum-clam-vest.cyclic.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/matkins216/recipe-book-REACT-FullStack", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock3,
    },
    {
      title: "Salon Keeper",
      live: "https://grumpy-puce-narwhal.cyclic.app/",
      source: "https://github.com/matkins216/salonkeeper",
      image: mock2,
    },
    {
      title: "Buck's BlackJack",
      live: "https://matkins216.github.io/BlackjackProject/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/matkins216/BlackjackProject", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Redux Remodeling Website",
      live: "https://reduxremodeling.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/matkins216/", // this should be a link to the **repository** of the project, where the code is hosted.
      image: '',
    },
  ],
};
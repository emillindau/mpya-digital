#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const boxenOptions = {
  padding: 1,
  width: 74,
  title: "Mpya Digital",
  titleAlignment: "center",
  borderStyle: "round",
  borderColor: "#ffc107",
};

const intro1 = chalk.bold(
  "Hello there! We're Mpya Digital. Our mantra is Work is Joy, and it is important for us that all our employees find their work enjoyable!\n\n"
);
const intro2 = chalk.underline("Find us on the internet:\n\n");
const intro = intro1 + intro2;

const links = [
  {
    name: chalk.hex("#fff").bgHex("#E34586")(" Website  "),
    url: "   https://mpyadigital.com",
  },
  {
    name: chalk.hex("#fff").bgHex("#E34586")(" Linkedin "),
    url: "   https://www.linkedin.com/company/mpya-digital",
  },
  {
    name: chalk.hex("#fff").bgHex("#E34586")(" Instagram"),
    url: "   https://www.instagram.com/mpyadigital",
  },
  {
    name: chalk.hex("#fff").bgHex("#E34586")(" Medium   "),
    url: "   https://medium.com/@mpyadigital",
  },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

const joinUs1 = chalk.bold(
  "\n\nWe are always on the lookout for new amazing and curious software developers\n\n"
);
const joinUs2 = chalk.underline("Why don't you joyn us?");
const joinUs = joinUs1 + joinUs2 + " :)\n\n";

const joinLinks = [
  {
    name: chalk.hex("#fff").bgHex("#00B2AA")("Email"),
    url: "       emil.lindau@mpyadigital.com",
  },
  {
    name: chalk.hex("#fff").bgHex("#00B2AA")("Phone"),
    url: "       +46 (0)10-330 20 13",
  },
];

const joinList = joinLinks.map(({ name, url }) => `${name} ${url}`).join("\n");

console.log(boxen(intro + linkList + joinUs + joinList, boxenOptions));

// Imports
import sponsor50 from "@@/public/img/sponsor/sponsor50.png";
import sponsor100 from "@@/public/img/sponsor/sponsor100.png";
import sponsor300 from "@@/public/img/sponsor/sponsor300.png";
import sponsor500 from "@@/public/img/sponsor/sponsor500.png";
import sponsor700 from "@@/public/img/sponsor/sponsor700.png";
import sponsor1000 from "@@/public/img/sponsor/sponsor1000.png";

// Varibale
export const goalReached = 500;
export const sponsorGoalAmount = 5000;
export const barPercentage = 'w-[10%]'
// export const barPercentage = (goalReached / sponsorGoalAmount) * 100; // Not working for some reason

export const sponsorAmount = [
  {
    amount: 50,
    upiLink:
      "upi://pay?pa=mobile.bigbeastishank@okicici&pn=BBI%20Sponsor%2050&am=50&tn=I%20like%20your%20projects.%20Here%20is%2050%20for%20your%20work.&cu=INR",
    imageUrl: sponsor50,
  },
  {
    amount: 100,
    upiLink:
      "upi://pay?pa=mobile.bigbeastishank@okicici&pn=BBI%20Sponsor%20100&am=100&tn=I%20like%20your%20projects.%20Here%20is%20100%20for%20your%20work.&cu=INR",
    imageUrl: sponsor100,
  },
  {
    amount: 300,
    upiLink:
      "upi://pay?pa=mobile.bigbeastishank@okicici&pn=BBI%20Sponsor%20300&am=300&tn=I%20like%20your%20projects.%20Here%20is%20300%20for%20your%20work.&cu=INR",
    imageUrl: sponsor300,
  },
  {
    amount: 500,
    upiLink:
      "upi://pay?pa=mobile.bigbeastishank@okicici&pn=BBI%20Sponsor%20500&am=500&tn=I%20like%20your%20projects.%20Here%20is%20500%20for%20your%20work.&cu=INR",
    imageUrl: sponsor500,
  },
  {
    amount: 700,
    upiLink:
      "upi://pay?pa=mobile.bigbeastishank@okicici&pn=BBI%20Sponsor%20700&am=700&tn=I%20like%20your%20projects.%20Here%20is%20700%20for%20your%20work.&cu=INR",
    imageUrl: sponsor700,
  },
  {
    amount: 1000,
    upiLink:
      "upi://pay?pa=mobile.bigbeastishank@okicici&pn=BBI%20Sponsor%201000&am=1000&tn=I%20like%20your%20projects.%20Here%20is%201000%20for%20your%20work.&cu=INR",
    imageUrl: sponsor1000,
  },
];

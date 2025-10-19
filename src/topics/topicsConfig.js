// src/topics/topicsConfig.js
export const topics = [
  {
    path: "portfolio",
    name: "Portfolio Website",
    component: () => import("./project1_portfolioWeb/PortfolioWeb.jsx")
  },
  {
    path: "intro",
    name: "Intro Learn",
    component: () => import("./topic1/Intro_Learn.jsx")
  },
  {
    path: "components&props",
    name: "Components And Props",
    component: () => import("./topic2/componentsAndProps.jsx")
  }
];
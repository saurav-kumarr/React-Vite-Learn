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
  },
  {
    path: "props",
    name: "Props",
    component: () => import("./topic3/Parent.jsx")
  },
  {
    path: "hooks",
    name: "React Hooks",
    component: () => import("./topic4/ReactHooks.jsx")
  },
  {
    path: "array&objects",
    name: "Passing Array and Objects to State",
    component: () => import("./topic4/Array&ObjectsState.jsx")
  }

];
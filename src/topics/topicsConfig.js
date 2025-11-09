// src/topics/topicsConfig.js
export const topics = [
  {
    path: "portfolio",
    name: "Project: Portfolio Website",
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
  },
  {
    path: "formInput&useState",
    name: "Project: Managing Form Inputs with UseState",
    component: () => import("./project2_useState/FormInput_useState.jsx")
  },
  {
    path: "colorPicker",
    name: "Project: Color Picker",
    component: () => import("./project3_colorPicker/ColorPicker.jsx")
  },
  {
    path: "useEffect",
    name: "UseEffect Hook",
    component: () => import("./topic5/UseEffect.jsx")
  },
  {
    path: "digitalClock",
    name: "Project: Digital Clock",
    component: () => import("./project4_digitalClock/DigitalClock.jsx")
  },
  {
    path: "useRef",
    name: "UseRef Hook",
    component: () => import("./topic6/UseRef.jsx")
  },
   {
    path: "propDrilling",
    name: "Prop Drilling",
    component: () => import("./topic7/PropDrilling.jsx")
  },
  {
    path: "customHooks",
    name: "Custom Hooks",
    component: () => import("./topic8/CustomHooks.jsx")
  },
   {
    path: "apiHub",
    name: "API's",
    component: () => import("./topic9/APIs.jsx")
  },
  {
    path: "reactForm",
    name: "Creation of Forms using React",
    component: () => import("./topic10/ReactForm.jsx")
  },
  {
    path: "routing",
    name: "React Routing",
    component: () => import("./topic11/RoutingApp.jsx")
  }

];
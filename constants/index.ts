export const navLinks = [
  {
    id: "rent",
    title: "Rent",
  },
  {
    id: "share",
    title: "Share",
  },
  {
    id: "ride",
    title: "Ride",
  },
  {
    id: "service",
    title: "Service",
  },
];

export const partnersData = [
  {
    id: "hertz",
    src: `/symbol-defs.svg#icon-hertz`,
  },
  {
    id: "europcar",
    src: `/symbol-defs.svg#icon-europcar`,
  },
  {
    id: "national",
    src: `/symbol-defs.svg#icon-national`,
  },
  {
    id: "thrifly",
    src: `/symbol-defs.svg#icon-thrifty`,
  },
  {
    id: "sixr",
    src: `/symbol-defs.svg#icon-general-rent`,
  },
];

partnersData.push(...partnersData.map(partner => ({ ...partner, id: partner.id + "_duplicate" })));

export const rentSteps = [
  {
    id: 'make',
    title: 'Select Vehicle Make',
    subtitle: 'Type the make of the vehicle and select from options',
    iconUrl: '/symbol-defs.svg#icon-automobile',
  },
  {
    id: 'model',
    title: 'Select Vehicle Model',
    subtitle: 'Type the model of the vehicle and select from options',
    iconUrl: '/symbol-defs.svg#icon-gear',

  },
  {
    id: 'additional',
    title: 'Customize Fuel and Year',
    subtitle: 'Customize fuel type and year using filters',
    iconUrl: '/symbol-defs.svg#icon-fuel',
  },
];

export const bestExperiencesData = [
  {
    id: "deal-budget",
    title: "Deals for Every Budget",
    subtitle: 'Discover incredible prices on a variety of cars',
    iconUrl: '/symbol-defs.svg#icon-price-tags',
  },
  {
    id: "car-catalogue",
    title: "Extensive Car Catalog",
    subtitle: 'Explore our wide range of cars tailored to your needs',
    iconUrl: '/symbol-defs.svg#icon-ferrari',
  },
  {
    id: "customer-support",
    title: "24/7 Customer Support",
    subtitle: 'Get assistance anytime, anywhere',
    iconUrl: '/symbol-defs.svg#icon-support',
  },
];

export const advantagesInfo = [
  {
    id: "price",
    iconUrl: "/symbol-defs.svg#icon-price-tags",
    title: "Competitive pricing",
  },
    {
    id: "rent",
    iconUrl: "/symbol-defs.svg#icon-budget-calculator",
    title: "Easy rent on your budget",
  },
      {
    id: "payment",
    iconUrl: "/symbol-defs.svg#icon-payment",
    title: "Most flexible payment plans",
  },
        {
    id: "warranties",
    iconUrl: "/symbol-defs.svg#icon-help",
    title: "Extended warranties",
  },
          {
    id: "assistance",
    iconUrl: "/symbol-defs.svg#icon-support",
    title: "Roadside assistance",
  },
            {
    id: "mechanic",
    iconUrl: "/symbol-defs.svg#icon-mechanic-tool",
    title: "Choise of mechanic",
  }
];

export const footerLinks = [
  {
    title: "Our Products",
    links: [
      { title: "Cars", url: "/#footer" },
      { title: "Hotels", url: "/#footer" },
      { title: "Career", url: "/#footer" },
      { title: "Packages", url: "/#footer" },
    ],
  },
  {
    title: "About",
    links: [
      { title: "Our Story", url: "/#footer" },
      { title: "Advertise", url: "/#footer" },
      { title: "Press Center", url: "/#footer" },
      { title: "Investor Relations", url: "/#footer" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Guides", url: "/#footer" },
      { title: "Download", url: "/#footer" },
      { title: "Help Center", url: "/#footer" },
      { title: "Partner Network", url: "/#footer" },
    ],
  },
  {
    title: "Extras",
    links: [
      { title: "Rental Deal", url: "/#footer" },
      { title: "Repair Shop", url: "/#footer" },
      { title: "View Booking", url: "/#footer" },
      { title: "Hire Companies", url: "/#footer" },
    ],
  },
];

export const starIcons = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  link: "/symbol-defs.svg#icon-star",
}));

export const footerSocials = [
  {
    id: "facebook",
    url: 'https://facebook.com',
    iconUrl: '/symbol-defs.svg#icon-facebook',
  },
  {
    id: "twitter",
    url: 'https://twitter.com',
    iconUrl: '/symbol-defs.svg#icon-twitter',
  },
  {
    id: "google",
    url: 'https://google.com',
    iconUrl: '/symbol-defs.svg#icon-google-plus',
  },
  {
    id: "youtube",
    url: 'https://youtube.com',
    iconUrl: '/symbol-defs.svg#icon-youtube',
  },
];

export const credits = {
  mainId: "cretits",
  copyright: "2024 Urban Ride. All Rights Reserved",
  info: [
    {
      id: "code",
      title: "Coded by:",
      name: "Yuriy Tsipak",
      link: "https://github.com/ytsipak",
      styles: "text-xl underline underline-offset-2 font-semibold",
    },
    {
      id: "design",
      title: "Design:",
      name: "Rafsan Sam",
      link: "https://dribbble.com/Rafsan7n7",
      styles: "text-xl underline underline-offset-2 font-semibold",
    },
  ],
};

export const carManufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];


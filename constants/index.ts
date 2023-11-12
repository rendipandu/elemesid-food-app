import {
    cupcake,
    pizza,
    kebab,
    salmon,
    doughnut,
    pizzaPaperoni,
    pizzaMeat,
    donerKebab,
    salmonRoll,
    cupcakeChoco,
    doughnutMilk,
    doughnutUnicorn,
    kathiKebab,
} from "../public/assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "promotions",
        title: "Promotions",
    },
    {
        id: "blogs",
        title: "Blogs",
    },
    {
        id: "contact-us",
        title: "Contact Us",
    },
];

export const category = [
    {
        label: "Cupcake",
        icon: cupcake,
        amount: 22,
        route: "/cupcake",
    },
    {
        label: "Pizza",
        icon: pizza,
        amount: 25,
        route: "/pizza",
    },
    {
        label: "Kebab",
        icon: kebab,
        amount: 12,
        route: "/kebab",
    },
    {
        label: "Salmon",
        icon: salmon,
        amount: 22,
        route: "/salmon",
    },
    {
        label: "Doughnut",
        icon: doughnut,
        amount: 11,
        route: "/doughnut",
    },
];

export const trending = [
    {
        imageURL: pizzaPaperoni,
        label: "Pizza Paperoni",
        category: "Pizza",
        rating: 4,
    },
    {
        imageURL: pizzaMeat,
        label: "Pizza Meat",
        category: "Pizza",
        rating: 3,
    },
    {
        imageURL: donerKebab,
        label: "Doner Kebab",
        category: "Kebab",
        rating: 5,
    },
    {
        imageURL: salmonRoll,
        label: "Salmon Roll",
        category: "Salmon",
        rating: 4,
    },
    {
        imageURL: cupcakeChoco,
        label: "Cupcake Choco",
        category: "Cupcake",
        rating: 4,
    },
    {
        imageURL: doughnutMilk,
        label: "Doughnut Milk",
        category: "Doughnut",
        rating: 5,
    },
    {
        imageURL: doughnutUnicorn,
        label: "Doughnut Unicorn",
        category: "Doughnut",
        rating: 4,
    },
    {
        imageURL: kathiKebab,
        label: "Kathi Kebab",
        category: "Kebab",
        rating: 4,
    },
];

export const aboutUsNav = [
    {
        id: "about-us",
        title: "About Us",
    },
    {
        id: "faq",
        title: "FAQ",
    },
    {
        id: "report-problem",
        title: "Report Problem",
    },
]
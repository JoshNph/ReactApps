const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian: true
    },
    {
        name: "Spaghetti & Meatballs",
        vegetarian: false
    },
    {
        name: "Unripe Mango",
        vegetarian: true
    }
];

const vegetarianDishes = dishes.filter(dish => dish.vegetarian && dish.name.toLowerCase().startsWith("s"));

console.log(vegetarianDishes);
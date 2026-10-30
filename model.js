const restaurantModel = {
  restaurants: [
    { name: "Milano's", cuisine: "Italian", rating: 4.5, priceRange: "$$" },
    { name: "Sakura Sushi", cuisine: "Japanese", rating: 4.2, priceRange: "$$" },
    { name: "The Brass Elephant", cuisine: "American", rating: 4.8, priceRange: "$$$" },
    { name: "Pho Corner", cuisine: "Vietnamese", rating: 4.3, priceRange: "$" },
    { name: "Tandoor Palace", cuisine: "Indian", rating: 4.1, priceRange: "$" }
  ],

  getAllRestaurants: function () {
    return this.restaurants;
  },

  getTopRatedRestaurants: function () {
    return this.restaurants.filter(function (restaurant) {
      return restaurant.rating >= 4.5;
    });
  },

  getInexpensiveRestaurants: function () {
    const inexpensiveRestaurants = [];

    for (let i = 0; i < this.restaurants.length; i++) {
      if (this.restaurants[i].priceRange === "$") {
        inexpensiveRestaurants.push(this.restaurants[i]);
      }
    }

    return inexpensiveRestaurants;
  },

  getRestaurantsByCuisine: function (cuisine) {
    const matchingRestaurants = [];

    for (let i = 0; i < this.restaurants.length; i++) {
      if (this.restaurants[i].cuisine === cuisine) {
        matchingRestaurants.push(this.restaurants[i]);
      }
    }

    return matchingRestaurants;
  }
};

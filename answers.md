# MVC Homework Answers

## Part 1: Why priceRange belongs in the Model

priceRange belongs in the Model because it's part of the restaurant's information, just like its name and rating. The Model also uses it to determine which restaurants are considered inexpensive.

## 1. What problem does MVC help solve?

MVC helps keep the code organized by giving each part its own responsibility. This makes it easier to figure out where something is happening and make changes without affecting everything else.

## 2. Why should the Controller not contain the rule restaurant.rating >= 4.5?

The Model should be responsible for deciding what counts as top rated. The Controller only needs to call getTopRatedRestaurants() and pass the results to the View. That way, if the rating requirement changes, it only needs to be updated in the Model.

## 3. If cards were replaced with a table, which component would change most?

The View would change the most because it's responsible for how the restaurants are displayed. The restaurant data wouldn't need to change, and the Controller could still pass the results to displayRestaurants().

## 4. Does MVC require three separate JavaScript files?

No, MVC doesn't require three separate files. Everything could technically be in one file as long as the Model, View, and Controller each have their own responsibilities.

## 5. If data came from a REST API, which component should manage it?

The Model should handle getting the data from the REST API since it's responsible for managing restaurant information. The Controller would then request that data from the Model and pass it to the View.

## MVC Detective

The issue is that the Controller is doing the filtering itself when that should be handled by the Model. The Controller should just call getTopRatedRestaurants() and pass whatever it returns to the View.

Model (already provided in model.js):

```javascript
getTopRatedRestaurants: function () {
  return this.restaurants.filter(function (restaurant) {
    return restaurant.rating >= 4.5;
  });
}
```

Controller:

```javascript
showTopRatedButton.addEventListener("click", function () {
  const topRated = restaurantModel.getTopRatedRestaurants();
  restaurantView.displayRestaurants(topRated);
});
```

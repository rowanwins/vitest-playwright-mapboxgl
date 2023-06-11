# Vitest + Playwright + MapboxGL
**Note** Very much a Work In Progress

This little sample shows using Vitest & Playwright to test a MapboxGL map.
It's similar conceptually to what it shown in the [MapboxGL repo with selenium](https://github.com/mapbox/mapbox-gl-js/tree/main/test/browser).

# The critical things
- In `/src/App.vue` we assign our Map instance to a global in our document to make it easily accessible with Playwright.
- Within `/test/maps.test.ts` we can start interacting with the Map instance using `page.evaluate` 

Cafe Seeker
===


Synopsis
---
Cafe Seeker locates coffee shops and bakeries that are within a 1000 meter radius of your location using your browser's built-in geolocation function.

The goal of this project is to build a dynamic **[Google Maps](https://developers.google.com/maps/)** application that demonstrates effecive use of a web service API and the MVVM JavaScript framework **[knockout](https://knockoutjs.com/)**. The ability to understand and implement various API and adapt to specific frameworks and libraries is a crucial skill, especially when working with different development teams.


Features
---
+ Full-screen Google Map
+ Automatic filtering of places
+ Alphabetical listing of places for easy manual search
+ Detailed information sourced from Google Place Search API
+ Memo taking functionality
+ Error indicator
+ Clean and responsive user interface
+ Full **[documentation](https://noelnoche.github.io/udacity-fend-neighborhood-map/docs/jsdoc/)**


Demo
---
https://www.youtube.com/watch?v=N4lCrNZEze0&feature=youtu.be


Usage
---
1. Click on a place from the list or the map.
2. Click the star button below the filter box to see places with the highest rating.
3. Click the window expansion icon to view place details.
4. Click the pencil icon to make a personal memo about the place.
5. Click the check mark to save the memo in the browser's local storage. Places with a memo will have a small dagger mark next to them in the list.
6. To delete a memo, click on the pencil icon, delete the text and click the check mark icon.
7. Click on the review snippet to jump to the Google source page.


Notes / Issues
---
+ For demonstration purposes and to ensure results, the demo uses San Francisco, CA for the location, even when the browser asks to share your location.
+ Developers need to provide their own API key and set usage restrictions to prevent quota abuse.
+ Bootstrap photo carousel may show photos stacked or only a blurry photo. Try reloading the page in such cases.


License
---
Code provided under an **[MIT license](https://github.com/noelnoche/udacity-fend-neighborhood-map/blob/gh-pages/LICENSE.md)**
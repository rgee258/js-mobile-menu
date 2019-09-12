# Dropdown Menu

This repository contains a mobile navigation menu template that can be reused as needed.

Check it out [here](https://rgee258.github.io/js-mobile-menu/).

This project is done following The Odin Project, which can
be found [here](https://www.theodinproject.com/courses/javascript/lessons/dynamic-user-interface-interactions).

## Important

The script used for controlling the mobile menu is available as a module, and as such is blocked in Chrome normally due to its CORS policy. As a result this repository is bundled using webpack for module usage. Bear this in mind if you are interested in using the provided mobile menu.

## Usage

The mobile menu functions where if a user clicks on the menu icon, the contents of the menu will slide out and appear. Clicking on the icon again will tuck away the menu contents.

Reusage of the menu requires the following components:

* The template menu found in index.html
* The denoted mobile styling in css/style.css
* The mobileMenu module in modules/dropdown_menu.js
* FontAwesome for the menu icon

Comments for adapting the size of the mobile menu based on styling preferences are included in the css file.

Responsive testing for the menu was done using the provided responsive development tools available in Chrome. 

Although there were some slight differences in the sizing of the menu's text based on the styling applied, the menu itself was consistent between the different available mobile formats.

## Additional Notes

* Bundling for this app was done using webpack.
* The following webpack loaders were used:
  * css-loader
  * style-loader
* The following dependencies were used:
  * fontawesome-free [Instructions](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)
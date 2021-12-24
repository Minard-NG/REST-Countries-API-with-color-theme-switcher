# Country Navigator

In this project, I explored the asynchronous nature of JavaScript. For this project, I integrated with the famous REST Countries API to pull country data and display it nicely for easy use by users. I also, added a theme switcher and subtle transition effects to improve user experience.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![screenshot](./design/desktop-design-home-dark.jpg)

### Links

- Solution URL: [GitHub Repo](https://github.com/Minard-NG/REST-Countries-API-with-color-theme-switcher)
- Live Site URL: [Hosted with Netlify](https://countrynavigator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass/Scss
- JavaScript
- Mobile-first workflow
- Git and GitHub

### What I learned

In this project, I tested out a fluid typography concept (__just for font sizes__) to help reduce the media queries. In the code snippet below, the base font-size is a non-responsive css unit(__such as px__),while the flexible font-size is a responsive unit(__such as vw__). 

```css
.selector{
  font-size: calc(base font-size + flexible font-size)
}
```

I learnt more about passing data between html pages. The three ways to do so are:
- Using LocalStorage
- Using SessionStorage
- Using QueryString

I have been used to using Local/Session Storage api utililzing the setItem() and getItem() methods. The query string approach provided an interesting learning opportunity and peculiar use case when the data that should be passed to the new html page is present on the anchor elements that initiates the switch to the new html page. Implementing an onclick event handler on the anchor element to switch items on the Local/session api may not be effective in such a use case.

```js
let dataToBePassed='xyz';

href = `./index.html?name=${dataToBePassed}`;

//new html page
let url = document.location.href;
let tmp =  url.split('?')[1];
let dataPassed = tmp.split('=')[1];
```

For the theme switcher I placed an id on link tag for stylesheet and swap the href attribute value dynamically using JS.

I utilized the async/await JS syntax to fetch data, as shown below:

```js
async function getData(url) {
    const response = await fetch(url);

    let data = await response.json();
    renderGrid(data)
}
```

I then, utilized the JSON formatter extension on chrome to properly view the structure of the data fetched from the REST contries api and properly access the values needed.

### Continued development

Do more project integrating with apis, explore backend developement

### Useful resources

- [Font Awesome](https://fontawesome.com/) - Useful to get attractive icons.
- [Box Shadow](https://getcssscan.com/css-box-shadow-examples) - This is an amazing site to get box shadow values.
- [Share data between html pages](https://stackoverflow.com/questions/11609376/share-data-between-html-pages) - Amazing response on how to share data between html pages.

## Author

- Frontend Mentor - [@Minard-NG](https://www.frontendmentor.io/profile/Minard-NG)
- LinkedIn - [Michael Nwankwo](https://www.linkedin.com/in/michael-nwankwo/)


## Acknowledgments

Special thanks to [Frontend Mentor](https://www.frontendmentor.io) for setting up this challenge to help developers improve their coding skills by building realistic projects.

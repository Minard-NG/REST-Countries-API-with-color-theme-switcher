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

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

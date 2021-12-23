//using local storage for user's theme preferences
if (typeof (Storage !== undefined)) {
    if (!localStorage.theme) {
        localStorage.theme = 'default';
    }
} else {
    console.log("Browser does not support client-side storage to keep track of scores");
}

//theme switcher event handler
let darkModeSwitch = document.getElementById('darkModeSwitch');
let darkModeIcon = darkModeSwitch.querySelector('i');

let linkTag = document.getElementById('pagestylesheet');

if (localStorage.theme === 'default') {
    linkTag.setAttribute('href', './css/style.css');
    darkModeIcon.classList.add('far');
    darkModeIcon.classList.remove('fas');
}

if (localStorage.theme === 'dark') {
    linkTag.setAttribute('href', './css/darkstyle.css');
    darkModeIcon.classList.remove('far');
    darkModeIcon.classList.add('fas');
}



darkModeSwitch.addEventListener('click', switcher);

function switcher(evt) {

    if (linkTag.getAttribute('href') === './css/style.css') {
        linkTag.setAttribute('href', './css/darkstyle.css');
        darkModeIcon.classList.remove('far');
        darkModeIcon.classList.add('fas');
        localStorage.setItem('theme', 'dark');
    } else {
        linkTag.setAttribute('href', './css/style.css');
        darkModeIcon.classList.add('far');
        darkModeIcon.classList.remove('fas');
        localStorage.setItem('theme', 'default')
    }
}

//filter selector animation event handler
let filterBtn = document.querySelector('.filter__selector ');
let dropDownList = document.querySelector('.filter__selector > ul');

filterBtn.addEventListener('click', () => {
    if (dropDownList.classList.contains('slideIn')) {
        dropDownList.classList.remove('slideIn');
        dropDownList.classList.add('slideOut');
    } else {
        dropDownList.classList.add('slideIn');
        dropDownList.classList.remove('slideOut');
        dropDownList.classList.remove('d-none');
    }
});

//handling asynchronous calss
async function getData(url) {
    const response = await fetch(url);

    let data = await response.json();
    renderGrid(data)

}

function renderGrid(data) {
    mainGrid = document.querySelector('.grid');
    content = '';

    data.forEach(obj => {
        content += `<a class="grid__item" href="./info.html?name=${obj.name.common.toLowerCase()}">
        <div class="grid__item-img">
          <img src=${obj.flags.png} alt="country flag" />
        </div>
        <div class="grid__item-content">
          <h3 >${obj.name.common}</h3>
          <p>Population: <span>${obj.population}</span></p>
          <p>Region: <span>${obj.region}</span></p>
          <p>Capital: <span>${obj.capital}</span></p>
        </div>
      </a>`

    });
    if(mainGrid){
        mainGrid.innerHTML = content;
    }

    
}
if (document.location.pathname === '/index.html' || document.location.pathname === '/') {
    let url = document.location.href;
    let tmp = url.split('?'),
        tmp1, region;

    if(tmp.length==2){
        tmp1= tmp[1].split('=');
        region = tmp1[1].toLowerCase();

        getData(`https://restcountries.com/v3.1/region/${region}`)
    }else{
        getData('https://restcountries.com/v3.1/all'); //load the data on page load;
    }

    
}



//search event handler
let search = document.getElementById('search');

search.addEventListener('keyup', (evt) => {
    if (search.value) {
        getData(`https://restcountries.com/v3.1/name/${search.value}`);
    } else {
        getData('https://restcountries.com/v3.1/all');
    }
});


//filter by region event handler
let filter_links = dropDownList.querySelectorAll('a');

filter_links.forEach((a) => {
    a.addEventListener('click', filterer);
});

function filterer(evt) {
    let region = evt.target.innerText.toLowerCase();

    getData(`https://restcountries.com/v3.1/region/${region}`)


}

//event handler for country cards
async function getInfoData(url) {
    const response = await fetch(url);

    let data = await response.json();
    renderInfoData(data)
   
}

function renderInfoData(data) {
    let mainInfoArea = document.querySelector('.infomain');
    let content = '';

    if(Array.isArray(data)){
        data.forEach((obj) => {
            content += `<div class="flag">
        <img src=${obj.flags.png} alt="country flag" />
      </div>
    
      <div class="info">
        <h3 >${obj.name}</h3>
        <div class="info__1">
          <p>Native Name: <span>${obj.nativeName}</span></p>
          <p>Population: <span>${obj.population}</span></p>
          <p>Region: <span>${obj.region}</span></p>
          <p>Sub Region: <span>${obj.subregion}</span></p>
          <p>Capital: <span>${obj.capital}</span></p>
        </div>
    
        <div class="info__2">
          <p>Top Level Domain: <span>${obj.topLevelDomain[0]}</span></p>
          <p>Currencies: <span>${obj.currencies[0].name}</span></p>
          <p>Languages: <span>${obj.languages[0].name}</span></p>
        </div>
    
        <div class="info__footer">
          <p>Border Countries:</p>
          <div class="info__footer-links">
           
          </div>
        </div>
      </div>`;
            mainInfoArea.innerHTML = content;
    
            let border_container = mainInfoArea.querySelector('.info__footer-links');
            content = '';
            if (obj.borders){
                obj.borders.forEach((border) => {
                    content += `<a href="./info.html?code=${border}" class="button">${border}</a>`
                });
                border_container.innerHTML= content;
            }
    
        });
    }else{
    
            content += `<div class="flag">
        <img src=${data.flags.png} alt="country flag" />
      </div>
    
      <div class="info">
        <h3 >${data.name}</h3>
        <div class="info__1">
          <p>Native Name: <span>${data.nativeName}</span></p>
          <p>Population: <span>${data.population}</span></p>
          <p>Region: <span>${data.region}</span></p>
          <p>Sub Region: <span>${data.subregion}</span></p>
          <p>Capital: <span>${data.capital}</span></p>
        </div>
    
        <div class="info__2">
          <p>Top Level Domain: <span>${data.topLevelDomain[0]}</span></p>
          <p>Currencies: <span>${data.currencies[0].name}</span></p>
          <p>Languages: <span>${data.languages[0].name}</span></p>
        </div>
    
        <div class="info__footer">
          <p>Border Countries:</p>
          <div class="info__footer-links">
            
          </div>
        </div>
      </div>`;
            mainInfoArea.innerHTML = content;
    
            let border_container = mainInfoArea.querySelector('.info__footer-links');
            content = '';
            if (data.borders){
                data.borders.forEach((border) => {
                    content += `<a href="./info.html?code=${border}" class="button">${border}</a>`
                });
                border_container.innerHTML= content;
            }
            
    
            
    
        }
    }
    

if (document.location.pathname === '/info.html') {
    let url = document.location.href;

    let tmp = url.split('?')[1],
        name, code;

    if(tmp.split('=')[0] ==='name'){
        name = tmp.split('=')[1];
        getInfoData(`https://restcountries.com/v2/name/${name}`); //load the data on page load;
    }
    if(tmp.split('=')[0] ==='code'){
        code = tmp.split('=')[1].toLowerCase();

        getInfoData(`https://restcountries.com/v2/alpha/${code}`); //load the data on page load;
    }  
}

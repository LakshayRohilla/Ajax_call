'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// AJAX Call old school
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/Bharat`);
  request.send();


  request.addEventListener('load', function() {
    console.log(request.responseText); // we`ll be having a JSOM data but to have a good representation we do the next line.
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `<article class='country'>
              <img class='country__img' src='${data.flags.svg}' />
             <div class='country__data'>
                <h3 class='country__name'>${data.altSpellings[2]}</h3>
                <h4 class='country__region'>${data.region}</h4>
                <p class='country__row'><span>👫</span>${data.population} people</p>
                <p class='country__row'><span>🗣️</span>${data.languages.hin}</p>
                <p class='country__row'><span>💰</span>${data.currencies.INR.name}</p>
              </div>
            </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });

// Country 2 , This is better done using function to have DRY, but JSON is diff in both the countries
  const request2 = new XMLHttpRequest();
  request2.open('GET', `https://restcountries.com/v3.1/name/USA`);
  request2.send();


  request2.addEventListener('load', function() {
    console.log(request2.responseText); // we`ll be having a JSOM data but to have a good representation we do the next line.
    const [data2] = JSON.parse(this.responseText);
    console.log(data2);
    const html = `<article class='country'>
              <img class='country__img' src='${data2.flags.svg}' />
             <div class='country__data'>
                <h3 class='country__name'>${data2.altSpellings[2]}</h3>
                <h4 class='country__region'>${data2.region}</h4>
                <p class='country__row'><span>👫</span>${data2.population} people</p>
                <p class='country__row'><span>🗣️</span>${data2.languages.eng}</p>
                <p class='country__row'><span>💰</span>${data2.currencies.USD.name}</p>
              </div>
            </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });

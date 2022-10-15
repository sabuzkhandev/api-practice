const loadCountry = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>countryList(data))
}

const countryList = country=>{
    const countryContainer = document.getElementById('country-container');
    country.forEach(countries=>{
        const createCountryDiv = document.createElement('div');
        createCountryDiv.classList.add('country-style');
        console.log(countries);
        createCountryDiv.innerHTML = `
            <h5>Country Name: ${countries.name.common}</h5>
            <h5>Capital: ${countries.capital ? countries.capital[0] : 'No Capital' }</h5>
            <button onclick="countryDetails('${countries.cca2}')">Details</button>
        `;
        countryContainer.appendChild(createCountryDiv);
    })
}

const countryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => getCountry(data))
}

const getCountry = country =>{
    const getcountryDetails = document.getElementById('country-name');
    country.forEach(countries=>{
        console.log(countries);
        const countryDivDetails = document.createElement('div');
        countryDivDetails.innerHTML = `
            <h5>Result: ${countries.name.common}</h5>
            <img src="${countries.flags.png}" />
        `;
        getcountryDetails.appendChild(countryDivDetails);
    })
}

loadCountry();
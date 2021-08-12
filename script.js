// const ratesStart = document.querySelector(".rates-start")
// const valueList = document.querySelector(".value-list")
// const getRates = document.querySelector(".get-rates")
// const ratesResult = document.querySelector(".rates-result")
// const rateSymbol = document.querySelector(".rate-symbol")
//
// getRates.addEventListener("click", () => {
//
//     (fetch("https://api.exchangerate.host/latest?base=KGS")
//         .then(res => res.json())
//         .then(data => ratesResult.value =  (data.rates[valueList.value] * Number(ratesStart.value)).toFixed(2)))
//
//     if (valueList.value === "USD") {
//         rateSymbol.innerHTML = "<i class='bx bx-dollar'></i>"
//     } else if (valueList.value === "EUR") {
//         rateSymbol.innerHTML = "<i class='bx bx-euro' ></i>"
//     } else {
//         rateSymbol.innerHTML = "<i class='bx bx-ruble' ></i>"
//     }
//
// })

const row = document.querySelector(".row")

fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => data.forEach(item => row.innerHTML += `
                <div class="col-3">
                    <div class="country__box">
                        <div class="country__img">
                            <img src="${item.flag}" alt="" class="country__img__item">
                        </div>
                        <div class="country__box__content">
                            <h3 class="country__title">${item.name}</h3>
                            <ul class="country__feature">
                                <li class="country__feature__item"><span class="country__feature__item&#45;&#45;bold">Region:</span> ${item.region}</li>
                                <li class="country__feature__item"><span class="country__feature__item&#45;&#45;bold">Population:</span> ${item.population}</li>
                                <li class="country__feature__item"><span class="country__feature__item&#45;&#45;bold">Capital:</span> ${item.capital}</li>
                            </ul>
                        </div>
                    </div>
                </div>`))
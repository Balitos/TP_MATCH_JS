import { HttpRequest } from "../../xmlRequest.js";

const buttonMatchSelector = document.getElementById('addMatchButton');
const addFormSelector = document.getElementById('addForm');

const matchId = location.search.split('=');


let homeValueSelectorInput = document.getElementById("homeTeamInputUpdate");
let visitorValueSelectorInput = document.getElementById("visitorTeamInputUpdate");
let homeScoreValueSelectorInput = document.getElementById("homeScoreInputUpdate");
let visitorScoreValueSelectorInput = document.getElementById("visitorScoreInputUpdate");
let dateValueSelectorInput = document.getElementById("dateInputUpdate");



    HttpRequest('GET', 'https://js-ingesup-b2.herokuapp.com/matches/'+ matchId[1]).then(dataMatch => {

        homeValueSelectorInput.value = dataMatch.homeTeam;
        visitorValueSelectorInput.value = dataMatch.visitorTeam;
        homeScoreValueSelectorInput.value = dataMatch.score[0];
        visitorScoreValueSelectorInput.value = dataMatch.score[1];
    });


const postData = () => {

    let homeValueSelector = addFormSelector.elements.homeTeamInputUpdate.value;
    let visitorValueSelector = addFormSelector.elements.visitorTeamInputUpdate.value;
    let homeScoreValueSelector = addFormSelector.elements.homeScoreInputUpdate.value;
    let visitorScoreValueSelector = addFormSelector.elements.visitorScoreInputUpdate.value;
    let dateValueSelector = addFormSelector.elements.dateInputUpdate.value;


    HttpRequest('PUT', 'https://js-ingesup-b2.herokuapp.com/matches/'+ matchId[1],{

        homeTeam: homeValueSelector,
        visitorTeam: visitorValueSelector,
        score: [homeScoreValueSelector, visitorScoreValueSelector],
        date:  dateValueSelector,
    })
        .then(responseData => {
            console.log(responseData);
            alert("Votre match a bien était ajouter");
        })
        .catch(err => {
            console.log(err);
            alert("ERREUUUUUUUUUUUUUUUUURRRRRRRRRRRRRRR");
        });
};

buttonMatchSelector.addEventListener('click', event =>{
    event.preventDefault();
    postData();
    setInterval(()=>{
        window.location.href = '../index.html';
    }, 1000);
});
import { HttpRequest } from "../../xmlRequest.js";

const buttonMatchSelector = document.getElementById('addMatchButton');
const addFormSelector = document.getElementById('addForm');



const postData = () => {

    let homeValueSelector = addFormSelector.elements.homeTeamInput.value;
    let visitorValueSelector = addFormSelector.elements.visitorTeamInput.value;
    let homeScoreValueSelector = addFormSelector.elements.homeScoreInput.value;
    let visitorScoreValueSelector = addFormSelector.elements.visitorScoreInput.value;
    let dateValueSelector = addFormSelector.elements.dateInput.value;


  HttpRequest('POST', 'https://js-ingesup-b2.herokuapp.com/matches?size=50',{

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
            alert("Veuillez remplir tous les champs");
        });
};


buttonMatchSelector.addEventListener('click', event =>{
    event.preventDefault();
    postData();
    setInterval(()=>{
        window.location.href = '../index.html';
    }, 1000);
});
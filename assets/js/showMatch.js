import { HttpRequest } from "../../xmlRequest.js";

const homeSelector = document.getElementById('homeDiv');
const scoreSelector = document.getElementById('scoreDiv');
const visitorSelector = document.getElementById('visitorDiv');
const dateSelector = document.getElementById('dateDiv');
const updateButtonSelector = document.getElementById('updateButtonDiv')
const deleteButtonSelector = document.getElementById('deleteButtonDiv')

export const getData = () => {
    HttpRequest('GET', 'https://js-ingesup-b2.herokuapp.com/matches?size=50').then(responseData => {
        responseData.forEach(dataMatch => {
            
            let newPHome = document.createElement('p');
            newPHome.style.margin="7px";
            homeSelector.appendChild(newPHome);
            newPHome.innerText = dataMatch.homeTeam;

            let newPScore = document.createElement('p');
            newPScore.style.margin="7px";
            scoreSelector.appendChild(newPScore);
            newPScore.innerText = dataMatch.score[0] + " - " + dataMatch.score[1];

            let newPVisitor = document.createElement('p');
            newPVisitor.style.margin="7px";
            visitorSelector.appendChild(newPVisitor);
            newPVisitor.innerText = dataMatch.visitorTeam;

            if(dataMatch.score[0]<dataMatch.score[1]){
                newPHome.style.color='green';
                newPHome.style.fontWeight="bold";
            } else if (dataMatch.score[0]>dataMatch.score[1]) {
                newPVisitor.style.color='green';
                newPVisitor.style.fontWeight='bold';
            } else {
                newPHome.style.color='orange';
                newPVisitor.style.color='orange';
            }


            let newPDate = document.createElement('p');
            newPDate.style.margin="7px";
            dateSelector.appendChild(newPDate);
            let newDate = new Date(dataMatch.date).toLocaleDateString();
            newPDate.innerText = newDate;
//Button UPDATE
            let newButtonUpdate = document.createElement('button');

            updateButtonSelector.appendChild(newButtonUpdate);
            newButtonUpdate.innerText = "Modifier";
            newButtonUpdate.style.margin="4px";

            newButtonUpdate.addEventListener('click', event =>{
                    window.location.href = 'pages/updateMatch.html?id=' + dataMatch.id;
            });



//Button DELETE
            const newButtonDelete = document.createElement('button');

            deleteButtonSelector.appendChild(newButtonDelete);
            newButtonDelete.innerText = "Supprimer";
            newButtonDelete.style.margin="4px";

            newButtonDelete.addEventListener('click', event => {
                if ( confirm( "Voulez-vous vraiment supprimer le match ?" ) ) {
                    HttpRequest('DELETE', 'https://js-ingesup-b2.herokuapp.com/matches/' + dataMatch.id)
                        .then(responseData => {
                            console.log("Le match a bien été supprimé");
                        })
                        .catch(err => {
                            alert("ERREUR, le match n'a pas été supprimé");
                        });
                } else {
                    window.location.href = 'index.html';
                }




                setInterval(() => {
                    window.location.href = 'index.html';
                }, 1000);
            });









            });
    });
}

const butttonUpdateSelector = document.getElementById('')



getData()

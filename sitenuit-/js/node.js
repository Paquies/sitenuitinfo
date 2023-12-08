// const cards = document.querySelectorAll('.card');
// let currentCard = 0;

// const choices = [];

// document.querySelectorAll('.left-btn').forEach(leftBtn => {
//     leftBtn.addEventListener('click', () => handleButtonClick(false));
// });

// document.querySelectorAll('.right-btn').forEach(rightBtn => {
//     rightBtn.addEventListener('click', () => handleButtonClick(true));
// });

// function handleButtonClick(swipeDirection) {
//     const current = cards[currentCard];
//     const nextCard = cards[currentCard + 1];

//     choices[currentCard] = swipeDirection ? true : false;

//     if (currentCard === cards.length - 1) {
//         redirectToNewPage(); // Redirection vers une nouvelle page
//         return;
//     }

//     if (swipeDirection) {
//         // Swipe a droite (true)
//         console.log('Swiped right (true)');
//         // You can save the user response here
//     } else {
//         // Swipe gauche (false)
//         console.log('Swiped left (false)');
//     }

//     current.style.transform = swipeDirection ? 'translate(100%)' : 'translate(-100%)';
//     current.style.opacity = '0';
//     current.classList.remove('active');

//     if (nextCard) {
//         nextCard.classList.add('active');
//     }

//     console.log(choices);
    
//     setTimeout(() => {
//         current.style.display = 'none';
//         current.style.transform = '';
//         current.style.opacity = '';

//         if (nextCard) {
//             currentCard++;

//             if (currentCard === cards.length - 1) {
//                 console.log('All cards swiped');
//             }
//         }
//     }, 300); 

//     function redirectToNewPage() {
//         // Redirection vers une nouvelle page après la dernière carte
//         window.location.href = 'info_carte.html';
//     }

// }

const cards = document.querySelectorAll('.card');
let currentCard = 0;


document.querySelectorAll('.left-btn').forEach(leftBtn => {
    leftBtn.addEventListener('click', () => handleButtonClick(false));
});

document.querySelectorAll('.right-btn').forEach(rightBtn => {
    rightBtn.addEventListener('click', () => handleButtonClick(true));
});

function handleButtonClick(swipeDirection) {
    const current = cards[currentCard];
    const nextCard = cards[currentCard + 1];


    if (currentCard === cards.length - 1) {
        redirectToNewPage(); // Redirection vers une nouvelle page
        return;
    }

    if (swipeDirection) {
        // Swipe a droite (true)
        console.log('Swiped right (true)');
        // You can save the user response here
    } else {
        // Swipe gauche (false)
        console.log('Swiped left (false)');
    }

    current.style.transform = swipeDirection ? 'translate(100%)' : 'translate(-100%)';
    current.style.opacity = '0';
    current.classList.remove('active');

    if (nextCard) {
        nextCard.classList.add('active');
    }


    let listeBooleenneRecuperee = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.startsWith("variableBooleenne")) {
            let value = localStorage.getItem(key);
            listeBooleenneRecuperee.push(value === 'true');
        }
    }
    listeBooleenneRecuperee.push(swipeDirection);
    for (let i = 0; i < listeBooleenneRecuperee.length; i++) {
      localStorage.setItem("variableBooleenne" + i, listeBooleenneRecuperee[i]);
    }
    
    setTimeout(() => {
        current.style.display = 'none';
        current.style.transform = '';
        current.style.opacity = '';

        if (nextCard) {
            currentCard++;

            if (currentCard === cards.length - 1) {
                console.log('All cards swiped');
            }
        }
    }, 300); 

    function redirectToNewPage() {
      let listeBooleenneRecuperee = [];
      for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          if (key.startsWith("variableBooleenne")) {
              let value = localStorage.getItem(key);
              listeBooleenneRecuperee.push(value === 'true');
          }
      }
      for (let i = 0; i < listeBooleenneRecuperee.length; i++) {
        localStorage.setItem("variableBooleenne" + i, listeBooleenneRecuperee[i]);
      }
          
        
        if (listeBooleenneRecuperee[0]) {
          window.location.href = "Cartes/info_carte1a.html";
        } else {
          window.location.href = "Cartes/info_carte1b.html";
        }
        localStorage.setItem('maVariable', '1');
    }

}

//----------------------------------js page login/inscription

window.onload = function() {
    var registerForm = document.getElementById("registerForm");
    var loginForm = document.getElementById("loginForm");

    if(registerForm) {
        registerForm.addEventListener("submit", function(event){
            event.preventDefault();
            
            var nom = document.getElementById("nom").value;
            var mdp = document.getElementById("mdp").value;

            if(!nom.endsWith("@nuit-info.tlse") || nom.indexOf('@') < 5 || mdp.length < 6) {
                alert("L'email doit avoir au moins 5 caractères avant le '@nuit-info.tlse' et le mot de passe doit avoir au moins 6 caractères. Veuillez réessayer.");
            } else {
                var users = JSON.parse(localStorage.getItem('users')) || [];
                
                users.push({nom: nom, mdp: mdp});
                
                localStorage.setItem('users', JSON.stringify(users));
                
                alert("Inscription réussie !");
                window.location.href="login.html";
            }
        });
    }

    if(loginForm) {
        loginForm.addEventListener("submit", function(event){
            event.preventDefault();
            
            var nom = document.getElementById("nom").value;
            var mdp = document.getElementById("mdp").value;
            
            var users = JSON.parse(localStorage.getItem('users')) || [];
            
            for(var i = 0; i < users.length; i++) {
                if(users[i].nom == nom && users[i].mdp == mdp) {

                    window.location.href = "Présentattion.html";
                    return;
                }
            }
            
            alert("Nom d'utilisateur ou mot de passe incorrect");
        });
    }
}
    function changerDiv() {

        var div1 = document.getElementById('b1');
        var div2 = document.getElementById('b2');
        var div3 = document.getElementById('bTrue');
        var div4 = document.getElementById('bFalse');
        var div5 = document.querySelector('.description');
      
        div1.style.display = 'none';
        div2.style.display = 'none';
      
        div3.style.display = 'flex';
        div4.style.display = 'flex';
        div5.style.display = 'block';
      }
    
    function buttonEffect() {
      var nbPage = localStorage.getItem('maVariable');
      nbPage = parseInt(nbPage) + 1;
      localStorage.setItem('maVariable', nbPage);
    
      let listeBooleenneRecuperee = [];
      for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i);
          if (key.startsWith('variableBooleenne')) {
              let value = localStorage.getItem(key);
              listeBooleenneRecuperee.push(value === 'true');
          }
      }
    
      if (nbPage == 2) {
        if (listeBooleenneRecuperee[nbPage-1]) {
          window.location.href = "info_carte2a.html";
        } else {
          window.location.href = "info_carte2b.html";
        }
      }
      else if (nbPage == 3) {
        if (listeBooleenneRecuperee[nbPage-1]) {
          window.location.href = "info_carte3a.html";
        } else {
          window.location.href = "info_carte3b.html";
        }
      }
      else if (nbPage == 4) {
        if (listeBooleenneRecuperee[nbPage-1]) {
          window.location.href = "info_carte4a.html";
        } else {
          window.location.href = "info_carte4b.html";
        }
      }
      else if (nbPage == 5) {
        if (listeBooleenneRecuperee[nbPage-1]) {
          window.location.href = "info_carte5a.html";
        } else {
          window.location.href = "info_carte5b.html";
        }
      }
      else if (nbPage == 6) {
        window.location.href = "../Recap.html";
      }
    }

//__-------------------------------présentation---------------------
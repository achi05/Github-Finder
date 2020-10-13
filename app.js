//Init github
const github = new Github;
//Init UI
const ui = new UI;
//Search Input
const searchUser = document.getElementById('searchUser');
//Search Input Event Listener
searchUser.addEventListener('keyup',(e)=> {
    //Get text inside input
    const userText = e.target.value;
    if(userText !== ''){
        //Make http call 
        github.getUser(userText)
            .then(data =>{
                if(data.profile.message === 'Not Found'){
                    //Show Alert
                    ui.showAlert('User not found', 'alert alert-danger');
                }else{
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else{
        //Clear profile
        ui.clearProfile();
    }
});
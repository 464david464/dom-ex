const me = {
    firstName: 'david',
    lastName: 'weinstein',
    age: 19,
    hobby: "art and coding"
};
function action() {
    let value = document.querySelector('select').selectedIndex;

    if(value == 1) {
        document.getElementById('theResult').innerHTML = 'my first name is: ' + me.firstName;
    } else if(value == 2){
        document.getElementById('theResult').innerHTML = 'my last name is: ' + me.lastName;
    } else if(value == 3){
        document.getElementById('theResult').innerHTML = 'my age is: ' + me.age;
    } else if(value == 4){
        document.getElementById('theResult').innerHTML = 'my hobby is: ' + me.hobby;
    } else{
        document.getElementById('theResult').innerHTML = ''
    }
}
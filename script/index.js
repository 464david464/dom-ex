function ex1() {
    document.getElementsByName('fname')[0].value = prompt('what\'s your first name')
    document.getElementsByName('lname')[0].value = prompt('what\'s your last name')


    alert(document.querySelectorAll('input').length + ' inputs in document')
}

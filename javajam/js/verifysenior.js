var age;

age = prompt("Enter your age:")
if (age >= 65) {
    document.getElementById('verify').innerHTML = 'FABULOUS PERK! Free Coffee on Friday Nights for All Seniors!';
    document.getElementById('verify').style.fontSize = '2em';
} else {
    document.getElementById('verify').innerHTML = 'Enjoy Music and Make Memories!';}
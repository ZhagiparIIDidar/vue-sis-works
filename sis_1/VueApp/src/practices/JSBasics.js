// import { ref } from 'vue'

/* ==========================================================
   JS BASICS — учебная площадка (работа с консолью, без UI)
   Позже можно вынести целиком, например в src/practice/jsBasics.js,
   и импортировать my_app() туда, где он нужен (см. App.vue onMounted).
   ========================================================== */

/* ---------- Mock data ---------- */
export const users_data = {
    1: 'didar',
    2: 'bobik',
    3: 'diko',
    4: 'aigerim',
    5: 'nurlan',
    6: 'saltanat',
    7: 'dias',
    8: 'zhanna',
    9: 'yerlan',
    10: 'aidana',
}

/* ---------- Simple variables ---------- */
let name = 'Didar'
let country = 'Kazakhstan'
let year = 2026
let year_of_birth = 2007
let color = 'green'

/* ---------- Classes: наследование ---------- */
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return this.name
    }
}

class Admin extends User {
    constructor(name, age, status) {
        super(name, age)
        this.status = status
    }

    greet = () => {
        return `    hello i am ${this.name}, and i am ${this.age} years old, my status is ${this.status}`
    }
}

/* ---------- Functions: демонстрация классов ---------- */
export function my_app() {
    // countToTen(users_data)
    // js_basic_cmds();
    let user1 = new User('didar', 19)
    console.log(user1.name, user1.age)
    let admin1 = new Admin(user1.name, user1.age, 'admin')
    console.log(admin1.name, admin1.age, admin1.status)
    console.log(admin1.greet())
    let admin1_greet_func = admin1.greet
    console.log(admin1_greet_func())
}

/* ---------- Functions: браузерные диалоги ---------- */
function wind_cmds() {
    let msg
    msg = 'hello world!'
    // let name = prompt("enter your name", 'no_name')
    let is_adult = confirm('are your adult?')
    alert(is_adult)
}

/* ---------- Functions: массивы, тернарник, стрелочные функции, filter/map ---------- */
function js_basic_cmds() {
    const car_color = color === 'red' ? 'red_color' : 'not_red_car'
    console.log(`my car is ${car_color}`)

    let letters = []
    for (let lt of name) {
        letters.push(lt)
        console.log(lt)
    }

    let myName = letters.join('')
    let calc_age = (year_of_birth, current_year) => current_year - year_of_birth
    let my_age = calc_age(year_of_birth, year)

    let find_max = (arr) => {
        let max_num = arr.reduce((max, curr) => (curr > max ? curr : max), arr[0])
        return max_num
        // return Math.max(arr)
    }

    let list_of_nums = []
    let generate_list_nums = (a) => {
        for (let num = 0; num < a; num++) list_of_nums.push(num)
        return list_of_nums
    }

    const users = [
        {name: 'Аня', age: 25},
        {name: 'Борис', age: 17},
        {name: 'Вика', age: 30},
        {name: 'Гриша', age: 15},
    ]

    let adult_name = users.filter((u) => u.age >= 18).map((u) => u.name)

    let res = adult_name
    document.getElementById('theApp').innerHTML += res
}

/* ---------- Functions: цикл + запись в DOM ---------- */
function countToTen(data) {
    console.log('hello from main.js func count to ten')

    let result = ''
    let n = 0

    // while (Object.keys(data).length > n) {
    //     console.log("hello from while")

    //     n++;
    //     console.log(n)

    //     result = n + ' ' +  + "<br>";
    //     document.getElementById("theCount").innerHTML += result

    // }

    for (let count = 1; count <= Object.keys(data).length; count++) {
        const element = data[count]

        result = count + ') ' + element + '<br>'
        document.getElementById('theCount').innerHTML += result
    }
}

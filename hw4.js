let money , time;

function start() {
money = +prompt("Ваш бюджет на месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", '' );

while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
        }
}
 start();
 
    let appData = {
        budget : money,
        expenses : {},
        optionalExpenses : {},
        income : [],
        timeData : time,
        savings : true
    };


    function chooseExpenses () {
        for (let i = 0; i < 2; i++) {
                let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                    b = prompt("Во сколько обойдется?", '');
        
                if((typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(b)) != null
                 && a!= '' && b != '' && a.length < 50 ) {
                        console.log ("done");
                        appData.expenses[a] = b;
                } else {
                        console.log ("Bad result");
                        i--;
                }
                
            }
    }
    chooseExpenses();

    function detectDayBudget(){
            appData.monetPerDay =(appData.budget / 30). toFixed();
            alert ("Бюджет на 1 день составляет " + appData.monetPerDay + "руб");
    }
    detectDayBudget();
    

function detectLevel() {
    if(appData.monetPerDay < 100){
            console.log ("Минимальный уровень достатка")
    }else if (appData.monetPerDay > 100 && appData.monetPerDay < 2000) {
            console.log ("Средний уровен достатка");
    } else if (appData.monetPerDay > 2000) {
            console.log ("Высокий уровень достатка");
    } else {
            console.log ("Произошла ошибка")
    }
}

    function checkSavings(){
        if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений ?"),
                        percent = +prompt("Под какой процент ?");

                appData.mounthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита : " + appData.mounthIncome);
        }
}

checkSavings();


function chooseOptExpenses() {
        for( let i = 1; i < 3; i++){
                let     questionOptExpenses = prompt("Статья необязательных расходов?");
                appData.optionalExpenses[i] = questionOptExpenses;
                console.log(appData.optionalExpenses)
        }



}

chooseOptExpenses();













//     WHILE
// let i = 0;
//     while (i < 2) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');

//         if((typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(b)) != null
//          && a!= '' && b != '' && a.length < 50 ) {
//                 console.log ("done");
//                 appData.expenses[a] = b;
//         } else {
//                 console.log ("Bad result");
//                 i--;
//     }

//     i++;
//     }

// do while

// let i = 0;
// do {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if((typeof(a))=== 'string' && (typeof(a)) != null  && (typeof(b)) != null
//      && a!= '' && b != '' && a.length < 50 ) {
//             console.log ("done");
//             appData.expenses[a] = b;
//     } else {
//             console.log ("Bad result");
//             i--;
// }

// i++;
// }
// while (i < 2);
let money = +prompt("Ваш бюджет на месяц?")
    time = prompt("Введите дату в формате YYYY-MM-DD");

    let appData = {
        budget : money,
        timeData : time,
        expenses : {},
        optionalExpenses : {},
        income : {},
        saving : false 
    };


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
        
    };

    appData.monetPerDay = appData.budget / 30;

    alert("Ежедневный бюджет : " + appData.monetPerDay);

    if(appData.monetPerDay < 100){
            console.log ("Минимальный уровень достатка")
    }else if (appData.monetPerDay > 100 && appData.monetPerDay < 2000) {
            console.log ("Средний уровен достатка");
    } else if (appData.monetPerDay > 2000) {
            console.log ("Высокий уровень достатка");
    } else {
            console.log ("Произошла ошибка")
    }

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

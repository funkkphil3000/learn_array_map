let data = [
{   
    firstName:'Michael',
    lastName:'Jordan',
    sport:'Basketball',
    championship:6
},
{   
    firstName:'Kobe',
    lastName:'bryant',
    sport:'Basketball',
    championship:5
},
{   
    firstName:'Tom',
    lastName:'Brady',
    sport:'Football',
    championship:7
},
{   
    firstName:'Manny',
    lastName:'Pacquiao',
    sport:'Boxing',
    championship:'unhknown'
},
{   
    firstName:'Floyd',
    lastName:'Mayweather',
    sport:'Boxing',
    championship:'unknown'
},
{   
    firstName:'Roger',
    lastName:'Federer',
    sport:'Tennis',
    championship:'unknown'
}
]

const info = document.querySelector('#info');
let details = data.map(function(item){
    return '<div> First name: '+item.firstName + '<br>' +
                  'Last name: '+item.lastName + '<br>' +
                  'Sport: '+item.sport + '<br>' +
                  'Championship: '+item.championship +
          '</div>'

});
info.innerHTML = details.join('\n');
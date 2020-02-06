		
let orb = Math.floor((Math.random() * 100) +1);
console.log(orb);
        
for (i=1; i<=5; i++){
let number = parseInt(prompt("Zgadnij liczbę z przedziału 1-100, masz 5 prób"));

if (number > orb){
    document.write( number +' '+ 'jest za dużą liczbą<br/>')
    
}
else if (number < orb){
    document.write( number +' '+ 'jest za małą liczbą<br/>')
}	
else if (number == orb){
    document.write('Gratulacje, to' +' '+ number +' '+ 'gra zostaje zakonczona')
    let repeat = prompt("Czy chesz zagrać ponownie T/N ???");
        }
    if (i>=5){
        document.write('Liczba to'+' '+ orb + '... Porażka!! Nie udało się zgadnąć w 5 próbach</br>')
        let repeat = prompt("Czy chesz zagrać ponownie T/N ???")
            if(repeat == "n" || repeat == "N"){
                document.write('KONIEC GRY')
            }	
            else if(repeat == "t" || repeat == "T"){ 
                location.reload(true);
                } 
            else{
                document.write('KONIEC GRY , nie udało Ci się trafić w cyferkę T/N :/')
            } 	
    }                
}
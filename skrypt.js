		
let kula = Math.floor((Math.random() * 100) +1);

        
for (i=1; i<=5; i++){
let liczba = parseInt(prompt("Zgadnij liczbę z przedziału 1-100, masz 5 prób"));

if (liczba > kula){
    document.write( liczba +' '+ 'jest za dużą liczbą<br/>')
    
}
else if (liczba < kula){
    document.write( liczba +' '+ 'jest za małą liczbą<br/>')
}	
else if (liczba == kula){
    document.write('Gratulacje, to' +' '+ liczba +' '+ 'gra zostaje zakonczona')
    let powtorka = prompt("Czy chesz zagrać ponownie T/N ???");
        }
    if (i>=5){
        document.write('Porażka!! Nie udało się zgadnąć w 5 próbach</br>')
        let powtorka = prompt("Czy chesz zagrać ponownie T/N ???")
            if(powtorka == "n" || powtorka == "N"){
                document.write('KONIEC GRY')
            }	
            else if(powtorka == "t" || powtorka == "T"){ 
                location.reload(true);
                } 
            else{
                document.write('KONIEC GRY , nie udało Ci się trafić w literkę T/N :/')
            } 	
    }                
}
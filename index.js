let nomeHeroi = [ { nome:"wanda, xp:10000,"}]
for (let i = 0; i <nomeHeroi.length; i++){ 
    let heroi = nomeHeroi[i].nome
    let xpheroi = nomeHeroi[i].xp 
    let nivel;
    if(xpheroi< 1000){ 
        nivel = "ferro"
    } else if(xpheroi >= 1001 && xp <= 2000){
        nivel = "bronze"
    } else if(xpheroi >= 2001 && xp <= 5000){
        nivel = "prata"
    } else if(xpheroi >= 5001 && xp <= 7000){
        nivel = "ouro"
    } else if(xpheroi >= 7001 && xp <= 8000){
        nivel = "platina"
    } else if(xpheroi >= 8001 && xp <= 9000){
        nivel = "ascendente"
    } else if(xpheroi >= 9001 && xp <=10000){
        nivel = "imortal"
    } else {
        nivel = "radiante"
    } 
    console.log("o heroi de nome "+ heroi+ " está no nivel de " + nivel)



}
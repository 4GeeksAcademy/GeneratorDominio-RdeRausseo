let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domainHacks = "pued.es";
let posibleDoms = "";

for(let i = 0; i<pronoun.length; i++){
    for(let x = 0; x < adj.length; x++){
        for(let y = 0; y  < noun.length; y++){
            posibleDoms += pronoun[i] + adj[x] +  noun[y] + domainHacks + "\n";
        }
    }
}

console.log(posibleDoms); 
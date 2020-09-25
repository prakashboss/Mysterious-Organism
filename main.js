// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]; 
}
// console.log(returnRandBase());
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  // console.log(newStrand);
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}

// console.log(mockUpStrand());

// Factor Function for pAequorFactory step 3
const pAequorFactory = (specimenNum, dna) => {
  return {
    
    specimenNum,
    dna,
    // step4 making dna property even more random
    mutate () {
      
      let randomDNA = [];
        dna.forEach(base =>{

          // console.log(base);
          let A = ['T', 'C', 'G'];
          let T = ['A', 'C', 'G'];
          let C = ['T', 'A', 'G'];
          let G = ['T','C','A'];
          switch (base) {
            // when dna and base is equal to "A"
            case 'A':
              base = A[Math.floor(Math.random() * 3)];
              // console.log(base);
              break;
              
            // when dna and base is equal to "T"
            case 'T':
              base = T[Math.floor(Math.random() * 3)];
              // console.log(base);
              break;
              
            // when dna and base is equal to "c"
            case 'C':
              base = C[Math.floor(Math.random() * 3)];
              // console.log(base);
              break;
              
            // when dna and base is equal to "G"
            case 'G':
              base = G[Math.floor(Math.random() * 3)];
              // console.log(base);
              break;
              
          }
          randomDNA.push(base);
        })
         console.log(`${randomDNA}`);
    },// step4 making dna property even more random ends here

    //  step 5 compare % of DNA of different p.aequor
    compareDNA (newpAequor) {
      // console.log(this);
      // console.log(newpAequor);
      let commonDNA = 0;
       for (let i = 0; i < 15; i++) {
      //  console.log(this.dna[i]);
      // console.log(newpAequor.dna[i]);
        //  if statement to check if the dna are simillar and to add the commonDNA
         if(this.dna[i] === newpAequor.dna[i]){
           commonDNA++;
         }

       }
      //  console.log(commonDNA); // common DNA stands are calculated
      //  console.log(this.dna.length);
        // console.log((commonDNA/this.dna.length)*100);
      return `${(commonDNA/this.dna.length)*100}`; // returning the percentages of common DNA

    }, //step 5 compare % of DNA of different p.aequor ends here 


     // step 6 Checking the survaival of the p.aequor if C or G is 60%
    willLikelySurvive() {
          let surviveDNA = 0; // variable to check ercentage of C and G strings in dna
          this.dna.forEach(baseDNA => {
          if(baseDNA === 'C' || baseDNA === 'G') {
            surviveDNA +=1;
            // console.log(baseDNA);
            }
            
          })

          // console.log(surviveDNA);
          // console.log((surviveDNA/this.dna.length)*100);

          // if the % of C and G is >= 60 then survice ie return true
          if ((surviveDNA/this.dna.length)*100 >= 60) {
            return true;
          } else {
            return false;
          }
    }, // step 6 Checking the survaival of the p.aequor if C or G is 60%

  } // return object ends here

  
  
}; // factory function for p.aequor ends here 





const compareObject = {
  specimenNum: 11111,
  dna: [ 'G', 'C', 'C', 'T', 'A', 'A', 'G', 'A', 'A', 'G', 'C', 'G', 'T', 'A', 'C' ]
};

const firstpAequorFactory = pAequorFactory(2222,mockUpStrand());
// firstpAequorFactory.mutate();




// console.log(firstpAequorFactory.compareDNA(compareObject));
// console.log(`${firstpAequorFactory.dna}`);
// console.log(pAequorFactory(1211, mockUpStrand()));
// console.log(pAequorFactory.mutate());

// check step 6
firstpAequorFactory.willLikelySurvive();
console.log(firstpAequorFactory.willLikelySurvive());


// console.log(firstpAequorFactory);

// step 7 function to store only survived pAequor ie willLikelySurvive must return true

const survivedpAequor = [];
for (let i = 1; survivedpAequor.length < 30; i++) {
  let arraypAequorFactory = pAequorFactory(i,mockUpStrand());
  if (arraypAequorFactory.willLikelySurvive()) {
    survivedpAequor.push(arraypAequorFactory);
  }

}
console.log(survivedpAequor);
console.log(survivedpAequor.length);

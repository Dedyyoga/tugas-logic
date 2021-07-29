
// No 1
function nama (genap) {
    if (typeof genap === "string"){
        var test = "";
        for (i = 1; i <= genap.length; i +=2 ){
        test = test + genap[i];
        } 
        return test 
    }else{
        return "ini bukan string";
    }
    
}
console.log(nama(123))
console.log(nama("test"))


// No 2

function count (spasi){
    if (typeof spasi !== "string")return"bukan string";
        let space = 0;
        for (let i = 0; i < spasi.length; i++){
            if (spasi[i] === " ") {
                space += 1;
            }
            
        }
        if( spasi.length > 0 ){
            return space + 1;
        } else{
            return 0
        }

}
console.log(count("pratama"))
console.log(count("helliello"))
console.log(count("hello heloo heloo"))
console.log(count(""))
console.log(count(1234))


//  No 3

function CountVowel (text){
    if (typeof text !== "string")return"bukan string";

    let vokal = 0;
    let consonant = 0;

    const list = ["a","i","u","e","o"];
    const check = (karakter) => {
         for ( let i = 0; i < list.length; i++ ){
             if (list[i] === karakter ) return true;
         }
       return false;
    }
     for ( let j = 0; j < text.length; j++){
         console.log(check(text[j]))
         if (check(text[j])){
            vokal = vokal + 1;
         }else{
             consonant = consonant + 1;
         }
     }
     return "jumblah vokal " + vokal + " jumblah consonant " + consonant;
}
console.log(CountVowel("pratama"))
console.log(CountVowel("hellohello"))
console.log(CountVowel("hello heloo heloo"))
console.log(CountVowel(""))
console.log(CountVowel(12345))



// soal no 4

function reverse (balikan){
    if (typeof balikan !== "string")return"bukan string";
    
    let hasil = "";
    for ( let i = balikan.length -1; i>=0; i--){
        hasil += balikan[i]
     }
    return hasil
}

console.log(reverse("hello"))
console.log(reverse("world!"))
console.log(reverse(""))




// soal no 5

function palindrome (balikan) {
    if (typeof balikan !== "string")return"bukan string";
    let hasil = "";
    
    for( let i = balikan.length -1; i>= 0; i--){
        hasil += balikan[i];
    }
    return balikan.length > 1 && hasil === balikan
}
console.log(palindrome("kasur"))
console.log(palindrome("kasur rusak"))
console.log(palindrome("hayolo"))



// soal 6

function exchange (total){
 let hasil = "";
 const koin = [1000, 500, 200, 50, 1, 1];
 const cek = (pecahan) => {
     while (total >= pecahan){
         hasil += pecahan + ",";
         total-= pecahan;
        }
    }
 for ( i = 0; i <= koin.length; i++ ){
    cek(koin[i]);
 }
  return hasil;
}
console.log(exchange(600))

// no 7

function asterik (loop){
    for (let i = 0; i <=loop; i++){
        let bintang = "";
        for (let j = 0; j < i; j++)
            bintang += "*";
            console.log(bintang);
    }
}
console.log(asterik(10))


// no 8
function piramida (tinggi){
        for (let i = 0; i <=tinggi; i++){

            let bintang = "";
            for (let j = tinggi -i; j > 0; j--)
                bintang += " ";
            for (let k = 0; k < i; k++)
                bintang += "*";
            for (let o = 1; o < i; o++)
                bintang += "*"
                console.log(bintang);
        }
    }
    console.log(piramida(3))





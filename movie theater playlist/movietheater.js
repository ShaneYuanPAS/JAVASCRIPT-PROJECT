

// 1. Get the value of the input
// 2. Store the values in a variable
// 3. Add the values into your movie arrays
let movienames = ['American Made','TENET', 'Back to the Future', 'Jurassic Park', 'Indiana Jones - Raidaers of the Lost Ark' , 'STAR WARS - A New Hope']
let movieurl = ['https://i.pinimg.com/originals/28/bd/bc/28bdbc37717a74d9b0370d01327d6b67.jpg', 'https://i.pinimg.com/originals/c2/44/ea/c244ea717ad0a881f62664f99d2fdef7.jpg' , 'https://m.media-amazon.com/images/I/71pwYomGC1L._AC_SL1418_.jpg' ,'https://i.pinimg.com/originals/69/67/6e/69676eafeae10e6c3366bc9b1336b75d.jpg' , 'https://i.pinimg.com/originals/2c/e2/f5/2ce2f5767e6f0001ef38b4b1a4d25a00.jpg' , 'https://starwarsblog.starwars.com/wp-content/uploads/2017/05/1-star-wars-poster.jpg'
]


document.querySelector(".fmovietitle").innerHTML = movienames[0]
document.querySelector(".fmoviepic").innerHTML = `<img src= "${movieurl[0]}">`

document.querySelector(".smovietitle").innerHTML = movienames[1]
document.querySelector(".smoviepic").innerHTML = `<img src= "${movieurl[1]}">`

document.querySelector(".tmovietitle").innerHTML = movienames[2]
document.querySelector(".tmoviepic").innerHTML = `<img src= "${movieurl[2]}">`

document.querySelector(".fomovietitle").innerHTML = movienames[3]
document.querySelector(".fomoviepic").innerHTML = `<img src= "${movieurl[3]}">`

document.querySelector(".fimovietitle").innerHTML = movienames[4]
document.querySelector(".fimoviepic").innerHTML = `<img src= "${movieurl[4]}">`

document.querySelector(".simovietitle").innerHTML = movienames[5]
document.querySelector(".simoviepic").innerHTML = `<img src= "${movieurl[5]}">`



function add() {
    
// 1. get the new movie name from the input
    let moviename = document.querySelector("#moviename").value
    movienames.unshift(moviename)
    movienames.pop(moviename)
// 2. add the new movie into the movienames array

// 3. get the movie poster link
    let movie = document.querySelector("#url").value
    movieurl.unshift(movie)
    movieurl.pop(movie)
// 4. add the movie poster link to the movieposter array



document.querySelector(".fmovietitle").innerHTML = movienames[0]
document.querySelector(".fmoviepic").innerHTML = `<img src= "${movieurl[0]}">`

document.querySelector(".smovietitle").innerHTML = movienames[1]
document.querySelector(".smoviepic").innerHTML = `<img src= "${movieurl[1]}">`

document.querySelector(".tmovietitle").innerHTML = movienames[2]
document.querySelector(".tmoviepic").innerHTML = `<img src= "${movieurl[2]}">`

document.querySelector(".fomovietitle").innerHTML = movienames[3]
document.querySelector(".fomoviepic").innerHTML = `<img src= "${movieurl[3]}">`

document.querySelector(".fimovietitle").innerHTML = movienames[4]
document.querySelector(".fimoviepic").innerHTML = `<img src= "${movieurl[4]}">`

document.querySelector(".simovietitle").innerHTML = movienames[4]
document.querySelector(".simoviepic").innerHTML = `<img src= "${movieurl[5]}">`
}
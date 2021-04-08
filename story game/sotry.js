function startgame() {
    document.getElementById("start").onclick = stayinclass; 
    document.getElementById("start").innerText = "Stay in the classroom" ;
    document.getElementById("quit").onclick = leave; 
    document.getElementById("quit").innerText = "leave the classroom" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You enter the classroom of web development and there's no one......what will you do "
    document.querySelector("body").style.backgroundImage = 'url("https://cdn-res.keymedia.com/cms/images/au/130/0314_637269086154300500.jpg")'
}

function stayinclass() {
    document.getElementById("start").onclick = dotheassign; 
    document.getElementById("start").innerText = "do the assignment" ;
    document.getElementById("quit").onclick = playlol; 
    document.getElementById("quit").innerText = "play League of Legends" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You were alone in the classroom, Mr.Kung post the assignment already this morning. You will..??"
    document.querySelector("body").style.backgroundImage = 'url("https://i.ytimg.com/vi/UEFgW--0094/maxresdefault.jpg")'
}

function leave() {
    document.getElementById("start").onclick = straighttohos; 
    document.getElementById("start").innerText = "Straight to the hospital" ;
    document.getElementById("quit").onclick = rightside; 
    document.getElementById("quit").innerText = "right side for an taxi" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You are wondering at the hallway, but it's class time. You suddenly felt hungry and bored... you wanted to skip school from the side door to the hospital. Walk.....?  "
    document.querySelector("body").style.backgroundImage = 'url("https://www.jacksons-security.co.uk/-/media/jacksons-security/applications-and-sectors/schools/automatic-gates-at-schools/electric-school-gate.jpg")'
}

function dotheassign() {
    document.getElementById("start").onclick = createminigame; 
    document.getElementById("start").innerText = "Draw a picture with html" ;
    document.getElementById("quit").onclick = copycode; 
    document.getElementById("quit").innerText = "ask for your classmate's code" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You start the easy JavaScript assignment that is your Q4 final project. You must use all the skill including CSS to create something interesting. But you don't know what to do.... You....? "
    document.querySelector("body").style.backgroundImage = 'url("https://miro.medium.com/max/18438/1*Fp43zS64ZPoWi4IAz1n3MA.jpeg")'

}
function playlol() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Restart the game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You enter Lol. You are ready to play an match. You enter the game and suddenly.....SOMEONE smash your laptop!!! You're fxxked...... GAME OVER~~~~~~~ "
    document.querySelector("body").style.backgroundImage = 'url("https://miro.medium.com/max/540/1*s5kcHUrJWjvsWj2m3lZdoA.gif")'

}
function straighttohos() {
    document.getElementById("start").onclick = camouflage; 
    document.getElementById("start").innerText = "Wear your jacket and a hat to camouflage yourself" ;
    document.getElementById("quit").onclick = savage; 
    document.getElementById("quit").innerText = "You think you're not a coward... You directly walk towards them and didn't give a shit" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You run striahgt toward the hospital, but you saw few teachers walking just 10m away from you. You will....  "
    document.querySelector("body").style.backgroundImage = 'url("https://st.depositphotos.com/2850099/5086/v/950/depositphotos_50865307-stock-illustration-fork-in-the-road-sign.jpg")'
}
function rightside() {
    document.getElementById("start").onclick = ask; 
    document.getElementById("start").innerText = "Ask the teacher not to tell he/she saw you...." ;
    document.getElementById("quit").onclick = ticket; 
    document.getElementById("quit").innerText = "Walk directly to buy an ticket" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You walk toward the road. And you saw one taxi parking beside. You hop in the car and went to HSR station. You arrived at the HSR station. But suddenly you meet your teacher who just arravied back at Hsinchu....What will you do?? "
    document.querySelector("body").style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/9/95/Taiwan_HighSpeedRail_HsinChu_Station_3.JPG")'
}
function createminigame() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Restart the game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You are struggling what to do in the assignment. You draw an DINO runner because you think it's Mr.Kung's favorite game. But the code couldn't work and you don't have time... And you fail the assignment......GAME OVER....."
    document.querySelector("body").style.backgroundImage = 'url("https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino_with_hat.gif")'
}
function copycode() {
    document.getElementById("start").onclick = assignment; 
    document.getElementById("start").innerText = "Just do the history assignment..." ;
    document.getElementById("quit").onclick = fookoff; 
    document.getElementById("quit").innerText = "Tell them to fx#k off 😡!!!!!" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "Your classmate sent you their code. You ⌘C and ⌘V on your assignment. Mr.Kung didn't found out that. But your classmate say you must help them because you owe them once. You are ask to help them finish their history hw....You will....? "
    document.querySelector("body").style.backgroundImage = 'url("https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367779395i/17847425._UY630_SR1200,630_.jpg")'
}
function camouflage() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Try another option in game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You wear a jacket and a hat and walk very fast. The teachers were all busy talking and not really looking at you. You escape away and walk into the hospital and went buy some food at the basement resturant. You felt so happy......VICTORY~~~~!!!!! "
    document.querySelector("body").style.backgroundImage = 'url("https://p1-news.hfcdn.com/p1-news/MjAwOTA4Mm5ld3M,/ba85c15c72a68f8b_1200x573.jpg/qs/w=600&h=600&r=16888")'
}
function savage() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Try another option in game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You walk infront of the teacher. One of the teacher Mr.Burke recognize you.!!!! You continue to walk to the hospital, they called your name....They touch your sholder and you just punch one of the teacher!!! Everyone was shocked....But you accidently fall one the floor when you run.......You got BUSTED.... "
    document.querySelector("body").style.backgroundImage = 'url("https://i.pinimg.com/originals/24/d0/e5/24d0e59984a2f347ae9addb459dd6bbd.gif")'
}
function ask() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Try another option in game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "The teacher said that he/she was tired so wouldn't even want to report you... You felt appriciated to him/her. You ask the teacher for a meal...And the teacher even pay for your meal!!!!!! .....MISSION ACCOMMPLISHED "
    document.querySelector("body").style.backgroundImage = 'url("https://playvs.zendesk.com/hc/article_attachments/360047005033/image-8.gif")'
}
function ticket() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Try another option in game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You buy an HSR ticket and get on the train to Taichung. You finally escape away from your school. You could now relax and even stay some few days to chill around..... "
    document.querySelector("body").style.backgroundImage = 'url("https://forum.shanniiwrites.com/uploads/default/original/3X/8/0/80e6a4b3fec170785c9817371015a3de24d2e22b.gif")'
}
function assignment() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Try another option in game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You are been used as a errand man/girl....They would just keep on asking you to help him/her to do their works...You felt so tired and you just don't want to do anything..... "
    document.querySelector("body").style.backgroundImage = 'url("https://kinsta.com/se/wp-content/uploads/sites/9/2018/08/google-404-felsida-1.png")'
}
function fookoff() {
    document.getElementById("start").onclick = sorry; 
    document.getElementById("start").innerText = "Say I'm sorry and I care about you" ;
    document.getElementById("quit").onclick = fine; 
    document.getElementById("quit").innerText = "OKKK fine I'll help you" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "He/she was mad and don't know why are you so mad...!?!!? They just want to be nice to you.....But you made them very sad that he/she thinks WTF....? You say sorry to them and you....?? "
    document.querySelector("body").style.backgroundImage = 'url("https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1367779395i/17847425._UY630_SR1200,630_.jpg")'
}
function sorry() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Try another option in game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "After you say that....he/she suddenly felt so gratified and even say that It's ok and I also do care about you....You both felt happy and went out for an lunch.....  "
    document.querySelector("body").style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5J2LaKkJ-FLAeBA-636F56B6PA3lXqzUetih45GQzhA50Yg9Mpd9Q7tifhAoWQun-GAA&usqp=CAU")'
}
function fine() {
    document.getElementById("start").onclick = quitgame; 
    document.getElementById("start").innerText = "quit game" ;
    document.getElementById("quit").onclick = reload; 
    document.getElementById("quit").innerText = "Try another option in game" ;
    document.querySelector(".game").style.color = "white";
    document.querySelector(".textinside").innerText = "You still help them to do the history assignment. But he/she felt that it's ok and even wanted to do the work with you. You both do the work together and both play around with each other....Everything was so peaceful....You both looks at each other and~~~~~~~ TO BE CONTINUED"
    document.querySelector("body").style.backgroundImage = 'url("https://i.ytimg.com/vi/iycim_HB6kM/maxresdefault.jpg")'
}







function left() {
    console.log("left")
}
function right() {
    console.log("Right")
}
function quitgame() {
    window.close()
}
function reload() {
   location.reload()
}



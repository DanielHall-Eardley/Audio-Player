const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

let songs = [
{
id: 0,
title: "Jumanji, J-trick & Taco Cat: FERAL is KINKY",
src:"/music/J-Trick.mp3",
artistBio:"A compilation between and Australian Dj and two popular Trap artists",
genre:"#Disco",
songDesc:"Upbeat club banger",
},
{
id: 1,
title: "Zhu & Lana del Rey: West Coast",
src:"/music/Lana-Del-Ray.mp3",
artistBio:"Lana Del Rey is a country singer whose soulful music catapulted her into the spotlight",
genre:"#Edm",
songDesc:"Laid back remix of Lana Del Ray's melacholy \"West Coast\"",

},
{
id: 2,
title: "Lana Del Ray: Summertime Sadness",
src:"/music/Lana.mp3",
artistBio:"Lana Del Rey is a country singer whose soulful music catapulted her into the spotlight",
genre:"#Chill #SummerVibes",
songDesc:"A song to make you nostaligic about summer days",
},
{
id:3,
title: "Apashe: Battle Royale",
src:"/music/Apashe-Battle-Royale.mp3",
artistBio:"Apashe gained fame for making what he calls 'fight music'",
genre:"#Fight Music",
songDesc:"Featured in 'Kingsmen: The Golden Circle'",
},
{
    id:4,
title: "Metallica: Enter The Sandman",
src:"/music/Metallica-Enter-Sandman.mp3",
artistBio:"A timeless hard rock band",
genre:"#RockvsEdm",
songDesc:"A classic with an EDM twist",
},
{
    id:5,
title: "Blues Sarceno: The River",
src:"/music/The-River-Blues-Saraceno.mp3",
artistBio:"Blues Sarceno pleased people's ears with his grungy blues",
genre:"#Dirty Blues",
songDesc:"Featured in a videogame",
}, 
{
    id:6,
title: "Led Zepplin: Immigrant",
src:"/music/Immigrant-Song.mp3",
artistBio:"Led Zepplin is a classic band from the golden age of rock and roll",
genre:"#Rock",
songDesc:"The God of Thunder's theme song",
},  
{
    id:7,
title: "War: Low Rider",
src:"/music/War-Low-Rider.mp3",
artistBio:"War what is it good for; absolutely nothing",
genre:"#Lowrider",
songDesc:"In millions of movies",
    }  
]

app.get("/Home", (req, res)=>{
    res.send(songs)
})

app.listen(8080, ()=>{
    console.log("running")
})
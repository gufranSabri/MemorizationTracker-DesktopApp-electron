const surahData = [
    { name: "Al-Fatihah", translation: "The Opening", numAyat: 7 },
    { name: "Al-Baqarah", translation: "The Cow", numAyat: 286 },
    { name: "Al-Imran", translation: "The Family of Imran", numAyat: 200 },
    { name: "An-Nisa", translation: "The Women", numAyat: 176 },
    { name: "Al-Maidah", translation: "The Table Spread", numAyat: 120 },
    { name: "Al-An'am", translation: "The Cattle", numAyat: 165 },
    { name: "Al-A'raf", translation: "The Heights", numAyat: 206 },
    { name: "Al-Anfal", translation: "The Spoils of War", numAyat: 75 },
    { name: "At-Tawbah", translation: "The Repentance", numAyat: 129 },
    { name: "Yunus", translation: "Jonah", numAyat: 109 },
    { name: "Hud", translation: "Hud", numAyat: 123 },
    { name: "Yusuf", translation: "Joseph", numAyat: 111 },
    { name: "Ar-Ra'd", translation: "The Thunder", numAyat: 43 },
    { name: "Ibrahim", translation: "Abraham", numAyat: 52 },
    { name: "Al-Hijr", translation: "The Rocky Tract", numAyat: 99 },
    { name: "An-Nahl", translation: "The Bee", numAyat: 128 },
    { name: "Al-Isra", translation: "The Night Journey", numAyat: 111 },
    { name: "Al-Kahf", translation: "The Cave", numAyat: 110 },
    { name: "Maryam", translation: "Mary", numAyat: 98 },
    { name: "Ta-Ha", translation: "Ta-Ha", numAyat: 135 },
    { name: "Al-Anbiya", translation: "The Prophets", numAyat: 112 },
    { name: "Al-Hajj", translation: "The Pilgrimage", numAyat: 78 },
    { name: "Al-Mu'minun", translation: "The Believers", numAyat: 118 },
    { name: "An-Nur", translation: "The Light", numAyat: 64 },
    { name: "Al-Furqan", translation: "The Criterion", numAyat: 77 },
    { name: "Ash-Shu'ara", translation: "The Poets", numAyat: 227 },
    { name: "An-Naml", translation: "The Ant", numAyat: 93 },
    { name: "Al-Qasas", translation: "The Narration", numAyat: 88 },
    { name: "Al-Ankabut", translation: "The Spider", numAyat: 69 },
    { name: "Ar-Rum", translation: "The Romans", numAyat: 60 },
    { name: "Luqman", translation: "Luqman", numAyat: 34 },
    { name: "As-Sajdah", translation: "The Prostration", numAyat: 30 },
    { name: "Al-Ahzab", translation: "The Combined Forces", numAyat: 73 },
    { name: "Saba", translation: "Sheba", numAyat: 54 },
    { name: "Fatir", translation: "The Originator", numAyat: 45 },
    { name: "Ya-Sin", translation: "Ya-Sin", numAyat: 83 },
    { name: "As-Saffat", translation: "Those Ranged in Ranks", numAyat: 182 },
    { name: "Sad", translation: "Sad", numAyat: 88 },
    { name: "Az-Zumar", translation: "The Crowds", numAyat: 75 },
    { name: "Ghafir", translation: "The Forgiver", numAyat: 85 },
    { name: "Fussilat", translation: "Explained in Detail", numAyat: 54 },
    { name: "Ash-Shura", translation: "The Consultation", numAyat: 53 },
    { name: "Az-Zukhruf", translation: "The Ornaments of Gold", numAyat: 89 },
    { name: "Ad-Dukhan", translation: "The Smoke", numAyat: 59 },
    { name: "Al-Jathiyah", translation: "The Kneeling", numAyat: 37 },
    { name: "Al-Ahqaf", translation: "The Sandhills", numAyat: 35 },
    { name: "Muhammad", translation: "Muhammad", numAyat: 38 },
    { name: "Al-Fath", translation: "The Victory", numAyat: 29 },
    { name: "Al-Hujurat", translation: "The Inner Apartments", numAyat: 18 },
    { name: "Qaf", translation: "Qaf", numAyat: 45 },
    { name: "Adh-Dhariyat", translation: "The Winnowing Winds", numAyat: 60 },
    { name: "At-Tur", translation: "The Mount", numAyat: 49 },
    { name: "An-Najm", translation: "The Star", numAyat: 62 },
    { name: "Al-Qamar", translation: "The Moon", numAyat: 55 },
    { name: "Ar-Rahman", translation: "The Beneficent", numAyat: 78 },
    { name: "Al-Waqi'ah", translation: "The Event", numAyat: 96 },
    { name: "Al-Hadid", translation: "The Iron", numAyat: 29 },
    { name: "Al-Mujadilah", translation: "The Pleading Woman", numAyat: 22 },
    { name: "Al-Hashr", translation: "The Banishment", numAyat: 24 },
    { name: "Al-Mumtahanah", translation: "The Examined One", numAyat: 13 },
    { name: "As-Saff", translation: "The Ranks", numAyat: 14 },
    { name: "Al-Jumu'ah", translation: "The Congregation", numAyat: 11 },
    { name: "Al-Munafiqun", translation: "The Hypocrites", numAyat: 11 },
    { name: "At-Taghabun", translation: "The Manifestation of Losses", numAyat: 18 },
    { name: "At-Talaq", translation: "The Divorce", numAyat: 12 },
    { name: "At-Tahrim", translation: "The Prohibition", numAyat: 12 },
    { name: "Al-Mulk", translation: "The Dominion", numAyat: 30 },
    { name: "Al-Qalam", translation: "The Pen", numAyat: 52 },
    { name: "Al-Haqqah", translation: "The Inevitable", numAyat: 52 },
    { name: "Al-Ma'arij", translation: "The Ways of Ascent", numAyat: 44 },
    { name: "Nuh", translation: "Noah", numAyat: 28 },
    { name: "Al-Jinn", translation: "The Jinn", numAyat: 28 },
    { name: "Al-Muzzammil", translation: "The Enshrouded One", numAyat: 20 },
    { name: "Al-Muddaththir", translation: "The Cloaked One", numAyat: 56 },
    { name: "Al-Qiyamah", translation: "The Resurrection", numAyat: 40 },
    { name: "Al-Insan", translation: "The Human", numAyat: 31 },
    { name: "Al-Mursalat", translation: "Those Sent Forth", numAyat: 50 },
    { name: "An-Naba", translation: "The Announcement", numAyat: 40 },
    { name: "An-Nazi'at", translation: "Those Who Drag Forth", numAyat: 46 },
    { name: "'Abasa", translation: "He Frowned", numAyat: 42 },
    { name: "At-Takwir", translation: "The Overthrowing", numAyat: 29 },
    { name: "Al-Infitar", translation: "The Cleaving", numAyat: 19 },
    { name: "Al-Mutaffifin", translation: "The Defrauding", numAyat: 36 },
    { name: "Al-Inshiqaq", translation: "The Splitting Open", numAyat: 25 },
    { name: "Al-Buruj", translation: "The Big Stars", numAyat: 22 },
    { name: "At-Tariq", translation: "The Night-Comer", numAyat: 17 },
    { name: "Al-A'la", translation: "The Most High", numAyat: 19 },
    { name: "Al-Ghashiyah", translation: "The Overwhelming", numAyat: 26 },
    { name: "Al-Fajr", translation: "The Dawn", numAyat: 30 },
    { name: "Al-Balad", translation: "The City", numAyat: 20 },
    { name: "Ash-Shams", translation: "The Sun", numAyat: 15 },
    { name: "Al-Lail", translation: "The Night", numAyat: 21 },
    { name: "Ad-Duha", translation: "The Morning Hours", numAyat: 11 },
    { name: "Al-Inshirah", translation: "The Consolation", numAyat: 8 },
    { name: "At-Tin", translation: "The Fig", numAyat: 8 },
    { name: "Al-Alaq", translation: "The Clot", numAyat: 19 },
    { name: "Al-Qadr", translation: "The Power, Fate", numAyat: 5 },
    { name: "Al-Bayyinah", translation: "The Clear Evidence", numAyat: 8 },
    { name: "Az-Zalzalah", translation: "The Earthquake", numAyat: 8 },
    { name: "Al-'Adiyat", translation: "The Chargers", numAyat: 11 },
    { name: "Al-Qari'ah", translation: "The Catastrophe", numAyat: 11 },
    { name: "At-Takathur", translation: "The Abundance of Wealth", numAyat: 8 },
    { name: "Al-'Asr", translation: "The Time", numAyat: 3 },
    { name: "Al-Humazah", translation: "The Slanderer", numAyat: 9 },
    { name: "Al-Fil", translation: "The Elephant", numAyat: 5 },
    { name: "Quraish", translation: "Quraish", numAyat: 4 },
    { name: "Al-Ma'un", translation: "The Small Kindnesses", numAyat: 7 },
    { name: "Al-Kawthar", translation: "The Abundance", numAyat: 3 },
    { name: "Al-Kafirun", translation: "The Disbelievers", numAyat: 6 },
    { name: "An-Nasr", translation: "The Help", numAyat: 3 },
    { name: "Al-Masad", translation: "The Palm Fiber", numAyat: 5 },
    { name: "Al-Ikhlas", translation: "The Purity", numAyat: 4 },
    { name: "Al-Falaq", translation: "The Daybreak", numAyat: 5 },
    { name: "An-Nas", translation: "The Mankind", numAyat: 6 }
]
let nosOfPages = [1,48,27,29.5,21.5,23,26,10,21,13.5,14,13.5,6.25,6.75,5.5,14.5,11.75,11.25,7.25,9.75,10,10,8,9.75,7.25,10,
    8.5,11,8,6.5,4,3,10,6.5,5.75,5.75,7,5.25,9,9.75,6,6.25,6.75,3,3.5,4.5,4,4.5,2.5,2.75,2.75,2.5,3.5,3,3,3.25,4.25,3.5,3.5,
    2.5,1.5,1.5,1.5,2,2,2,2.5,2,2,1.75,1.75,2,1.5,2,1,2,1.5,1.5,1.5,1,1,0.75,1.5,0.75,1,0.5,0.75,1,1.25,0.5,0.5,0.5,0.5,0.25,
    0.25,0.75,0.25,1,0.25,0.5,0.5,0.25,0.25,0.5,0.25,0.25,0.5,0.25,0.3,0.3,0.3,0.2,0.2,0.2]

let juzSurahMap = [
    [1,2],
    [2],
    [2,3],
    [3,4],
    [4],
    [4,5],
    [5,6],
    [6,7],
    [7,8],
    [8,9],
    [9,10,11],
    [11,12],
    [12,13,14],
    [15,16],
    [17,18],
    [18,19,20],
    [21,22],
    [23,24,25],
    [25,26,27],
    [27,28,29],
    [29,30,31,32,33],
    [33,34,35,36],
    [36,37,38,39],
    [39,40,41],
    [41,42,43,44,45],
    [46,47,48,49,50,51],
    [51,52,53,54,55,56,57],
    [58, 59, 60, 61, 62, 63, 64, 65, 66],
    [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77],
    [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114]
]

let memList = [], revlist = []
let pageCount = 0, noOfJuz = 0, totalNoOfPages=0;

jQuery(function(){
    $("#homeBtn").on('click',function(){
        $("#more").slideUp(500)
        $("#surah").slideUp(500)
        setTimeout(()=>$("#home").slideDown(),500)
        
        setTimeout(()=>loadStats(),750)
        loadTodo()

        $(this).css("border","2px solid gray")
        $("#surahBtn").css("border","none")
        $("#moreBtn").css("border","none")
    })
    $("#surahBtn").on('click',function(){
        $("#more").slideUp(500)
        $("#home").slideUp(500)
        setTimeout(()=>$("#surah").slideDown(),500)

        loadSurahs(document.getElementById("showMem").checked)

        $(this).css("border","2px solid gray")
        $("#homeBtn").css("border","none")
        $("#moreBtn").css("border","none")
    })
    $("#moreBtn").on('click',function(){
        $("#home").slideUp(500)
        $("#surah").slideUp(500)
        setTimeout(()=>$("#more").slideDown(),500)

        $(this).css("border","2px solid gray")
        $("#surahBtn").css("border","none")
        $("#homeBtn").css("border","none")
    })
    $("#closePopup").on('click',()=>$('#popupDiv').fadeOut())

    dataTransfer.on('update:done', () =>{
        loadSurahs(document.getElementById("showMem").checked)
        loadStats()
        loadTodo()
    });

    document.getElementById("showMem").addEventListener('change', ()=>loadSurahs(document.getElementById("showMem").checked))
    document.getElementById("showAll").addEventListener('change', ()=>loadSurahs(document.getElementById("showMem").checked))

    $("#homeBtn").trigger('click')
})

function getUserData(){
    memList = [], revlist = [], pageCount = 0, noOfJuz = 0, totalNoOfPages=0;

    let data = dataTransfer.getData()
    memList = data.split("\n")[0].split(":")[1].split(",").map(function(item){return parseInt(item);})
    revlist = data.split("\n")[1].split(":")[1].split(",").map(function(item){return parseInt(item);})

    memList.splice(0,1)
    revlist.splice(0,1)

    for (let i = 0; i < nosOfPages.length; i++) totalNoOfPages+= nosOfPages[i]
    for (let i = 0; i < memList.length; i++) pageCount+= nosOfPages[memList[i]-1]
    for (let i = 0; i < juzSurahMap.length; i++){
        let juzMemorized = true
        for (let j = 0; j < juzSurahMap[i].length; j++) {
            if(!memList.includes(juzSurahMap[i][j])){
                juzMemorized=false;
                break
            }
        }
        if(juzMemorized)noOfJuz++;
    }
}

function loadStats() {
    getUserData()

    var can = document.getElementById('canvas');
    var spanPercent = document.getElementById('percent');
    var c = can.getContext('2d');
   
    var posX = can.width / 2;
    var posY = can.height / 2;
    var fps = 1000 / 200;
    var percent = 0;
    var onePercent = 360 / 100;
    var result = onePercent * parseInt(pageCount/totalNoOfPages*100);
    
    c.lineCap = 'round';
    arcMove();
    
    function arcMove(){
        var deegres = 0;
        var acrInterval = setInterval(function() {
            deegres += 1;
            c.clearRect( 0, 0, can.width, can.height );
            percent = deegres / onePercent;

            spanPercent.innerHTML = percent.toFixed();

            c.beginPath();
            c.arc(posX, posY, 48, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360));
            c.strokeStyle = '#b1b1b1';
            c.lineWidth = '10';
            c.stroke();

            c.beginPath();
            c.strokeStyle = '#008fb3';
            c.lineWidth = '10';
            c.arc(posX, posY, 55, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres));
            c.stroke();
            if( deegres >= result ) clearInterval(acrInterval);
        }, fps);
    }

    document.getElementById("statsDiv").innerHTML = ''
    
    var noPagesPromptSpan = document.createElement('span')
    noPagesPromptSpan.style.textDecoration = "underline";
    noPagesPromptSpan.innerHTML = "Number of Pages Memorized:"

    var noPages = document.createElement('span')
    noPages.style.color = "wheat";
    noPages.innerHTML = "&nbsp;&nbsp;" + pageCount

    var noSurahsPromptSpan = document.createElement('span')
    noSurahsPromptSpan.style.textDecoration = "underline";
    noSurahsPromptSpan.innerHTML = "Number of Surahs Memorized:"

    var noSurahs = document.createElement('span')
    noSurahs.style.color = "wheat";
    noSurahs.innerHTML = "&nbsp;&nbsp;" + memList.length

    var noJuzPromptSpan = document.createElement('span')
    noJuzPromptSpan.style.textDecoration = "underline";
    noJuzPromptSpan.innerHTML = "Number of Juz Memorized:"

    var noJuz = document.createElement('span')
    noJuz.style.color = "wheat";
    noJuz.innerHTML = "&nbsp;&nbsp;" + noOfJuz

    var noJuzByPagesPromptSpan = document.createElement('span')
    noJuzByPagesPromptSpan.style.textDecoration = "underline";
    noJuzByPagesPromptSpan.innerHTML = "Juz by Number of Pages:"

    var noJuzByPages = document.createElement('span')
    noJuzByPages.style.color = "wheat";
    noJuzByPages.innerHTML = "&nbsp;&nbsp;" + parseInt(pageCount/20)

    document.getElementById("statsDiv").appendChild(noPagesPromptSpan)
    document.getElementById("statsDiv").appendChild(noPages)

    document.getElementById("statsDiv").appendChild(document.createElement("br"))
    document.getElementById("statsDiv").appendChild(document.createElement("br"))

    document.getElementById("statsDiv").appendChild(noSurahsPromptSpan)
    document.getElementById("statsDiv").appendChild(noSurahs)

    document.getElementById("statsDiv").appendChild(document.createElement("br"))
    document.getElementById("statsDiv").appendChild(document.createElement("br"))

    document.getElementById("statsDiv").appendChild(noJuzPromptSpan)
    document.getElementById("statsDiv").appendChild(noJuz)

    document.getElementById("statsDiv").appendChild(document.createElement("br"))
    document.getElementById("statsDiv").appendChild(document.createElement("br"))

    document.getElementById("statsDiv").appendChild(noJuzByPagesPromptSpan)
    document.getElementById("statsDiv").appendChild(noJuzByPages)
}

function loadSurahs(showMemorizedOnly){
    getUserData()

    document.getElementById("surahView").innerHTML = ""
    for (let i = 0; i < surahData.length; i++) {
        let item = document.createElement("div")            
        item.className = "surahItem"
        
        //surah number
        let surahNumber = document.createElement("div")
        surahNumber.className = "surahNumber"

        let spanSurahNo = document.createElement('span')
        spanSurahNo.className = "surahNum"
        spanSurahNo.innerHTML = i+1

        surahNumber.appendChild(spanSurahNo)

        //surah names
        let surahNames = document.createElement("div")
        surahNames.className = "surahNames"

        let spanSurahNameArb = document.createElement('span')
        spanSurahNameArb.className = "surahArb"
        spanSurahNameArb.innerHTML = surahData[i]["name"]

        let spanSurahNameEng = document.createElement('span')
        spanSurahNameEng.className = "surahEng"
        spanSurahNameEng.innerHTML = surahData[i]["translation"]

        surahNames.appendChild(spanSurahNameArb)
        surahNames.appendChild(document.createElement("br"))
        surahNames.appendChild(spanSurahNameEng)

        let spanNumPages = document.createElement('span')
        spanNumPages.className = "numPages"
        spanNumPages.innerHTML = surahData[i]["numAyat"]

        item.appendChild(surahNumber)
        item.appendChild(surahNames)
        item.appendChild(spanNumPages)

        document.getElementById("surahView").appendChild(item)
        item.addEventListener('click',()=>{
            $("#popupDiv").fadeIn()
            $("#popupSurahName").html(surahData[i]["name"])
            $("#popupNoOfPages").html(`Number of Pages: ${nosOfPages[i]}`)
            $("#popupNoOfAyat").html(`Number of Ayat: ${surahData[i]["numAyat"]}`)

            if(memList.includes(i+1)){
                $("#popupAddToMemList").html("Remove from Memorized List")
                $("#popupAddToMemList").css("background-color","#b38f00")
            }
            else{
                $("#popupAddToMemList").html("Add to Memorized List")
                $("#popupAddToMemList").css("background-color","green")
            }

            if(revlist.includes(i+1)){
                $("#popupAddToRevList").html("Remove from Revision List")
                $("#popupAddToRevList").css("background-color","#b38f00")
            }
            else{
                $("#popupAddToRevList").html("Add to Revision List")
                $("#popupAddToRevList").css("background-color","green")
            }

            document.getElementById("popupAddToMemList").onclick = ()=>{
                prompt("Memorization list updated!",'green')
                $("#popupDiv").fadeOut()
                dataTransfer.send("update:memorized",memList.includes(i+1)?-(i+1):i+1)
            }
            
            document.getElementById("popupAddToRevList").onclick = ()=>{
                if(!memList.includes(i+1))prompt("You did not memorize this surah!!","red")
                else {
                    prompt("Revision list updated!",'green')
                    dataTransfer.send("update:revision",revlist.includes(i+1)?-(i+1):i+1)
                    $("#popupDiv").fadeOut()
                }
            }
        })

        if(!memList.includes(i+1)&&showMemorizedOnly)item.style.display = "none"
    }
}
function loadTodo(){
    getUserData()
    document.getElementById("todo").innerHTML = '<span class="groupHeading">TODO</span><br>'
    if(revlist.length==0)document.getElementById("todo").innerHTML+="<p style='text-align:center'>No surahs left to revise!</p>"

    for (let i = 0; i < revlist.length; i++) {
        var listItem = document.createElement('div')
        listItem.className = 'listItem'
        listItem.innerHTML+=`<input id="${revlist[i]}" type="checkbox"/>`
        listItem.innerHTML+=`<span>Revise Surah ${surahData[revlist[i]-1]['name']}</span>`

        document.getElementById("todo").appendChild(listItem)

        document.getElementById(revlist[i]).addEventListener('change', ()=>{
            prompt("Revision list updated!",'green')
            dataTransfer.send("update:revision",-revlist[i])
            $("#popupDiv").fadeOut()
        })
    }
}

function prompt(message, color) {
    Toastify.toast({
        text: message,
        duration: 1000,
        close: false,
        style: {
            background: color,
            color: 'white',
            textAlign: 'center',
        },
    });
}
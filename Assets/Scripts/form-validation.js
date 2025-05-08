window.onload = function() {
    loadInitialData()
    var table = document.getElementById("data-table");
    
};

function loadInitialData() {
    const initialData = [
        {
            name: "Nagy Béla",
            email: "nagybela@gmail.com",
            gender: "Férfi",
            favteam:"Real Madrid",
            favplayer: "Cristiano Ronaldo"

        },
        {

            name: "Nagy János",
            email: "nagyjanos@gmail.com",
            gender: "Férfi",
            favteam:"Manchester United",
            favplayer: "Cristiano Ronaldo"
        },
    ];

    const table = document.getElementById("data-table");

    initialData.forEach(data => {
        var newRow = table.insertRow();
        newRow.insertCell(0).innerText = data.name;
        newRow.insertCell(1).innerText = data.email;
        newRow.insertCell(2).innerText = data.gender;
        newRow.insertCell(3).innerText = data.favteam;
        newRow.insertCell(4).innerText = data.favplayer;

        var actionsCell = newRow.insertCell(5);
        actionsCell.innerHTML = `
          <button onclick="editRow(this)"><i class="fas fa-edit"></i></button>
          <button onclick="deleteRow(this)"><i class="fas fa-trash"></i></button> `;
    });

    if (window.FontAwesome && FontAwesome.dom) {
        FontAwesome.dom.i2svg();
    }

}


function validate() {
    const genders = {
        "male": "Férfi",
        "female": "Nő",
    }
   
   
   
   
   
    const favteams = {
            "RMA":"Real Madrid",
            "B04": "Bayer Leverkusen",
"ARS": "Arsenal",
"LIV": "Liverpool",
"BAR": "Barcelona",
"FCB": "Bayern München",
"INT": "Inter Milan",
"PSG": "Paris Saint-Germain",
"ATM": "Atlético Madrid",
"BVB": "Borussia Dortmund",
"ATA": "Atalanta",
"ACM": "AC Milan",
"RBL": "RB Leipzig",
"PSV": "PSV Eindhoven",
"ROM": "AS Roma",
"SCP": "Sporting CP",
"AVL": "Aston Villa",
"RSO": "Real Sociedad",
"LAZ": "Lazio",
"GIR": "Girona",
"POR": "FC Porto",
"VFB": "VfB Stuttgart",
"MUN": "Manchester United",
"FEY": "Feyenoord",
"BEN": "Benfica",
"WHU": "West Ham United",
"JUV": "Juventus",
"NEW": "Newcastle United",
"ATH": "Athletic Bilbao",
"CHE": "Chelsea",
"FIO": "Fiorentina",
"TOT": "Tottenham Hotspur",
"BHA": "Brighton & Hove Albion",
"USG": "Union Saint-Gilloise",
"NAP": "Napoli",
"VIL": "Villarreal",
"BOL": "Bologna",
"GAL": "Galatasaray",
"OM": "Olympique de Marseille",
"LIL": "Lille",
"FEN": "Fenerbahçe",
"MON": "AS Monaco",
"RAN": "Rangers",
"BET": "Real Betis",
"LEN": "RC Lens",
"SCF": "SC Freiburg",
"BRA": "Sporting Braga",
"REN": "Stade Rennais",
"CEL": "Celtic"

            
    }
    const favplayers = {

    "CR7":"Cristiano Ronaldo",
    
        "CR7": "Cristiano Ronaldo",
        "LM10": "Lionel Messi",
        "DM10": "Diego Maradona",
        "PE10": "Pelé",
        "ZZ5": "Zinedine Zidane",
        "JC14": "Johan Cruyff",
        "GB7": "George Best",
        "FB5": "Franz Beckenbauer",
        "FP10": "Ferenc Puskás",
        "RN9": "Ronaldo Nazário",
        "GM13": "Gerd Müller",
        "ADS9": "Alfredo Di Stéfano",
        "MP10": "Michel Platini",
        "ZI10": "Zico",
        "GA7": "Garrincha",
        "BC9": "Bobby Charlton",
        "PM3": "Paolo Maldini",
        "RO11": "Romário",
        "GM9": "Giuseppe Meazza",
        "AI8": "Andrés Iniesta",
        "FB6": "Franco Baresi",
        "MVB9": "Marco van Basten",
        "EU10": "Eusébio",
        "XA6": "Xavi",
        "CA4": "Carlos Alberto",
        "RO10": "Ronaldinho",
        "RG8": "Ruud Gullit",
        "MN1": "Manuel Neuer",
        "SO8": "Sócrates",
        "RK10": "Raymond Kopa",
        "LY1": "Lev Yashin",
        "LM8": "Lothar Matthäus",
        "SM7": "Stanley Matthews",
        "VM10": "Valentino Mazzola",
        "MS10": "Matthias Sindelar",
        "LS9": "Luis Suárez (1935)",
        "FG11": "Francisco Gento",
        "BM6": "Bobby Moore",
        "ML10": "Michael Laudrup",
        "RB10": "Roberto Baggio",
        "KD7": "Kenny Dalglish",
        "PR9": "Paolo Rossi",
        "NH9": "Nándor Hidegkuti",
        "GN10": "Günter Netzer",
        "GB1": "Gianluigi Buffon",
        "DI6": "Didi",
        "RI11": "Rivellino",
        "KK7": "Kevin Keegan",
        "TH14": "Thierry Henry",
        "NS6": "Nilton Santos",
        "JMM10": "José Manuel Moreno",
        "OB11": "Oleg Blokhin",
        "JA7": "Jairzinho",
        "GS6": "Gaetano Scirea",
        "DZ1": "Dino Zoff",
        "JAS10": "Juan Alberto Schiaffino",
        "FW10": "Fritz Walter",
        "DP6": "Daniel Passarella",
        "GB1_DUP": "Gordon Banks",
        "GR10": "Gianni Rivera",
        "KHR11": "Karl-Heinz Rummenigge",
        "JC9": "John Charles",
        "DD9": "Dixie Dean",
        "GN9": "Gunnar Nordahl",
        "JN10": "Johan Neeskens",
        "DL10": "Denis Law",
        "SM10_DUP": "Sandro Mazzola",
        "DB10": "Dennis Bergkamp",
        "JJ7": "Jimmy Johnstone",
        "RK4": "Ronald Koeman",
        "OS10": "Omar Sívori",
        "TC10": "Teófilo Cubillas",
        "DA2": "Dani Alves",
        "EC7": "Eric Cantona",
        "JA10": "José Andrade",
        "CA2": "Cafu",
        "FR10": "Frank Rijkaard",
        "FA10": "Flórián Albert",
        "LM10_DUP": "Luka Modrić",
        "JF10": "Just Fontaine",
        "JM10": "Josef Masopust",
        "JG9": "Jimmy Greaves",
        "HS9": "Hugo Sánchez",
        "WR10": "Wayne Rooney",
        "PL21": "Philipp Lahm",
        "AS9": "Alan Shearer",
        "AS10": "Allan Simonsen",
        "SB5": "Sergio Busquets",
        "HS8": "Hristo Stoichkov",
        "RC3": "Roberto Carlos",
        "GF3": "Giacinto Facchetti",
        "PS1": "Peter Schmeichel",
        "SK8": "Sándor Kocsis",
        "LF7": "Luís Figo",
        "DS4": "Djalma Santos",
        "JZ4": "Javier Zanetti"
      
      
    }



    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let genderKey = document.getElementById("gender").value;
    let gender = genders[genderKey];



    
    let favteamKey = document.getElementById("favteam").value;
    let favteam = favteams[favteamKey];

    let favplayerKey = document.getElementById("favplayer").value;
    let favplayer = favplayers[favplayerKey];
     
    

    let nameRegex = /^([A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű]+ )+[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű]+$/;
    let emailRegex = /^[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű\.]+@[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű\.]+\.[A-ZÁÉÍÓÖŐÚÜŰa-záéíóöőúüű\.]+$/i;

    if (!nameRegex.test(name) || name.length < 4) {
        openDialog("A teljes névnek tartalmaznia kell egy vezeték- és egy keresztnevet! Valamint legalább 4 karakter hosszúnak kell lennie.");
        return;
    }    

    if (!emailRegex.test(email)) {
        openDialog("Kérlek adj meg egy érvényes email címet!");
        return;
    }    

    var table = document.getElementById("data-table");
    var newRow = table.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = email;
    newRow.insertCell(2).innerText = gender;
    newRow.insertCell(3).innerText = favteam;
    newRow.insertCell(4).innerText = favplayer;

    var actionsCell = newRow.insertCell(5);
    actionsCell.innerHTML = `
    <button onclick="editRow(this)"><i class="fas fa-edit"></i></button>
    <button onclick="deleteRow(this)"><i class="fas fa-trash"></i></button>
`;
  

    clearForm();
}    

function openDialog(content) {
    document.getElementById("dialog-msg").innerHTML = content;
    document.getElementById("error-dialog").showModal();
    document.getElementById("overlay").style.display = "block";
}    

function closeDialog() {
    document.getElementById("error-dialog").close();
    document.getElementById("overlay").style.display = "none";
}    

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gender").selectedIndex = 0;
    document.getElementById("favteam").selectedIndex = 0;
    document.getElementById("favplayer").selectedIndex = 0;
}    

function editRow(button) {
    var row = button.parentNode.parentNode;

    document.getElementById("name").value = row.cells[0].innerText;
    document.getElementById("email").value = row.cells[1].innerText;
    document.getElementById("gender").value = row.cells[2].innerText === "Férfi" ? "male" :
                                               row.cells[2].innerText === "Nő" ? "female" : "other";
    document.getElementById("favteam").value = row.cells[3].innerText;                                           
    document.getElementById("favplayer").value = row.cells[4].innerText;

    row.remove();
}    

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.remove();
}    

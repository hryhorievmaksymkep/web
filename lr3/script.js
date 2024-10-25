let picture = {
    name: "Зоряна ніч",
    creator: "Ван Гог",
    year: 1889,
    style: "Пост-імпресіонізм",
    isInMuseum: true,

    pictureInfo(){
        console.log(`Назва: ${this.name}, Автор: ${this.creator}, Рік видання: ${this.year}, Стиль: ${this.style}, В музеї: ${this.isInMuseum ? "Так" : "Ні"}`);
    }
}

picture.pictureInfo()

picture.isInMuseum = !picture.isInMuseum
picture.pictureInfo()

let pictures = [
    {name: "Джоконда", creator: "Леонардо да Вінчі", year: 1503, style: "Ренесанс", isInMuseum: true},
    {name: "Чорний трикутник", creator: "Максим Григор'єв", year: 2024, style: "Абстракція", isInMuseum: false}
];

function displayColectionOfPictures(){
    pictures.forEach(picture => {console.log(`Назва: ${picture.name}, Автор: ${picture.creator}, Рік видання: ${picture.year}, Стиль: ${picture.style}, В музеї: ${picture.isInMuseum ? "Так" : "Ні"}`);
    });
}

pictures.push({name: "Дівчина з перловою сережкою", creator: "Яна Вермера", year: 1665, style: "tronie", isInMuseum: true});
displayColectionOfPictures()

pictures.sort((a, b) => a.year - b.year);

let picturesThatNotInMuseum = pictures.filter(picture => !picture.isInMuseum);

let DaVinchiPicture = pictures.find(picture => picture.creator === "Леонардо да Вінчі");

console.log("Відсортовані за роком картини: ", pictures);
console.log("Картини, що не в музеї: ", picturesThatNotInMuseum);
console.log("Картини Леонардо да Вінчі: ", DaVinchiPicture);

function addPicture(){
    let name = prompt("Введіть назву картини:");
    let creator = prompt("Введіть творця картини:");
    let year = prompt("Введіть рік написання картини:");
    let style = prompt("Введіть стиль картини:");
    let isInMuseum = prompt("Картина в музеї(true/false):");

    pictures.push({name, creator, year, style, isInMuseum});
    displayColectionOfPictures();
}

addPicture();

function isInMuseumChange(){
    let changedPictureName = prompt("Введіть назву картини:");
    let changedPicture = pictures.find(picture => picture.name === changedPictureName);
    changedPicture.isInMuseum = !changedPicture.isInMuseum;
    displayColectionOfPictures();
}

isInMuseumChange();

function calculateAvarageYear(){
    let AverageYear = 0;
    pictures.forEach(picture => AverageYear += picture.year);
    AverageYear = AverageYear/pictures.length;
    console.log("Середній рік написання картин: ", AverageYear);
}

calculateAvarageYear();
let n = prompt("Скільки студентів у групі", 1)
for(i = 0; i<n; i++){
    let stud = prompt("Ім'я студента " + i+1, "Олег Кавуновський")
    document.write("<p>" + stud +  "</p>") 
}
document.write("</body>")
document.write("</html>")
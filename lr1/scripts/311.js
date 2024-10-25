let stud = prompt("Ім'я:","Ігор")
document.write("<p>" + stud +  "</p>") 

while(stud != null){
    stud = prompt("Ім'я:","Ігор")
    if (stud != null){
        document.write("<p>" + stud +  "</p>")
    }
}
document.write("</body>")
document.write("</html>")
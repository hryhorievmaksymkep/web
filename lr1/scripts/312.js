document.write("<table>")
document.write("<tr>")
document.write("<td></td>")
document.write("<td>2</td>")
document.write("<td>3</td>")
document.write("<td>4</td>")
document.write("<td>5</td>")
document.write("<td>6</td>")
document.write("<td>7</td>")
document.write("<td>8</td>")
document.write("<td>9</td>")
document.write("<td>10</td>")
document.write("</tr>")

for(i = 2; i<=10; i++){
    document.write("<tr>")
    document.write("<td>" + i + "</td>")
    for(j = 2; j<=10; j++){
        let res = i * j
        document.write("<td>" + res + "</td>" + "    ")
    }
    document.write("</tr>")
}

document.write("</table>")
document.write("</body>")
document.write("</html>")
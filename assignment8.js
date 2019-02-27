<!DOCTYPE html>
<html>

<head>
    <style>
        table,th,td
         {
            
            border: solid 1px black;
            border-collapse: collapse;
            font-weight:bold;

        }
        
    </style>
</head>

<body>
    
    <button style="margin-left: 20%"onclick="clickAdd()">add</button><br>
    <div id="buttonfield"></div><br>

    <script>
       
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var datetext = document.createTextNode("DATE");
        th.appendChild(datetext);
        tr.appendChild(th);
        var th1 = document.createElement('th');
        var descriptiont = document.createTextNode("DESCRIPTION");
        th1.appendChild(descriptiont);
        tr.appendC                 hild(th1);
        table.appendChild(tr);


        function insertintable(addDate, addDesc) {
            var tr1 = document.createElement('tr');
            tr1.setAttribute('id', 'tr1')
            var th = document.createElement('th');
            var text1 = document.createTextNode(addDate);
            th.appendChild(text1);
            tr1.appendChild(th);
            var th1 = document.createElement('th');
            var text2 = document.createTextNode(addDesc);
            th1.appendChild(text2);
            tr1.appendChild(th1);
            var th2 = document.createElement('th');
            var deletebtn = document.createElement("BUTTON");
            deletebtn.innerText = "delete"
            deletebtn.setAttribute('id', 'delete');
            th2.appendChild(deletebtn);
            tr1.appendChild(th2);
            table.appendChild(tr1);
            document.body.appendChild(table);
            deleter();
        }
      
        function clickonadd() {
            var date = document.createElement("input");
            date.setAttribute("type", "date");
            date.setAttribute("id", "date");
            var description = document.createElement("input");
            description.setAttribute("placeholder", "Description");
            description.setAttribute("id", "description");
            var okbtn = document.createElement("BUTTON");
            okbtn.innerText = "ok"
            okbtn.setAttribute('id', 'ok');
            var cancelbtn = document.createElement("BUTTON");
            cancelbtn.innerText = "cancel"
            cancelbtn.setAttribute('id', 'cancel');

            var div1 = document.getElementById("buttonfield")
            div1.innerHTML = ""

            div1.appendChild(date);
            div1.appendChild(description);
            div1.appendChild(cancelbtn);
            div1.appendChild(okbtn);
            clicksubmit();
            clickdiscard();
        }

        function clickonsubmit() {
            document.getElementById("ok").addEventListener('click', function (event) {
                event.preventDefault();
                var addDate = document.getElementById("date").value;
                var addDesc= document.getElementById("description").value;
                insertIntoTable(addDate, addDesc);

            });
        }
        
        function clickondiscard() {
            document.getElementById("cancel").addEventListener('click', function (event) {
                event.preventDefault();
                var cancelDate = document.getElementById("date");
                var cancelDescriptionbox = document.getElementById("description");
                var okbtn = document.getElementById("ok");
                var cancelbtn = document.getElementById("cancel");
                cancelDate.remove();
                cancelDescriptionbox.remove();
                okbtn.remove();
                cancelbtn.remove();
            });
        }
        function deleter(){
            document.getElementById('delete').addEventListener('click',function(event){
            let row = document.getElementById("tr1");
            row.remove();
            });
        }
       
    </script>
</body>

</html>
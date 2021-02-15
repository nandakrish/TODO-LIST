$(function () {

    try {
        let count = [];
        $("#tbl1").on("change", ":checkbox", function () {
            // $(":checkbox").on("click",function chkchange(){
            // var checkbox = document.getElementsByClassName(".chkbox");
            // function chkchange() {            
            // alert("inside");
            var chkstatus=this.checked;
            let index=count.indexOf(this.id);
            let arritem=this.id;
            console.log(arritem,index);
            console.log(index);
            // // count++;
            // this.checked === true ? chkstatus = false : chkstatus = true;
            // this.checked===true?count++:count--;
            // console.log(this.checked,count, chkstatus);

            // // obj.checked==true?obj.checked=false:obj.checked=true;
            // if (count == 5) {
            //     alert("Congrats! 5 Tasks have been successfully completed!");
            //     count=0;
            // }

            //using Promise
            var promise2 = new Promise(function (resolve, reject) {

                console.log(this.id);
                if(chkstatus === true)
                {
                    if(index==-1){
                        count.push(arritem);
                    }
                   
                    /*if(count.indexOf(this.id)==-1){
                        count.push(this.id);
                    }
                    //count++ ;*/
                }
                else {
                    if(index!=-1){
                        count.splice(index,1);
                    }
                    //count-- ;
                }
                console.log(count,chkstatus);
                if (count.length == 6) {
                    resolve("Congrats! 5 Tasks have been successfully completed!");
                }
            });
            promise2
                .then(function (r) {
                    alert(r);
                    count = [];
                });
        });
        // }
        // for(let i=0;i<checkbox.length;i++){
        //     checkbox[i].onchange=chkchange();
        // }
        // function loadtable() {
        let tbl1 = document.getElementById("tbl1")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let List = JSON.parse(this.responseText);
                let item = List;
                // console.log(item);
                // let output = "<caption>Items to Buy<select name='Departmentselect' id='deptSelect'><option value='all'>All</option><option value='food'>Food Items</option><option value='stationary'>Stationary</option><option value='health'>Health</option></select></caption><tr><th>Sr.No.</th><th>Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
                // let deptSelect = document.getElementById("deptSelect");
                let output = "<caption></caption><tr><th>User Id</th><th>Id</th><th>Title</th><th>Completed</th></tr>";
                for (let i = 0; i < item.length; i++) {
                    output += "<tr>";
                    output += "<td>" + item[i].userId + "</td>";
                    output += "<td>" + item[i].id + "</td>";
                    output += "<td>" + item[i].title + "</td>";
                    // output += "<td>" + item[i].completed + "</td>";
                    // item[i].completed==true?{
                    output += "<td><input type='checkbox' id='chkbox"+ item[i].id +"'" + ((item[i].completed == true) ? 'checked disabled' : '') + " ></td>";
                    // output += "<td><input type='checkbox' onchange='chkchange()'  ></td>";
                    // onload='checkthis(this)'
                    // output += "<td><input type='checkbox' " + (item[i].completed=='true')?"checked":""; + "></td>";
                    // console.log((item[i].completed == true) ? 'checked' : '');
                }
                tbl1.innerHTML = output;
            }
        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        xhttp.send();
        // chkchange();
        // alert("outside");

    }
    catch (e) {
        document.getElementById("listdiv").innerHTML = e;
    }
    $("#logoutid").click(function(){location.replace("index.html");});
    
});
function display(usersArray){
    const TABLE=$("#users");
    let tr="";
    //travel the array
    for(let i=0; i<usersArray.length; i++){
        let user = usersArray[i];
        //create the tr
        tr=`
        <tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td style="background-color:${user.color}"></td>
        </tr>`;
        //append() the tr into the HTML
        TABLE.append(tr);
    }
// CREATE DELETE USER OPTION...

}

function init(){
    console.log("Listening users...");
    let users = readUsers();
    display(users);

}
window.onload=init; 

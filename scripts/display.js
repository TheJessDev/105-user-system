function display(){
    const TABLE=$("#users");
    let tr="";
    //travel the array
    for(let i=0; i<usersArray.length; i++){
        //create the tr
        tr=`
        <tr>
            <td>${user.email}</td>
            <td>${user.fname}</td>
            <td style="background-color:${user.color}"></td>
        </tr>`;
        //append() the tr into the HTML
        TABLE.append(tr);
    }


}

function init(){
    console.log("Listening users...");
    let users = readUsers();
    console.log(users);

}
window.onload=init;

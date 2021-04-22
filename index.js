usernames = document.querySelector('#username');
names = document.querySelector('#names');
emails = document.querySelector('#email');
phones = document.querySelector('#phone');
websites = document.querySelector('#website');
Add = document.querySelector('#add');
btnAdd = document.querySelector('.btnAdd');
modal =  document.querySelector('.modal');
tb = document.querySelector('.tb');
closeBtn = document.querySelector('.closeBtn');
  


btnAdd.addEventListener('click', (e) =>{
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', (e) =>{
    modal.style.display = 'none'
})


arr = [],api=[];
//arr = JSON.parse(localStorage.getItem('add'));
get= JSON.parse(localStorage.getItem('get'));


cont = get.concat(arr)
localStorage.setItem('conts',JSON.stringify( cont))

Add.addEventListener('click', (e) =>{
    e.preventDefault();
    if(usernames.value!='',names.value!='',emails.value!='',phones.value!='',websites.value!=''){
        
        data = {
            username: usernames.value,
            name   : names.value,
            email   : emails.value,
            phone  : phones.value,
            website : websites.value
        }
           cont.push(data);
           localStorage.setItem('add',JSON.stringify(cont));
           showData();
           modal.style.display='none'
    } 
})

showData()
function showData(){
    tb.innerHTML=''
    for(i=0;i<cont.length;i++){
     tb.innerHTML +=`
           <td>${cont[i].username}</td>
           <td>${cont[i].name}</td>
           <td>${cont[i].email}</td>
           <td>${cont[i].phone}</td>
           <td>${cont[i].website}</td>
           <td><button onclick='removeItem(${i})'>DELETE</button></td>
         </tr> 
     `
     document.getElementById('output').append = tb  
    } 
}
removeItem()

function removeItem(index){
cont.splice(index,1);
localStorage.setItem('add', JSON.stringify(cont));
showData();
}

function search(){
    var txtSearch, filter, myTable, tr, td,i;
    txtSearch = document.querySelector('.txtSearch').value; 
    filter = txtSearch.toUpperCase();
    myTable = document.getElementById('myTable');
    tr = myTable.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
}



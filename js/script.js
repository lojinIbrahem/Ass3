var bookmarkName = document.getElementById("bookmarkName");
var WebsiteURL = document.getElementById("WebsiteURL");
var Information = [];
var addBtn=document.getElementById("addBtn")
var updateBtn =document.getElementById("updateBtn")
var newIndex;

function addInfo(){
    var Info={
    name:bookmarkName.value,
    email:WebsiteURL.value
  }
  Information.push(Info);
   display();  
  clear()
}

function clear(){
   bookmarkName.value=null;
   WebsiteURL.value=null;
}

function display(list){
var library = ``;

  for(i=0 ;i<Information.length;i++){
  library+=` <tr>
  <th scope="row">${i}</th>
  <td>${Information[i].name}</td>
  <td>
    <div>
    <button onclick="getData(${i})" class="btn btn-danger">Update</button>
</div>
</td>
  <td> 
    <div>
    <div>
      <a href="https://routeacademy.github.io/Bookmarker/"> <button class="btn btn-danger">Visit</button></a>
    </div>   
</div>
</td>
  <td>
     <div>
<button onclick="deleteBook(${i})" class="btn btn-danger ">Delete</button>
     </div>
</td>
</tr>`;
}
document.getElementById('row-id').innerHTML= library;
}

function deleteBook(index){
Information.splice(index,1);
display(Information);
}

function getData(index){
  newIndex=index;
bookmarkName.value=Information[index].name;
WebsiteURL.value=Information[index].email;
addBtn.classList.add('d-none')
updateBtn.classList.remove('d-none')
}

function update(){
Information[newIndex].name=bookmarkName.value;
Information[newIndex].email=WebsiteURL.value;
display(Information);
updateBtn.classList.add('d-none')
addBtn.classList.remove('d-none')
clear()
}

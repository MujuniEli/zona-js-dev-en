import './index.css';

import {getUsers, deleteUser} from './api/userApi';

//populate table of users via API call
getUsers().then(result => {
    let usersBody = '';

    result.forEach(user => {
      usersBody += `<tr>
            <td><a href="#" data-id ="${user.id}" class="delete-User">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.FirstName}</td>
            <td>${user.LastName}</td>
            <td>${user.Email}</td>
      
      </tr>`  
    });

    global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName('deleteUser');
    //Must use Array.from to create a real array from a dom collection
    //getElementsByClassName only returns an array like object

    Array.from(deleteLinks, link => {
      link.onclick = function(event){
        const element = event.target;
        event.preventDefault();
        deleteUser(element.attributes['data-id'].value);
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
      };
    })
});
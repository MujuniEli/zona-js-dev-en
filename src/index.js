import {getUsers} from './api/userApi'

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
});
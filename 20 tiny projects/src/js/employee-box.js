const employee = document.querySelector('.employee'),
      userImage = document.querySelector('.f_user-image'),
      userName = document.querySelector('.f_username'),
      userRole = document.querySelector('.role')

const users = [ 
    {
        name: 'Tobias Windisch',
        image: 'https://randomuser.me/api/portraits/med/men/40.jpg',
        role: 'UX/UI Designer'
    }, 
    {
        name: 'Ella Smith',
        image: 'https://randomuser.me/api/portraits/med/women/45.jpg',
        role: 'Project Manager'
    }, 
    {
        name: 'Brad Gibson',
        image: 'https://randomuser.me/api/portraits/med/women/45.jpg',
        role: 'Marketing'
    }, 
    {
        name: 'George Jones',
        image: 'https://randomuser.me/api/portraits/med/men/79.jpg',
        role: 'Software Developer'
    }
]

    
setInterval(updateEmployee, 10000)

let emplployeeIndex = 1

function updateEmployee() {
    if (emplployeeIndex > users.length){
        emplployeeIndex = 1
    }

    const {name, image, role} = users[emplployeeIndex-1]
    userName.innerHTML = name
    userImage.src = image
    userRole.innerHTML = role

    emplployeeIndex++
}
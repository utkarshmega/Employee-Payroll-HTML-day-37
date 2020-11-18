window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    
    const headerHtml = `
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th> `;

        let empPayrollData = createEmployeePayrollDataJSON()[0];
    const innerHtml = ` ${headerHtml}
        <tr>
            <td><img class = "profile" alt ="" src = "${empPayrollData._profilePic}" alt = ""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td><div class = "dept-label">${empPayrollData._department[0]}</div>
                <div class = "dept-label">${empPayrollData._department[1]}</div></td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id ="1" onclick="remove(this)" alt = "delete" src = "../assets/icons/delete-black-18dp.svg">
                <img id ="1" onclick="update(this)" alt ="edit" src = "../assets/icons/create-black-18dp.svg">
            </td>
        </tr> `;
    document.querySelector('#table-display').innerHTML = innerHtml;
};

const createEmployeePayrollDataJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Utkarsh Agrawal' ,
            _gender: 'Male',
            _department: ['Engineer', 'Finance'],
            _salary: '750000',
            _startDate: '29 Oct 2020',
            _note: 'HI',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Shashank Singh' ,
            _gender: 'Male',
            _department: ['Finance'],
            _salary: '510000',
            _startDate: '15 July 2019',
            _note: 'Hey',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -2.png'
        }
    ];
    return empPayrollListLocal;
}


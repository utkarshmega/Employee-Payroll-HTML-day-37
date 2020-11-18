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
const innerHtml = ` ${headerHtml}
    <tr>
        <td><img class = "profile" alt ="" src = "../assets/profile-images/Ellipse -2.png"></td>
        <td>Utkarsh Agrawal</td>
        <td>Male</td>
        <td><div class = "dept-label">Engineer</div>
            <div class = "dept-label">Finance</div></td>
        <td>500000</td>
        <td>15 Sep 2020</td>
        <td>
            <img id ="1" onclick="remove(this)" alt = "delete" src = "../assets/icons/delete-black-18dp.svg">
            <img id ="1" onclick="update(this)" alt ="edit" src = "../assets/icons/create-black-18dp.svg">
        </td>
    </tr> `;
    document.querySelector('#table-display').innerHTML = innerHtml;
};
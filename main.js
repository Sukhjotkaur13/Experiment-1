function displayData()
{
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    // var gender=document.getElementById('gender').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var city=document.getElementById('city').value;
    var state=document.getElementById('state').value;
    var dob=document.getElementById('dob').value;
    var  country=document.getElementById('country').value;
    var address=document.getElementById('address').value;
    var program=document.getElementById('program').value;

    if(name==""||email==""||phone==""||gender==""||city==""||state==""||dob==""||country==""||program==""||address=="")
    {
        alert('Field must not be Empty!!');
    }
    else{
        var display=document.getElementById('dataDisplay');
        display.innerHTML=`
        <tr>
        <th>Name</th>
        <td>${name}</td>
        </tr>
        <tr>
        <th>Email</th>
        <td>${email}</td>
        </tr>
        <tr>
        <th>City</th>
        <td>${city}</td>
        </tr> <tr>
        <th>Phone</th>
        <td>${phone}</td>
        </tr> <tr>
        <th>State</th>
        <td>${state}</td>
        </tr> <tr>
        <th>Country</th>
        <td>${country}</td>
        </tr>
        <tr>
        <th>program</th>
        <td>${program}</td>
        </tr>
        <tr>
        <th>Gender</th>
        <td>${gender}</td>
        </tr>
        <tr>
        <th>dob</th>
        <td>${dob}</td>
        </tr>
        `;
    }
}
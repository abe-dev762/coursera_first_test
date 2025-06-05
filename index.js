function submitFeedback() {
    alert('Thank you for your feedback');
document.getElementById('userName').innerHTML = username;
document.getElementById('UserAge').innerHTML = age;
document.getElementById('userEmail').innerHTML = email;
document.getElementById('UserJob').innerHTML = job;
document.getElementById('Userdesignation').innerHTML = designation;
document.getElementById('userProductType').innerHTML = productType;
document.getElementById('userFeedback').innerHTML = feedback;
document.getElementById('userInfo').style.display = 'block';
}
 
const name = document.getElementById('name').value;
 const age = document.getElementById('age').value;
 const email = document.getElementById('email').value;
 const job = document.getElementById('job').value;
 const designation = document.getElementById('designation').value;
 const productType = document.getElementById('productType').value;
 const feedbackText = document.getElementById('feedbackText').value;
 const submitButton = document.getElementById('sumbitBtn');

 submitButton.onclick = submitFeedback();

 document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
 })
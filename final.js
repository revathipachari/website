// Handle email subscription form submission
document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    // Simulate sending data to Google Sheets (this would require a backend or Google Apps Script in real implementation)
    document.getElementById("responseMessage").innerText = "Thank you for subscribing!";
});

// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    // Simulate sending data to Google Sheets (this would require a backend or Google Apps Script
});
const buttons = document.querySelectorAll('.categories button');
const videos = document.querySelectorAll('.videos .video');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        videos.forEach(video => {
            if (category === 'all' || video.getAttribute('data-category') === category) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        });
    });
});
function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet(); // Replace 'YOUR_SHEET_ID' with the Google Sheet ID
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([new Date(), data.name, data.email, data.phone, data.message]);
  
  return ContentService.createTextOutput(JSON.stringify({ 'status': 'success', 'message': 'Data saved successfully' }))
    .setMimeType(ContentService.MimeType.JSON);
}
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    fetch('YOUR_WEB_APP_URL', {  // Replace 'YOUR_WEB_APP_URL' with your Google Apps Script Web App URL
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const alert = document.getElementById('form-alert');
        if (data.status === 'success') {
            alert.style.display = 'block';
            alert.textContent = 'Your message has been sent successfully!';
            alert.style.color = 'green';
            document.getElementById('contact-form').reset();
        } else {
            alert.style.display = 'block';
            alert.textContent = 'There was a problem sending your message. Please try again later.';
            alert.style.color = 'red';
        }
    })
    .catch(error => {
        const alert = document.getElementById('form-alert');
        alert.style.display = 'block';
        alert.textContent = 'There was a problem sending your message. Please try again later.';
        alert.style.color = 'red';
    });
});
// document.getElementById("contactForm").addEventListener("submit",function(event){
//             event.preventDefault();
//             const Name=document.getElementById("name").value;
//             const Email=document.getElementById("email").value;
//             const PhoneNumber=document.getElementById("phone").value;
//             const Message=document.getElementById("message").value;
//             document.getElementById("responseMessage").innerHTML=`<p>Successfully added!</p>
//                                                    <p>Name: ${Name}</p>
//                                                    <p>Email: ${Email}</p>
//                                                    <p>Phone Number: ${PhoneNumber}</p>
//                                                    <p>Message: ${Message}</p>`;
// });
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert('Message sent successfully!');
        this.reset(); // Clear the form
    })
    .catch(error => console.error('Error:', error));
});

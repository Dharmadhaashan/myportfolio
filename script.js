function sendMail(){
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs
        .send("service_8ypxj7b", "template_cx4phjt", templateParams)
        .then(()=>{
            alert("Email sent successfully!");
        })
        .catch((error)=>{
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again later.");
        });
}
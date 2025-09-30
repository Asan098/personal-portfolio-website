// यह सुनिश्चित करता है कि HTML पूरी तरह से लोड होने के बाद ही कोड चले
document.addEventListener('DOMContentLoaded', function() {

    // कॉन्टैक्ट बटन को सेलेक्ट करें
    const contactButton = document.getElementById('contact-btn');

    // बटन पर क्लिक इवेंट जोड़ें
    contactButton.addEventListener('click', function() {
        // जब बटन क्लिक हो, तो यह अलर्ट दिखाएं
        alert('Thank you for your interest! Please email me at: ahsan.portfolio@example.com');
    });

});
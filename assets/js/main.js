$(function () {
    /* Gallery lightBox
    ================================================*/
    if ($(".lightbox").length > 0) {
        $(".lightbox").prettyPhoto();
    }

    /* Owl carousel
    ================================================*/
    if ($(".owl-carousel").length > 0) {
        $(".owl-carousel").owlCarousel({
            margin: 25,
            stagePadding: 25,
            nav: true,
            navText: [
                "<i class='glyphicon glyphicon-chevron-left'></i>",
                "<i class='glyphicon glyphicon-chevron-right'></i>"
            ],
            responsive: {
                0: { items: 2 },
                600: { items: 4 },
                1000: { items: 8 }
            }
        });
    }

    /* Contact form ajax Handler
    ================================================*/
    var form = document.getElementById("my-form");

    if (form) {
        form.addEventListener("submit", async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("my-form-status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "Thanks for your submission!";
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form";
                        }
                    });
                }
            }).catch(() => {
                status.innerHTML = "Oops! There was a problem submitting your form";
            });
        });
    }

    /* On scroll animations
    ================================================*/
    var $elems = $('.animate-onscroll');
    var winheight = $(window).height();

    $(window).scroll(function () {
        animate_elems();
    });

    function animate_elems() {
        var wintop = $(window).scrollTop();
        $elems.each(function () {
            var $elm = $(this);
            if ($elm.hasClass('animated')) return true;
            var topcoords = $elm.offset().top;
            if (wintop > (topcoords - (winheight * 0.75))) {
                $elm.addClass('animated');
            }
        });
    }

    /* Enhanced Satellite View Map */
    window.initMap = function () {
        var location = { lat: 26.4583, lng: 86.0720 };

        var map = new google.maps.Map(document.getElementById('contact-map'), {
            zoom: 18,
            center: location,
            mapTypeId: 'hybrid',
            streetViewControl: true,
            fullscreenControl: true,
            rotateControl: true,
            tilt: 45,
            styles: [
                { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] },
                { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }
            ]
        });

        map.setTilt(45);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'JisnuSports',
            icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                scaledSize: new google.maps.Size(40, 40)
            },
            animation: google.maps.Animation.DROP
        });

        var infoContent = `
            <div style="padding:10px;min-width:200px;font-family:'Open Sans',sans-serif">
                <h4 style="margin:0 0 5px 0;color:#1f76bd;">JisnuSports</h4>
                <p style="margin:0;">Chanpura, Benipatti<br>Madhubani, Bihar</p>
                <div style="margin-top:8px;">
                    <a href="https://www.google.com/maps/@26.4583,86.0720,18z/data=!3m1!1e3"
                        target="_blank"
                        style="color:#1f76bd;text-decoration:none;">
                        <i class="fa fa-map-marker"></i> Explore Area
                    </a>
                </div>
            </div>`;
        var infoWindow = new google.maps.InfoWindow({
            content: infoContent,
            maxWidth: 250
        });

        infoWindow.open(map, marker);
        marker.addListener('click', () => infoWindow.open(map, marker));

        var controlDiv = document.createElement('div');
        controlDiv.className = 'map-control';
        controlDiv.innerHTML = `<i class="fa fa-map"></i><span>Switch to Map View</span>`;

        controlDiv.addEventListener('click', function () {
            var currentType = map.getMapTypeId();
            var newType = currentType === 'hybrid' ? 'roadmap' : 'hybrid';
            map.setMapTypeId(newType);

            var icon = newType === 'hybrid' ? 'fa-map' : 'fa-satellite';
            var text = newType === 'hybrid' ? 'Switch to Map View' : 'Switch to Satellite View';
            controlDiv.innerHTML = `<i class="fa ${icon}"></i><span>${text}</span>`;

            map.setTilt(newType === 'roadmap' ? 0 : 45);
        });

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);
    };

    if ($("#contact-map").length) {
        var script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDuRAsmpD9y6MTbhK6z-jueLBfxUecNt2k&callback=initMap&libraries=places';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
});

/* QR Scanner Functionality */
let html5QrcodeScanner = null;

function toggleScanner() {
    const scannerDiv = document.getElementById('qrScanner');
    const ourQrSection = document.getElementById('ourQrSection');

    if (scannerDiv.style.display === 'none') {
        ourQrSection.style.display = 'none';
        scannerDiv.style.display = 'block';
        startScanner();
    } else {
        ourQrSection.style.display = 'block';
        scannerDiv.style.display = 'none';
        stopScanner();
    }
}

function startScanner() {
    if (!html5QrcodeScanner) {
        html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-reader",
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
                supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
            },
            false
        );

        html5QrcodeScanner.render(
            decodedText => {
                console.log("Scan success:", decodedText);
                document.getElementById('qr-reader-results').innerHTML = `
                    <div class="alert alert-success">
                        Payment ID detected: ${decodedText}<br>
                        <button class="btn btn-success" onclick="handleScannedData('${decodedText}')">
                            Confirm Payment
                        </button>
                    </div>
                `;
                stopScanner();
            },
            errorMessage => {
                console.log("Scan error:", errorMessage);
                document.getElementById('qr-reader-results').innerHTML = `
                    <div class="alert alert-danger">Scan error: ${errorMessage}</div>
                `;
            }
        );
    }
}

function stopScanner() {
    if (html5QrcodeScanner) {
        html5QrcodeScanner.clear().catch(error => {
            console.error("Failed to clear scanner:", error);
        });
        html5QrcodeScanner = null;
    }
    document.getElementById('qrScanner').style.display = 'none';
    document.getElementById('ourQrSection').style.display = 'block';
}

$(document).ready(function () {
    $('input[name="paymentMethod"]').change(function () {
        if ($(this).val() === 'qr') {
            $('#manualPayment').hide();
            $('#qrPayment').show();
            $('#paymentInfo').hide();
        } else {
            $('#manualPayment').show();
            $('#qrPayment').hide();
            $('#paymentInfo').show();
            stopScanner();
        }
    });
});

function handleScannedData(upiData) {
    console.log("Processing payment for:", upiData);
    alert("Payment initiated for: " + upiData);
}

document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('.contact-form'); // Target all forms

    forms.forEach(form => {
        const successAlert = form.querySelector('.alert-success') || createAlert(form, 'success');
        const errorAlert = form.querySelector('.alert-danger') || createAlert(form, 'danger');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            
            // Reset alerts
            successAlert.style.display = 'none';
            errorAlert.style.display = 'none';

            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    successAlert.style.display = 'block';
                    successAlert.textContent = 'Message sent successfully! Redirecting...';
                    form.reset();
                    setTimeout(() => {
                        window.location.href = 'thankyou.html';
                    }, 2000);
                } else {
                    return response.json().then(data => {
                        throw new Error(data.errors ? data.errors.map(err => err.message).join(', ') : 'Form submission failed');
                    });
                }
            })
            .catch(error => {
                errorAlert.style.display = 'block';
                errorAlert.textContent = `Error: ${error.message || 'Error sending message. Please try again.'}`;
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.innerHTML = 'Send message';
            });
        });
    }
    ),

    function createAlert(type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.style.display = 'none';
        form.insertBefore(alert, form.firstChild);
        return alert;
    }
});
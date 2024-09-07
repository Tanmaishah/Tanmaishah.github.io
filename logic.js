console.log(1234);
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered Animations
const animateOnScroll = () => {
    const elementsToAnimate = document.querySelectorAll('.animate');
    const options = { rootMargin: "0px", threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elementsToAnimate.forEach(item => observer.observe(item));
};

document.addEventListener('DOMContentLoaded', animateOnScroll);

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}, your message has been sent!`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    
    const data = {
        labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
        datasets: [{
            label: 'Monthly Data',
            data: Array.from({ length: 12 }, () => Math.random() * 100),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        }]
    };

    const options = {
        responsive: true,
        animation: {
            duration: 2000, // Animation duration
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Light grid lines
                },
                ticks: {
                    color: '#fff' // Axis labels color
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Light grid lines
                },
                ticks: {
                    color: '#fff' // Axis labels color
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'line', // You can change this to 'bar', 'radar', etc.
        data: data,
        options: options
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Monthly Sales',
                data: [10, 20, 30, 40, 50, 60, 70],
                borderColor: 'rgba(0, 255, 0, 1)', // Neon green
                backgroundColor: 'rgba(0, 255, 0, 0.2)', // Neon green with transparency
                fill: true,
                tension: 0.1, // Smooth curve
                pointRadius: 8, // Size of data points
                pointBackgroundColor: 'rgba(0, 255, 0, 1)', // Neon green
                pointBorderColor: '#000', // Black border for contrast
                pointBorderWidth: 2, // Width of the border
                pointShadowColor: 'rgba(0, 255, 0, 0.7)', // Shadow color for neon effect
                pointShadowBlur: 10, // Blur amount for the shadow
                pointShadowOffsetX: 0, // Horizontal offset of the shadow
                pointShadowOffsetY: 0, // Vertical offset of the shadow
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)', // Light grid lines
                    },
                    ticks: {
                        color: '#fff' // Axis labels color
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)', // Light grid lines
                    },
                    ticks: {
                        color: '#fff' // Axis labels color
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    });
});

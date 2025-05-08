const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('tema', 'dark');
    } else {
      
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('tema', 'light');
    }
  });
  

  window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem('tema') || 'dark';
    body.classList.add(`${temaSalvo}-mode`);
    toggle.checked = (temaSalvo === 'light');
  });

  particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": { "value": ["#00ff00", "#ff0000", "#0000ff"] },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 2,
                "color": "#ffffff"
            }
        },
        "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.3,
                "sync": false
            }
        },
        "size": {
            "value": 8,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 10,
                "size_min": 4,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 3
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": true,
            "attract": {
                "enable": true,
                "rotateX": 1000,
                "rotateY": 1000
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 180,
                "line_linked": {
                    "opacity": 0.9
                }
            },
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
  


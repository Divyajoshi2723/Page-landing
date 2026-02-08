const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple scroll reveal (basic)
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    hero.classList.add('visible');
  }
});

  const filterBtns = document.querySelectorAll('.portfolio-filters button');
  const items = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const track = document.querySelector(".testimonial-track");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let index = 0;

  function getCardWidth() {
    return cards[0].offsetWidth + 30; // 30 = gap
  }

  function updateSlider() {
    track.style.transform = `translateX(-${index * getCardWidth()}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (index < cards.length - visibleCards()) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  function visibleCards() {
    return window.innerWidth <= 768 ? 1 : 2;
  }

  window.addEventListener("resize", () => {
    index = 0;
    updateSlider();
  });

  
  document.querySelectorAll('.team-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.05)";
  });
});

document.querySelectorAll(".faq-question").forEach(item => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;

    document.querySelectorAll(".faq-item").forEach(faq => {
      if (faq !== parent) faq.classList.remove("active");
    });

    parent.classList.toggle("active");
  });
});

  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message submitted successfully!");
  });


document.querySelectorAll('.cta-buttons a').forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('CTA button clicked');
    });
  });








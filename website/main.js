// Smooth reveal for sections
document.addEventListener('DOMContentLoaded',()=>{
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible')
        obs.unobserve(e.target)
      }
    })
  },{threshold:0.12})

  document.querySelectorAll('.reveal, .card, .achievement, .hero-content').forEach(el=>{
    el.classList.add('reveal')
    obs.observe(el)
  })

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href')
      if(href.length>1){
        e.preventDefault()
        document.querySelector(href).scrollIntoView({behavior:'smooth'})
      }
    })
  })
})

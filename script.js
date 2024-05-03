// For accessing slider and left-right arrow buttons
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')

let slide_number = 1

const next_slide = ()=>{
        slider.style.transform = `translateX(-${slide_number * 100}%)`
        slide_number++
}
const prev_slide = ()=>{
        slider.style.transform = `translateX(-${(slide_number - 2) * 100}%)`
        slide_number--
}
const first_slide = ()=>{
    slider.style.transform = `translateX(0px)`
    slide_number = 1
}

// Manual navigation using right arrow button
right.addEventListener('click', ()=>{
    slide_number < images.length ? next_slide() : first_slide()
})
//Manual navigation using left arrow button
left.addEventListener('click' , ()=>{
    prev_slide()
})

//Automatic rotation
let slideInterval
const slideShow = ()=>{
    slideInterval = setInterval(()=>{
        slide_number < images.length ? next_slide() : first_slide()
    },5000)
}
slideShow()


const stopSlideShow = ()=>{
    clearInterval(slideInterval)
}
slider.addEventListener('mouseover', stopSlideShow)   //Stop slideshow when hover the curser on image
slider.addEventListener('mouseout', slideShow)        // play the slideshow when curser is not on the image


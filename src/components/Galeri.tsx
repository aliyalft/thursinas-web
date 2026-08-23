"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { galeri } from "@/data/galeri";


export default function Galeri(){

const [activeSlide,setActiveSlide] = useState(0);


return (

<section

id="galeri"

className="
relative
overflow-hidden
px-5
py-24
lg:px-10
lg:py-36
bg-[#F4F7F4]
"

>


{/* SOFT GALLERY BACKGROUND */}


<div

className="
absolute
right-[-120px]
top-20
h-[420px]
w-[420px]
rounded-full
bg-cyan-100
opacity-20
blur-[120px]
"

/>



<div

className="
absolute
left-[-150px]
bottom-20
h-80
w-80
rounded-full
bg-slate-200
opacity-30
blur-[100px]
"

/>





<div

className="
relative
mx-auto
max-w-7xl
"

>



{/* HEADER */}



<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
max-w-3xl
"

>



<div

className="
flex
items-center
gap-4
"

>

<span

className="
h-px
w-10
bg-cyan-400
"

/>



<p

className="
text-[0.72rem]
tracking-[0.45em]
uppercase
text-cyan-600
"

>

Our Gallery

</p>


</div>






<h2

className="
mt-6
font-display
text-4xl
leading-tight
text-navy
sm:text-6xl
lg:text-7xl
"

>

Gallery of <em className="italic">Works</em>

</h2>






<p

className="
mt-6
max-w-2xl
text-slate-600
leading-relaxed
"

>

Menampilkan karya pilihan Thursina's, setiap detail diciptakan melalui proses lukis tangan yang menjadikan setiap produk memiliki karakter tersendiri.

</p>



</motion.div>







<div

className="
mt-16
"

>



{/* MOBILE SLIDER */}



<div

id="gallery-mobile"

onScroll={(e)=>{

const slider = e.currentTarget;

const index = Math.round(
slider.scrollLeft /
(slider.clientWidth * 0.85)
);

setActiveSlide(index);

}}

className="
flex
gap-6
overflow-x-auto
snap-x
snap-mandatory
pb-4
scroll-smooth
sm:hidden
[&::-webkit-scrollbar]:hidden
"

>



{

galeri.map((item,index)=>(


<motion.figure

key={`${item.id}-${index}`}

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*0.05
}}

className="
group
relative
min-w-[85%]
snap-center
overflow-hidden
isolate
rounded-[2.5rem_0.75rem_2.5rem_0.75rem]
border
border-cyan-200/70
bg-white
shadow-[0_30px_60px_-45px_var(--navy)]
"

>


<div

className="
relative
overflow-hidden
rounded-[2.5rem_0.75rem_2.5rem_0.75rem]
"

>


<img

src={item.image}

alt={item.nama}

loading="lazy"

className="
block
aspect-[4/5]
w-full
object-cover
"

/>



<div

className="
absolute
inset-0
flex
items-end
rounded-[2.5rem_0.75rem_2.5rem_0.75rem]
bg-gradient-to-t
from-[#102A43]/90
via-[#102A43]/30
to-transparent
p-6
"

>


<div>


<h3

className="
font-display
text-2xl
text-white
"

>

{item.nama}

</h3>



<p

className="
mt-2
text-[0.65rem]
tracking-[0.24em]
uppercase
text-cyan-100
"

>

{item.kategori}

</p>




{

item.custom && (

<a

href="https://wa.me/628165440595?text=Halo%20Thursina's,%20saya%20ingin%20konsultasi%20karya%20custom"

target="_blank"

className="
mt-5
inline-flex
rounded-full
bg-cyan-500
px-5
py-2.5
text-xs
font-medium
text-white
shadow-lg
transition
hover:-translate-y-1
"

>

Pesan Karya Custom

</a>

)

}



</div>


</div>



</div>


</motion.figure>


))

}



</div>







{/* DOT MOBILE */}



<div

className="
mt-5
flex
justify-center
gap-2
sm:hidden
"

>


{

galeri.map((_,index)=>(


<button

key={index}

onClick={()=>{

const slider =
document.getElementById(
"gallery-mobile"
);


slider?.scrollTo({

left:
index *
slider.clientWidth *
0.85,

behavior:"smooth"

});


}}

className={`
h-2
rounded-full
transition-all
duration-300

${
activeSlide === index

? "w-7 bg-cyan-500"

: "w-2 bg-cyan-200"

}

`}

/>


))

}



</div>









{/* DESKTOP GRID */}



<div

className="
hidden
sm:grid
grid-cols-2
lg:grid-cols-3
gap-6
lg:gap-8
"

>


{

galeri.map((item,index)=>(


<motion.figure

key={`${item.id}-${index}`}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7,
delay:index*.08
}}

className="
group
relative
overflow-hidden
isolate
rounded-[2.5rem_0.75rem_2.5rem_0.75rem]
border
border-cyan-200/70
bg-white
shadow-[0_30px_60px_-45px_var(--navy)]
"

>


<div

className="
relative
overflow-hidden
rounded-[2.5rem_0.75rem_2.5rem_0.75rem]
"

>


<img

src={item.image}

alt={item.nama}

loading="lazy"

className="
block
aspect-[4/5]
w-full
object-cover
transition-transform
duration-700
ease-out
group-hover:scale-105
"

/>





<div

className="
absolute
inset-0
flex
items-end
rounded-[2.5rem_0.75rem_2.5rem_0.75rem]
bg-gradient-to-t
from-[#102A43]/90
via-[#102A43]/30
to-transparent
p-6
opacity-0
transition-opacity
duration-500
group-hover:opacity-100
"

>


<div

className="
translate-y-5
transition-transform
duration-500
group-hover:translate-y-0
"

>


<h3

className="
font-display
text-2xl
text-white
"

>

{item.nama}

</h3>



<p

className="
mt-2
text-[0.65rem]
tracking-[0.24em]
uppercase
text-cyan-100
"

>

{item.kategori}

</p>




{

item.custom && (

<a

href="https://wa.me/628165440595?text=Halo%20Thursina's,%20saya%20ingin%20konsultasi%20karya%20custom"

target="_blank"

className="
mt-5
inline-flex
rounded-full
bg-cyan-500
px-5
py-2.5
text-xs
font-medium
text-white
shadow-lg
transition
hover:-translate-y-1
"

>

Pesan Karya Custom

</a>

)

}



</div>


</div>



</div>


</motion.figure>


))


}



</div>



</div>



</div>


</section>


)

}
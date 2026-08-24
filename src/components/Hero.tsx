"use client";

import { motion } from "framer-motion";


export default function Hero(){

return (

<section
id="beranda"
className="
relative
overflow-hidden
min-h-screen
px-5
pt-32
pb-20
lg:px-10
lg:pt-40
lg:pb-32
bg-[#FCF8EF]
"
>



{/* ================= BACKGROUND BLOBS ================= */}


<div
className="
absolute
pointer-events-none
top-[-150px]
right-[-120px]
h-[600px]
w-[600px]
rounded-full
bg-cyan-100
opacity-50
blur-[140px]
animate-pulse
"
/>




<div
className="
absolute
pointer-events-none
bottom-[-180px]
left-[-120px]
h-[500px]
w-[500px]
rounded-full
bg-blue-100
opacity-40
blur-[140px]
"
/>





<div
className="
absolute
pointer-events-none
right-[35%]
top-[20%]
h-[250px]
w-[250px]
rounded-full
bg-[#E8F6F4]
opacity-70
blur-[100px]
"
/>








{/* ================= ART ELEMENTS ================= */}



<div

className="
absolute
pointer-events-none
left-[42%]
top-[18%]
h-24
w-24
rounded-full
bg-cyan-200/30
blur-3xl
"

/>



<div

className="
absolute
pointer-events-none
right-[15%]
bottom-[18%]
h-40
w-40
rounded-full
bg-blue-200/30
blur-3xl
"

/>











<motion.div

className="
absolute
pointer-events-none
right-[40%]
top-[62%]
h-3
w-3
rounded-full
bg-[#D7B56D]/60
"

animate={{
y:[0,15,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

/>



{/* ================= BUTTERFLY ================= */}



<motion.img

src="/assets/butterfly-blue.png"

alt=""

className="
absolute
pointer-events-none
left-[38%]
top-[22%]
hidden
w-14
opacity-80
lg:block
"

animate={{

y:[0,-15,0],

rotate:[0,6,-6,0]

}}

transition={{

duration:6,

repeat:Infinity,

ease:"easeInOut"

}}

/>







<motion.img

src="/assets/butterfly-blue.png"

alt=""

className="
absolute
pointer-events-none
right-[35%]
bottom-[22%]
hidden
w-8
opacity-50
lg:block
"

animate={{

y:[0,-12,0],

rotate:[0,-8,8,0]

}}

transition={{

duration:7,

repeat:Infinity

}}

/>








{/* MOBILE BUTTERFLY */}



<motion.img

src="/assets/butterfly-blue.png"

alt=""

className="
absolute
pointer-events-none
right-[70px]
top-[120px]
z-10
w-12
opacity-85
lg:hidden
"

animate={{

y:[0,-14,0],

rotate:[0,8,-8,0]

}}

transition={{

duration:5.5,

repeat:Infinity,

ease:"easeInOut"

}}

/>









{/* ================= MAIN ================= */}



<div

className="
relative
z-10
mx-auto
max-w-7xl
grid
items-center
gap-10
lg:grid-cols-2
lg:gap-20
"

>










{/* TEXT */}



<div>



<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
font-display
text-[3.2rem]
leading-[1.05]
text-[#102A43]
sm:text-6xl
lg:text-[5.2rem]
"

>

Fashion yang

<br/>

<em

className="
font-normal
italic
"

>

Menghidupkan

</em>


<br/>


<span className="text-cyan-600">

Seni

</span>


</motion.h1>







<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.2
}}

className="
mt-8
font-script
text-2xl
text-cyan-600
sm:text-3xl
"

>

wearable stories, since 2017

</motion.p>







<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.3
}}

className="
mt-6
max-w-lg
leading-relaxed
text-slate-600
"

>

Setiap karya dibuat dengan tangan,
menghadirkan fashion yang memiliki
cerita dan karakter unik.

</motion.p>







{/* DESKTOP BUTTON */}



<div

className="
mt-10
hidden
gap-4
lg:flex
"

>


<a

href="#galeri"

className="
rounded-full
bg-[#20C4C7]
px-8
py-4
text-sm
font-medium
text-white
shadow-lg
shadow-cyan-500/20
transition
hover:-translate-y-1
"

>

Lihat Koleksi

</a>





<a

href="#kontak"

className="
rounded-full
border
border-[#102A43]/20
px-8
py-4
text-sm
font-medium
text-[#102A43]
transition
hover:border-cyan-500
"

>

Konsultasi Custom

</a>



</div>



</div>













{/* PRODUCT */}



<motion.div

initial={{
opacity:0,
scale:.9
}}

animate={{

opacity:1,

scale:1

}}

transition={{

duration:1

}}

className="
relative
pointer-events-none
mx-auto
mt-6
w-full
max-w-[280px]
order-2
sm:max-w-md
lg:mt-0
lg:max-w-lg
"

>





<div

className="
absolute
pointer-events-none
inset-[-25px]
rounded-full
bg-gradient-to-br
from-cyan-100
via-[#FCF8EF]
to-blue-100
opacity-80
"

/>







<div

className="
relative
overflow-hidden
rounded-[40%_60%_50%_50%]
border
border-cyan-200
shadow-[0_40px_90px_-40px_rgba(16,42,67,.4)]
"

>


<img

src="/assets/hero-product.png"

alt="Hand painted textile Thursina's"

className="
h-[220px]
w-full
object-cover
sm:h-[420px]
lg:h-[520px]
"

/>


</div>







<div

className="
absolute
pointer-events-none
inset-[-10px]
rounded-[40%_60%_50%_50%]
border
border-cyan-300/40
"

/>



</motion.div>









{/* MOBILE BUTTON */}

<div

className="
relative
z-40
order-3
mt-8
flex
w-full
flex-col
items-center
gap-3
lg:hidden
"

>


<a

href="#galeri"

className="
relative
z-50
flex
h-12
w-[220px]
items-center
justify-center
rounded-full
bg-[#20C4C7]
text-sm
font-medium
text-white
shadow-lg
shadow-cyan-500/20
transition
hover:-translate-y-1
"

>

Lihat Koleksi

</a>





<a

href="#kontak"

className="
relative
z-50
flex
h-12
w-[220px]
items-center
justify-center
rounded-full
border
border-[#102A43]/20
text-sm
font-medium
text-[#102A43]
transition
hover:border-cyan-500
"

>

Konsultasi Custom

</a>





</div>





</div>


</section>

)

}
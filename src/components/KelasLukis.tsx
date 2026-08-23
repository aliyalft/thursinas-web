"use client";


import { motion } from "framer-motion";



const formats = [

"Online Class",

"Offline Class",

"Regular",

"Private"

];



export default function KelasLukis(){


return (

<section

id="kelas"

className="
relative
overflow-hidden
px-5
py-24
lg:px-10
lg:py-36
bg-[#F7FBF8]
"

>


{/* BACKGROUND DECORATION */}



<div

className="
absolute
right-[-120px]
bottom-10
h-96
w-96
rounded-full
bg-[#CDEFE7]
opacity-35
blur-[90px]
"

/>



<div

className="
absolute
left-[-120px]
top-40
h-72
w-72
rounded-full
bg-white
opacity-70
blur-[100px]
"

/>






<div

className="
relative
mx-auto
grid
max-w-7xl
items-center
gap-14
lg:grid-cols-2
lg:gap-20
"

>



{/* IMAGE */}



<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
relative
"

>


<div

className="
canvas-texture
overflow-hidden
rounded-[1rem_3.5rem_1rem_3.5rem]
border
border-cyan-100
shadow-[0_40px_80px_-50px_var(--navy)]
"

>


<img

src="/assets/class.png"

alt="Suasana kelas melukis kain Thursina's"

loading="lazy"

className="
w-full
object-cover
transition-transform
duration-[1.2s]
hover:scale-105
"

/>


</div>





{/* FLOAT LABEL */}



<div

className="
absolute
right-2
bottom-[-30px]
rounded-full
border
border-cyan-200
bg-white/95
px-6
py-2
shadow-xl
backdrop-blur
sm:right-6
"

>


<p

className="
font-script
text-2xl
text-cyan-600
"

>

Create

</p>



<p

className="
text-xs
text-slate-500
"

>

Learn & Explore Art

</p>


</div>



</motion.div>









{/* CONTENT */}



<div>



{/* LABEL */}



<motion.div

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

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

Kelas Lukis

</p>



</motion.div>







<motion.h2

initial={{
opacity:0,
y:25
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:.1
}}

className="
mt-6
font-display
text-4xl
leading-tight
text-navy
sm:text-5xl
lg:text-6xl
"

>

Belajar Melukis,

<br/>


<em className="italic">

Menemukan Warnamu

</em>


</motion.h2>









<motion.p

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

transition={{
delay:.2
}}

className="
mt-6
max-w-lg
leading-relaxed
text-slate-600
"

>

Ruang hangat bagi siapa saja yang ingin
mengenal seni lukis kain. Dari goresan pertama
hingga karya yang dapat digunakan sendiri,
Thursina's menemani setiap proses kreatif.

</motion.p>









<motion.ul

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mt-10
grid
grid-cols-2
gap-3
"

>


{

formats.map((item)=>(


<li

key={item}

className="
rounded-full
border
border-cyan-300/50
bg-[#DDF5F0]
px-5
py-3
text-center
text-sm
text-navy
"

>

{item}

</li>


))


}



</motion.ul>







<a

href="https://wa.me/628165440595"

target="_blank"

rel="noreferrer"

className="
mt-10
inline-flex
rounded-full
bg-cyan-500
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

Mulai Belajar Melukis

</a>





</div>





</div>



</section>


)

}
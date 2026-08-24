"use client";


import { motion } from "framer-motion";

import {
  Clock,
  MapPin,
  Phone,
  ArrowUpRight
} from "lucide-react";

import {
  FaInstagram
} from "react-icons/fa";





const informasi = [

{
icon:Phone,
label:"WhatsApp",
isi:"08165440595 / 081333356289",
link:"https://wa.me/628165440595"
},


{
icon:FaInstagram,
label:"Instagram",
isi:"@thursina_craft_fashion",
link:"https://instagram.com/thursina_craft_fashion"
},


{
icon:MapPin,
label:"Lokasi",
isi:"Melong, Cimahi Selatan, Jawa Barat",
link:"https://share.google/kSpwqOkLfyLaTX5bM"
},


{
icon:Clock,
label:"Jam Operasional",
isi:"10.00 - 16.00 WIB"
}

];








export default function Kontak(){


return (

<section

id="kontak"

className="
relative
overflow-hidden
px-5
py-24
lg:px-10
lg:py-36
bg-[#FFF8EF]
"

>



{/* BACKGROUND */}



<div

className="
absolute
right-[-120px]
top-20
h-96
w-96
rounded-full
bg-orange-200
opacity-35
blur-[120px]
"

/>



<div

className="
absolute
left-[-100px]
bottom-0
h-80
w-80
rounded-full
bg-cyan-200
opacity-30
blur-[120px]
"

/>



<div

className="
absolute
right-[30%]
bottom-20
h-56
w-56
rounded-full
bg-white
opacity-60
blur-[100px]
"

/>








<div

className="
relative
mx-auto
max-w-6xl
text-center
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

>



<div

className="
flex
items-center
justify-center
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

Kontak

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

Mulai Ceritakan

<br/>

<em className="italic">

Ide Karyamu

</em>


</h2>








<p

className="
mx-auto
mt-6
max-w-lg
leading-relaxed
text-slate-600
"

>

Kirimkan gambaran ide, warna favorit,
atau cerita yang ingin diabadikan.
Kami akan menerjemahkannya menjadi
karya yang dapat dikenakan.

</p>



</motion.div>









{/* INFORMATION */}



<motion.div

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
delay:.15
}}

className="
mx-auto
mt-14
grid
max-w-4xl
gap-4
text-left
sm:grid-cols-2
"

>




{

informasi.map((item)=>(


<div

key={item.label}

>



{

item.link ?


(

<a

href={item.link}

target="_blank"

rel="noreferrer"

className="
group
flex
items-center
gap-4
rounded-2xl
border
border-[#E8DDD0]
bg-white/80
px-4
py-5
sm:px-6
backdrop-blur
transition
hover:border-cyan-400
hover:-translate-y-1
"

>


<CardContent

item={item}

clickable

/>


</a>


)



:


(

<div

className="
flex
items-center
gap-4
rounded-2xl
border
border-[#E8DDD0]
bg-white/80
px-4
py-5
sm:px-6
backdrop-blur
"

>


<CardContent

item={item}

/>


</div>

)


}



</div>


))


}



</motion.div>









{/* BUTTON */}



<a

href="https://wa.me/628165440595"

target="_blank"

rel="noreferrer"

className="
mt-12
inline-flex
rounded-full
bg-cyan-500
px-12
py-5
font-medium
text-white
shadow-lg
shadow-cyan-500/20
transition
hover:-translate-y-1
"

>

Konsultasi WhatsApp

</a>






</div>



</section>


)

}









function CardContent({

item,
clickable=false

}:{

item:any,
clickable?:boolean

}){


const Icon=item.icon;



return (

<>



<span

className="
grid
h-11
w-11
shrink-0
place-items-center
rounded-full
bg-[#E7F7F4]
text-cyan-600
"

>

<Icon className="h-5 w-5"/>

</span>







<div className="min-w-0 flex-1">


<p

className="
text-[0.6rem]
tracking-[0.24em]
uppercase
text-slate-500
"

>

{item.label}

</p>






<p

className={`
text-navy
text-sm
sm:text-base
leading-relaxed

${
item.label === "WhatsApp"
?
"whitespace-nowrap text-[12px] sm:text-base"
:
""

}

`}

>

{item.isi}

</p>


</div>








{

clickable && (

<ArrowUpRight

className="
h-5
w-5
shrink-0
text-cyan-500
transition-transform
duration-300
group-hover:-translate-y-1
group-hover:translate-x-1
"

/>

)

}



</>

)

}
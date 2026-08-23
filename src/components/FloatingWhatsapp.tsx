"use client";


import { FaWhatsapp } from "react-icons/fa";



export default function FloatingWhatsapp(){


return (

<a

href="https://wa.me/628165440595"

target="_blank"

rel="noreferrer"

aria-label="Hubungi Thursina's via WhatsApp"

className="
group
fixed
right-5
bottom-5
z-50
flex
items-center
gap-3
"

>


{/* TOOLTIP */}

<span

className="
pointer-events-none
hidden
translate-x-2
rounded-full
border
border-slate-200
bg-white
px-4
py-2
text-sm
text-navy
opacity-0
shadow-lg
transition-all
duration-300
group-hover:translate-x-0
group-hover:opacity-100
sm:block
"

>

Hubungi Thursina's

</span>





{/* FLOATING BUTTON */}


<span

className="
animate-softpulse
flex
h-14
w-14
items-center
justify-center
rounded-full
bg-[#20C4C7]
text-white
shadow-xl
transition-transform
hover:scale-110
"

>


<FaWhatsapp size={30}/>


</span>



</a>


)

}
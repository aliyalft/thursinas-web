import type { Metadata } from "next";

import {
  Cormorant_Garamond,
  Poppins
} from "next/font/google";

import "./globals.css";





const poppins = Poppins({

  subsets:["latin"],

  weight:[
    "300",
    "400",
    "500",
    "600"
  ],

  variable:"--font-sans"

});





const cormorant = Cormorant_Garamond({

  subsets:["latin"],

  weight:[
    "400",
    "500",
    "600",
    "700"
  ],

  variable:"--font-serif"

});









export const metadata: Metadata = {


  metadataBase: new URL(
    "https://thursina.shop"
  ),



  title: {

    default:
      "Thursina's | Fashion Art Handmade",

    template:
      "%s | Thursina's Fashion Art"

  },



  description:
    "Thursina's menghadirkan fashion handmade dengan sentuhan seni, lukisan tangan, dan karya custom yang memiliki cerita unik.",



  keywords:[

    "Thursina's",

    "fashion art",

    "handmade fashion",

    "fashion handmade Indonesia",

    "custom fashion",

    "lukis kain",

    "seni fashion"

  ],



  authors:[

    {
      name:
      "Thursina's Fashion Art"
    }

  ],



  creator:
    "Thursina's Fashion Art",



  icons: {

    icon:
      "/icon.png",

    shortcut:
      "/icon.png",

    apple:
      "/icon.png"

  },



  openGraph:{


    title:
      "Thursina's | Fashion Art Handmade",



    description:
      "Wearable stories, since 2017. Karya fashion handmade dengan sentuhan seni.",



    url:
      "https://thursina.shop",



    siteName:
      "Thursina's Fashion Art",



    locale:
      "id_ID",



    type:
      "website",


    images:[

      {

        url:
        "/assets/logo-trs-icon1.png",

        width:
        1200,

        height:
        630,

        alt:
        "Thursina's Fashion Art"

      }

    ]

  },



  robots:{


    index:true,


    follow:true,


  },


};









export default function RootLayout({

children,

}: Readonly<{

children:React.ReactNode;

}>) {



return (

<html lang="id">


<body

className={`
${poppins.variable}
${cormorant.variable}
`}

>


{children}


</body>


</html>

);

}
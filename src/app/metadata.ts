import type { Metadata } from "next";


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://thursina.shop"
  ),


  title: {

    default:
      "Thursina's | Fashion Art",

    template:
      "%s | Thursina's Fashion Art"

  },


  description:
    "Thursina's menghadirkan karya fashion handmade dengan sentuhan seni, cerita, dan karakter unik.",


  keywords: [

    "Thursina's",
    "fashion art",
    "handmade fashion",
    "custom fashion",
    "lukis kain",
    "bordir handmade",
    "fashion Indonesia",
    "seni fashion"

  ],


  authors: [

    {
      name:
      "Thursina's Fashion Art"
    }

  ],


  creator:
    "Thursina's Fashion Art",


  openGraph: {

    title:
      "Thursina's | Fashion Art",

    description:
      "Wearable stories, since 2017. Karya fashion handmade yang menghidupkan seni.",

    url:
      "https://thursina.shop",

    siteName:
      "Thursina's Fashion Art",

    locale:
      "id_ID",

    type:
      "website",

  },


  robots: {

    index:true,

    follow:true,

  },


};
"use client"


import { Flex, Button, Image, Box } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import Text from "src/atomic/atoms/Text"
import { HeaderLadingPage } from "src/atomic/organism/HeaderLadingPage"

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Link from "next/link";

export default function Home() {

  return (
    <Box>
      <Box px={"120px"}>
      <HeaderLadingPage/>

      <Flex alignItems={"center"} gap={"40px"}>
        <Flex flexDirection={"column"} maxWidth={"520px"} color={"#fff"} gap={"15px"}>
          <Text variant="subtitle2" fontSize={"24px"} textTransform={"uppercase"} color={"white"}>Esquece o ponto manual</Text>
          <Text variant="h1" whiteSpace={'nowrap'} color={"white"}>Chegou a nova realidade <br/>para <span>Controle de Pontos</span></Text>
          <Text variant="h4" marginBottom={"15px"} color={"white"}>Com o PontoGo seus colaboradores poderão bater <br/> seus pontos de forma fácil e rápida, possuindo <br/> também uma Dashboard intuitiva.</Text>

        <Flex alignItems={"center"} gap={"15px"}>
          <Button backgroundColor={"secondary"} w={"160px"} h={"50px"} py={"13px"} px={"24px"} fontWeight={"normal"}>Assinar agora</Button>
          <Button w={"160px"} h={"50px"} py={"13px"} px={"24px"}  border={"1px solid"}>Ver planos</Button>
        </Flex>
      </Flex>
        <Image src="/mascotLanding.svg" maxWidth={"700px"} paddingLeft={"60px"}/>
      </Flex>

      <Flex justifyContent={"space-evenly"} alignItems={"flex-start"} marginTop={"40px"} maxHeight={"70px"}>
        <Image src="/brainnyLogo.png"/>
        <Image src="/amoPetLogo.png"/>
        <Image src="/busLogo.png"/>
        <Image src="/goStudyLogo.png"/>
      </Flex>


      <Flex alignItems={"center"} flexDirection={"column"} marginTop={"90px"}>
        <Text variant="h1" paddingBottom={"10px"} color={"white"}>Encontre o plano perfeito</Text>
        <Text maxWidth={"640px"} fontSize={"20px"} textAlign={"center"} color={"white"}>Escolha o plano que melhor se encaixa na sua empresa e  faça<br/> sua assinatura, dentro de 72h iremos liberar seus acessos.</Text>
      </Flex>

      <Swiper
          id="plans"
          style={{marginTop: "70px"}}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            slideShadows: true,
            rotate: 0,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Navigation ]}
        >
          <SwiperSlide>
            <Image src="/planThirty.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/planFifty
            .png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/planOneHundred.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/planTwoHundred.png" />
          </SwiperSlide>
        </Swiper>

      </Box>

      <Flex borderTop={"0.5px solid #8A53FF"} borderBottom={"1px solid #8A53FF"} marginTop={"100px"} justifyContent={"center"} alignItems={"center"}>
        <Box padding={"20px 60px"}>
          <Text fontWeight={"bold"} fontSize={"20px"} color={"white"}>@pontogo</Text>
          <Text paddingTop={"5px"} color={"white"}>Se conecta com a gente</Text>
        </Box>

        <Flex gap={"40px"}>
          <Link href={"https://www.instagram.com/brainny.cc"} target="_blank"><Image src="/iconInstagram.svg"></Image></Link>
          <Link href={"https://www.facebook.com/brainnyss"} target="_blank"><Image src="/iconFacebook.svg"></Image></Link>
          <Link href={"https://www.linkedin.com/company/brainnyss/?originalSubdomain=br"} target="_blank"><Image src="/iconLinkedin.svg"></Image></Link>
        </Flex>
      </Flex>

      <Flex alignItems="center" marginY={"60px"}>
          <Box
            borderBottom="1px solid"
            borderColor={"secondary"}
            flex="0.75"
            height="2px"
            marginRight={"1rem"}
          />
          <Text fontSize="xl" color={"white"}>
            PontoGo - Todos direitos reservados
          </Text>
          <Box
            borderBottom="1px solid"
            borderColor={"secondary"}
            flex="0.75"
            height="2px"
            marginLeft={"1rem"}
          />
        </Flex>
        
    </Box>
  )
}


import imagem10 from "../../assets/semEfeitoImg1.jpg"
import imagem1 from "../../assets/semEfeitoImg2.jpg"

import { LanguageProvider } from "../contexLanguage/LanguageContext"
import { HomeNavBar } from "./HomeNavBar"
import { HomeLandingPage } from "./HomeLandingPage"
import { Descubra } from "./Descubra"
import { HomePrePos } from "./HomePrePos"
import Footer from "./Footer"
import Insight from "./InsightPos"


export const HomePage = () => {
    return(
        <>
        <LanguageProvider>
           <div className="home-page">
                 <HomeNavBar transparent={true} />
                     <HomeLandingPage/>
                     
            </div>
           <Descubra/>

           <HomePrePos
             items={[
                {
                  title: "PRÉ & PRODUÇÃO AUDIOVISUAL",
                  description: "O departamento de Pré & Produção da TC|CINE oferece uma variedade de serviços para o seu projeto audiovisual. Clique em Saiba Mais e descubra em detalhes nossos métodos e soluções para cada etapa da produção.",
                  cartaz: imagem10,
                  link: "/producao",
                  accordionItems: [
                    {
                      title: "Diversos formatos audiovisuais",
                      content: "Realizamos projetos para cinema e TV, com suporte técnico e criativo em todas as etapas. Oferecemos consultoria e desenvolvimento de projetos para editais."
                    },
                    {
                      title: "Variadas estruturas",
                      content: "A TC|CINE se adapta a diferentes realidades de produção, com soluções eficazes para projetos de baixo orçamento ou de grande porte."
                    },
                    {
                      title: "Produção única",
                      content: "Nosso time Executivo, oferece produção, locações, contratos, aluguel de equipamentos e toda a logística necessária para transformar sua ideia em realidade. "
                    }
                  ]
                },
                {
                    title: "PÓS-PRODUÇÃO AUDIOVISUAL",
                    description: "O setor de Pós-Produção da TC|CINE disponibiliza diversas ferramentas para a finalização do seu projeto. Clique em Saiba Mais e veja como podemos elevar a qualidade da sua produção ao mais alto nível.",
                    cartaz: imagem1,
                    link: "/pos-producao",
                    accordionItems: [
                      {
                        title: "Edição cinematográfica",
                        content: "A TC|CINE conta com montadores experientes, prontos para entregar ritmo, narrativa e autenticidade ao seu projeto audiovisual."
                      },
                      {
                        title: "Color grading",
                        content: "Nosso departamento especializado em cor trabalha para extrair o máximo de qualidade visual, garantindo identidade e impacto em cada cena."
                      },
                      {
                        title: "Sonorização cinematográfica",
                        content: "Oferecemos serviços completos de áudio: edição, mixagem 3D e trilhas musicais originais que elevam a imersão e a força da sua obra."
                      }
                    ]
                  }
              ]}
           />
              
            <Insight/>

            <Footer/>

        </LanguageProvider>
        </>
    )
}
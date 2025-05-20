import React, { useState } from 'react';
import styles from './Descubra.module.css';
import imagem1 from "../../assets/semEfeitoImg1.jpg";
import imagem2 from "../../assets/semEfeitoImg2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DescubraOpc } from './DescubraOpc';
import { BotaoGeral } from './BotaoGeral';
import SplitText from '../SplitText'; 


export const Descubra = () => {
    const [activeTab, setActiveTab] = useState('produtora');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <section className={styles.section}>
                <div className={styles.primeiroContudo}>
                    <SplitText
                        text="Descubra a TC|CINE"
                        className={styles.tituloPrincipal}
                        delay={30}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,20px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    />
                    <SplitText
                        text="A Tecnologia Criativa Cinematográfica (TC|CINE) é uma produtora & coprodutora audiovisual que une métodos e processos tecnológicos à criatividade cinematográfica."
                        className={styles.textoDescricao}
                        delay={10}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,15px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    />
                </div>

                <div className={styles.segundoContudo}>
                    <DescubraOpc/>

                    <div className={styles.tabButtons}>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'produtora' ? styles.activeTab : ''}`}
                            onClick={() => handleTabChange('produtora')}
                        >
                            <SplitText
                                text="Produtora"
                                delay={5}
                                animationFrom={{ opacity: 0 }}
                                animationTo={{ opacity: 1 }}
                            />
                        </button>
                        <button 
                            className={`${styles.tabButton} ${activeTab === 'coprodutora' ? styles.activeTab : ''}`}
                            onClick={() => handleTabChange('coprodutora')}
                        >
                            <SplitText
                                text="Coprodutora"
                                delay={5}
                                animationFrom={{ opacity: 0 }}
                                animationTo={{ opacity: 1 }}
                            />
                        </button>
                    </div>

                    <div className={styles.contentWrapper}>
                        <div className={styles.contentContainer}>
                            {activeTab === 'produtora' ? (
                                <>
                                    <div className={styles.textContent}>
                                        <SplitText
                                            text="Ideia para produtos autorais"
                                            className={styles.contentTitle}
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(-20px,0,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        />
                                        <SplitText
                                            text="Com uma equipe experiente e processos eficientes, a TC|CINE participa de todas as etapas da produção audiovisual (Pre&Produção e Pós-produção), desde grandes projetos até produções com orçamentos menores. Também oferecemos consultorias técnicas e criativas para o desenvolvimento de roteiros, planejamento e execução de produções."
                                            className={styles.contentDescription}
                                            delay={5}
                                            animationFrom={{ opacity: 0 }}
                                            animationTo={{ opacity: 1 }}
                                        />
                                        <BotaoGeral
                                            texto="Contrate"
                                            link="/suporte"
                                        />
                                    </div>
                                    <div className={styles.imageContent}>
                                        <img src={imagem1} alt="Produtora" className={styles.contentImage} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.textContent}>
                                        <SplitText
                                            text="Vá mais longe em Equipe"
                                            className={styles.contentTitle}
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(-20px,0,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        />
                                        <SplitText
                                            text="A TC|CINE é parceira de produtoras independentes que buscam suporte em etapas específicas de seus projetos. Atuamos com flexibilidade em pré-produção, produção e pós-produção, oferecendo soluções personalizadas que elevam a qualidade e o impacto de cada obra. Conheça todos os nossos serviços e descubra como podemos transformar ideias em narrativas audiovisuais de alto padrão."
                                            className={styles.contentDescription}
                                            delay={5}
                                            animationFrom={{ opacity: 0 }}
                                            animationTo={{ opacity: 1 }}
                                        />
                                        <BotaoGeral
                                            texto="Contrate"
                                            link="/suporte"
                                        />
                                    </div>
                                    <div className={styles.imageContent}>
                                        <img src={imagem2} alt="Co-produtora" className={styles.contentImage} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
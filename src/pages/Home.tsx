import { FunctionComponent, useCallback } from "react";
import styles from "./Home.module.css";

<<<<<<< HEAD
const Home: FunctionComponent = () => {
=======
const Home: FunctionComponentHomeType = () => {

>>>>>>> Incoming
  const onAccueilTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homeSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAProposDeClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComptencesTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='skillsSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTravauxTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    window.open("https://github.com/KamouloxBigboi/Sante-Connect-JS");
  }, []);

  const onAccueilText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homeSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAProposTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComptencesText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='skillsSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVectorIconClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFaireDfilerTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComptencesText3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='skillsSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTravauxText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAProposDe2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFaireDfilerText2Click = useCallback(() => {
    const anchor = document.querySelector(
<<<<<<< HEAD
      "[data-scroll-to='copyrightContainer']",
=======
      "[data-scroll-to='contactCenterFrameContainer']",

>>>>>>> Incoming
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAccueilText3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homeSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAProposText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTravauxText3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFaireDfilerText3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComptencesText4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTravauxText4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAProposDe3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactText3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDownloadCvButtonContainerClick = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1mfEI2KehSbXoNfTE92AlkmrZAESSsV0D/view?usp=drive_link",
    );
  }, []);

  const onToscrollContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='skillsSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAccueilText4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homeSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComptencesText5Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='skillsSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTravauxText5Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("https://github.com/KamouloxBigboi");
  }, []);

  const onLinkedinContainerClick = useCallback(() => {
    window.open("http://linkedin.com/in/kamal-guidadou");
  }, []);

  const onImage1IconClick = useCallback(() => {
    window.open("https://tryhackme.com/p/KamouloxPelvis");
  }, []);

  const onComptencesText6Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='skillsSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTravauxText6Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAProposDe4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactText4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='worksSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVectorIcon3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFaireDfilerText4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutSectionContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
<<<<<<< HEAD
    <div className={styles.Home}>
=======
    <div className={styles.home}>
      <img className={styles.unionIcon} alt="" />

>>>>>>> Incoming
      <img
        className={styles.splashBlueFrameIcon}
        alt=""
        src="/splash-blue-frame@2x.png"
      />
      <img className={styles.unionIcon} alt="" />
      <img
        className={styles.splashPurpleFrameIcon}
        alt=""
        src="/splash-purple-frame@2x.png"
      />
<<<<<<< HEAD
=======
      <div className={styles.footersection}>
        <img
          className={styles.footersectionChild}
          alt=""
          src="/rectangle-41.svg"
        />
        <div className={styles.copyright}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.kamalGuidadou}>Kamal Guidadou</div>
          <div className={styles.ceSiteA}>
            Ce site a été créé en TypeScript avec Figma/Locofy et React/ViteJS
          </div>
        </div>
      </div>

>>>>>>> Incoming
      <div
        className={styles.contactsection}
        data-scroll-to="contactSectionContainer"
      >
<<<<<<< HEAD
        <div className={styles.contactFrame}>
          <div className={styles.contacSubFrame}>
            <img
              className={styles.image1Traced}
              alt=""
              src="/image-1-traced.svg"
            />
            <img
              className={styles.contacSubFrameChild}
              alt=""
              src="/rectangle-41.svg"
            />
            <img
              className={styles.contacSubFrameItem}
              alt=""
              src="/group-79.svg"
            />
            <div
              className={styles.copyright}
              data-scroll-to="copyrightContainer"
            >
              <div className={styles.restonsEnContactParent}>
                <div className={styles.restonsEnContact}>
                  Restons en contact !
                </div>
                <div className={styles.kamalGuidadou}>{`Kamal Guidadou `}</div>
                <div className={styles.kamalguidadougmailcom}>
                  kamal.guidadou@gmail.com
                </div>
              </div>
              <button className={styles.sendEmailButton}>
                <div className={styles.envoyezVotreMessage}>
                  Envoyez votre message
                </div>
              </button>
              <div className={styles.sendEmailFrame}>
                <input
                  className={styles.nameInput}
                  placeholder="Nom"
                  type="text"
                />
                <input
                  className={styles.emailInput}
                  name="Email_input"
                  placeholder="Email"
                  type="email"
                />
                <textarea
                  className={styles.messageInput}
                  placeholder="Message"
                  required={true}
                />
              </div>
              <div className={styles.antDesigntwitterCircleFillParent}>
                <div className={styles.antDesigntwitterCircleFill} />
                <img
                  className={styles.antDesigngithubFilledIcon}
                  alt=""
                  src="/antdesigngithubfilled@2x.png"
                />
                <img
                  className={styles.antDesigntwitterCircleFill}
                  alt=""
                  src="/entyposociallinkedinwithcircle.svg"
                />
              </div>
              <div className={styles.kamalGuidadou1}>Kamal Guidadou</div>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
=======
        <img className={styles.image1Traced} alt="" src="/image-1-traced.svg" />
        <div className={styles.contacSubFrame}>
          <img
            className={styles.contacSubFrameChild}
            alt=""
            src="/group-79.svg"
          />
          <div
            className={styles.contactCenterFrame}
            data-scroll-to="contactCenterFrameContainer"
          >
            <div className={styles.contactAllcenterFrame}>

>>>>>>> Incoming
              <div className={styles.saintOuenSurSeine}>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>93400 Saint-Ouen-sur-Seine</p>
                <p className={styles.jeSuisConvaincu}>&nbsp;</p>
              </div>
<<<<<<< HEAD
=======
              <div className={styles.kamalguidadougmailcom}>
                kamal.guidadou@gmail.com
              </div>

>>>>>>> Incoming
              <div className={styles.div}>+33 7 73 74 53 21</div>
              <a
                className={styles.email}
                href="mailto:kamal.guidadou@gmail.com"
              />
              <a className={styles.tel} href="tel:+33773745321" />
<<<<<<< HEAD
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4162.4020795653505!2d2.3305291669113166!3d48.912554099436335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ee41d37a90d%3A0x40b82c3688b3a90!2s93400%20Saint-Ouen-sur-Seine%2C%20France!5e0!3m2!1sfr!2sdz!4v1721641066558!5m2!1sfr!2sdz"
=======
              <div className={styles.kamalGuidadou1}>{`Kamal Guidadou `}</div>
              <div className={styles.restonsEnContact}>
                Restons en contact !
              </div>
            </div>
            <button className={styles.sendEmailButton}>
              <div className={styles.envoyezVotreMessage}>
                Envoyez votre message
              </div>
            </button>
            <div className={styles.sendEmailFrame}>
              <input
                className={styles.nameInput}
                placeholder="Nom"
                type="text"

>>>>>>> Incoming
              />
<<<<<<< HEAD
              <div className={styles.contactMenu}>
                <b className={styles.accueil} onClick={onAccueilTextClick}>
                  Accueil
                </b>
                <div className={styles.aProposDe} onClick={onAProposDeClick}>
                  A propos de moi
                </div>
                <div
                  className={styles.comptences}
                  onClick={onComptencesTextClick}
                >
                  Compétences
                </div>
                <div className={styles.travaux} onClick={onTravauxTextClick}>
                  Travaux
                </div>
=======
              <input
                className={styles.emailInput}
                name="Email_input"
                placeholder="Email"
                type="email"
              />
              <textarea
                className={styles.messageInput}
                placeholder="Message"
                required={true}
              />
            </div>
            <iframe
              className={styles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4162.4020795653505!2d2.3305291669113166!3d48.912554099436335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ee41d37a90d%3A0x40b82c3688b3a90!2s93400%20Saint-Ouen-sur-Seine%2C%20France!5e0!3m2!1sfr!2sdz!4v1721641066558!5m2!1sfr!2sdz"
            />
            <div className={styles.contactMenu}>
              <b className={styles.accueil} onClick={onAccueilTextClick}>
                Accueil
              </b>
              <div className={styles.aProposDe} onClick={onAProposDeClick}>
                A propos de moi

>>>>>>> Incoming
              </div>
<<<<<<< HEAD
              <div className={styles.ceSiteA}>
                Ce site a été créé en TypeScript avec Figma/Locofy et
                React/ViteJS
=======
              <div
                className={styles.comptences}
                onClick={onComptencesTextClick}
              >
                Compétences

>>>>>>> Incoming
              </div>
<<<<<<< HEAD
              <div className={styles.bxbxsCopyright} />
=======
              <div className={styles.travaux} onClick={onTravauxTextClick}>
                Travaux
              </div>

>>>>>>> Incoming
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.workssection}
        data-scroll-to="worksSectionContainer"
      >
        <div className={styles.frame}>
          <b className={styles.monProjetEn}>Mon projet en cours</b>
          <div className={styles.santConnect}>Santé Connect</div>
          <div className={styles.partantDeLideContainer}>
            <p className={styles.blankLine}>
              Partant de l'idée que les femmes rencontrent aujourd'hui des
              difficultés à faire reconnaître leurs spécificités médicales dans
              le milieu du travail, ce projet vise à offrir un espace de parole
              et de réflexion sur cette thématique.
            </p>
            <p className={styles.blankLine}>
              Conçu comme un réseau social au service des femmes, Santé Connect
              est une application web dédiée à la mise en relation et à la
              discussion autour de la santé féminine, abordant notamment les
              désagréments propres aux femmes dans le milieu professionnel. Mon
              objectif est que cette solution applicative soit réappropriée par
              des femmes, pour les femmes.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.outilsEtApiSocketioBcr}>
              <span>
                <span className={styles.outils}>Outils</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.outils}>{`et API `}</span>
                <span>: Socket.io, bcrypt...</span>
              </span>
            </p>
          </div>
          <img className={styles.frameChild} alt="" src="/group-77@2x.png" />
          <div className={styles.instanceParent}>
            <img className={styles.frameItem} alt="" src="/html5_img@2x.png" />
            <img className={styles.frameInner} alt="" src="/css3_img@2x.png" />
            <img className={styles.frameIcon} alt="" src="/js_img@2x.png" />
            <img
              className={styles.frameChild1}
              alt=""
              src="/react_img@2x.png"
            />
            <img
              className={styles.frameChild2}
              alt=""
              src="/express_img@2x.png"
            />
            <img
              className={styles.frameChild3}
              alt=""
              src="/mongodb_img@2x.png"
            />
          </div>
          <div className={styles.frameParent} onClick={onFrameContainer1Click}>
            <img className={styles.frameIcon1} alt="" src="/frame.svg" />
            <img
              className={styles.antDesigngithubFilledIcon}
              alt=""
              src="/antdesigngithubfilled@2x.png"
            />
            <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
          </div>
          <div className={styles.nhsitezPasCliquerSurLeParent}>
            <div className={styles.nhsitezPas}>
              N’hésitez pas à cliquer sur le chat et visiter mes repos !
            </div>
            <img className={styles.unionIcon1} alt="" src="/union.svg" />
          </div>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
        <div className={styles.frame1}>
          <div className={styles.frameWrapper}>
            <div className={styles.frame2} />
          </div>
          <div className={styles.accueilParent}>
            <b className={styles.accueil1} onClick={onAccueilText2Click}>
              Accueil
            </b>
            <div className={styles.aPropos} onClick={onAProposTextClick}>
              A propos
            </div>
            <div
              className={styles.comptences1}
              onClick={onComptencesText2Click}
            >
              Compétences
            </div>
            <div className={styles.contact} onClick={onContactTextClick}>
              Contact
            </div>
            <div className={styles.resumeWrapper}>
              <div className={styles.resume}>Resume</div>
            </div>
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.frameDiv}>
            <div className={styles.scrollParent}>
              <div className={styles.scroll}>Scroll</div>
              <img className={styles.frameIcon3} alt="" src="/frame2.svg" />
            </div>
          </div>
          <div className={styles.contact1} />
          <div className={styles.frameInner1}>
            <div className={styles.frameChild4} />
          </div>
        </div>
        <img className={styles.workssectionChild} alt="" src="/group-87.svg" />
        <img
          className={styles.vectorIcon1}
          alt=""
          src="/vector1.svg"
          onClick={onVectorIconClick}
        />
        <div className={styles.faireDfiler} onClick={onFaireDfilerTextClick}>
          Faire défiler
        </div>
        <div className={styles.navMenuHome}>
          <div className={styles.comptences2} onClick={onComptencesText3Click}>
            Compétences
          </div>
          <div className={styles.travaux1} onClick={onTravauxText2Click}>
            Contact
          </div>
          <div className={styles.aProposDe1} onClick={onAProposDe2Click}>
            A propos de moi
          </div>
          <div className={styles.contact2} onClick={onContactText2Click} />
        </div>
      </div>
      <div
        className={styles.skillssection}
        data-scroll-to="skillsSectionContainer"
      >
        <div className={styles.skillsNavMenu}>
          <div className={styles.faireDfilerWrapper}>
            <div
              className={styles.faireDfiler1}
              onClick={onFaireDfilerText2Click}
            >
              Faire défiler
            </div>
          </div>
          <b className={styles.accueil2} onClick={onAccueilText3Click}>
            Accueil
          </b>
          <div className={styles.aPropos1} onClick={onAProposText2Click}>
            A propos
          </div>
          <div className={styles.travaux2} onClick={onTravauxText3Click}>
            Travaux
          </div>
          <div className={styles.contact3}>Contact</div>
        </div>
        <div className={styles.skillssectionWithoutNav}>
          <div className={styles.skillsSubCenterFrame}>
            <b className={styles.comptences3}>Compétences</b>
            <div className={styles.jaimeMeDpasser}>
              J'aime me dépasser et je suis continuellement en veille
              technologique. Mon défi aujourd'hui est d'apporter le meilleur de
              mes acquis au sein d'une équipe et de travailler en collaboration,
              en utilisant la méthode Agile, afin de repousser ensemble nos
              limites. Polyvalent, je suis capable d'apprendre de nouveaux
              langages et de sortir de ma zone de confort. Voici les compétences
              que je maîtrise :
            </div>
            <div className={styles.cellesSurLequelles}>
              Celles sur lequelles je travaille et que j’aimerais approfondir :
            </div>
            <img
              className={styles.skillsSubCenterFrameChild}
              alt=""
              src="/frame-99@2x.png"
            />
            <img
              className={styles.bAndWComputIcon}
              alt=""
              src="/b-and-w-comput.svg"
            />
            <img
              className={styles.skillsSubCenterFrameItem}
              alt=""
              src="/frame-100@2x.png"
            />
          </div>
          <img className={styles.tracedIcon} alt="" src="/26677-1-traced.svg" />
        </div>
        <img
          className={styles.vectorIcon2}
          alt=""
<<<<<<< HEAD
          src="/vector1.svg"
=======
          src="/vector2.svg"

>>>>>>> Incoming
          onClick={onVectorIcon2Click}
        />
        <div className={styles.faireDfiler2} onClick={onFaireDfilerText3Click}>
          Faire défiler
        </div>
        <div className={styles.navMenuHome1}>
          <div className={styles.comptences2} onClick={onComptencesText4Click}>
            A propos de moi
          </div>
          <div className={styles.travaux3} onClick={onTravauxText4Click}>
            Travaux
          </div>
          <div className={styles.aProposDe2} onClick={onAProposDe3Click}>
            {" "}
            Accueil
          </div>
          <div className={styles.contact4} onClick={onContactText3Click}>
            Contact
          </div>
        </div>
      </div>
      <div
        className={styles.aboutsection}
        data-scroll-to="aboutSectionContainer"
      >
        <div className={styles.aboutCentreFrame}>
          <div className={styles.aboutPhotoFrame}>
            <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
            <img
              className={styles.kamalPhotoIcon}
              alt=""
              src="/kamal-photo@2x.png"
            />
          </div>
          <div className={styles.aboutTextframeGeneral}>
            <div className={styles.aboutTextframeSmall}>
              <b className={styles.aMonPropos}>A mon propos</b>
              <div className={styles.aprsPrsDeContainer}>
                <p className={styles.aprsPrsDe}>
                  Après près de 10 ans en tant que Médiateur Culturel de l’Art,
                  je me suis tourné vers le développement web...
                </p>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.blankLine}>
                  ...ou plutôt, j'ai pleinement embrassé cette nouvelle voie.
                  Mon ambition et ma persévérance m'ont poussé à me former
                  continuellement et à m'adapter à de nouveaux défis. Que ce
                  soit avec une technologie que je maîtrise déjà ou une stack
                  qui m'est inconnue, je suis désormais prêt à approfondir mes
                  connaissances et à m’adapter aux missions qui me seront
                  confiées.
                </p>
                <p className={styles.jeSuisConvaincu}>
                  Je suis convaincu que mon parcours atypique et ma
                  détermination font de moi un candidat idéal en tant que
                  Développeur Full Stack Junior. Oser prendre un alternant en
                  reconversion, c’est parier sur une pensée positive et pugnace,
                  "out of the box", mais aussi sur une personne prête à fournir
                  beaucoup d'efforts pour réussir.
                </p>
              </div>
            </div>
            <div
              className={styles.downloadCvButton}
              onClick={onDownloadCvButtonContainerClick}
            >
              <div className={styles.tlchargerMonCv}>Télécharger mon CV</div>
            </div>
          </div>
          <img className={styles.groupIcon1} alt="" src="/group1.svg" />
        </div>
        <div className={styles.toscroll} onClick={onToscrollContainerClick}>
<<<<<<< HEAD
          <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
=======
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />

>>>>>>> Incoming
          <div className={styles.faireDfiler3}>Faire défiler</div>
        </div>
        <b className={styles.accueil3} onClick={onAccueilText4Click}>
          Accueil
        </b>
        <div className={styles.comptences5} onClick={onComptencesText5Click}>
          Compétences
        </div>
        <div className={styles.travaux4} onClick={onTravauxText5Click}>
          Travaux
        </div>
        <div className={styles.contact5}>Contact</div>
      </div>
      <div className={styles.homesection} data-scroll-to="homeSectionContainer">
        <div className={styles.homeSubFrame}>
<<<<<<< HEAD
          <img className={styles.vectorIcon4} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector3.svg" />
=======
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
          <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />

>>>>>>> Incoming
          <div className={styles.frame4}>
            <div className={styles.frameGroup}>
              <div className={styles.kamalGuidadouParent}>
                <div className={styles.kamalGuidadou2}>Kamal guidadou</div>
                <div
                  className={styles.dveloppeurFullStack}
                >{`Développeur Full Stack `}</div>
              </div>
              <div className={styles.socialNetwork}>
                <img
                  className={styles.githubIcon}
                  alt=""
                  src="/github@2x.png"
                  onClick={onGithubIconClick}
                />
                <div
                  className={styles.linkedin}
                  onClick={onLinkedinContainerClick}
                >
                  <img
<<<<<<< HEAD
                    className={styles.entypoSociallinkedinWithCiIcon1}
=======
                    className={styles.entypoSociallinkedinWithCiIcon}

>>>>>>> Incoming
                    alt=""
<<<<<<< HEAD
                    src="/entyposociallinkedinwithcircle1.svg"
=======
                    src="/entyposociallinkedinwithcircle.svg"

>>>>>>> Incoming
                  />
                </div>
                <div className={styles.g1}>
                  <a className={styles.image1Wrapper}>
                    <img
                      className={styles.image1Icon}
                      alt=""
                      src="/image1@2x.png"
                      onClick={onImage1IconClick}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navMenuHome2}>
          <div className={styles.comptences2} onClick={onComptencesText6Click}>
            Compétences
          </div>
          <div className={styles.travaux1} onClick={onTravauxText6Click}>
            Travaux
          </div>
          <div className={styles.aProposDe3} onClick={onAProposDe4Click}>
            A propos de moi
          </div>
          <div className={styles.contact6} onClick={onContactText4Click}>
            Contact
          </div>
        </div>
        <img
          className={styles.vectorIcon6}
          alt=""
<<<<<<< HEAD
          src="/vector4.svg"
=======
          src="/vector6.svg"

>>>>>>> Incoming
          onClick={onVectorIcon3Click}
        />
        <div className={styles.faireDfiler4} onClick={onFaireDfilerText4Click}>
          Faire défiler
        </div>
        <img className={styles.groupIcon2} alt="" src="/group2.svg" />
        <div className={styles.html5}>HTML5</div>
        <div className={styles.javascript}>JavaScript</div>
        <div className={styles.css3}>CSS3</div>
        <div className={styles.react}>React</div>
        <div className={styles.next}>Next</div>
        <div className={styles.vite}>VITE</div>
        <div className={styles.git}>Git</div>
        <div className={styles.mongodb}>MongoDB</div>
        <div className={styles.express}>express</div>
      </div>
    </div>
  );
};

export default Home;

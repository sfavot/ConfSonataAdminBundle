// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Import images
import images from './images';

preloader(images);

const joliColor = "#F7D325";
const retroFriendlyColor = "#0BCCA3";

const mainColor = joliColor;

const theme = createTheme({
  primary: mainColor,
  quartenary: mainColor
});
theme.screen.components.list.listStyleType = 'square';
theme.screen.components.listItem.fontSize = '1.3em';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="bar">
          <Slide bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Peut-on s'affranchir de
            </Heading>
            <Heading size={1} fit caps>
              Sonata Admin Bundle ?
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Suzanne Favot @sfavot</Text>
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading caps textColor="primary" textFont="primary" margin="0px auto 30px">
              Qui suis-je ?
            </Heading>
            <Layout>
              <Fit>
                <Image src={images.sfavot.replace("/", "")} margin="40px 40px 0px 40px" height="300px" style={{ borderRadius: "50%" }}/>
              </Fit>
              <Fill>
                <List style={{ marginTop: "80px" }}>
                  <ListItem>Développeur chez <Link textColor="primary" href="http://jolicode.com">JoliCode</Link></ListItem>
                  <ListItem>Principalement Symfony et React</ListItem>
                  <ListItem>Toute première conférence 😨</ListItem>
                  <ListItem><span style={{ fontWeight: "bold", color: mainColor }}>Sonata Master</span> à JoliCode</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgImage={images.sonataMaster.replace("/", "")} textColor="primary">
            <Heading caps textColor="white" bgColor="primary">
              Sonata Master ?
            </Heading>
          </Slide>
          <Slide bgColor="primary" textColor="black">
            <Heading size={1} caps fit textColor="black">
              Quoi ? tu connais pas ?
            </Heading>
            <Image src={images.slack1.replace("/", "")} width="100%" style={{ marginTop: "50px" }}/>
            <List>
              <ListItem>Bundle d'administration OSS pour Symfony</ListItem>
              <ListItem>Partie de la "suite" Sonata</ListItem>
              <ListItem>Must-have (recommandé dans la <Link textColor="black" href="http://symfony.com/doc/master/cmf/tutorial/sonata-admin.html">doc de Symfony</Link>)</ListItem>
              <ListItem>Utilisé par <strong>tout le monde</strong></ListItem>
            </List>
          </Slide>
          <Slide bgColor="primary" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading size={4} caps textColor="black">
              Dashboard
            </Heading>
            <Image src={images.sonataAdminDashboard.replace("/", "")} width="95%"/>
          </Slide>
          <Slide bgColor="primary" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading size={4} caps textColor="black">
              Vue Liste
            </Heading>
            <Image src={images.sonataAdminList.replace("/", "")} width="95%"/>
          </Slide>
          <Slide bgColor="primary" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading size={4} caps textColor="black">
              Vue détaillée
            </Heading>
            <Image src={images.sonataAdminShow.replace("/", "")} width="95%"/>
          </Slide>
          <Slide bgColor="primary" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading size={4} caps textColor="black">
              Création / Édition
            </Heading>
            <Image src={images.sonataAdminEdit.replace("/", "")} width="95%"/>
          </Slide>
          <Slide bgColor="primary" textColor="black">
            <Heading size={1} caps textColor="black">
              Mais aussi
            </Heading>
            <List>
              <ListItem>Une recherche</ListItem>
              <ListItem>Des "batch actions"</ListItem>
              <ListItem>De l'autocomplétion</ListItem>
              <ListItem>La gestion des médias (avec SonataMediaBundle)</ListItem>
              <ListItem>Des types de champ spéciaux (datetime, wysiwyg...)</ListItem>
              <ListItem>Des tris et filtres poussés</ListItem>
              <ListItem>Une vue mosaïque</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>
          <Slide bgColor="primary" textColor="black">
            <Heading size={1} caps textColor="black">
              Sous le capot
            </Heading>
            <List>
              <ListItem>Un CRUDController utilisé par toutes les entités</ListItem>
              <ListItem>Un template par vue (list, show, create, edit)</ListItem>
              <ListItem>Une classe d'admin à ajouter par entité</ListItem>
              <ListItem>Quelques lignes de config yaml à ajouter</ListItem>
            </List>
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading caps fit textColor="primary">
              Sonata Admin Bundle, c'est 👍 !
            </Heading>
            <List>
              <ListItem>Rapide à mettre en place</ListItem>
              <ListItem>S'adapte à tous les ORMs / BDDs</ListItem>
              <ListItem>Gère les relations complexes entre objets</ListItem>
              <ListItem>Gère les rôles / droits / ACLs</ListItem>
              <ListItem>Et en plus c'est joli !</ListItem>
            </List>
            <Image width="100%" src={images.magic.replace('/', '')}/>
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading caps textColor="primary">
              Quelques fonctionnalités avancées
            </Heading>
          </Slide>
          <Slide bgColor="white" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading caps fit textColor="primary">
              Activer / désactiver finement les routes
            </Heading>
            <CodePane
              textSize="1.2rem"
              lang="php"
              source={require("raw!../assets/code/routes.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="white" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading caps fit textColor="primary">
              Activer / désactiver finement les routes - Rendu
            </Heading>
            <Image src={images.routesPreview1.replace("/", "")} width="55%"/>
            <Image src={images.routesPreview2.replace("/", "")} width="50%" style={{ marginTop: "30px" }}/>
          </Slide>
          <Slide bgColor="white" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading caps fit textColor="primary">
              Actions personnalisées - Controller
            </Heading>
            <CodePane
              textSize="1.1rem"
              lang="php"
              source={require("raw!../assets/code/custom-action_controller.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="white" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading caps fit textColor="primary">
              Actions personnalisées - Déclaration
            </Heading>
            <CodePane
              textSize="1.2rem"
              lang="yaml"
              source={require("raw!../assets/code/custom-action_declaration.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="white" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading caps fit textColor="primary">
              Actions personnalisées - Template
            </Heading>
            <CodePane
              textSize="1.2rem"
              lang="twig"
              source={require("raw!../assets/code/custom-action_button.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="white" textColor="black" align="flex-start flex-start" maxWidth="100%">
            <Heading caps fit textColor="primary">
              Actions personnalisées - Classe Admin
            </Heading>
            <CodePane
              textSize="0.8rem"
              lang="php"
              source={require("raw!../assets/code/custom-action_admin.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="white" textColor="black" maxWidth="100%" align="flex-start flex-start">
            <Heading caps fit textColor="primary">
              Actions personnalisées - Rendu
            </Heading>
            <Image src={images.customActionPreview.replace("/", "")} width="100%"/>
          </Slide>
          <Slide bgColor="black" textColor="white">
            <Heading caps fit textColor="primary">
              Et puis parfois Sonata Admin c'est 👎...
            </Heading>
          </Slide>
          <Slide bgColor="black" textColor="white" align="center flex-start">
            <Heading caps fit textColor="primary">
              Problèmes de stabilité
            </Heading>
            <Image width="90%" src={images.contrib1.replace('/', '')} style={{ marginTop: "30px" }}/>
            <Appear>
              <div>
                <Text textColor="white" style={{ marginTop: "30px" }}>
                  PRs en attente pendant (trop) longtemps.
                </Text>
                <Image width="90%" src={images.contrib2.replace('/', '')}/>
              </div>
            </Appear>
            <Appear>
              <div>
                <Text textColor="white" style={{ marginTop: "30px" }}>
                  BC breaks...
                </Text>
                <Image width="90%" src={images.contrib3.replace('/', '')}/>
              </div>
            </Appear>
          </Slide>
          <Slide bgColor="black" textColor="white" align="center flex-start">
            <Heading caps textColor="primary">
              C'est FAT !
            </Heading>
            <List>
              <ListItem>Sonata Admin, ça gère <strong>tout</strong>...</ListItem>
              <ListItem>5 bundles juste pour l'administration</ListItem>
              <ListItem>+ un core bundle, un bundle pour les médias, un pour les users...</ListItem>
              <ListItem>Des dépendances à n'en plus finir</ListItem>
            </List>
            <Appear>
              <div>
                <Heading caps textColor="primary">
                  Et donc...
                </Heading>
                <Layout>
                  <Fill>
                    <List>
                      <ListItem>Difficile à maintenir</ListItem>
                      <ListItem>Difficile de contribuer</ListItem>
                      <ListItem>Difficile à documenter</ListItem>
                    </List>
                  </Fill>
                  <Fill>
                    <Image width="35%" src={images.skeleton.replace('/', '')}/>
                  </Fill>
                </Layout>
              </div>
            </Appear>
          </Slide>
          <Slide bgColor="black" textColor="white" align="center flex-start">
            <Heading caps textColor="primary" style={{ marginBottom: '30px' }}>
              La doc...
            </Heading>
            <Appear>
              <div>
                <Image width="90%" src={images.doc1.replace('/', '')}/>
                <Image width="90%" src={images.doc2.replace('/', '')}/>
                <Image width="90%" src={images.doc3.replace('/', '')}/>
              </div>
            </Appear>
          </Slide>
          <Slide bgColor="black" maxWidth="100%">
            <Heading caps fits size={2} textColor="primary" style={{ marginBottom: "50px" }}>
              Et c'est frustrant...
            </Heading>
            <Layout>
              <Fill>
                <Image width="95%" src={images.rage1.replace('/', '')}/>
                <Image width="95%" src={images.rage2.replace('/', '')}/>
                <Image width="95%" src={images.rage3.replace('/', '')}/>
                <Image width="95%" src={images.rage4.replace('/', '')}/>
              </Fill>
              <Fill>
                <Image width="95%" src={images.rage5.replace('/', '')}/>
                <Image width="95%" src={images.rage6.replace('/', '')}/>
                <Image width="95%" src={images.rage7.replace('/', '')}/>
                <Image width="95%" src={images.rage8.replace('/', '')}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="primary">
            <Heading caps fit size={1} textColor="white">
              Les alternatives
            </Heading>
          </Slide>
          <Slide bgColor="tertiary" align="flex-start flex-start">
            <Heading caps fit size={1} textColor="primary">
              Meet JoliCampus <Image height="1em" style={{ margin: "0" }} src={images.joliCampusLogo.replace('/', '')}/>
            </Heading>
            <Image src={images.joliCampus.replace('/', '')} style={{ marginTop: "60px" }} width="95%"/>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              Easy Admin Bundle
            </Heading>
            <Text><Link textColor="primary">https://github.com/javiereguiluz/EasyAdminBundle</Link></Text>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              Les plus
            </Heading>
            <List>
              <ListItem>Ultra rapide à mettre en place</ListItem>
              <ListItem>Interface agréable et facilement personnalisable</ListItem>
              <ListItem>Recherche, tri et pagination</ListItem>
              <ListItem>Templates facilement extensibles</ListItem>
              <ListItem>Documentation claire et exhaustive</ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              Les moins
            </Heading>
            <List>
              <ListItem>Pas de dashboard</ListItem>
              <ListItem>Pas de filtres</ListItem>
              <ListItem>Recherche peu poussée (ne fonctionne pas sur certains champs)</ListItem>
              <ListItem>Pas de gestion des médias</ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              admin-on-rest
            </Heading>
            <Text><Link textColor="primary">https://github.com/marmelab/admin-on-rest</Link></Text>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              Les plus
            </Heading>
            <List>
              <ListItem></ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              Les moins
            </Heading>
            <List>
              <ListItem>Nécessite une API REST</ListItem>
            </List>
          </Slide>
          <Slide bgColor="tertiary" align="center flex-start">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              From scratch ?
            </Heading>
            <Image width="70%" src={images.southPark.replace("/", "")}/>
          </Slide>
          <Slide align="center flex-start">
            <Heading caps textColor="black" style={{ marginBottom: "30px"}}>
              Les besoins
            </Heading>
            <Heading size={4} textColor="white">
              Sur le papier
            </Heading>
            <List>
              <ListItem>Une gestion des droits et rôles utilisateurs</ListItem>
              <ListItem>Un CRUD par entité</ListItem>
              <ListItem>Une interface</ListItem>
            </List>
            <Appear>
              <div>
                <Heading size={4} textColor="white">
                  Mais en vrai...
                </Heading>
                <List>
                  <ListItem>Gestion des médias</ListItem>
                  <ListItem>Formulaires imbriqués</ListItem>
                  <ListItem>Autocomplétion</ListItem>
                  <ListItem>...</ListItem>
                </List>
              </div>
            </Appear>
          </Slide>
          <Slide>
            <Heading size={4} caps textColor="white" margin={10}>
              Parfaitement adapté...
            </Heading>
            <Heading size={4} caps textColor="white" margin={10}>
              Mais beaucoup d'inconvénients !
            </Heading>
            <List>
              <ListItem>Du code vite dupliqué</ListItem>
              <ListItem>Compliqué à maintenir</ListItem>
              <ListItem>Compliqué à réutiliser</ListItem>
              <ListItem>Des FormType à rallonge</ListItem>
              <ListItem>Perte de fonctionnalités</ListItem>
            </List>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              From scratch ?
            </Heading>
            <Image width="90%" src={images.fromScratch.replace("/", "")}/>
          </Slide>
          <Slide bgColor="tertiary" align="flex-start flex-start">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              La solution hybride
            </Heading>
            <Text textColor="black" style={{ marginTop: "50px" }}>
              Étendre Sonata Admin Bundle seulement là où c'est nécessaire
            </Text>
            <CodePane
              textSize="1.2rem"
              lang="php"
              source={require("raw!../assets/code/hybrid.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="primary">
            <Heading size={2} caps textColor="black">
              En bref...
            </Heading>
            <Heading size={1} caps lineHeight={1.5} textColor="white">
              ça dépend !
            </Heading>
            <List>
              <ListItem>De la taille du modèle</ListItem>
              <ListItem>De sa complexité</ListItem>
              <ListItem>Des délais / ressources</ListItem>
              <ListItem>Des besoins métiers</ListItem>
              <ListItem>Du niveau de personnalisation souhaité</ListItem>
              <ListItem>...</ListItem>
            </List>
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading size={1} caps fit textColor="primary">
              Contribuez
            </Heading>
            <Layout style={{ marginTop: "50px", marginBottom: "50px" }}>
              <Fill>
                <svg width="256" height="256" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
              </Fill>
              <Fill>
                <svg width="256" height="256" viewBox="0 0 12 16" version="1.1" aria-hidden="true"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              </Fill>
              <Fill>
                <svg width="256" height="256" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
              </Fill>
            </Layout>
            <Heading size={4} caps fit textColor="black">
              Faites vivre le projet !
            </Heading>
          </Slide>
          <Slide bgColor="white">
            <Heading caps textColor="black">
              Merci !
            </Heading>
            <Heading textColor="primary">
              Des questions ?
            </Heading>
            <Image src={images.heart.replace('/', '')} width="100%"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

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

const theme = createTheme({
  primary: "#0BCCA3",
  quartenary: "#0BCCA3"
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
                  <ListItem><span style={{ fontWeight: "bold", color: "#0BCCA3" }}>Sonata Master</span> à JoliCode</ListItem>
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
          <Slide bgColor="white" textColor="black">
            <Heading caps fit textColor="primary">
              Sonata Admin Bundle, c'est 👍 !
            </Heading>
            <List>
              <ListItem>Rapide à mettre en place</ListItem>
              <ListItem>S'adapte à tous les ORMs / BDDs</ListItem>
              <ListItem>Gère les relations complexes entres objects</ListItem>
              <ListItem>Gère les rôles / droits / ACLs</ListItem>
              <ListItem>Dashboard + CRUD pour chaque entité</ListItem>
              <ListItem>Et en plus c'est joli !</ListItem>
            </List>
            <Image width="100%" src={images.magic.replace('/', '')}/>
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading caps textColor="primary">
              Quelques fonctionnalités méconnues
            </Heading>
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading caps fit textColor="primary">
              Activer / désactiver finement les routes
            </Heading>
            <CodePane
              lang="php"
              source={require("raw!../assets/code/routes.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading caps fit textColor="primary">
              Ajouter des actions personnalisées 1/2
            </Heading>
            <CodePane
              lang="php"
              source={require("raw!../assets/code/custom-action_controller.example")}
              margin="20px auto"
            />
            <CodePane
              lang="yaml"
              source={require("raw!../assets/code/custom-action_declaration.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="white" textColor="black">
            <Heading caps fit textColor="primary">
              Ajouter des actions personnalisées 2/2
            </Heading>
            <CodePane
              lang="twig"
              source={require("raw!../assets/code/custom-action_button.example")}
              margin="20px auto"
            />
            <CodePane
              lang="php"
              source={require("raw!../assets/code/custom-action_admin.example")}
              margin="20px auto"
            />
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
              <ListItem>Sonata Admin, ça gère tout...</ListItem>
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
          <Slide bgColor="black">
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
          <Slide bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Meet JoliCampus!
            </Heading>
            <Image width="100%" src={images.joliCampus.replace('/', '')}/>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              Easy Admin Bundle
            </Heading>
            <Text><Link textColor="primary">https://github.com/javiereguiluz/EasyAdminBundle</Link></Text>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              ng-admin
            </Heading>
            <Text><Link textColor="primary">https://github.com/marmelab/ng-admin</Link></Text>
            <Text><Link textColor="primary">https://github.com/marmelab/NgAdminGeneratorBundle</Link></Text>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading caps fit>
              admin-on-rest
            </Heading>
            <Text><Link textColor="primary">https://github.com/marmelab/admin-on-rest</Link></Text>
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
          <Slide bgColor="tertiary" align="center flex-start">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              La solution hybride
            </Heading>
            <List>
              <ListItem>Possibilités d'extension quasi infinies</ListItem>
              <ListItem>Étendre Sonata Admin Bundle seulement là où c'est nécessaire</ListItem>
              <ListItem>Réutiliser les APIs et le code métier existants</ListItem>
              <ListItem>Twig, React, Angular...</ListItem>
            </List>
            <CodePane
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

export const SITE = 'https://www.thehouseofwaffles.com';
export const EMAIL = 'info@thehouseofwaffles.com';
export const LANGS = ['en', 'nl', 'fr'] as const;
export type Lang = (typeof LANGS)[number];
export type PageKey = 'home' | 'antwerp' | 'bruges' | 'ghent' | 'menu' | 'history' | 'jobs' | 'contact';

export const SLUGS: Record<PageKey, Record<Lang, string>> = {
  home: { en: '', nl: '', fr: '' },
  antwerp: { en: 'antwerpen', nl: 'antwerpen', fr: 'anvers' },
  bruges: { en: 'brugge', nl: 'brugge', fr: 'bruges' },
  ghent: { en: 'gent', nl: 'gent', fr: 'gand' },
  menu: { en: 'waffle', nl: 'wafels', fr: 'gaufres' },
  history: { en: 'history', nl: 'geschiedenis', fr: 'histoire' },
  jobs: { en: 'jobs', nl: 'jobs', fr: 'jobs' },
  contact: { en: 'contact', nl: 'contact', fr: 'contact' },
};

export function url(lang: Lang, page: PageKey) {
  const slug = SLUGS[page][lang];
  return '/' + (lang === 'en' ? '' : lang + '/') + (slug ? slug + '/' : '');
}

export const SOCIAL = {
  facebook: 'https://www.facebook.com/thehouseofwaffles',
  instagram: 'https://www.instagram.com/thehouseofwaffles',
};

type L = Record<Lang, string>;

export const LOCATIONS: Record<'antwerp' | 'bruges' | 'ghent', {
  city: L; street: string; postal: string; locality: string; maps: string; photo: string; hero: string; side?: string; gallery?: string[]; since: string;
  h1: L; intro: L; body: L; metaTitle: L; metaDesc: L;
}> = {
  bruges: {
    city: { en: 'Bruges', nl: 'Brugge', fr: 'Bruges' },
    street: 'Wollestraat 31', postal: '8000', locality: 'Brugge', since: '2018',
    maps: 'https://www.google.com/maps/search/?api=1&query=The%20House%20of%20Waffles%2C%20Wollestraat%2031%2C%208000%20Brugge',
    photo: 'julie', hero: 'brugge-belfort', side: 'julie', gallery: ['brugge-chef', 'brugge-terras', 'brugge-takeaway'],
    h1: { en: 'Waffles in Bruges, a few steps from the Belfry', nl: 'Wafels in Brugge, op een paar stappen van het Belfort', fr: 'Des gaufres à Bruges, à deux pas du Beffroi' },
    intro: {
      en: 'This is where it started. Our first House of Waffles stands in the Wollestraat, in the heart of Bruges, with a large terrace in the middle of the city and a cosy room inside.',
      nl: 'Hier is het begonnen. Ons eerste House of Waffles staat in de Wollestraat, in hartje Brugge, met een groot terras midden in de stad en een gezellige zaal binnen.',
      fr: "C'est ici que tout a commencé. Notre première House of Waffles se trouve dans la Wollestraat, au cœur de Bruges, avec une grande terrasse en pleine ville et une salle chaleureuse.",
    },
    body: {
      en: 'Every waffle is baked fresh when you order it and served at your table. Choose a Liège waffle, chewy with caramelised pearl sugar, or a Brussels waffle, light and crisp. Both come sweet or savoury.',
      nl: 'Elke wafel bakken we vers op het moment dat je bestelt, en we brengen hem aan tafel. Kies een Luikse wafel, stevig en met gekarameliseerde parelsuiker, of een Brusselse, licht en krokant. Allebei zoet of hartig.',
      fr: 'Chaque gaufre est cuite à la commande et servie à table. Choisissez une gaufre de Liège, moelleuse avec son sucre perlé caramélisé, ou une gaufre de Bruxelles, légère et croustillante. Les deux existent en version sucrée ou salée.',
    },
    metaTitle: { en: 'Waffles in Bruges near the Belfry', nl: 'Wafels eten in Brugge bij het Belfort', fr: 'Gaufres à Bruges près du Beffroi' },
    metaDesc: {
      en: 'Fresh Brussels and Liège waffles, sweet or savoury, at Wollestraat 31 in Bruges. Large terrace, open every day 11:30–19:00.',
      nl: 'Versgebakken Brusselse en Luikse wafels, zoet of hartig, in de Wollestraat 31 in Brugge. Groot terras, elke dag open van 11.30 tot 19 uur.',
      fr: 'Gaufres de Bruxelles et de Liège, sucrées ou salées, Wollestraat 31 à Bruges. Grande terrasse, ouvert tous les jours de 11h30 à 19h.',
    },
  },
  antwerp: {
    city: { en: 'Antwerp', nl: 'Antwerpen', fr: 'Anvers' },
    street: 'Handschoenmarkt 17/21', postal: '2000', locality: 'Antwerpen', since: '2021',
    maps: 'https://www.google.com/maps/search/?api=1&query=The%20House%20of%20Waffles%2C%20Handschoenmarkt%2017%2C%202000%20Antwerpen',
    photo: 'dsc00678', hero: 'dsc00678',
    h1: { en: 'Waffles in Antwerp, at the foot of the cathedral', nl: 'Wafels in Antwerpen, aan de voet van de kathedraal', fr: "Des gaufres à Anvers, au pied de la cathédrale" },
    intro: {
      en: 'Our Antwerp House of Waffles opened in 2021 on the Handschoenmarkt. From the large terrace you look straight at the Cathedral of Our Lady; inside it is warm and cosy.',
      nl: 'Ons Antwerpse House of Waffles opende in 2021 op de Handschoenmarkt. Vanop het grote terras kijk je recht op de Onze-Lieve-Vrouwekathedraal; binnen is het warm en gezellig.',
      fr: "Notre House of Waffles d’Anvers a ouvert en 2021 sur le Handschoenmarkt. Depuis la grande terrasse, vous avez la cathédrale Notre-Dame juste en face ; à l'intérieur, l'ambiance est chaleureuse.",
    },
    body: {
      en: 'Every waffle is baked fresh when you order it. Choose a Liège waffle, chewy with caramelised pearl sugar, or a Brussels waffle, light and crisp. Both come sweet or savoury.',
      nl: 'Elke wafel bakken we vers op het moment dat je bestelt. Kies een Luikse wafel, stevig en met gekarameliseerde parelsuiker, of een Brusselse, licht en krokant. Allebei zoet of hartig.',
      fr: 'Chaque gaufre est cuite à la commande. Choisissez une gaufre de Liège, moelleuse avec son sucre perlé caramélisé, ou une gaufre de Bruxelles, légère et croustillante. Les deux existent en version sucrée ou salée.',
    },
    metaTitle: { en: 'Waffles in Antwerp by the cathedral', nl: 'Wafels eten in Antwerpen bij de kathedraal', fr: 'Gaufres à Anvers près de la cathédrale' },
    metaDesc: {
      en: 'Fresh Brussels and Liège waffles, sweet or savoury, at Handschoenmarkt 17/21 in Antwerp. Terrace with cathedral view, open every day 11:30–19:00.',
      nl: 'Versgebakken Brusselse en Luikse wafels, zoet of hartig, op de Handschoenmarkt 17/21 in Antwerpen. Terras met zicht op de kathedraal, elke dag open van 11.30 tot 19 uur.',
      fr: 'Gaufres de Bruxelles et de Liège, sucrées ou salées, Handschoenmarkt 17/21 à Anvers. Terrasse avec vue sur la cathédrale, ouvert tous les jours de 11h30 à 19h.',
    },
  },
  ghent: {
    city: { en: 'Ghent', nl: 'Gent', fr: 'Gand' },
    street: 'Graslei 8', postal: '9000', locality: 'Gent', since: '2023',
    maps: 'https://www.google.com/maps/search/?api=1&query=The%20House%20of%20Waffles%2C%20Graslei%208%2C%209000%20Gent',
    photo: 'gildehuis', hero: 'dsc00883', side: 'gildehuis',
    h1: { en: 'Waffles in Ghent, on the Graslei', nl: 'Wafels in Gent, op de Graslei', fr: 'Des gaufres à Gand, sur le Graslei' },
    intro: {
      en: 'Our third House of Waffles opened in 2023 in a historic building on the Graslei, the old quay that is one of the best-known places in Ghent.',
      nl: 'Ons derde House of Waffles opende in 2023 in een historisch pand op de Graslei, de oude kaai die tot de bekendste plekken van Gent behoort.',
      fr: "Notre troisième House of Waffles a ouvert en 2023 dans un bâtiment historique du Graslei, l'ancien quai qui compte parmi les lieux les plus connus de Gand.",
    },
    body: {
      en: 'Every waffle is baked fresh when you order it. Choose a Liège waffle, chewy with caramelised pearl sugar, or a Brussels waffle, light and crisp. Both come sweet or savoury.',
      nl: 'Elke wafel bakken we vers op het moment dat je bestelt. Kies een Luikse wafel, stevig en met gekarameliseerde parelsuiker, of een Brusselse, licht en krokant. Allebei zoet of hartig.',
      fr: 'Chaque gaufre est cuite à la commande. Choisissez une gaufre de Liège, moelleuse avec son sucre perlé caramélisé, ou une gaufre de Bruxelles, légère et croustillante. Les deux existent en version sucrée ou salée.',
    },
    metaTitle: { en: 'Waffles in Ghent on the Graslei', nl: 'Wafels eten in Gent op de Graslei', fr: 'Gaufres à Gand sur le Graslei' },
    metaDesc: {
      en: 'Fresh Brussels and Liège waffles, sweet or savoury, at Graslei 8 in Ghent. Open every day 11:30–19:00.',
      nl: 'Versgebakken Brusselse en Luikse wafels, zoet of hartig, op de Graslei 8 in Gent. Elke dag open van 11.30 tot 19 uur.',
      fr: 'Gaufres de Bruxelles et de Liège, sucrées ou salées, Graslei 8 à Gand. Ouvert tous les jours de 11h30 à 19h.',
    },
  },
};

export const WAFFLES: { id: string; name: string; kind: 'sweet' | 'savoury'; brussels?: string; liege?: string; single?: string; nameL?: L; desc: L }[] = [
  { id: 'classico', name: 'El Classico', kind: 'sweet', brussels: 'classico-brussels', liege: 'classico-luiks',
    desc: { en: 'Vanilla ice cream, whipped cream and warm chocolate sauce.', nl: 'Vanille-ijs, slagroom en warme chocoladesaus.', fr: 'Glace vanille, chantilly et sauce chocolat chaude.' } },
  { id: 'banana', name: 'Banana Bonanza', kind: 'sweet', brussels: 'banana-bonanza-brussels', liege: 'banana-bonanza-luiks',
    desc: { en: 'Sliced banana, chocolate sauce and whipped cream.', nl: 'Plakjes banaan, chocoladesaus en slagroom.', fr: 'Rondelles de banane, sauce chocolat et chantilly.' } },
  { id: 'cherry', name: 'Cherry Delight', kind: 'sweet', brussels: 'cherry-delight-brussels', liege: 'cherry-delight-luiks',
    desc: { en: 'Warm cherries and whipped cream.', nl: 'Warme krieken en slagroom.', fr: 'Cerises chaudes et chantilly.' } },
  { id: 'chocolate', name: 'Chocolate Madness', kind: 'sweet', brussels: 'chocolate-madness-brussels', liege: 'chocolate-madness-luiks',
    desc: { en: 'Chocolate ice cream, chocolate sauce and whipped cream.', nl: 'Chocolade-ijs, chocoladesaus en slagroom.', fr: 'Glace chocolat, sauce chocolat et chantilly.' } },
  { id: 'chuck', name: 'The Chuck Berry', kind: 'sweet', brussels: 'chuck-berry-brussels', liege: 'chuck-berry-luiks',
    desc: { en: 'Blueberry compote and whipped cream.', nl: 'Compote van blauwe bessen en slagroom.', fr: 'Compote de myrtilles et chantilly.' } },
  { id: 'seasons', name: 'Four Seasons', kind: 'sweet', brussels: 'four-seasons-brussels', liege: 'four-seasons-luiks',
    desc: { en: 'Fresh fruit and whipped cream.', nl: 'Vers fruit en slagroom.', fr: 'Fruits frais et chantilly.' } },
  { id: 'mikado', name: 'Mikado', kind: 'sweet', single: 'mikado-brussels',
    desc: { en: 'Vanilla cream and chocolate sauce.', nl: 'Vanillecrème en chocoladesaus.', fr: 'Crème vanille et sauce chocolat.' } },
  { id: 'sugar', name: 'Brussels with sugar', nameL: { en: 'Brussels with sugar', nl: 'Brusselse met suiker', fr: 'Bruxelles au sucre' }, kind: 'sweet', single: 'brussels-met-suiker',
    desc: { en: 'The plain Brussels waffle, dusted with powdered sugar.', nl: 'De Brusselse wafel puur, met bloemsuiker.', fr: 'La gaufre de Bruxelles nature, saupoudrée de sucre glace.' } },
  { id: 'decker', name: 'The Double Decker', kind: 'savoury', single: 'brugse-dubbeldekker',
    desc: { en: 'Two layers of waffle with ham and melted cheese, the Bruges way.', nl: 'Twee lagen wafel met ham en gesmolten kaas, op zijn Brugs.', fr: 'Deux étages de gaufre, jambon et fromage fondu, à la brugeoise.' } },
  { id: 'blt', name: 'Club BLT', kind: 'savoury', single: 'club-blt',
    desc: { en: 'Bacon, lettuce, tomato and a fried egg.', nl: 'Spek, sla, tomaat en een spiegelei.', fr: 'Bacon, salade, tomate et œuf au plat.' } },
  { id: 'italiano', name: 'Italiano Vero', kind: 'savoury', single: 'italiano-vero',
    desc: { en: 'Mozzarella, tomato, rocket and balsamic.', nl: 'Mozzarella, tomaat, rucola en balsamico.', fr: 'Mozzarella, tomate, roquette et balsamique.' } },
  { id: 'pollo', name: 'Pollo Loco', kind: 'savoury', single: 'pollo-loco',
    desc: { en: 'Seasoned chicken with a fried egg.', nl: 'Gekruide kip met een spiegelei.', fr: 'Poulet épicé et œuf au plat.' } },
  { id: 'norwegian', name: 'The Norwegian', kind: 'savoury', single: 'dsc00670',
    desc: { en: 'Smoked salmon and cream cheese.', nl: 'Gerookte zalm en roomkaas.', fr: 'Saumon fumé et fromage frais.' } },
];

export const MORE_WAFFLES: { name: string; desc: L }[] = [
  { name: 'Strawberry Fields', desc: { en: 'Fresh strawberries.', nl: 'Verse aardbeien.', fr: 'Fraises fraîches.' } },
  { name: 'Holy Guacamole', desc: { en: 'Guacamole on a savoury waffle.', nl: 'Guacamole op een hartige wafel.', fr: 'Guacamole sur une gaufre salée.' } },
  { name: 'Waffle on the Go', desc: { en: 'Fresh fruit and whipped cream, to take away.', nl: 'Vers fruit en slagroom, om mee te nemen.', fr: 'Fruits frais et chantilly, à emporter.' } },
];

export const REVIEWS = [
  { quote: 'Personal favourite is the Banana Bonanza.', source: 'Tripadvisor' },
  { quote: 'A fantastic spot for anyone with a sweet tooth.', source: 'Google' },
  { quote: 'It didn’t disappoint!', source: 'Tripadvisor' },
];

export const T: Record<string, L> = {
  tagline: { en: 'Our home is where the waffles are', nl: 'Our home is where the waffles are', fr: 'Notre maison, c’est là où sont les gaufres' },
  skip: { en: 'Skip to content', nl: 'Naar de inhoud', fr: 'Aller au contenu' },
  navMenu: { en: 'Waffles', nl: 'Wafels', fr: 'Gaufres' },
  navHistory: { en: 'History', nl: 'Geschiedenis', fr: 'Histoire' },
  navJobs: { en: 'Jobs', nl: 'Jobs', fr: 'Jobs' },
  navContact: { en: 'Contact', nl: 'Contact', fr: 'Contact' },
  openMenu: { en: 'Menu', nl: 'Menu', fr: 'Menu' },
  hours: { en: 'Open every day, 11:30–19:00', nl: 'Elke dag open, 11.30–19 uur', fr: 'Ouvert tous les jours, 11h30–19h' },
  hoursShort: { en: 'Daily 11:30–19:00', nl: 'Dagelijks 11.30–19 uur', fr: 'Tous les jours 11h30–19h' },
  navigate: { en: 'Get directions', nl: 'Routebeschrijving', fr: 'Itinéraire' },
  seeHouse: { en: 'More info', nl: 'Meer info', fr: 'Plus d’infos' },
  since: { en: 'Since', nl: 'Sinds', fr: 'Depuis' },
  heroLead: {
    en: 'Brussels and Liège waffles, sweet or savoury, baked fresh from a grandmother’s recipe in Bruges, Antwerp and Ghent.',
    nl: 'Brusselse en Luikse wafels, zoet of hartig, vers gebakken naar het recept van een grootmoeder in Brugge, Antwerpen en Gent.',
    fr: 'Gaufres de Bruxelles et de Liège, sucrées ou salées, cuites à la minute d’après la recette d’une grand-mère, à Bruges, Anvers et Gand.',
  },
  heroCta: { en: 'Find a House of Waffles', nl: 'Vind een House of Waffles', fr: 'Trouver une House of Waffles' },
  heroCta2: { en: 'See the waffles', nl: 'Bekijk de wafels', fr: 'Voir les gaufres' },
  housesTitle: { en: 'Three Houses of Waffles', nl: 'Drie Houses of Waffles', fr: 'Trois Houses of Waffles' },
  housesLead: { en: 'Each in the historic centre, each open every day.', nl: 'Elk in het historische centrum, elk alle dagen open.', fr: 'Chacune dans le centre historique, chacune ouverte tous les jours.' },
  menuTitle: { en: 'Sweet and savoury', nl: 'Zoet en hartig', fr: 'Sucré et salé' },
  menuLead: {
    en: 'Most waffles come two ways. Switch between Brussels and Liège to see yours.',
    nl: 'De meeste wafels bestaan in twee versies. Wissel tussen Brussels en Luiks en bekijk de jouwe.',
    fr: 'La plupart des gaufres existent en deux versions. Passez de Bruxelles à Liège pour voir la vôtre.',
  },
  allWaffles: { en: 'See all waffles', nl: 'Bekijk alle wafels', fr: 'Voir toutes les gaufres' },
  brussels: { en: 'Brussels', nl: 'Brussels', fr: 'Bruxelles' },
  liege: { en: 'Liège', nl: 'Luiks', fr: 'Liège' },
  toggleLabel: { en: 'Type of waffle', nl: 'Soort wafel', fr: 'Type de gaufre' },
  sweet: { en: 'Sweet', nl: 'Zoet', fr: 'Sucrées' },
  savoury: { en: 'Savoury', nl: 'Hartig', fr: 'Salées' },
  alsoTitle: { en: 'Also on the menu', nl: 'Ook op de kaart', fr: 'Aussi à la carte' },
  twoTitle: { en: 'Brussels or Liège?', nl: 'Brussels of Luiks?', fr: 'Bruxelles ou Liège ?' },
  brusselsText: {
    en: 'Light and airy, crisp outside and soft inside. The deep rectangular pockets hold powdered sugar, chocolate sauce, fruit or whipped cream.',
    nl: 'Licht en luchtig, krokant vanbuiten en zacht vanbinnen. De diepe rechthoekige vakjes vangen bloemsuiker, chocoladesaus, fruit of slagroom.',
    fr: 'Légère et aérienne, croustillante dehors et moelleuse dedans. Ses alvéoles profondes retiennent le sucre glace, le chocolat, les fruits ou la chantilly.',
  },
  liegeText: {
    en: 'Rich and chewy. Pearl sugar in the dough caramelises on the iron and leaves sweet, crunchy pockets.',
    nl: 'Rijk en stevig. De parelsuiker in het deeg karameliseert in het ijzer en laat zoete, knapperige stukjes achter.',
    fr: 'Riche et moelleuse. Le sucre perlé dans la pâte caramélise sur le fer et laisse des éclats sucrés et croquants.',
  },
  historyTitle: { en: 'Why we are called House of Waffles', nl: 'Waarom we House of Waffles heten', fr: 'Pourquoi nous nous appelons House of Waffles' },
  historyTeaser: {
    en: 'Monique Van Waefelghem was born in Bruges in 1929. Her family name means “House of Waffles” in old Dutch, and her waffles were the centre of every family gathering.',
    nl: 'Monique Van Waefelghem werd in 1929 in Brugge geboren. Haar familienaam betekent in oud-Nederlands “House of Waffles”, en haar wafels waren het middelpunt van elk familiefeest.',
    fr: 'Monique Van Waefelghem est née à Bruges en 1929. Son nom de famille signifie « House of Waffles » en vieux néerlandais, et ses gaufres étaient au centre de chaque réunion de famille.',
  },
  historyCta: { en: 'Read our history', nl: 'Lees onze geschiedenis', fr: 'Lire notre histoire' },
  reviewsTitle: { en: 'What guests say', nl: 'Wat gasten zeggen', fr: 'Ce que disent nos clients' },
  closing: { en: 'Come along and taste happiness', nl: 'Kom langs en proef geluk', fr: 'Venez goûter au bonheur' },
  footerHouses: { en: 'Houses of Waffles', nl: 'Houses of Waffles', fr: 'Houses of Waffles' },
  footerMore: { en: 'More', nl: 'Meer', fr: 'Plus' },
  rights: { en: 'All rights reserved.', nl: 'Alle rechten voorbehouden.', fr: 'Tous droits réservés.' },
  whereTitle: { en: 'Where to find us', nl: 'Waar je ons vindt', fr: 'Où nous trouver' },
  onMenu: { en: 'A few favourites', nl: 'Een paar favorieten', fr: 'Quelques favorites' },
  otherHouses: { en: 'Our other Houses of Waffles', nl: 'Onze andere Houses of Waffles', fr: 'Nos autres Houses of Waffles' },
  // history page
  h_h1: { en: 'Since 1929', nl: 'Sinds 1929', fr: 'Depuis 1929' },
  h_p1: {
    en: 'In 1929 Monique Van Waefelghem was born in one of the most charming houses of Bruges. She was the last person in the whole city to carry the name Van Waefelghem.',
    nl: 'In 1929 werd Monique Van Waefelghem geboren in een van de charmantste huizen van Brugge. Ze was de laatste in de hele stad die de naam Van Waefelghem droeg.',
    fr: 'En 1929, Monique Van Waefelghem naît dans l’une des plus charmantes maisons de Bruges. Elle sera la dernière de toute la ville à porter le nom Van Waefelghem.',
  },
  h_p2: {
    en: 'She was known in the family and far beyond for her warm personality. The whole family came together at her table regularly, and Monique baked and served the best and warmest waffles you can imagine.',
    nl: 'In de familie en ver daarbuiten stond ze bekend om haar warme persoonlijkheid. De hele familie kwam geregeld bij haar aan tafel, en Monique bakte en serveerde er de beste en warmste wafels die je je kunt voorstellen.',
    fr: 'Dans la famille et bien au-delà, elle était connue pour sa personnalité chaleureuse. Toute la famille se retrouvait régulièrement à sa table, où Monique préparait et servait les meilleures gaufres, toujours bien chaudes.',
  },
  h_p3: {
    en: 'Monique passed away in 2015 after a warm and rich life, leaving her loved ones with only good memories.',
    nl: 'Monique overleed in 2015 na een warm en rijk leven, en liet haar dierbaren achter met alleen maar mooie herinneringen.',
    fr: 'Monique s’est éteinte en 2015 après une vie riche et chaleureuse, ne laissant à ses proches que de beaux souvenirs.',
  },
  h_p4: {
    en: 'In 2018 her closest family, daughter Anne, son-in-law Dirk and grandchildren Julie and Charles, paid a last tribute to their beloved “Mamie”. The four of them renovated the house where she was born and turned it into The House of Waffles. The name is hers: in old Dutch, Waefelghem means “House of Waffles”.',
    nl: 'In 2018 brachten haar naaste familieleden, dochter Anne, schoonzoon Dirk en kleinkinderen Julie en Charles, een laatste eerbetoon aan hun geliefde “Mamie”. Met z’n vieren renoveerden ze haar geboortehuis en maakten er The House of Waffles van. De naam is de hare: in oud-Nederlands betekent Waefelghem “House of Waffles”.',
    fr: 'En 2018, ses proches, sa fille Anne, son gendre Dirk et ses petits-enfants Julie et Charles, rendent un dernier hommage à leur chère « Mamie ». À quatre, ils rénovent sa maison natale et en font The House of Waffles. Le nom est le sien : en vieux néerlandais, Waefelghem signifie « House of Waffles ».',
  },
  h_p5: {
    en: 'The batter still gets a splash of her favourite beer, and we try to welcome every guest the way she welcomed hers.',
    nl: 'In het beslag gaat nog altijd een scheutje van haar lievelingsbier, en we proberen elke gast te ontvangen zoals zij dat deed.',
    fr: 'La pâte reçoit toujours un trait de sa bière préférée, et nous essayons d’accueillir chaque client comme elle accueillait les siens.',
  },
  h_t1: { en: 'Monique Van Waefelghem is born in Bruges.', nl: 'Monique Van Waefelghem wordt geboren in Brugge.', fr: 'Naissance de Monique Van Waefelghem à Bruges.' },
  h_t2: { en: 'The first House of Waffles opens in her birthplace.', nl: 'Het eerste House of Waffles opent in haar geboortehuis.', fr: 'La première House of Waffles ouvre dans sa maison natale.' },
  h_t3: { en: 'A second House of Waffles opens in Antwerp.', nl: 'Een tweede House of Waffles opent in Antwerpen.', fr: 'Une deuxième House of Waffles ouvre à Anvers.' },
  h_t4: { en: 'A third House of Waffles opens on the Graslei in Ghent.', nl: 'Een derde House of Waffles opent op de Graslei in Gent.', fr: 'Une troisième House of Waffles ouvre sur le Graslei à Gand.' },
  h_alt1: { en: 'Mamie with her grandchildren', nl: 'Mamie met haar kleinkinderen', fr: 'Mamie avec ses petits-enfants' },
  // jobs
  j_h1: { en: 'We have the perfect job for you', nl: 'Wij hebben de perfecte job voor jou', fr: 'Nous avons le job parfait pour vous' },
  j_intro: {
    en: 'We are always looking for good people for our teams in Bruges, Antwerp and Ghent. Experience in hospitality is a plus, but enthusiasm matters more.',
    nl: 'We zoeken altijd goede mensen voor onze teams in Brugge, Antwerpen en Gent. Horeca-ervaring is een pluspunt, maar enthousiasme telt meer.',
    fr: 'Nous cherchons toujours de bonnes personnes pour nos équipes à Bruges, Anvers et Gand. Une expérience en horeca est un plus, mais l’enthousiasme compte davantage.',
  },
  j_r1: { en: 'Kitchen staff', nl: 'Keukenmedewerker', fr: 'Personnel de cuisine' },
  j_r1t: { en: 'You like preparing waffles and working in a young, lively team.', nl: 'Je maakt graag wafels klaar en werkt graag in een jong, dynamisch team.', fr: 'Vous aimez préparer des gaufres et travailler dans une équipe jeune et dynamique.' },
  j_r2: { en: 'Waiter or waitress', nl: 'Kelner of serveerster', fr: 'Serveur ou serveuse' },
  j_r2t: { en: 'You want a fixed position in the room or on the terrace in one of our three cities.', nl: 'Je zoekt een vaste job in de zaal of op het terras in een van onze drie steden.', fr: 'Vous cherchez un poste fixe en salle ou en terrasse dans l’une de nos trois villes.' },
  j_r3: { en: 'Flexi-job or student', nl: 'Flexi-jobber of student', fr: 'Flexi-job ou étudiant' },
  j_r3t: { en: 'You are free on weekdays or weekends and you are friendly and helpful by nature.', nl: 'Je bent vrij in de week of in het weekend en je bent van nature vriendelijk en behulpzaam.', fr: 'Vous êtes disponible en semaine ou le week-end et vous êtes naturellement aimable et serviable.' },
  j_r4: { en: 'Franchise', nl: 'Franchise', fr: 'Franchise' },
  j_r4t: { en: 'You want to open your own House of Waffles and lead a team, and you have the background for it.', nl: 'Je wilt je eigen House of Waffles openen en een team leiden, en je hebt er de achtergrond voor.', fr: 'Vous souhaitez ouvrir votre propre House of Waffles et diriger une équipe, et vous avez le parcours pour cela.' },
  j_apply: { en: 'Apply by email', nl: 'Solliciteer per e-mail', fr: 'Postuler par e-mail' },
  j_how: {
    en: 'Send us your name, phone number, the city you prefer and your CV.',
    nl: 'Stuur ons je naam, telefoonnummer, de stad van je voorkeur en je cv.',
    fr: 'Envoyez-nous votre nom, votre numéro de téléphone, la ville souhaitée et votre CV.',
  },
  j_subject: { en: 'Job application', nl: 'Sollicitatie', fr: 'Candidature' },
  // contact
  c_h1: { en: 'Contact', nl: 'Contact', fr: 'Contact' },
  c_intro: { en: 'We are open every day. Walk in, or write to us.', nl: 'We zijn elke dag open. Loop binnen, of schrijf ons.', fr: 'Nous sommes ouverts tous les jours. Passez nous voir, ou écrivez-nous.' },
  c_mail: { en: 'Questions, groups or press', nl: 'Vragen, groepen of pers', fr: 'Questions, groupes ou presse' },
  // meta
  m_home_t: { en: 'The House of Waffles | Belgian waffles in Bruges, Antwerp and Ghent', nl: 'The House of Waffles | Belgische wafels in Brugge, Antwerpen en Gent', fr: 'The House of Waffles | Gaufres belges à Bruges, Anvers et Gand' },
  m_home_d: {
    en: 'Fresh Brussels and Liège waffles, sweet or savoury, from a family recipe. Three Houses of Waffles in Bruges, Antwerp and Ghent, open every day 11:30–19:00.',
    nl: 'Versgebakken Brusselse en Luikse wafels, zoet of hartig, naar familierecept. Drie Houses of Waffles in Brugge, Antwerpen en Gent, elke dag open van 11.30 tot 19 uur.',
    fr: 'Gaufres de Bruxelles et de Liège, sucrées ou salées, selon une recette de famille. Trois Houses of Waffles à Bruges, Anvers et Gand, ouvertes tous les jours de 11h30 à 19h.',
  },
  m_menu_t: { en: 'Our waffles: Brussels and Liège, sweet and savoury', nl: 'Onze wafels: Brussels en Luiks, zoet en hartig', fr: 'Nos gaufres : Bruxelles et Liège, sucrées et salées' },
  m_menu_d: {
    en: 'From El Classico and Banana Bonanza to The Norwegian with smoked salmon. See every waffle as a Brussels or a Liège waffle.',
    nl: 'Van El Classico en Banana Bonanza tot The Norwegian met gerookte zalm. Bekijk elke wafel als Brusselse of Luikse wafel.',
    fr: 'De El Classico et Banana Bonanza à The Norwegian au saumon fumé. Découvrez chaque gaufre en version Bruxelles ou Liège.',
  },
  m_hist_t: { en: 'Our history: a family recipe since 1929', nl: 'Onze geschiedenis: een familierecept sinds 1929', fr: 'Notre histoire : une recette de famille depuis 1929' },
  m_hist_d: {
    en: 'How the waffles of Monique Van Waefelghem, born in Bruges in 1929, became The House of Waffles.',
    nl: 'Hoe de wafels van Monique Van Waefelghem, in 1929 in Brugge geboren, The House of Waffles werden.',
    fr: 'Comment les gaufres de Monique Van Waefelghem, née à Bruges en 1929, sont devenues The House of Waffles.',
  },
  m_jobs_t: { en: 'Jobs at The House of Waffles', nl: 'Jobs bij The House of Waffles', fr: 'Jobs chez The House of Waffles' },
  m_jobs_d: {
    en: 'Kitchen, service, flexi-jobs, student jobs and franchise in Bruges, Antwerp and Ghent.',
    nl: 'Keuken, bediening, flexi-jobs, studentenjobs en franchise in Brugge, Antwerpen en Gent.',
    fr: 'Cuisine, service, flexi-jobs, jobs étudiants et franchise à Bruges, Anvers et Gand.',
  },
  m_contact_t: { en: 'Contact and addresses', nl: 'Contact en adressen', fr: 'Contact et adresses' },
  m_contact_d: {
    en: 'Addresses, opening hours and directions for The House of Waffles in Bruges, Antwerp and Ghent.',
    nl: 'Adressen, openingsuren en routebeschrijving voor The House of Waffles in Brugge, Antwerpen en Gent.',
    fr: 'Adresses, horaires et itinéraires pour The House of Waffles à Bruges, Anvers et Gand.',
  },
};

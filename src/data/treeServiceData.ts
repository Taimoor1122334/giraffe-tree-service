export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  estimateOption: string;
  categoryLabel: string;
  categoryGroup: 'removal-storm' | 'pruning-health' | 'lot-stump';
  shortDescription: string;
  image: string;
  imageAlt: string;
  overview: string;
  whatWeDo: string[];
  equipmentUsed: string[];
  candidNote: string;
  typicalClients: string;
  processSteps: ServiceProcessStep[];
  faqs: ServiceFaq[];
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  context: string;
  quote: string;
  featured?: boolean;
}

export interface ServiceAreaRegion {
  id: string;
  name: string;
  communities: string;
  focus: string;
  dispatchNote: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  image: string;
  imageAlt: string;
  summary: string;
  paragraphs: string[];
  keyTakeaways: string[];
  relatedServiceSlug: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  summary: string;
  requirements: string[];
}

export const COMPANY_INFO = {
  name: 'Giraffe Tree Service',
  foundedYear: 1996,
  president: 'Dean Goodson',
  address: '512 Bender St, Little Rock, AR 72202',
  phoneDisplay: '(501) 664-8733',
  phoneHref: 'tel:5016648733',
  email: 'office@giraffetree.com',
  officeHours: 'Mon-Fri 8am-5pm',
  emergencyHours: '24/7, always available',
};

export const BRAND_LOGO = {
  src: '/images/giraffetreelogo-big.png',
  alt: 'Giraffe Tree Service',
};

export const HERO_IMAGE = {
  src: '/images/IMG_2420.jpg',
  alt: 'Giraffe Tree Service crew and crane truck set up at a Little Rock home',
};

export const HERITAGE_IMAGE = {
  src: '/images/IMG_8216.jpg',
  alt: 'Giraffe Tree Service crew standing with their crane after a removal',
};

export const CTA_IMAGE = {
  src: '/images/IMG_1456.jpg',
  alt: 'Giraffe Tree Service operator at the controls on a job site',
};

export const CREW_IMAGE = {
  src: '/images/IMG_1271.jpg',
  alt: 'Giraffe Tree Service crew in company shirts and hard hats',
};

export const ALL_SERVICES: ServiceDetail[] = [
  {
    id: 'tree-removal',
    slug: 'tree-removal',
    title: 'Tree Removal',
    estimateOption: 'Tree Removal',
    categoryLabel: 'Residential & Commercial',
    categoryGroup: 'removal-storm',
    shortDescription:
      'Safe, controlled removal of hazardous, declining, or unwanted trees, using cranes and modern rigging gear to protect your home, lawn, and surrounding beds.',
    image: '/images/IMG_0367.jpg',
    imageAlt: 'Giraffe Tree Service crane truck and crew member at a brick home',
    overview:
      'Removing a large hardwood close to a roofline, fence, or utility line requires disciplined rigging rather than guesswork. Our crews evaluate lean, decay, drop zones, and access before choosing climbing, sectional rigging, or crane-assisted removal.',
    whatWeDo: [
      'Sectional rigging and crane-assisted takedowns in tight residential yards',
      'Turf protection mats and controlled lowering to preserve driveways and landscaping',
      'Complete brush chipping, log hauling, and thorough final yard cleanup',
      'Honest evaluation when a tree is genuinely unsafe versus when pruning can save it',
    ],
    equipmentUsed: ['All-terrain cranes', 'Friction rigging systems', 'Brush chippers', 'Turf protection mats'],
    candidNote:
      'If a tree has severe basal decay, root heave, or structural failure that cabling cannot safely support, we tell you plainly why removal is the safer choice.',
    typicalClients: 'Homeowners, HOAs, commercial lots, and municipal rights-of-way',
    processSteps: [
      {
        number: '01',
        title: 'On-Site Risk & Access Walk',
        description: 'We inspect trunk decay, drop zones, roof clearances, and equipment access before quoting.',
      },
      {
        number: '02',
        title: 'Controlled Rigged Takedown',
        description: 'Climbers and crane operators dismantle the canopy piece by piece without slamming limbs onto turf.',
      },
      {
        number: '03',
        title: 'Haul-Away & Yard Raking',
        description: 'Wood and brush are chipped or loaded out, leaving driveways swept and lawns clean.',
      },
    ],
    faqs: [
      {
        question: 'Can you remove a tree that hangs directly over my roof or sunroom?',
        answer:
          'Yes. Using rigging lines or crane lifts, we dismantle overhanging sections upward and away from structures so nothing drops onto your roof.',
      },
      {
        question: 'Is stump grinding automatically included with tree removal?',
        answer:
          'We cut stumps flush to the ground as standard, or include full below-grade stump grinding on the same estimate whenever you want the lawn smoothed for sod.',
      },
    ],
  },
  {
    id: 'tree-trimming',
    slug: 'tree-trimming',
    title: 'Tree Trimming & Pruning',
    estimateOption: 'Tree Trimming & Pruning',
    categoryLabel: 'Canopy & Structural Care',
    categoryGroup: 'pruning-health',
    shortDescription:
      'Selective pruning, crown reduction, and clearance for dangerous overhangs to strengthen branch structure and preserve mature shade trees.',
    image: '/images/IMG_2677.jpg',
    imageAlt: 'Giraffe Tree Service climber pruning from a bucket truck',
    overview:
      'Proper pruning removes deadwood, lifts low limbs over driveways and roofs, and thins congested crowns without topping or stripping the canopy. Every cut is placed to help the tree compartmentalize cleanly and withstand Arkansas windstorms.',
    whatWeDo: [
      'Crown cleaning to remove dead, dying, and rubbing interior branches',
      'Structural crown reduction and roof/chimney overhang clearance',
      'Canopy raising over streets, sidewalks, driveways, and lawn beds',
      'Storm-resistance thinning without harmful flush cuts or tree topping',
    ],
    equipmentUsed: ['Aerial lift buckets', 'Rope-and-saddle climbing gear', 'Precision pole saws', 'Chippers'],
    candidNote:
      'We never recommend topping a mature hardwood. It creates weak water sprouts and accelerates decay. Selective reduction keeps your canopy healthy and balanced.',
    typicalClients: 'Mature residential shade trees, historic Little Rock neighborhoods, commercial campuses',
    processSteps: [
      {
        number: '01',
        title: 'Canopy & Clearance Inspection',
        description: 'We identify deadwood, roof contact, and weak branch unions while keeping your shade goals in mind.',
      },
      {
        number: '02',
        title: 'Selective Collar Cuts',
        description: 'Climbers prune back to natural lateral unions so bark seals cleanly without ugly stubs.',
      },
      {
        number: '03',
        title: 'Brush Chipping & Cleanup',
        description: 'All cut limbs are chipped and hauled away, leaving your garden beds undisturbed.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between crown reduction and tree topping?',
        answer:
          'Crown reduction shortens limbs back to strong side branches at least one-third their diameter, preserving natural shape. Topping shears branches mid-stem, causing rot and weak storm shoots.',
      },
      {
        question: 'What time of year is best to prune oaks in Little Rock?',
        answer:
          'Dormant winter pruning is ideal for major structural work on oaks, while deadwooding and dangerous overhang clearance can be performed safely year-round.',
      },
    ],
  },
  {
    id: 'lot-clearing',
    slug: 'lot-clearing',
    title: 'Lot Clearing',
    estimateOption: 'Other',
    categoryLabel: 'Site Prep & Maintenance',
    categoryGroup: 'lot-stump',
    shortDescription:
      'Selective lot clearing, brush hogging, and forestry mulching for homeowners, builders, and developers preparing building sites or reclaiming overgrown land.',
    image: '/images/IMG_0925.jpg',
    imageAlt: 'Giraffe Tree Service crew clearing logs on a wooded job site',
    overview:
      'Good lot clearing balances clean site access with smart preservation. We walk the acreage with homeowners or site superintendents to flag healthy specimen oaks and pines worth keeping while clearing underbrush, invasives, and marked timber.',
    whatWeDo: [
      'Residential and commercial building pad and driveway clearing',
      'Forestry mulching and brush hogging for overgrown acreage and fencerows',
      'Selective tree preservation flagging before heavy clearing begins',
      'Ongoing right-of-way, drainage corridor, and commercial ground maintenance',
    ],
    equipmentUsed: ['Forestry mulchers', 'Skid steers & grapples', 'Brush hogs', 'Log haul trucks'],
    candidNote:
      'Saving mature native hardwoods during site prep adds lasting property value. We mark root protection zones clearly before machines roll onto the lot.',
    typicalClients: 'Custom home builders, developers, acreage owners, and property managers',
    processSteps: [
      {
        number: '01',
        title: 'Boundary & Preservation Walk',
        description: 'We flag keeper shade trees, property lines, utility easements, and building pad stakes with you.',
      },
      {
        number: '02',
        title: 'Selective Clearing & Mulching',
        description: 'Underbrush and marked trees are cleared cleanly while preserving root zones of remaining trees.',
      },
      {
        number: '03',
        title: 'Site Grading Ready',
        description: 'Debris is mulched into erosion-controlling ground cover or hauled off for immediate excavation.',
      },
    ],
    faqs: [
      {
        question: 'Should I use forestry mulching or traditional haul-off clearing?',
        answer:
          'Forestry mulching turns brush and small saplings into natural mulch in place. That is useful for hillside erosion control and acreage trails. For foundation pads, we haul out stumps and timber.',
      },
      {
        question: 'Can you clear brush without damaging large trees I want to keep?',
        answer:
          'Yes. We flag keeper trees first and keep heavy tracks outside their drip lines to prevent root compaction.',
      },
    ],
  },
  {
    id: 'storm-damage-cleanup',
    slug: 'storm-damage-cleanup',
    title: 'Storm Damage Cleanup',
    estimateOption: 'Emergency Tree Service',
    categoryLabel: '24/7 Rapid Response',
    categoryGroup: 'removal-storm',
    shortDescription:
      'When severe storms bring trees or heavy limbs onto roofs, vehicles, or driveways, our emergency crew responds 24/7 across Central Arkansas.',
    image: '/images/IMG_5798.jpg',
    imageAlt: 'Giraffe Tree Service crew beside a tree that fell on a house',
    overview:
      'Spring tornadoes, summer microbursts, and winter ice storms put tremendous weight on Central Arkansas oaks and pines. Our emergency dispatch stabilizes hangers, lifts limbs off structures using cranes and rigging, and clears access safely.',
    whatWeDo: [
      '24/7 emergency dispatch for trees on houses, garages, fences, or driveways',
      'Crane and rigged extraction to avoid secondary roof or structural damage',
      'Removal of split leaders and hanging limbs above active yards',
      'Clear itemized documentation to support homeowner insurance claims',
    ],
    equipmentUsed: ['24/7 dispatch fleet', 'Heavy rigging cranes', 'High-capacity chippers', 'Storm lighting'],
    candidNote:
      'Stay well back from downed power lines and suspended limbs. Call utility dispatch first for energized lines, and call us at (501) 664-8733 anytime day or night.',
    typicalClients: 'Emergency residential calls, municipal storm corridors, commercial properties',
    processSteps: [
      {
        number: '01',
        title: 'Immediate Triage & Safety Check',
        description: 'Our 24/7 line prioritizes trees resting on homes, blocking driveways, or leaning over living spaces.',
      },
      {
        number: '02',
        title: 'Tension-Safe Extraction',
        description: 'Crews relieve stored branch tension and crane heavy trunks off roofs without dragging across shingles.',
      },
      {
        number: '03',
        title: 'Full Debris Removal & Claim Paperwork',
        description: 'We haul storm debris out and provide clear invoicing for your insurance carrier.',
      },
    ],
    faqs: [
      {
        question: 'How fast can you respond when a tree falls on my house or driveway?',
        answer:
          'Our emergency phone line (501) 664-8733 is answered 24/7, and Little Rock / Central Arkansas crews prioritize active structural hazards first.',
      },
      {
        question: 'Do you work with homeowner insurance adjusters?',
        answer:
          'Yes. We provide straightforward written descriptions and itemized invoices formatted for standard property insurance claims.',
      },
    ],
  },
  {
    id: 'tree-health-assessment',
    slug: 'tree-health-assessment',
    title: 'Tree Health Assessment',
    estimateOption: 'Other',
    categoryLabel: 'On-Site Evaluation',
    categoryGroup: 'pruning-health',
    shortDescription:
      'On-site evaluation of structure, canopy, roots, and vitality with clear, plain-spoken options.',
    image: '/images/IMG_0240.jpg',
    imageAlt: 'Two Giraffe Tree Service employees on a maintained property',
    overview:
      'Before spending money on removal or treatment, you deserve an honest look at what is happening inside the tree. We inspect root flare health, soil compaction, bark wounds, fungal fruiting bodies, and canopy dieback.',
    whatWeDo: [
      'Root flare, trunk integrity, and crown density visual inspection',
      'Identification of construction stress, drought injury, or pest/fungal decline',
      'Prioritized action plan separating urgent safety hazards from routine care',
    ],
    equipmentUsed: ['Root collar excavation tools', 'Sounding mallets', 'Binoculars for upper crown checks'],
    candidNote:
      'We give straightforward recommendations and never upsell unnecessary chemical treatments on a tree that simply needs deadwooding or proper mulching.',
    typicalClients: 'Homebuyers, longtime property owners, and HOA boards',
    processSteps: [
      {
        number: '01',
        title: 'Root Zone & Trunk Inspection',
        description: 'We examine girdling roots, soil grade changes, cracks, and fungal signs at the base.',
      },
      {
        number: '02',
        title: 'Canopy & Target Review',
        description: 'We assess leaf density, twig dieback, and what sits beneath the tree if a limb fails.',
      },
      {
        number: '03',
        title: 'Plain-Spoken Options',
        description: 'You receive clear guidance: keep and monitor, prune/fertilize, cable, or safely remove.',
      },
    ],
    faqs: [
      {
        question: 'Should I get a tree health assessment before buying an older Little Rock home?',
        answer:
          'Yes. One mature declining oak next to a foundation can be a major surprise expense. An assessment lets you budget or plan care upfront.',
      },
    ],
  },
  {
    id: 'tree-risk-health-management',
    slug: 'tree-risk-health-management',
    title: 'Tree Risk & Health Management',
    estimateOption: 'Other',
    categoryLabel: 'Preventive Stewardship',
    categoryGroup: 'pruning-health',
    shortDescription:
      'Ongoing hazard checks, structural pruning, deep root fertilization, and lightning protection for high-value trees.',
    image: '/images/IMG_2342.jpg',
    imageAlt: 'Giraffe Tree Service truck and tracked machine at a commercial site',
    overview:
      'Large shade trees near homes, play areas, and parking lots benefit from scheduled inspections and targeted root-zone care, especially in Central Arkansas clay soils and hot summer droughts.',
    whatWeDo: [
      'Periodic structural risk reviews for multi-trunk and leaning specimen trees',
      'Deep root fertilization to improve nutrient uptake in compacted urban soils',
      'Copper lightning protection systems for prominent yard and heritage trees',
    ],
    equipmentUsed: ['Soil injection probes', 'Copper lightning conductors', 'Rigging & pruning gear'],
    candidNote:
      'Preventive care costs a fraction of emergency crane removal after a storm.',
    typicalClients: 'Estates, churches, schools, commercial grounds, and residential shade canopies',
    processSteps: [
      {
        number: '01',
        title: 'Property-Wide Canopy Inventory',
        description: 'We prioritize your highest-value trees and high-traffic target zones around roofs and drives.',
      },
      {
        number: '02',
        title: 'Root & Canopy Treatments',
        description: 'Deep root fertilization, structural pruning, or lightning grounding are scheduled seasonally.',
      },
      {
        number: '03',
        title: 'Annual Follow-Up Checks',
        description: 'We re-check growth, hardware tension, and storm wear to catch issues early.',
      },
    ],
    faqs: [
      {
        question: 'When does a tree benefit from deep root fertilization?',
        answer:
          'Trees growing in compacted clay lawns, near recent construction, or recovering from drought stress respond strongly to slow-release subsurface nutrients.',
      },
      {
        question: 'How does tree lightning protection work?',
        answer:
          'A copper conductor system runs from the upper crown down the trunk and grounds away from the root zone, channeling strikes safely into the earth.',
      },
    ],
  },
  {
    id: 'cabling-bracing',
    slug: 'cabling-bracing',
    title: 'Cabling & Bracing',
    estimateOption: 'Tree Trimming & Pruning',
    categoryLabel: 'Structural Support',
    categoryGroup: 'pruning-health',
    shortDescription:
      'Flexible steel cables and rigid brace rods supporting weak forks and splits in trees worth saving.',
    image: '/images/IMG_1271.jpg',
    imageAlt: 'Giraffe Tree Service crew in company shirts and hard hats',
    overview:
      'Co-dominant stems and heavy horizontal limbs can split under wind or ice load. Properly installed high-strength cables and threaded brace rods reduce movement at weak unions and extend a healthy tree’s safe lifespan.',
    whatWeDo: [
      'High-crown flexible cabling to limit sway between heavy co-dominant leaders',
      'Rigid steel bracing rods to stabilize tight V-shaped forks or minor splits',
      'Paired crown weight-reduction pruning so hardware is never overloaded',
    ],
    equipmentUsed: ['Extra-high-strength steel cable', 'Threaded brace rods', 'Thimbles & dead-end grips'],
    candidNote:
      'We are candid when hardware is not enough: if advanced rot has hollowed the union, cabling will not make the tree safe, and we will recommend removal instead.',
    typicalClients: 'Mature multi-stemmed oaks, pecans, and specimen yard trees',
    processSteps: [
      {
        number: '01',
        title: 'Union Soundness Check',
        description: 'We confirm the wood around the fork is solid enough to hold hardware safely.',
      },
      {
        number: '02',
        title: 'Hardware & Crown Reduction',
        description: 'We install cables two-thirds up the canopy and lightly thin outer tip weight.',
      },
      {
        number: '03',
        title: 'Periodic Tension Review',
        description: 'As the tree grows, we inspect hardware every couple of years to confirm proper support.',
      },
    ],
    faqs: [
      {
        question: 'Will cabling permanently save any splitting tree?',
        answer:
          'No. We will tell you honestly if a tree is beyond cabling. Hardware supports sound wood with weak geometry, not trunks weakened by deep decay.',
      },
    ],
  },
  {
    id: 'stump-removal',
    slug: 'stump-removal',
    title: 'Stump Removal',
    estimateOption: 'Stump Grinding',
    categoryLabel: 'Finish & Replanting',
    categoryGroup: 'lot-stump',
    shortDescription:
      'Grinding stumps of any size below soil level so the lawn is ready for turf, beds, or replanting.',
    image: '/images/IMG_1456.jpg',
    imageAlt: 'Giraffe Tree Service operator at the controls on a job site',
    overview:
      'Leftover stumps attract termites, sprout suckers, and interrupt mowing. Our tracked stump grinders pass through standard backyard gates and grind stumps and surface roots cleanly below grade.',
    whatWeDo: [
      'Grinding single yard stumps or multiple cleared lot stumps below soil grade',
      'Chasing prominent surface roots to restore smooth mowing terrain',
      'Chip cleanup or haul-away with optional topsoil fill ready for sod or seed',
    ],
    equipmentUsed: ['Tracked self-propelled stump grinders', 'Gate-width compact grinders', 'Utility locators'],
    candidNote:
      'We locate visible sprinkler heads and coordinate utility marking before deep grinding near driveways or service lines.',
    typicalClients: 'Post-removal residential lawns, fence line projects, and site renovations',
    processSteps: [
      {
        number: '01',
        title: 'Utility & Irrigation Check',
        description: 'We verify shallow cable, gas, and sprinkler paths around the stump flare.',
      },
      {
        number: '02',
        title: 'Below-Grade Grinding',
        description: 'Our grinder reduces the stump and flared surface roots 6-10 inches below lawn level.',
      },
      {
        number: '03',
        title: 'Mulch Rake or Haul-Away',
        description: 'You can keep clean wood chips for garden beds or have us haul grindings away.',
      },
    ],
    faqs: [
      {
        question: 'Can your stump grinder fit inside a fenced backyard?',
        answer:
          'Yes. Our compact tracked stump grinders fit through standard 36-inch residential yard gates without tearing up lawn turf.',
      },
      {
        question: 'Can I plant grass or a new tree in the same spot?',
        answer:
          'You can lay sod or plant grass right away after removing chips and topping with loam. For a new tree, we recommend shifting a few feet away from old decaying deep roots.',
      },
    ],
  },
];

export const PRIMARY_SERVICE_SLUGS = [
  'tree-removal',
  'tree-trimming',
  'lot-clearing',
  'storm-damage-cleanup',
];

export const SPECIALIZED_SERVICE_SLUGS = [
  'tree-health-assessment',
  'tree-risk-health-management',
  'cabling-bracing',
  'stump-removal',
];

export const SUBMENU_SERVICE_SLUGS = [
  'lot-clearing',
  'storm-damage-cleanup',
  'tree-health-assessment',
  'tree-risk-health-management',
  'cabling-bracing',
  'stump-removal',
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES.find((service) => service.slug === slug);
}

export const GIRAFFE_PILLARS: PillarItem[] = [
  {
    number: '01',
    title: 'Tree Health First',
    description:
      'We assess each tree’s structure, canopy, root zone, and overall vitality before recommending any work, so healthy trees thrive long-term.',
  },
  {
    number: '02',
    title: 'Quality Workmanship',
    description:
      'We do not cut corners. Every job, from single-limb pruning to complex crane removals, is completed with precision and modern rigging equipment.',
  },
  {
    number: '03',
    title: 'Honest Pricing',
    description:
      'Free estimates with no hidden fees. You know the full scope and exact expectation before any crew starts work on your property.',
  },
  {
    number: '04',
    title: 'Clean & Respectful',
    description:
      'We protect surrounding landscaping during the job and haul away debris so we leave your yard cleaner than we found it.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-l',
    author: 'Sarah L.',
    context: 'Little Rock Homeowner · Large Oak Removal',
    quote:
      'Giraffe Tree Service was professional, efficient, and left our property cleaner than they found it. Their team took down a massive oak with precision. Highly recommended!',
    featured: true,
  },
  {
    id: 'michael-b',
    author: 'Michael B.',
    context: 'Residential Pruning & Stump Grinding',
    quote:
      'From the initial quote to the final stump grinding, the experience was seamless. Their crew is knowledgeable and clearly cares about the health of our trees and property.',
  },
  {
    id: 'david-emily-r',
    author: 'David & Emily R.',
    context: '24/7 Emergency Storm Response',
    quote:
      'We had an emergency situation after a storm, and Giraffe Tree Service responded immediately. They handled the hazardous tree removal safely and gave us peace of mind.',
  },
];

export const SERVICE_AREAS: ServiceAreaRegion[] = [
  {
    id: 'little-rock',
    name: 'Little Rock & Pulaski County',
    communities: 'The Heights, Hillcrest, West Little Rock, Chenal, Midtown, Maumelle, Jacksonville',
    focus: 'Mature urban shade canopies, crane-assisted tight-lot removals, and 24/7 storm response.',
    dispatchNote: 'Home office at 512 Bender St · Fastest daily estimate & emergency dispatch.',
  },
  {
    id: 'north-little-rock',
    name: 'North Little Rock & Sherwood',
    communities: 'Park Hill, Lakewood, Indian Hills, Sherwood, Gravel Ridge',
    focus: 'Structural oak pruning, cabling & bracing, roof clearance, and stump grinding.',
    dispatchNote: 'Daily crew routes across the river · Same-week scheduled estimates.',
  },
  {
    id: 'saline',
    name: 'Saline County',
    communities: 'Benton, Bryant, Alexander, Haskell, Hot Springs Village east corridor',
    focus: 'Residential removals, pine & oak storm cleanup, and custom home lot clearing.',
    dispatchNote: 'Full residential & builder crew coverage · 24/7 storm dispatch available.',
  },
  {
    id: 'faulkner',
    name: 'Faulkner County',
    communities: 'Conway, Vilonia, Greenbrier, Mayflower',
    focus: 'Acreage brush hogging, forestry mulching, commercial grounds, and hazard tree removal.',
    dispatchNote: 'Dedicated equipment scheduling for residential and commercial sites.',
  },
  {
    id: 'lonoke',
    name: 'Lonoke County',
    communities: 'Cabot, Ward, Austin, Lonoke, England',
    focus: 'Lot clearing, perimeter fence-line trimming, storm recovery, and stump grinding.',
    dispatchNote: 'Regular Central Arkansas route coverage · Free on-site quotes.',
  },
  {
    id: 'perry',
    name: 'Perry County',
    communities: 'Perryville, Bigelow, Roland & Lake Maumelle corridor',
    focus: 'Rural property clearing, selective tree preservation, and storm limb cleanup.',
    dispatchNote: 'Scheduled site walks and heavy-rigging tree removal available.',
  },
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: 'cabling-vs-removal',
    slug: 'when-cabling-helps-and-when-removal-is-safer',
    title: 'When Cabling Helps, and When Removal Is Safer',
    category: 'Structural Care',
    readTime: '4 min read',
    publishedDate: 'October 2026',
    image: '/images/IMG_2677.jpg',
    imageAlt: 'Giraffe Tree Service climber working in a bucket truck',
    summary:
      'Hardware can extend the life of a valuable shade tree with a weak fork, provided the wood inside the trunk is still sound.',
    paragraphs: [
      'Homeowners in older Little Rock neighborhoods like Hillcrest and The Heights frequently ask whether a multi-trunk oak or pecan with a tight V-shaped fork can be saved with steel cables.',
      'When the heartwood around the union is still solid and the root system is anchored firmly in the ground, high-crown flexible cabling paired with light tip-weight pruning does an excellent job reducing wind whip and storm splitting.',
      'However, we stay candid when cabling is not enough. If advanced fungal decay has hollowed out the junction, if there is active root plate lifting, or if a deep vertical crack runs down the main trunk, hardware only delays a failure. In those cases, controlled removal protects your home and family far better than a false fix.',
    ],
    keyTakeaways: [
      'Flexible steel cables reduce wind whip between co-dominant oak leaders.',
      'If decay cavities or active root lifting are present, hardware only masks a hazard.',
      'Every cabling install should include light canopy weight reduction on the outer tips.',
    ],
    relatedServiceSlug: 'cabling-bracing',
  },
  {
    id: 'why-we-never-top-trees',
    slug: 'why-we-never-top-mature-shade-trees',
    title: 'Why We Never Top Mature Shade Trees in Central Arkansas',
    category: 'Tree Health',
    readTime: '3 min read',
    publishedDate: 'September 2026',
    image: '/images/IMG_0240.jpg',
    imageAlt: 'Giraffe Tree Service employees on a cared-for property',
    summary:
      'Shearing off the upper canopy starves the roots and forces rapid, weakly attached shoots that snap faster in the next storm.',
    paragraphs: [
      'Tree topping, cutting main vertical limbs straight back to bare stubs, was common decades ago, and homeowners still occasionally ask for it to lower a tall oak over a roofline.',
      'In practice, topping backfires quickly. Removing up to half the tree’s leaf surface starves the root system, stresses the bark to sunscald, and triggers dense clusters of weakly anchored water sprouts along the stub edges.',
      'Instead, we use selective crown reduction: shortening tall branches back to strong lateral limbs that can take over terminal growth, keeping the canopy lower and lighter while preserving the tree’s natural strength.',
    ],
    keyTakeaways: [
      'Selective crown reduction lowers height at natural lateral branch unions.',
      'Clean branch collar cuts allow bark to seal wounds instead of rotting inward.',
      'Proper pruning preserves shade over your roof while cutting wind sail.',
    ],
    relatedServiceSlug: 'tree-trimming',
  },
  {
    id: 'after-storm-safety',
    slug: 'first-steps-after-a-severe-storm',
    title: 'First Steps After a Severe Storm Hits Your Yard',
    category: 'Storm Safety',
    readTime: '3 min read',
    publishedDate: 'August 2026',
    image: '/images/IMG_5798.jpg',
    imageAlt: 'Giraffe Tree Service crew at a storm-damaged home',
    summary:
      'How to assess downed limbs safely before a crew arrives, especially around service drops, fences, and tensioned trunks.',
    paragraphs: [
      'When severe thunderstorms or ice sweep through Pulaski County, the urge to start dragging branches off the driveway right away is understandable. Before grabbing a saw, take two minutes to walk the perimeter safely from a distance.',
      'First, look up for hanging broken limbs ("widowmakers") still resting in the upper canopy, and check whether any fallen branches touch overhead utility lines or your home’s weatherhead. Always assume downed wires are energized and call your utility company first.',
      'Second, avoid cutting large trunks pinned against fences, roofs, or other trees. Bent limbs hold tremendous spring tension and can snap violently once released. Document roof or fence contact with clear photos for your insurer, then call our 24/7 dispatch at (501) 664-8733.',
    ],
    keyTakeaways: [
      'Treat every downed wire as live and keep family and pets indoors until utilities clear the line.',
      'Do not cut spring-loaded limbs under tension; stored energy can kick a saw or trunk violently.',
      'Photograph roof or fence contact before cleanup begins for your insurance adjuster.',
    ],
    relatedServiceSlug: 'storm-damage-cleanup',
  },
  {
    id: 'preparing-wooded-lot',
    slug: 'preparing-a-wooded-lot-without-losing-specimen-oaks',
    title: 'Preparing a Wooded Arkansas Lot Without Losing Your Best Oaks',
    category: 'Property Maintenance',
    readTime: '4 min read',
    publishedDate: 'July 2026',
    image: '/images/IMG_0925.jpg',
    imageAlt: 'Giraffe Tree Service crew on a lot-clearing job',
    summary:
      'Thoughtful site flagging before bulldozers arrive saves mature shade trees from slow post-construction decline.',
    paragraphs: [
      'Across Saline, Faulkner, and West Pulaski counties, many custom home builds begin on wooded acreage. Yet it is surprisingly common to see healthy oaks die three years after move-in simply because heavy equipment compacted soil right up to the trunk.',
      'Before clearing starts, walk the lot with both your builder and an experienced tree crew. Flag the healthy straight-trunked oaks and pines worth keeping, and fence off their root zones, not just around the trunk, but out toward the drip line.',
      'Using forestry mulching for perimeter underbrush while reserving full excavation strictly for the home footprint, septic field, and driveway gives you a clean building site and decades of mature shade.',
    ],
    keyTakeaways: [
      'Protect root zones out toward the canopy drip line before excavation begins.',
      'Forestry mulching stabilizes sloped Arkansas soils against washouts.',
      'Remove crowded or leaning pines early so remaining hardwoods thrive.',
    ],
    relatedServiceSlug: 'lot-clearing',
  },
];

export function getBlogPostBySlug(slug: string): BlogArticle | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'climber-arborist',
    title: 'Experienced Tree Climber / Aerial Crew Lead',
    type: 'Full-Time · Little Rock, AR',
    summary:
      'Lead safe rigging, sectional removals, and structural pruning across Central Arkansas residential and commercial properties.',
    requirements: [
      'Proven climbing and rigging experience near homes and structures',
      'Commitment to ANSI safety standards, PPE, and clean job-site habits',
      'Valid driver’s license (CDL a plus)',
    ],
  },
  {
    id: 'ground-crew',
    title: 'Groundsman & Rigging Support Technician',
    type: 'Full-Time · Little Rock, AR',
    summary:
      'Operate chippers, manage rigging ropes, protect client turf, and keep crews moving safely and efficiently.',
    requirements: [
      'Strong work ethic in outdoor year-round Arkansas weather',
      'Willingness to learn knots, rigging communication, and chainsaw maintenance',
      'Reliable transportation to 512 Bender St morning dispatch',
    ],
  },
  {
    id: 'equipment-operator',
    title: 'Equipment & Forestry Mulcher Operator',
    type: 'Full-Time · Central Arkansas',
    summary:
      'Operate skid steers, tracked stump grinders, brush hogs, and forestry mulchers on residential and commercial clearing sites.',
    requirements: [
      'Hands-on experience operating heavy compact equipment and trailers',
      'Clean driving record and routine daily equipment inspection habits',
      'Ability to read property flagging and preserve marked specimen trees',
    ],
  },
];

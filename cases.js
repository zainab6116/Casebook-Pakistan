const cases = [

{
    id: 1,
    name: "Arshad Sharif",
    status: "CASE UNRESOLVED",
    image: "images/images.jpg",

    category: "Journalist",
    location: "Kenya",
    year: "2022",

    overview:
    "Arshad Sharif was a Pakistani journalist and television anchor. He left Pakistan in August 2022 and was later killed in Kenya.",

    finding:
    'A FIA report described the killing as a "planned targeted assassination".',

    official:
    "Kenyan police stated that the shooting was a case of mistaken identity.",

    attention:
    "The case attracted attention because different explanations were given about how and why the shooting occurred.",

    reaction:
    'Imran Khan said Arshad Sharif paid the ultimate price for speaking the truth.',

    sources: [
        {
            name: "Dawn Report",
            link: "https://www.dawn.com/news/1716612"
        },

        {
            name: "Al Jazeera",
            link: "https://www.aljazeera.com"
        }
    ]
},

// {
//     id: 2,
//     name: "Arshad Pappu",
//     status: "CASE UNRESOLVED",
//     image: "images/image2.jpg",

//     category: "Gang Figure",
//     location: "Lyari, Karachi",
//     year: "2013",

//     overview:
//     "Arshad Pappu was a Karachi-based gang figure associated with the Lyari gang wars.",

//     finding:
//     "Investigations later alleged that he and his associates were kidnapped and killed by rivals.",

//     official:
//     "Early reports emerged during gang violence before investigations focused on abduction and murder allegations.",

//     attention:
//     "The case became one of the most notorious incidents of the Lyari gang wars.",

//     reaction:
//     "The case continues to attract attention through journalism and court proceedings.",

//     sources: [
//         {
//             name: "Wikipedia",
//             link: "https://en.wikipedia.org/wiki/Arshad_Pappu"
//         }
//     ]
// },

{
    id: 3,
    name: "Aziz Memon",
    status: "CASE UNRESOLVED",
    image: "images/image3.jpg",

    category: "Journalist",
    location: "Sindh",
    year: "2020",

    overview:
    "Journalist Aziz Memon was found dead in February 2020. The case quickly attracted national attention because of his reporting work.",

    finding:
    'Investigators described the death as a "well-planned murder".',

    official:
    "Authorities launched investigations and court proceedings, but questions regarding accountability remained.",

    attention:
    "The case became an important example in discussions about journalist safety in Pakistan.",

    reaction:
    "Media organizations repeatedly called for transparency and justice.",

    sources: []
},

{
    id: 4,
    name: "Shaheena Shaheen",
    status: "CASE UNRESOLVED",
    image: "images/image4.jpg",

    category: "Journalist",
    location: "Balochistan",
    year: "2020",

    overview:
    "PTV journalist Shaheena Shaheen was shot and killed in September 2020.",

    finding:
    "Investigators searched for suspects and examined the circumstances surrounding the murder.",

    official:
    "Authorities opened a criminal investigation following the killing.",

    attention:
    "The case received widespread media coverage across Pakistan.",

    reaction:
    "Journalist groups demanded justice and stronger protection for media workers.",

    sources: []
},

{
    id: 5,
    name: "Ali Imran Syed",
    status: "CASE UNRESOLVED",
    image: "images/image5.jpg",

    category: "Journalist",
    location: "Karachi",
    year: "2020",

    overview:
    "Geo News reporter Ali Imran Syed disappeared in October 2020 before later returning safely.",

    finding:
    "The incident raised questions about what happened during the period he was missing.",

    official:
    "The complete circumstances of the disappearance were never fully clarified publicly.",

    attention:
    "The case became one of the year's most discussed journalist-related incidents.",

    reaction:
    "Media organizations demanded answers and greater protection for journalists.",

    sources: []
},

{
    id: 6,
    name: "Matiullah Jan",
    status: "CASE UNRESOLVED",
    image: "images/image6.jpg",

    category: "Journalist",
    location: "Islamabad",
    year: "2020",

    overview:
    "Journalist Matiullah Jan was abducted in broad daylight in July 2020 and later released.",

    finding:
    "Video footage of the incident spread widely and sparked public concern.",

    official:
    "Investigations were launched but many questions remained unanswered.",

    attention:
    "The incident became one of the most discussed press-freedom cases of the year.",

    reaction:
    "Rights groups called for a transparent investigation.",

    sources: []
},

{
    id: 7,
    name: "Idris Khattak",
    status: "CASE UNRESOLVED",
    image: "images/image7.jpg",

    category: "Human Rights Researcher",
    location: "Pakistan",
    year: "2020",

    overview:
    "The disappearance of human-rights researcher Idris Khattak remained a major issue throughout 2020.",

    finding:
    "Authorities later confirmed that he was in custody, drawing greater attention to the case.",

    official:
    "Questions were raised regarding transparency and legal procedures.",

    attention:
    "The case received national and international coverage.",

    reaction:
    "Human-rights organizations repeatedly demanded accountability.",

    sources: []
},

{
    id: 8,
    name: "Missing Persons Cases",
    status: "CASE UNRESOLVED",
    image: "images/image8.jpg",

    category: "Human Rights",
    location: "Pakistan",
    year: "2020",

    overview:
    "Thousands of disappearance cases remained pending before official bodies during 2020.",

    finding:
    "More than two thousand cases were still unresolved, making it one of Pakistan's most debated human-rights issues.",

    official:
    "Authorities continued investigations through the relevant commissions.",

    attention:
    "Families across the country continued searching for missing relatives.",

    reaction:
    "Human-rights groups called for faster investigations and greater transparency.",

    sources: []
},

{
    id: 9,
    name: "Noor Mukadam",
    status: "CASE UNRESOLVED",
    image: "images/9.jpg",

    category: "Murder Case",
    location: "Islamabad",
    year: "2021",

    overview:
    "Noor Mukadam was murdered in July 2021 in a case that shocked the nation.",

    finding:
    "The investigation involved forensic evidence, witness testimony, and lengthy court proceedings.",

    official:
    "Authorities launched a major investigation that remained in public focus throughout the trial.",

    attention:
    "The case became one of the most widely discussed criminal cases in Pakistan.",

    reaction:
    "Nationwide demands for justice followed the incident.",

    sources: []
},

{
    id: 10,
    name: "Nazim Jokhio",
    status: "CASE UNRESOLVED",
    image: "images/nazim-jokhio.jpg",

    category: "Murder Case",
    location: "Sindh",
    year: "2021",

    overview:
    "Nazim Jokhio was found dead in November 2021 after reportedly raising concerns about illegal hunting activities.",

    finding:
    "The case quickly became national news and generated widespread debate.",

    official:
    "Investigations were launched to determine responsibility for the killing.",

    attention:
    "The case highlighted concerns regarding power, influence, and accountability.",

    reaction:
    "Civil society groups demanded justice and transparency.",

    sources: []
},

{
    id: 11,
    name: "Dasu Bus Attack",
    status: "CASE UNRESOLVED",
    image: "images/dasu-attack.jpg",

    category: "Terror Attack",
    location: "Khyber Pakhtunkhwa",
    year: "2021",

    overview:
    "A deadly attack targeted a bus carrying workers involved in the Dasu project.",

    finding:
    "Pakistani and Chinese nationals were among those killed.",

    official:
    "Authorities launched investigations that drew international attention.",

    attention:
    "The incident affected security discussions and international relations.",

    reaction:
    "Officials pledged accountability and stronger security measures.",

    sources: []
},

{
    id: 12,
    name: "Minar-e-Pakistan Assault",
    status: "CASE UNRESOLVED",
    image: "images/minar-e-pakistan.jpg",

    category: "Assault Case",
    location: "Lahore",
    year: "2021",

    overview:
    "A crowd assault involving TikToker Ayesha Akram occurred at Minar-e-Pakistan on 14 August 2021.",

    finding:
    "Videos of the incident spread rapidly across social media and news platforms.",

    official:
    "Police launched investigations and identified multiple suspects.",

    attention:
    "The incident triggered nationwide discussion regarding public safety and harassment.",

    reaction:
    "Strong public condemnation followed the event.",

    sources: []
},

{
    id: 13,
    name: "Machh Hazara Miners Attack",
    status: "CASE UNRESOLVED",
    image: "images/machh-hazara.jpg",

    category: "Terror Attack",
    location: "Balochistan",
    year: "2021",

    overview:
    "Eleven Hazara miners were killed near Machh in January 2021.",

    finding:
    "The attack triggered protests and drew international attention.",

    official:
    "Security agencies launched investigations into those responsible.",

    attention:
    "The incident renewed concerns about the safety of minority communities.",

    reaction:
    "Large demonstrations demanded justice and improved security.",

    sources: []
},

{
    id: 14,
    name: "Janikhel Incident",
    status: "CASE UNRESOLVED",
    image: "images/janikhel.jpg",

    category: "Mysterious Deaths",
    location: "Bannu",
    year: "2021",

    overview:
    "The bodies of four previously missing youths were discovered in the Janikhel area.",

    finding:
    "The discovery sparked protests and calls for a thorough investigation.",

    official:
    "Authorities initiated inquiries into the circumstances surrounding the deaths.",

    attention:
    "Many questions remained unanswered regarding the incident.",

    reaction:
    "Residents and activists demanded accountability and transparency.",

    sources: []
},

{
    id: 15,
    name: "Sara Inam",
    status: "CASE UNRESOLVED",
    image: "images/sara-inam.jpg",

    category: "Murder Case",
    location: "Islamabad",
    year: "2022",

    overview:
    "Sara Inam was killed in September 2022 in a case that quickly gained nationwide attention.",

    finding:
    "The investigation focused on the circumstances surrounding her death and the people involved.",

    official:
    "Authorities launched criminal proceedings and the case remained under close public scrutiny.",

    attention:
    "The case received extensive media coverage because of the profile of those involved.",

    reaction:
    "The public closely followed court proceedings and demands for justice.",

    sources: []
},

{
    id: 16,
    name: "Imran Riaz Khan",
    status: "CASE UNRESOLVED",
    image: "images/imran-riaz-khan.jpg",

    category: "Journalist",
    location: "Pakistan",
    year: "2022",

    overview:
    "Journalist Imran Riaz Khan faced arrests and periods where his whereabouts became a major public concern.",

    finding:
    "The events sparked debate regarding press freedom and accountability.",

    official:
    "Authorities maintained that legal procedures were being followed.",

    attention:
    "The case became one of the most discussed journalist-related incidents of the year.",

    reaction:
    "Supporters and rights groups called for transparency and protection of journalists.",

    sources: []
},

{
    id: 17,
    name: "Parachinar Terror Attack",
    status: "CASE UNRESOLVED",
    image: "images/parachinar.jpg",

    category: "Terror Attack",
    location: "Parachinar",
    year: "2022",

    overview:
    "A bombing in Parachinar caused multiple casualties and renewed security concerns in the region.",

    finding:
    "Investigators focused on identifying those responsible and any supporting networks.",

    official:
    "Security agencies launched inquiries into the attack.",

    attention:
    "The incident drew national attention because of its impact on civilians.",

    reaction:
    "Officials and residents demanded justice and stronger security measures.",

    sources: []
},

{
    id: 18,
    name: "Karachi Saddar Blast",
    status: "CASE UNRESOLVED",
    image: "images/saddar-blast.jpg",

    category: "Bombing",
    location: "Karachi",
    year: "2022",

    overview:
    "A bomb explosion in Karachi's Saddar area killed and injured several people in January 2022.",

    finding:
    "Authorities investigated the individuals and networks linked to the attack.",

    official:
    "Law-enforcement agencies launched a major investigation following the blast.",

    attention:
    "The attack raised concerns about public safety and urban security.",

    reaction:
    "Citizens demanded accountability and preventive measures.",

    sources: []
},

{
    id: 19,
    name: "Baloch Missing Persons Cases",
    status: "CASE UNRESOLVED",
    image: "images/baloch-missing-persons.jpg",

    category: "Human Rights",
    location: "Balochistan",
    year: "2022",

    overview:
    "Numerous disappearance cases from Balochistan continued to be reported throughout 2022.",

    finding:
    "Families and activists repeatedly sought information regarding missing relatives.",

    official:
    "Authorities stated that investigations into reported disappearances were ongoing.",

    attention:
    "The issue remained one of Pakistan's most debated human-rights concerns.",

    reaction:
    "Protests and advocacy campaigns continued across the country.",

    sources: []
},

{
    id: 20,
    name: "Arshad Sharif",
    status: "CASE UNRESOLVED",
    image: "images/arshad-sharif.jpg",

    category: "Journalist",
    location: "Kenya",
    year: "2022",

    overview:
    "Investigative journalist Arshad Sharif was shot dead in Kenya in October 2022.",

    finding:
    "Different investigations produced competing explanations regarding the circumstances of his death.",

    official:
    "Kenyan police described the shooting as a case of mistaken identity.",

    attention:
    "A later FIA report described the killing as a planned targeted assassination, leading to continued debate.",

    reaction:
    "Journalists, political leaders, and rights groups demanded an independent investigation.",

    sources: []
},

{
    id: 21,
    name: "Fatima Furiro",
    status: "CASE UNRESOLVED",
    image: "images/fatima-furiro.jpg",

    category: "Child Abuse Case",
    location: "Ranipur, Sindh",
    year: "2023",

    overview:
    "Ten-year-old domestic worker Fatima Furiro died in August 2023.",

    finding:
    "Medical reports indicated signs of physical abuse, leading to nationwide outrage.",

    official:
    "Authorities launched investigations and legal proceedings.",

    attention:
    "The case renewed debate regarding child protection and domestic labor.",

    reaction:
    "Public demands for justice spread across the country.",

    sources: []
},

{
    id: 22,
    name: "Ali Bilal (Zilleh Shah)",
    status: "CASE UNRESOLVED",
    image: "images/zilleh-shah.jpg",

    category: "Controversial Death",
    location: "Lahore",
    year: "2023",

    overview:
    "PTI worker Ali Bilal, known as Zilleh Shah, died during political unrest in March 2023.",

    finding:
    "The circumstances surrounding his death became highly controversial.",

    official:
    "Authorities launched investigations and released official statements regarding the incident.",

    attention:
    "The case became heavily debated in political and media circles.",

    reaction:
    "Supporters and critics demanded transparency regarding the investigation.",

    sources: []
},

{
    id: 23,
    name: "Peshawar Police Lines Bombing",
    status: "CASE UNRESOLVED",
    image: "images/peshawar-police-lines.jpg",

    category: "Terror Attack",
    location: "Peshawar",
    year: "2023",

    overview:
    "A suicide bombing inside the Police Lines mosque killed more than one hundred people.",

    finding:
    "Investigations later focused on alleged facilitators and security failures.",

    official:
    "Authorities launched one of the largest terrorism investigations of the year.",

    attention:
    "The attack shocked the nation because of its scale and location.",

    reaction:
    "Public demands for accountability and improved security intensified.",

    sources: []
},

{
    id: 24,
    name: "Karachi Police Office Attack",
    status: "CASE UNRESOLVED",
    image: "images/kpo-attack.jpg",

    category: "Militant Attack",
    location: "Karachi",
    year: "2023",

    overview:
    "Militants attacked the Karachi Police Office in February 2023.",

    finding:
    "The siege resulted in deaths, injuries, and a major security operation.",

    official:
    "Authorities investigated the attackers and their support networks.",

    attention:
    "The attack became one of the year's most significant security incidents.",

    reaction:
    "Officials pledged stronger counterterrorism measures.",

    sources: []
},

{
    id: 25,
    name: "Jaranwala Violence",
    status: "CASE UNRESOLVED",
    image: "images/jaranwala.jpg",

    category: "Communal Violence",
    location: "Punjab",
    year: "2023",

    overview:
    "Churches and Christian homes were attacked in Jaranwala following blasphemy allegations.",

    finding:
    "Large-scale property damage and arrests followed the violence.",

    official:
    "Authorities launched investigations and criminal proceedings.",

    attention:
    "The incident received international attention and condemnation.",

    reaction:
    "Calls for protection of minority communities increased nationwide.",

    sources: []
},

{
    id: 26,
    name: "Dr. Shahnawaz",
    status: "CASE UNRESOLVED",
    image: "images/dr-shahnawaz.jpg",

    category: "Custodial Killing",
    location: "Umerkot, Sindh",
    year: "2024",

    overview:
    "Dr. Shahnawaz was killed after being accused of blasphemy in a case that later drew national attention.",

    finding:
    "An official inquiry concluded that the incident was a fake police encounter and found evidence of a custodial killing.",

    official:
    "The inquiry recommended action against police officials linked to the incident.",

    attention:
    "The case sparked debate regarding police accountability and due process.",

    reaction:
    "Rights groups and citizens demanded justice and transparency.",

    sources: []
},

{
    id: 27,
    name: "Karsaz Road Accident",
    status: "CASE UNRESOLVED",
    image: "images/karsaz-road.jpg",

    category: "Road Tragedy",
    location: "Karachi",
    year: "2024",

    overview:
    "A speeding vehicle on Karsaz Road killed a father and daughter and injured several others.",

    finding:
    "The incident quickly became one of the most discussed legal cases of the year.",

    official:
    "Authorities launched criminal proceedings and investigated the circumstances surrounding the crash.",

    attention:
    "Public debate focused on bail decisions and accountability.",

    reaction:
    "Many citizens demanded stricter enforcement of traffic laws.",

    sources: []
},

{
    id: 28,
    name: "12-Year-Old Girl Murder Case",
    status: "CASE UNRESOLVED",
    image: "images/12-year-old-girl.jpg",

    category: "Child Murder Case",
    location: "Karachi",
    year: "2024",

    overview:
    "A 12-year-old girl was abducted and murdered in Karachi.",

    finding:
    "Police used CCTV footage and forensic evidence to identify and arrest a key suspect.",

    official:
    "Investigators continued gathering evidence and pursuing legal action.",

    attention:
    "The case generated widespread outrage due to the age of the victim.",

    reaction:
    "The public demanded swift justice and stronger child-protection measures.",

    sources: []
},

{
    id: 29,
    name: "Ashfaq Ahmed Sial",
    status: "CASE UNRESOLVED",
    image: "images/ashfaq-sial.jpg",

    category: "Journalist Murder",
    location: "Muzaffargarh",
    year: "2024",

    overview:
    "Journalist Ashfaq Ahmed Sial was shot dead in May 2024.",

    finding:
    "The killing renewed concerns regarding the safety of journalists in Pakistan.",

    official:
    "Police opened an investigation into the murder.",

    attention:
    "Media organizations closely followed developments in the case.",

    reaction:
    "Calls were made for a transparent investigation and stronger protection for journalists.",

    sources: []
},

{
    id: 30,
    name: "Muhammad Bachal Ghanjio",
    status: "CASE UNRESOLVED",
    image: "images/bachal-ghanjio.jpg",

    category: "Journalist Murder",
    location: "Ghotki",
    year: "2024",

    overview:
    "Journalist Muhammad Bachal Ghanjio was shot dead in August 2024.",

    finding:
    "Investigators later arrested suspects believed to be connected to the killing.",

    official:
    "Authorities continued legal proceedings following the arrests.",

    attention:
    "The case became part of wider concerns regarding violence against journalists.",

    reaction:
    "Press-freedom groups demanded accountability.",

    sources: []
},

{
    id: 31,
    name: "Journalist Violence Cases",
    status: "CASE UNRESOLVED",
    image: "images/journalist-violence.jpg",

    category: "Press Freedom",
    location: "Pakistan",
    year: "2024",

    overview:
    "Press-freedom organizations documented multiple attacks, threats, and killings involving journalists throughout 2024.",

    finding:
    "Several incidents remained under investigation and raised concerns about media safety.",

    official:
    "Authorities investigated individual cases across different regions.",

    attention:
    "The issue remained a major concern for local and international watchdog groups.",

    reaction:
    "Advocates called for stronger protections for journalists.",

    sources: []
},

{
    id: 32,
    name: "Sana Yousaf",
    status: "CASE UNRESOLVED",
    image: "images/sana-yousaf.jpg",

    category: "Murder Case",
    location: "Islamabad",
    year: "2025",

    overview:
    "Seventeen-year-old social media influencer Sana Yousaf was shot and killed in her Islamabad home.",

    finding:
    "Police arrested a suspect shortly after the incident.",

    official:
    "Authorities treated the case as a high-profile murder investigation.",

    attention:
    "The case received nationwide attention due to Sana's online presence.",

    reaction:
    "The incident sparked discussions regarding safety and justice.",

    sources: []
},

{
    id: 33,
    name: "Asif Nawaz",
    status: "CASE UNRESOLVED",
    image: "images/asif-nawaz.jpg",

    category: "Murder Case",
    location: "Sheikhupura",
    year: "2025",

    overview:
    "Asif Nawaz was killed during unrest linked to anti-KFC protests.",

    finding:
    "Investigators focused on identifying those involved in the violence.",

    official:
    "Authorities detained multiple suspects and opened a murder investigation.",

    attention:
    "The case gained attention because it was linked to larger public unrest.",

    reaction:
    "Questions were raised regarding accountability and crowd violence.",

    sources: []
},

{
    id: 34,
    name: "Mir Ali Suicide Bombing",
    status: "CASE UNRESOLVED",
    image: "images/mir-ali.jpg",

    category: "Terror Attack",
    location: "North Waziristan",
    year: "2025",

    overview:
    "A suicide bomber targeted a military convoy near Mir Ali.",

    finding:
    "The attack resulted in military and civilian casualties.",

    official:
    "Security agencies launched investigations to identify those responsible.",

    attention:
    "It became one of the deadliest security incidents of the year.",

    reaction:
    "Officials pledged action against those involved.",

    sources: []
},

{
    id: 35,
    name: "Islamabad Judicial Complex Bombing",
    status: "CASE UNRESOLVED",
    image: "images/judicial-complex.jpg",

    category: "Terror Attack",
    location: "Islamabad",
    year: "2025",

    overview:
    "A suicide bombing outside the Judicial Complex killed multiple people and injured dozens.",

    finding:
    "Investigators focused on identifying those behind the attack.",

    official:
    "Authorities launched a major terrorism investigation.",

    attention:
    "The bombing became one of the year's biggest security stories.",

    reaction:
    "Citizens demanded stronger security measures.",

    sources: []
},

{
    id: 36,
    name: "Allah Dino Shar",
    status: "CASE UNRESOLVED",
    image: "images/allah-dino-shar.jpg",

    category: "Journalist Murder",
    location: "Sindh",
    year: "2025",

    overview:
    "Journalist Allah Dino Shar was murdered in Sindh.",

    finding:
    "Police later arrested suspects linked to the case.",

    official:
    "Authorities announced progress in the investigation.",

    attention:
    "The killing renewed concerns regarding journalist safety.",

    reaction:
    "Media groups demanded continued accountability.",

    sources: []
},

{
    id: 37,
    name: "Journalist Threats & Violence",
    status: "CASE UNRESOLVED",
    image: "images/journalist-threats.jpg",

    category: "Press Freedom",
    location: "Pakistan",
    year: "2025",

    overview:
    "Media watchdogs documented threats, assaults, legal cases, and killings involving journalists.",

    finding:
    "Multiple incidents were reported across the country.",

    official:
    "Several investigations remained ongoing.",

    attention:
    "The issue remained a major concern for press-freedom advocates.",

    reaction:
    "Calls for stronger journalist protections increased.",

    sources: []
},

{
    id: 38,
    name: "Islamabad Mosque Bombing",
    status: "CASE UNRESOLVED",
    image: "images/islamabad-mosque.jpg",

    category: "Terror Attack",
    location: "Islamabad",
    year: "2026",

    overview:
    "A suicide bombing at a Shia mosque killed more than 30 people and injured over 160 others.",

    finding:
    "The attack was later claimed by ISIS-K.",

    official:
    "Security agencies launched a nationwide investigation and arrested multiple suspects.",

    attention:
    "The bombing renewed concerns regarding extremist violence.",

    reaction:
    "Citizens and officials called for stronger counterterrorism measures.",

    sources: []
},

{
    id: 39,
    name: "Bajaur Attack",
    status: "CASE UNRESOLVED",
    image: "images/bajaur-attack.jpg",

    category: "Terror Attack",
    location: "Bajaur",
    year: "2026",

    overview:
    "A suicide vehicle bombing and armed assault targeted a security checkpoint.",

    finding:
    "The attack resulted in the deaths of security personnel and civilians.",

    official:
    "Authorities launched investigations while security operations expanded.",

    attention:
    "The TTP claimed responsibility for the attack.",

    reaction:
    "Officials vowed to pursue those responsible.",

    sources: []
},

{
    id: 40,
    name: "Zain Shah",
    status: "CASE UNRESOLVED",
    image: "images/zain-shah.jpg",

    category: "Lynching Case",
    location: "Rawalpindi",
    year: "2026",

    overview:
    "The killing of Zain Shah was declared a mob-lynching case by police.",

    finding:
    "Investigators identified multiple suspects allegedly involved.",

    official:
    "Authorities added anti-terrorism charges and continued legal proceedings.",

    attention:
    "The case sparked debate regarding mob violence.",

    reaction:
    "The public demanded accountability.",

    sources: []
},

{
    id: 41,
    name: "Gul Plaza Fire Mystery",
    status: "CASE UNRESOLVED",
    image: "images/gul-plaza-fire.jpg",

    category: "Fire Disaster",
    location: "Karachi",
    year: "2026",

    overview:
    "A deadly fire at Gul Plaza left dozens of people unaccounted for.",

    finding:
    "Authorities relied on DNA testing and forensic methods to identify victims.",

    official:
    "Investigations focused on the cause of the fire.",

    attention:
    "The disaster became one of Karachi's most discussed incidents.",

    reaction:
    "Questions were raised regarding building safety standards.",

    sources: []
},

{
    id: 42,
    name: "Missing Persons Cases",
    status: "CASE UNRESOLVED",
    image: "images/missing-persons-2026.jpg",

    category: "Human Rights",
    location: "Pakistan",
    year: "2026",

    overview:
    "Multiple disappearance cases remained before the courts during 2026.",

    finding:
    "While some individuals were traced, many families continued searching for missing relatives.",

    official:
    "Police and judicial authorities continued reviewing pending cases.",

    attention:
    "The issue remained one of Pakistan's most debated human-rights concerns.",

    reaction:
    "Rights organizations demanded transparency and quicker resolutions.",

    sources: []
},

{
    id: 43,
    name: "French Woman & Five Children Case",
    status: "CASE UNRESOLVED",
    image: "images/french-woman-case.jpg",

    category: "Captivity Case",
    location: "Khyber Pakhtunkhwa",
    year: "2026",

    overview:
    "Police rescued a French woman and her five children who were allegedly kept isolated for more than a decade.",

    finding:
    "The case attracted international attention because of the length of the alleged captivity.",

    official:
    "Authorities launched investigations into abuse allegations.",

    attention:
    "The story was widely covered by local and international media.",

    reaction:
    "Human-rights groups called for a thorough investigation.",

    sources: []
}

];


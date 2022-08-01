import { writable } from 'svelte/store'
export const showLogin = writable(true)
export const adminLogin = writable(false);
export const adminAuth = writable(false);
export const adminCode = writable('');
export const userLoginIn = writable(false);
export const user = writable('');
export const rollNo=writable('');
export let category = writable('');
export let post = writable('');

const count = 0
export const ADMIN_CODE ="votingapp@2022";
export const votesRegistered = writable(count || 0)
votesRegistered.subscribe((value) => localStorage.count = value)

export const users = writable([{name:"admin",voted:false,count:0}]);
export const userVoteDetails = writable([{name:"admin",votedPost:[]}]);
export const votesByPostNCand = writable([])

export const posts = [
    {id:"hb",name:"Head Boy"},
    {id:"hg",name:"Head Girl"},
    {id:"jhb",name:"Junior Head Boy"},
    {id:"jhg",name:"Junior Head Girl"},
    {id:"dhb",name:"Deputy Head Boy"},
    {id:"dhg",name:"Deputy Head Girl"},
    {id:"scb",name:"Sports Captain Boy"},
    {id:"scg",name:"Sports Captain Girl"},
    {id:"hc-capella",name:"House Captains-Capella"},
    {id:"hc-canopus",name:"House Captains-Canopus"},
    {id:"hc-vega",name:"House Captains-Vega"},
    {id:"hc-sirius",name:"House Captains-Sirius"},
    {id:"dhc-capella",name:"Deputy House Captains-Capella"},
    {id:"dhc-canopus",name:"Deputy House Captains-Canopus"},
    {id:"dhc-vega",name:"Deputy House Captains-Vega"},
    {id:"dhc-sirius",name:"Deputy House Captains-Sirius"},
    {id:"pof",name:"Perfect of Food"},
    {id:"poc",name:"Perfect of Cultural Events"},
    {id:"pod",name:"Perfect of Discipline"},
    {id:"pol",name:"Perfect of Library"},
    {id:"dpof",name:"Deputy Perfect of Food"},
    {id:"dpoc",name:"Deputy Perfect of Cultural Events"},
    {id:"dpod",name:"Deputy Perfect of Discipline"},
    {id:"dpol",name:"Deputy Perfect of Library"},

    {id:"pob-1",name:"Perfects of Transport-Bus 1"},
    {id:"pob-2",name:"Perfects of Transport-Bus 2"},
    {id:"pob-3",name:"Perfects of Transport-Bus 3"},
    {id:"pob-4",name:"Perfects of Transport-Bus 4"},
    {id:"pob-5",name:"Perfects of Transport-Bus 5"}
    ] ;
const image_base_url = "/images/bvk/"
export let posts_candidates = [
    {"id":"hb",candidates:[
        {id:1,name:"Mithul Pranav",img_src: image_base_url+"hb/mithul.jpg"},
        {id:2,name:"Akif",img_src:image_base_url+"hb/akif.jpg"}]
    },
    {"id":"hg",candidates:[
        {id:1,name:"Prathiksha",img_src:image_base_url+"hg/prathiksha.jpg"},
        {id:2,name:"Sakthi Devi",img_src:image_base_url+"hg/sakthidevi.jpg"}]
    },
    {"id":"jhb",candidates:[
        {id:1,name:"Siveshnath",img_src: image_base_url+"jhb/siveshnath.jpg"},
        {id:2,name:"Dharaneesh",img_src:image_base_url+"jhb/dharaneesh.jpg"}
    ]
    },	{"id":"jhg",candidates:[
        {id:1,name:"Lydia Florence",img_src: image_base_url+"jhg/lydiaflorence.jpg"},
        {id:2,name:"Shrisubanithi",img_src:image_base_url+"jhg/shrisubanithi.jpg"},
        {id:3,name:"Thanunitha",img_src:image_base_url+"jhg/thanunitha.jpg"}]
    },
    {"id":"dhb",candidates:[
        {id:1,name:"Harshan Krishna",img_src:  image_base_url+"dhb/harshankrishna.jpg"},
        {id:2,name:"Raagav",img_src:image_base_url+"dhb/raagav.jpg"}]
    },
    {"id":"dhg",candidates:[
        {id:1,name:"Amaani",img_src: image_base_url+"dhg/amaani.jpg"},
        {id:2,name:"Tharuna",img_src:image_base_url+"dhg/tharuna.jpg"}
    ]
    }
    ,
    {"id":"scb",candidates:[
        {id:1,name:"Dev Adharshan",img_src: image_base_url+"scb/devadharshan.jpg"},
        {id:2,name:"Tharanidharan",img_src:image_base_url+"scb/tharanidharan.jpg"}
    ]
    }
    ,
    {"id":"scg",candidates:[
        {id:1,name:"Shifa Fathima",img_src: image_base_url+"scg/shifafathima.jpg"},
        {id:2,name:"Rithu Varshini",img_src:image_base_url+"scg/rithuvarshini.jpg"},
        {id:3,name:"Birundha",img_src:image_base_url+"scg/birundha.jpg"}
    ]
    },{"id":"hc-capella",candidates:[
        {id:1,name:"Danvarshini",img_src: image_base_url+"hc-capella/Danvarshini.jpg"},
        {id:2,name:"Nithish",img_src:image_base_url+"hc-capella/Nithish.jpg"}
    ]
    },{"id":"hc-canopus",candidates:[
        {id:1,name:"Akshada",img_src: image_base_url+"hc-canopus/Akshada.jpg"},
        {id:2,name:"Shruthi",img_src:image_base_url+"hc-canopus/Shruthi.jpg"}
    ]
    },{"id":"hc-vega",candidates:[
        {id:1,name:"Pravanthika",img_src: image_base_url+"hc-vega/Pravanthika.jpg"},
        {id:2,name:"Shreejith",img_src:image_base_url+"hc-vega/Shreejith.jpg"}
    ]
    },{"id":"hc-sirius",candidates:[
        {id:1,name:"Hanshini",img_src: image_base_url+"hc-sirius/Hanshini.jpg"},
        {id:2,name:"Pranov",img_src:image_base_url+"hc-sirius/Pranov.jpg"},
        {id:2,name:"Varna",img_src:image_base_url+"hc-sirius/Varna.jpg"}
    ]
    }

    ,{"id":"dhc-capella",candidates:[
        {id:1,name:"Vidhyutha",img_src: image_base_url+"dhc-capella/Vidhyutha.jpg"},
        {id:2,name:"Keerthi Varman",img_src:image_base_url+"dhc-capella/KeerthiVarman.jpg"}
    ]
    },{"id":"dhc-canopus",candidates:[
        {id:1,name:"Diya",img_src: image_base_url+"dhc-canopus/Diya.jpg"},
        {id:2,name:"Surjit",img_src:image_base_url+"dhc-canopus/Surjit.jpg"},
        {id:3,name:"Vigasini",img_src:image_base_url+"dhc-canopus/Vikashini.jpg"}
    ]
    },{"id":"dhc-vega",candidates:[
        {id:1,name:"Anu Varshini",img_src: image_base_url+"dhc-vega/AnuVarshini.jpg"},
        {id:2,name:"Ridu Prana",img_src:image_base_url+"dhc-vega/RiduPrana.jpg"},
        {id:3,name:"Vishal",img_src:image_base_url+"dhc-vega/Vishal.jpg"}
    ]
    },{"id":"dhc-sirius",candidates:[
        {id:1,name:"Sri Haren",img_src: image_base_url+"dhc-sirius/SriHaran.jpg"},
        {id:2,name:"Surya",img_src:image_base_url+"dhc-sirius/Surya.jpg"}
    ]
    }

    ,{"id":"pof",candidates:[
        {id:1,name:"Rithish",img_src: image_base_url+"pof/PDRithish.jpg"},
        {id:2,name:"Rithish Kumar",img_src:image_base_url+"pof/RithishKumar.jpg"}
    ]
    },{"id":"poc",candidates:[
        {id:1,name:"Krishma",img_src: image_base_url+"poc/Krishma.jpg"},
        {id:2,name:"Yathesh",img_src:image_base_url+"poc/Yathesh.jpg"}
    ]
    },{"id":"pod",candidates:[
        {id:1,name:"Sanchit",img_src: image_base_url+"pod/Sanchit.jpg"},
        {id:2,name:"Shrika",img_src:image_base_url+"pod/Srika.jpg"}
    ]
    },{"id":"pol",candidates:[
        {id:1,name:"Durgesh",img_src: image_base_url+"pol/Durgesh.jpg"},
        {id:2,name:"Stuthi",img_src:image_base_url+"pol/Stuthi.jpg"}
    ]
    },

    {"id":"dpof",candidates:[
        {id:1,name:"Sathvika",img_src: image_base_url+"dpof/SATHVIKA.jpg"},
        {id:2,name:"Shri Chidambari",img_src:image_base_url+"dpof/SHRICHIDAMBARI.jpg"}
    ]
    },{"id":"dpoc",candidates:[
        {id:1,name:"Chiranjeev",img_src: image_base_url+"dpoc/Chiranjeev.jpg"},
        {id:2,name:"Harshith",img_src:image_base_url+"dpoc/Harshith.jpg"}
    ]
    },{"id":"dpod",candidates:[
        {id:1,name:"Darshan",img_src: image_base_url+"dpod/DARSHAN.jpg"},
        {id:2,name:"Viyasini",img_src:image_base_url+"dpod/VIYASINI.jpg"}
    ]
    },{"id":"dpol",candidates:[
        {id:1,name:"Pavin",img_src: image_base_url+"dpol/PAVIN.jpg"},
        {id:2,name:"Visruth",img_src:image_base_url+"dpol/VISRUTH.jpg"}
    ]
    },

    
    {"id":"pob-1",candidates:[
        {id:1,name:"Gowtham",img_src: image_base_url+"pob-1/Gowtham.jpg"},
        {id:2,name:"Mowlish",img_src:image_base_url+"pob-1/Mowlish.jpg"}
    ]
    },{"id":"pob-2",candidates:[
        {id:1,name:"Advaydh",img_src: image_base_url+"pob-2/Advaydh.jpg"},
        {id:2,name:"Viveka",img_src:image_base_url+"pob-2/Viveka.jpg"}
    ]
    },{"id":"pob-3",candidates:[
        {id:1,name:"Asmitha",img_src: image_base_url+"pob-3/Asmitha.jpg"},
        {id:2,name:"Gowtham Kothari",img_src:image_base_url+"pob-3/GowthamKothari.jpg"},
        {id:2,name:"Sarvesh",img_src:image_base_url+"pob-3/Sarvesh.jpg"}
    ]
    },{"id":"pob-4",candidates:[
        {id:1,name:"Jayakash",img_src: image_base_url+"pob-4/Jayakash.jpg"},
        {id:2,name:"Tinisha",img_src:image_base_url+"pob-4/Tinisha.jpg"}
    ]
    },{"id":"pob-5",candidates:[
        {id:1,name:"Harshan Surya",img_src: image_base_url+"pob-5/HarshanSurya.jpg"},
        {id:2,name:"Rakshita",img_src:image_base_url+"pob-5/Rakshita.jpg"}
    ]
    }

];



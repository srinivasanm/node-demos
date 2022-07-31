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

    {id:"hc",name:"House Captains"},
    {id:"dhc",name:"Deputy House Captains"},
    {id:"pfs",name:"Perfects"},
    {id:"dpfs",name:"Deputy Perfects"},
    {id:"pfst",name:"Perfects of Transport"}
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
        {id:1,name:"Siveshnath",img_src: image_base_url+"jhb/prajithkarthick.jpg"},
        {id:2,name:"Dharaneesh",img_src:image_base_url+"jhb/Dharaneesh.jpg"}
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
    }
];



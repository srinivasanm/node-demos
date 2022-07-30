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
    {id:"pr",name:"President"},
    {id:"pm",name:"Prime minister"},
    {id:"gvr",name:"Governor"},
    {id:"vp",name:"Vice President"},
    {id:"dpm",name:"Deputy Prime minister"},
    {id:"lg",name:"Lieutenant Governor"}] ;

export let posts_candidates = [
    {"id":"vp",candidates:[
        {id:1,name:"Hari Karthee",img_src: "/images/class9/harikarthee.jpg"},
        {id:2,name:"Akilan",img_src:"/images/class9/akilan.jpg"},
        {id:3,name:"Akshayamathi",img_src:"/images/class9/akshyamathi.jpg"}]
    },
    {"id":"dpm",candidates:[
        {id:2,name:"Jai Hareesh",img_src:"/images/class9/jaihareesh.jpg"},
        {id:3,name:"Nitesh",img_src:"/images/class9/nitesh.jpg"},
        {id:3,name:"Pavan",img_src:"/images/class9/pavan.jpg"}]
    },
    {"id":"lg",candidates:[
        {id:1,name:"Prajith Karthick",img_src: "/images/class9/prajithkarthick.jpg"},
        {id:2,name:"Deepita",img_src:"/images/class9/deepita.jpg"},
        {id:3,name:"Shreenika",img_src:"/images/class9/shreenika.jpg"}
    ]
    },	{"id":"pr",candidates:[
        {id:1,name:"Vibudharsan",img_src: "/images/class11/vibhudharsan.jpg"},
        {id:2,name:"Jishnu",img_src:"/images/class11/jishnu.jpg"},
        {id:3,name:"Nandhini",img_src:"/images/class11/nandhini.jpg"},
        {id:4,name:"Akilesh",img_src:"/images/class11/agilesh.jpg"}]
    },
    {"id":"pm",candidates:[
        {id:1,name:"Sameeksha",img_src: "/images/class11/sameeksha.jpg"},
        {id:2,name:"Ranjit",img_src:"/images/class11/ranjit.jpg"},
        {id:3,name:"Thakshitha",img_src:"/images/class11/thakshitha.jpg"},
        {id:4,name:"Madhumitha",img_src:"/images/class11/madhumitha.jpg"}]
    },
    {"id":"gvr",candidates:[
        {id:1,name:"Abinithi",img_src: "/images/class11/abhinithi.jpg"},
        {id:2,name:"Deepika",img_src:"/images/class11/deepika.jpg"},
        {id:3,name:"Swathi",img_src:"/images/class11/swathi.jpg"},
        {id:4,name:"Vikasini",img_src:"/images/class11/vikasini.jpg"}
    ]
    }

];



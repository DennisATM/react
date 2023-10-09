import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

const users=[
    {
        userName:'midudev',
        name:'Miguel Angel Duran',
        isFollowing:true
    },
    {
        userName:'pheralb',
        name:'Pablo H.',
        isFollowing:false
    },
    {
        userName:'PacoHdezs',
        name:'Paco Hdez',
        isFollowing:true
    },
    {
        userName:'TNChein',
        name:'Tomas',
        isFollowing:false
    }
]

export function App () {
    return(
        <section className="App">
            {
                users.map(user=>{
                    const {userName,name,isFollowing}=user
                    return(
                        <TwitterFollowCard key={userName} userName={userName} name={name} initialIsFollowing={isFollowing}/>        
                    )
                })
            }
        </section>
    )
}
    

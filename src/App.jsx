import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'

export function App () {
    return(
        <section className="App">
            <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" initialIsFollowing={true}/>
            <TwitterFollowCard initialIsFollowing={false} userName="pheralb" name="Pablo Hernandez"/>
            <TwitterFollowCard userName="elonmusk" name="Ellon Musk"/>
            <TwitterFollowCard  userName="vxnder" name="Vander Hart"/>
        </section>
    )
}
    

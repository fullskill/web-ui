import { classnames } from 'tailwindcss-classnames'
import GraphQLConnectionTester from '../components/GraphQLConnectionTester'
import withApollo from '../lib/apollo'
import { useAuth0 } from '../lib/auth0'
import NavBar from '../components/NavBar'
import Profile from "../components/Profile"


const Index = () => {
  const { loading, getTokenSilently } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
          <NavBar />
          <Profile />
<div className={classnames('h-screen', 'flex')}>
  <header>
    {/* <Profile /> */}

  </header>
  <button type='button' onClick={() => getTokenSilently().then(it =>console.log(it))}>dupa</button>
  <GraphQLConnectionTester className={classnames('m-auto')} />
</div>
    </div>
  )
}

export default withApollo(Index)

// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, teamImageUrl, name} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="ipl-match-container">
        <img src={teamImageUrl} alt={name} className="ipl-logo-img" />
        <p className="ipl-match-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard

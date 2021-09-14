import '../../App.css'
import PokeballIcon from '../../assets/images/pokeball_icon.png'

export default function SkeletonLoader() {
  return (
    <div className="app-header skeleton-img">
      <img width="200px" src={PokeballIcon} alt="pokeball-icon" />
    </div>
  )
}
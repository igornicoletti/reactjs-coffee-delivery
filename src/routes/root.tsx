
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { variantsRoot } from '../styles/variants'

const { layout, container } = variantsRoot()

export function Root() {
  return (
    <div className={layout()}>
      <div className={container()}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
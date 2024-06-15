import { useRouteError } from 'react-router-dom'

import { ErrorVariants } from './styles'

const { errorbase, errorcontainer, errorcontent, errortitle, errorstatus } = ErrorVariants()

export function ErrorPage() {
  const error = useRouteError() as Error

  return (
    <div className={errorbase()}>
      <div className={errorcontainer()}>
        <div className={errorcontent()}>
          <p className={errortitle()}>Oops, something went terribly wrong!</p>
          <h1 className={errorstatus()}>{error.message || JSON.stringify(error)}</h1>
        </div>
      </div>
    </div>
  )
}
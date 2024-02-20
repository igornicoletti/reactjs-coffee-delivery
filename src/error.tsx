import { variantsError } from './styles/variants'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()
  const { base, container, content, wrapper, status, title, message, back, icon } = variantsError()

  if (isRouteErrorResponse(error)) {
    return (
      <div className={base()}>
        <div className={container()}>
          <div className={content()}>
            <div className={wrapper()}>
              <p className={status()}>{error.status}</p>
              <h1 className={title()}>Page {error.statusText}</h1>
              <p className={message()}>Sorry, we couldn’t find the page you’re looking for.</p>
            </div>
            <Link className={back()} to='/'>
              <ArrowLeftIcon className={icon()} />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div className={base()}>
        <div className={container()}>
          <div className={content()}>
            <div className={wrapper()}>
              <h1 className={title()}>Oops!</h1>
              <p className={message()}>Sorry, we couldn’t find the page you’re looking for.</p>
              <p className={status()}>{error.message}</p>
            </div>
            <Link className={back()} to='/'>
              <ArrowLeftIcon className={icon()} />
              <span>Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
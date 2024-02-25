import { tv } from 'tailwind-variants'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'

const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-8',
    content: 'flex flex-col items-center text-center gap-16 py-16',
    wrapper: 'flex flex-col gap-4',
    status: 'text-3xl',
    title: 'text-5xl font-semibold',
    message: 'font-medium',
    action: 'flex items-center gap-2 font-medium',
    icon: 'size-4',
  }
})

const { base, container, content, wrapper, status, title, message, action, icon } = variantsError()

export function ErrorPage() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div className={base()}>
        <div className={container()}>
          <div className={content()}>
            <div className={wrapper()}>
              <p className={status()}>{error.status}</p>
              <h1 className={title()}>Page {error.statusText}!</h1>
              <p className={message()}>Sorry, we couldn’t find the page you’re looking for.</p>
            </div>
            <Link className={action()} to='/'>
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
              <p className={title()}>Oops!</p>
              <h2 className={message()}>{error.message}</h2>
              <p className={message()}>Sorry, an unexpected error has occurred.</p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
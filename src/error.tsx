import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { tv } from 'tailwind-variants'

const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center text-dark',
    container: 'w-full max-w-screen-xl mx-auto px-2',
    content: 'flex flex-col items-center text-center',
    status: 'text-xl font-medium pb-2',
    title: 'text-3xl md:text-5xl font-medium pb-4',
    message: 'text-sm pb-8',
    back: 'text-xs uppercase',
  }
})
export function ErrorPage() {
  const error = useRouteError()
  const { base, container, content, status, title, message, back } = variantsError()

  if (isRouteErrorResponse(error)) {
    return (
      <div className={base()}>
        <div className={container()}>
          <div className={content()}>
            <p className={status()}>{error.status}</p>
            <h1 className={title()}>Page {error.statusText}</h1>
            <p className={message()}>Sorry, we couldn’t find the page you’re looking for.</p>
            <Link className={back()} to='/'><span>Back to home</span></Link>
          </div>
        </div>
      </div>
    )
  } else if (error instanceof Error) {
    return (
      <div className={base()}>
        <div className={container()}>
          <div className={content()}>
            <h1 className={title()}>Oops!</h1>
            <p className={message()}>Sorry, we couldn’t find the page you’re looking for.</p>
            <p className={status()}>{error.message}</p>
            <Link className={back()} to='/'><span>Back to home</span></Link>
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}